import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ClipboardCheck, ExternalLink, RefreshCw, ShieldAlert } from 'lucide-react';
import { approveProvision, loadReviewerWorkspace, returnProvisionToPending } from '../services/reviewerService';

const isReviewer = (role) => role === 'reviewer' || role === 'admin';
const when = (value) => value ? new Date(value).toLocaleString() : '—';

export default function ReviewerDashboard({ currentUser }) {
  const [workspace, setWorkspace] = useState(null);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState('');

  const refresh = async () => {
    setError('');
    try { setWorkspace(await loadReviewerWorkspace()); }
    catch (err) { setError(err instanceof Error ? err.message : 'Could not load reviewer workspace.'); }
  };

  useEffect(() => { if (isReviewer(currentUser?.role)) refresh(); }, [currentUser?.role]);

  if (!currentUser) return <AccessMessage title="Sign in required" text="Sign in with the reviewer account assigned in Supabase before accessing the corpus workspace." />;
  if (!isReviewer(currentUser.role)) return <AccessMessage title="Reviewer access required" text="This account is not assigned the reviewer or admin role. Roles are managed only in Supabase, never in this app." />;

  const transition = async (provision, action) => {
    setBusyId(provision.id); setError('');
    try {
      if (action === 'approve') await approveProvision(provision.id, currentUser.id);
      else await returnProvisionToPending(provision.id);
      await refresh();
    } catch (err) { setError(err instanceof Error ? err.message : 'Review action failed.'); }
    finally { setBusyId(''); }
  };

  const pending = workspace?.provisions.filter((item) => item.review_status === 'pending') || [];
  return <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-7">
    <div className="flex flex-wrap justify-between gap-4 items-start"><div><p className="text-[#2997ff] text-xs font-bold tracking-[0.2em] uppercase">Restricted workspace</p><h1 className="text-3xl font-bold mt-2">Corpus review</h1><p className="text-sm text-[#a1a1aa] mt-2">Supabase RLS decides access. Approvals are recorded by the database audit trigger.</p></div><button onClick={refresh} className="px-4 py-2 text-sm rounded-xl bg-white/10 hover:bg-white/15 flex gap-2 items-center"><RefreshCw className="w-4 h-4" />Refresh</button></div>
    {error && <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex gap-2"><AlertCircle className="w-5 h-5 shrink-0" />{error}</div>}
    {!workspace && !error && <p className="text-[#a1a1aa]">Loading protected corpus workspace…</p>}
    {workspace && <><div className="grid sm:grid-cols-3 gap-4"><Metric label="Official sources" value={workspace.sources.length} /><Metric label="Pending review" value={pending.length} /><Metric label="Recent audit events" value={workspace.events.length} /></div>
    <div className="rounded-2xl border border-white/10 overflow-hidden"><div className="p-5 border-b border-white/10 flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-[#2997ff]" /><h2 className="font-bold">Pending provisions</h2></div>{pending.length === 0 ? <p className="p-5 text-sm text-[#a1a1aa]">No pending provisions are visible to this reviewer.</p> : <div className="divide-y divide-white/10">{pending.map((item) => <article key={item.id} className="p-5 flex flex-wrap gap-4 justify-between"><div><p className="font-semibold">{item.law} — {item.provision}</p><p className="text-xs text-[#a1a1aa] mt-1">{item.provision_key} · submitted {when(item.created_at)}</p><p className="text-xs text-[#a1a1aa] mt-1">{item.legal_sources?.title || 'Source unavailable'}</p></div><button disabled={busyId === item.id} onClick={() => transition(item, 'approve')} className="px-4 py-2 h-fit rounded-xl bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 disabled:opacity-50 text-sm flex gap-2"><CheckCircle2 className="w-4 h-4" />Approve</button></article>)}</div>}</div>
    <div className="rounded-2xl border border-white/10 overflow-hidden"><div className="p-5 border-b border-white/10"><h2 className="font-bold">Recent audit history</h2></div><div className="divide-y divide-white/10">{workspace.events.map((event) => <div key={event.id} className="p-4 text-sm flex justify-between gap-4"><span className="capitalize">{event.action} · {event.source_version}</span><span className="text-xs text-[#a1a1aa]">{when(event.occurred_at)}</span></div>)}</div></div>
    <p className="text-xs text-[#a1a1aa] flex gap-2"><ShieldAlert className="w-4 h-4 shrink-0 text-[#e2b714]" />Approving makes a provision database-approved; it does not by itself publish it to the FastAPI legal-answer corpus. That synchronization remains a separate controlled release.</p></>}</section>;
}

function Metric({ label, value }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-xs uppercase tracking-wider text-[#a1a1aa]">{label}</p><p className="text-3xl font-bold mt-2">{value}</p></div>; }
function AccessMessage({ title, text }) { return <section className="max-w-xl mx-auto px-4 py-24 text-center"><ShieldAlert className="w-10 h-10 mx-auto text-[#e2b714]" /><h1 className="text-2xl font-bold mt-4">{title}</h1><p className="text-[#a1a1aa] mt-3">{text}</p></section>; }
