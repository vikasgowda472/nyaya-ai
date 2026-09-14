-- Phase 6: make the named reviewer and approved-corpus publishing contract explicit.
-- Apply after 202609120003_source_intake_and_privacy.sql.

alter table public.provisions
  add column reviewer_name text not null default '';

create or replace function public.enforce_provision_review_workflow()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  reviewer_display_name text;
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
    reviewer_display_name := nullif(btrim(auth.jwt() -> 'user_metadata' ->> 'full_name'), '');
    if reviewer_display_name is null then
      raise exception 'Approval requires a reviewer account with a full name';
    end if;
    new.reviewer_name := reviewer_display_name;
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
