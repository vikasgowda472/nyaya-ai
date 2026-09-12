-- Phase 3: reviewer workflow and immutable provision audit trail.
-- Apply after 202609120001_nyaya_trusted_corpus.sql.

create table public.provision_review_events (
  id uuid primary key default gen_random_uuid(),
  provision_id uuid not null references public.provisions(id) on delete restrict,
  action text not null check (action in ('submitted', 'approved', 'revoked', 'superseded')),
  actor_id uuid references public.profiles(id) on delete restrict,
  occurred_at timestamptz not null default now(),
  source_version text not null,
  before_record jsonb,
  after_record jsonb not null
);

alter table public.provision_review_events enable row level security;

create policy "reviewers read provision audit" on public.provision_review_events
  for select using (public.is_reviewer_or_admin());

-- Audit records are written only by the trigger below. There are intentionally no
-- insert, update, or delete policies for authenticated users.
create function public.enforce_provision_review_workflow()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    if new.review_status <> 'pending' or new.reviewer_id is not null or new.reviewed_at is not null then
      raise exception 'New provisions must begin in pending review';
    end if;
    return new;
  end if;

  if old.review_status = 'approved'
    and (new.exact_text, new.law, new.provision, new.source_id, new.effective_date, new.topic_tags, new.plain_language)
      is distinct from (old.exact_text, old.law, old.provision, old.source_id, old.effective_date, old.topic_tags, old.plain_language)
    and new.review_status <> 'pending' then
    raise exception 'Approved authority must return to pending review before its legal content changes';
  end if;

  if new.review_status = 'approved' and (new.reviewer_id <> auth.uid() or new.reviewed_at is null) then
    raise exception 'Approval must identify the authenticated reviewer and review timestamp';
  end if;

  return new;
end;
$$;

create function public.audit_provision_review_workflow()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  event_action text;
  version_value text;
begin
  select source_version into version_value from public.legal_sources where id = new.source_id;

  if tg_op = 'INSERT' then
    event_action := 'submitted';
    insert into public.provision_review_events (provision_id, action, actor_id, source_version, after_record)
      values (new.id, event_action, auth.uid(), version_value, to_jsonb(new));
    return new;
  end if;

  if old.review_status is not distinct from new.review_status
    and to_jsonb(old) is not distinct from to_jsonb(new) then
    return new;
  end if;

  event_action := case
    when new.review_status = 'approved' then 'approved'
    when new.review_status = 'revoked' then 'revoked'
    when old.review_status = 'approved' and new.review_status = 'pending' then 'superseded'
    else 'submitted'
  end;

  insert into public.provision_review_events (provision_id, action, actor_id, source_version, before_record, after_record)
    values (new.id, event_action, auth.uid(), version_value, to_jsonb(old), to_jsonb(new));
  return new;
end;
$$;

create trigger enforce_provision_review_workflow_before_write
before insert or update on public.provisions
for each row execute procedure public.enforce_provision_review_workflow();

create trigger audit_provision_review_workflow_after_write
after insert or update on public.provisions
for each row execute procedure public.audit_provision_review_workflow();

create function public.prevent_approved_source_mutation()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (new.official_url, new.source_version, new.title) is distinct from (old.official_url, old.source_version, old.title)
    and exists (select 1 from public.provisions where source_id = old.id and review_status = 'approved') then
    raise exception 'Create a new source version instead of changing a source used by approved authority';
  end if;
  return new;
end;
$$;

create trigger prevent_approved_source_mutation_before_update
before update on public.legal_sources
for each row execute procedure public.prevent_approved_source_mutation();
