import { supabase, supabaseConfigured } from './supabaseClient';

function requireClient() {
  if (!supabaseConfigured || !supabase) throw new Error('Supabase is not configured. Add its URL and publishable key to .env.local.');
  return supabase;
}

export async function getReviewerProfile(userId) {
  if (!supabaseConfigured || !supabase || !userId) return null;
  const { data, error } = await supabase.from('profiles').select('role').eq('id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

export async function loadReviewerWorkspace() {
  const client = requireClient();
  const [sources, provisions, events] = await Promise.all([
    client.from('legal_sources').select('id,title,official_url,source_version,published_at').order('created_at', { ascending: false }),
    client.from('provisions').select('id,provision_key,law,provision,review_status,reviewer_id,reviewed_at,created_at,legal_sources(title,official_url,source_version)').order('created_at', { ascending: false }),
    client.from('provision_review_events').select('id,provision_id,action,actor_id,occurred_at,source_version').order('occurred_at', { ascending: false }).limit(25)
  ]);
  for (const result of [sources, provisions, events]) if (result.error) throw result.error;
  return { sources: sources.data, provisions: provisions.data, events: events.data };
}

export async function approveProvision(provisionId, reviewerId) {
  const { error } = await requireClient().from('provisions').update({
    review_status: 'approved', reviewer_id: reviewerId, reviewed_at: new Date().toISOString()
  }).eq('id', provisionId);
  if (error) throw error;
}

export async function returnProvisionToPending(provisionId) {
  const { error } = await requireClient().from('provisions').update({
    review_status: 'pending', reviewer_id: null, reviewed_at: null
  }).eq('id', provisionId);
  if (error) throw error;
}
