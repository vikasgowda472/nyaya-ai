-- Phase 5: official-source intake, review completeness, and private incident isolation.
-- Apply after 202609120002_reviewer_audit_workflow.sql.

create extension if not exists pgcrypto with schema extensions;

alter table public.provisions
  add column content_sha256 text not null default '',
  add column review_notes text not null default '';

alter table public.provisions
  add constraint provision_exact_text_present check (length(btrim(exact_text)) > 0),
  add constraint provision_content_sha256_format check (content_sha256 = '' or content_sha256 ~ '^[a-f0-9]{64}$');

create or replace function public.enforce_provision_review_workflow()
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

  if new.review_status = 'approved' then
    if new.reviewer_id <> auth.uid() or new.reviewed_at is null then
      raise exception 'Approval must identify the authenticated reviewer and review timestamp';
    end if;
    if length(btrim(new.review_notes)) = 0 then
      raise exception 'Approval requires reviewer notes describing the source check';
    end if;
    if new.content_sha256 !~ '^[a-f0-9]{64}$'
      or new.content_sha256 <> encode(extensions.digest(new.exact_text, 'sha256'), 'hex') then
      raise exception 'Approval requires a SHA-256 fingerprint matching the exact provision text';
    end if;
  end if;

  return new;
end;
$$;

-- Personal incident records are intentionally separate from legal-source data.
-- Reviewers receive no policy on this table and cannot read another user's records.
create table public.private_incidents (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  incident_text text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (length(btrim(incident_text)) > 0)
);

alter table public.private_incidents enable row level security;

create policy "users manage own private incidents" on public.private_incidents
  for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());
