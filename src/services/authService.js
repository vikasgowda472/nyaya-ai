import { supabase, supabaseConfigured } from './supabaseClient';

function requireClient() {
  if (!supabaseConfigured || !supabase) {
    throw new Error('Authentication is not configured. Add the Supabase URL and publishable key to .env.local.');
  }
  return supabase;
}

export async function signInWithPassword(email, password) {
  const { data, error } = await requireClient().auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signUpWithPassword(email, password, fullName) {
  const { data, error } = await requireClient().auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } }
  });
  if (error) throw error;
  return data;
}

export async function getCurrentSession() {
  if (!supabaseConfigured || !supabase) return null;
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export function onAuthStateChange(callback) {
  if (!supabaseConfigured || !supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((_event, session) => callback(session));
  return () => data.subscription.unsubscribe();
}

export async function signOut() {
  const { error } = await requireClient().auth.signOut();
  if (error) throw error;
}
