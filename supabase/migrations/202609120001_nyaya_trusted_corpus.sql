create type public.nyaya_role as enum ('user', 'reviewer', 'admin');
create type public.review_status as enum ('pending', 'approved', 'revoked');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.nyaya_role not null default 'user',
  created_at timestamptz not null default now()
);

create function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

create table public.legal_sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  official_url text not null,
  jurisdiction text not null default 'IN',
  source_version text not null,
  published_at date,
  created_at timestamptz not null default now(),
  unique (official_url, source_version)
);

create table public.provisions (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.legal_sources(id) on delete restrict,
  provision_key text not null unique,
  law text not null,
  provision text not null,
  exact_text text not null,
  effective_date date not null,
  topic_tags text[] not null default '{}',
  plain_language jsonb not null default '{}'::jsonb,
  review_status public.review_status not null default 'pending',
  reviewer_id uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  check ((review_status = 'approved') = (reviewer_id is not null and reviewed_at is not null))
);

alter table public.profiles enable row level security;
alter table public.legal_sources enable row level security;
alter table public.provisions enable row level security;

create function public.is_reviewer_or_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role in ('reviewer', 'admin'));
$$;

create policy "users read own profile" on public.profiles for select using (id = auth.uid());
create policy "approved provisions readable" on public.provisions for select using (review_status = 'approved');
create policy "sources readable" on public.legal_sources for select using (true);
create policy "reviewers manage sources" on public.legal_sources for all using (public.is_reviewer_or_admin()) with check (public.is_reviewer_or_admin());
create policy "reviewers manage provisions" on public.provisions for all using (public.is_reviewer_or_admin()) with check (public.is_reviewer_or_admin());
