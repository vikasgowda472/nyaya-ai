import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Lock, LogIn, Mail, ShieldCheck, User, UserPlus, X } from 'lucide-react';
import { signInWithPassword, signUpWithPassword } from '../services/authService';
import { supabaseConfigured } from '../services/supabaseClient';

function normalizeName(value) {
  return value.trim().replace(/\s+/g, ' ');
}

export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const resetAndClose = () => {
    setError('');
    setMessage('');
    setPassword('');
    setConfirmPassword('');
    onClose();
  };

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    if (!supabaseConfigured) {
      setError('Authentication is not configured yet. Add the Supabase URL and publishable key to .env.local.');
      return;
    }
    if (isSignUp && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setBusy(true);
    try {
      if (isSignUp) {
        const result = await signUpWithPassword(email, password, normalizeName(name));
        setMessage(result.session ? 'Account created and signed in.' : 'Account created. Check your email to confirm your address, then sign in.');
      } else {
        await signInWithPassword(email, password);
        resetAndClose();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-md rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative bg-[#0c0c0f]">
        <button onClick={resetAndClose} aria-label="Close authentication" className="absolute top-5 right-5 p-2 rounded-full bg-[#16161c] text-[#86868b] hover:text-white"><X className="w-5 h-5" /></button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/10 text-[#2997ff] flex items-center justify-center"><ShieldCheck className="w-5 h-5" /></div>
          <div><h3 className="text-xl font-bold text-white">{isSignUp ? 'Create NYAYA account' : 'Sign in to NYAYA'}</h3><p className="text-xs text-[#86868b]">Secure account access through Supabase Auth.</p></div>
        </div>
        {error && <div className="p-3 rounded-xl bg-red-500/10 text-red-400 text-xs flex gap-2 mb-4"><AlertCircle className="w-4 h-4 shrink-0" />{error}</div>}
        {message && <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs flex gap-2 mb-4"><CheckCircle className="w-4 h-4 shrink-0" />{message}</div>}
        <form onSubmit={submit} className="space-y-4">
          {isSignUp && <label className="block text-xs text-[#86868b]">Full name<div className="relative mt-1"><User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868b]" /><input required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#121217] text-white text-xs pl-10 pr-4 py-3 rounded-xl border border-white/10" /></div></label>}
          <label className="block text-xs text-[#86868b]">Email<div className="relative mt-1"><Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868b]" /><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#121217] text-white text-xs pl-10 pr-4 py-3 rounded-xl border border-white/10" /></div></label>
          <label className="block text-xs text-[#86868b]">Password<div className="relative mt-1"><Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868b]" /><input required minLength="8" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#121217] text-white text-xs pl-10 pr-4 py-3 rounded-xl border border-white/10" /></div></label>
          {isSignUp && <label className="block text-xs text-[#86868b]">Confirm password<input required minLength="8" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full mt-1 bg-[#121217] text-white text-xs px-4 py-3 rounded-xl border border-white/10" /></label>}
          <button disabled={busy} type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0071e3] to-[#2997ff] text-white font-semibold text-xs disabled:opacity-60 flex justify-center gap-2">{isSignUp ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}{busy ? 'Please wait…' : isSignUp ? 'Create account' : 'Sign in'}</button>
        </form>
        <p className="mt-5 pt-4 border-t border-white/10 text-center text-xs text-[#86868b]">{isSignUp ? 'Already have an account?' : 'New to NYAYA?'} <button onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage(''); }} className="text-[#2997ff] font-semibold">{isSignUp ? 'Sign in' : 'Create an account'}</button></p>
      </div>
    </div>
  );
}
