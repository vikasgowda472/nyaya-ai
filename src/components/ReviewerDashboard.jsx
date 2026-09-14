import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, ClipboardCheck, ExternalLink, FilePlus2, RefreshCw, ShieldAlert } from 'lucide-react';
import { approveProvision, createOfficialSource, loadReviewerWorkspace, returnProvisionToPending, submitProvision } from '../services/reviewerService';

const isReviewer = (role) => role === 'reviewer' || role === 'admin';
const when = (value) => value ? new Date(value).toLocaleString() : '—';
const errorText = (error, fallback) => typeof error?.message === 'string' ? error.message : fallback;
const emptySource = { title: '', official_url: '', source_version: '', published_at: '' };
const emptyProvision = { source_id: '', provision_key: '', law: '', provision: '', exact_text: '', effective_date: '', topic_tags: '', summary: '' };

export default function ReviewerDashboard({ currentUser }) {
  const [workspace, setWorkspace] = useState(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [busyId, setBusyId] = useState('');
  const [sourceForm, setSourceForm] = useState(emptySource);
  const [provisionForm, setProvisionForm] = useState(emptyProvision);
  const [notes, setNotes] = useState({});

  const refresh = async () => {
    setError('');
    try { setWorkspace(await loadReviewerWorkspace()); }
    catch (err) { setError(errorText(err, 'Could not load reviewer workspace.')); }
  };

  useEffect(() => { if (isReviewer(currentUser?.role)) refresh(); }, [currentUser?.role]);

  if (!currentUser) return <AccessMessage title="Sign in required" text="Sign in with the reviewer account assigned in Supabase before accessing the corpus workspace." />;
  if (!isReviewer(currentUser.role)) return <AccessMessage title="Reviewer access required" text="This account is not assigned the reviewer or admin role. Roles are managed only in Supabase, never in this app." />;

  const submitSource = async (event) => {
    event.preventDefault(); setBusyId('source'); setError(''); setNotice('');
    try { await createOfficialSource({ ...sourceForm, published_at: sourceForm.published_at || null }); setSourceForm(emptySource); setNotice('Official source added to the review catalogue.'); await refresh(); }
    catch (err) { setError(errorText(err, 'Could not add the official source.')); }
    finally { setBusyId(''); }
  };

  const submitCandidate = async (event) => {
    event.preventDefault(); setBusyId('provision'); setError(''); setNotice('');
    try {
      await submitProvision({ ...provisionForm, topic_tags: provisionForm.topic_tags.split(',').map((tag) => tag.trim()).filter(Boolean), plain_language: { en: provisionForm.summary.trim() } });
      setProvisionForm(emptyProvision); setNotice('Provision submitted for review with a SHA-256 text fingerprint.'); await refresh();
    } catch (err) { setError(errorText(err, 'Could not submit the provision.')); }
    finally { setBusyId(''); }
  };

  const transition = async (provision, action) => {
    const reviewNotes = notes[provision.id] || '';
    if (action === 'approve' && !reviewNotes.trim()) { setError('Write review notes before approving a provision.'); return; }
    setBusyId(provision.id); setError(''); setNotice('');
    try {
      if (action === 'approve') await approveProvision(provision.id, currentUser.id, reviewNotes);
      else await returnProvisionToPending(provision.id);
      setNotice(action === 'approve' ? 'Provision approved and recorded in the audit trail.' : 'Provision returned to pending review.'); await refresh();
    } catch (err) { setError(errorText(err, 'Review action failed.')); }
    finally { setBusyId(''); }
  };

  const pending = workspace?.provisions.filter((item) => item.review_status === 'pending') || [];
  return <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-7">
    <div className="flex flex-wrap justify-between gap-4 items-start"><div><p className="text-[#2997ff] text-xs font-bold tracking-[0.2em] uppercase">Restricted workspace</p><h1 className="text-3xl font-bold mt-2">Official source review</h1><p className="text-sm text-[#a1a1aa] mt-2">Review official law only. Personal user incidents are outside this workspace.</p></div><button onClick={refresh} className="px-4 py-2 text-sm rounded-xl bg-white/10 hover:bg-white/15 flex gap-2 items-center"><RefreshCw className="w-4 h-4" />Refresh</button></div>
    {error && <Message tone="error" text={error} />}{notice && <Message tone="success" text={notice} />}
    {!workspace && !error && <p className="text-[#a1a1aa]">Loading protected corpus workspace…</p>}
    {workspace && <><div className="grid sm:grid-cols-3 gap-4"><Metric label="Official sources" value={workspace.sources.length} /><Metric label="Pending review" value={pending.length} /><Metric label="Recent audit events" value={workspace.events.length} /></div>
    <div className="grid lg:grid-cols-2 gap-6"><FormCard title="1. Register official source"><form onSubmit={submitSource} className="space-y-3"><Input label="Source title" value={sourceForm.title} onChange={(value) => setSourceForm({ ...sourceForm, title: value })} /><Input label="Official URL" type="url" value={sourceForm.official_url} onChange={(value) => setSourceForm({ ...sourceForm, official_url: value })} /><Input label="Official version or publication identifier" value={sourceForm.source_version} onChange={(value) => setSourceForm({ ...sourceForm, source_version: value })} /><Input label="Publication date" type="date" value={sourceForm.published_at} required={false} onChange={(value) => setSourceForm({ ...sourceForm, published_at: value })} /><Submit busy={busyId === 'source'} label="Add official source" /></form></FormCard>
    <FormCard title="2. Submit exact provision"><form onSubmit={submitCandidate} className="space-y-3"><label className="block text-xs text-[#a1a1aa]">Official source<select required value={provisionForm.source_id} onChange={(event) => setProvisionForm({ ...provisionForm, source_id: event.target.value })} className="mt-1 w-full p-3 rounded-xl bg-[#121217] border border-white/10 text-white"><option value="">Choose source</option>{workspace.sources.map((source) => <option key={source.id} value={source.id}>{source.title} — {source.source_version}</option>)}</select></label><Input label="Provision key (unique internal ID)" value={provisionForm.provision_key} onChange={(value) => setProvisionForm({ ...provisionForm, provision_key: value })} /><Input label="Law" value={provisionForm.law} onChange={(value) => setProvisionForm({ ...provisionForm, law: value })} /><Input label="Provision citation" value={provisionForm.provision} onChange={(value) => setProvisionForm({ ...provisionForm, provision: value })} /><Text label="Exact official text — copy verbatim" value={provisionForm.exact_text} onChange={(value) => setProvisionForm({ ...provisionForm, exact_text: value })} /><Input label="Effective date" type="date" value={provisionForm.effective_date} onChange={(value) => setProvisionForm({ ...provisionForm, effective_date: value })} /><Input label="Topic tags, comma separated" value={provisionForm.topic_tags} onChange={(value) => setProvisionForm({ ...provisionForm, topic_tags: value })} /><Text label="Plain-language summary" value={provisionForm.summary} onChange={(value) => setProvisionForm({ ...provisionForm, summary: value })} /><Submit busy={busyId === 'provision'} label="Submit for review" /></form></FormCard></div>
    <div className="rounded-2xl border border-white/10 overflow-hidden"><div className="p-5 border-b border-white/10 flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-[#2997ff]" /><h2 className="font-bold">Pending provisions</h2></div>{pending.length === 0 ? <p className="p-5 text-sm text-[#a1a1aa]">No pending provisions are visible to this reviewer.</p> : <div className="divide-y divide-white/10">{pending.map((item) => <article key={item.id} className="p-5 space-y-3"><div className="flex flex-wrap justify-between gap-3"><div><p className="font-semibold">{item.law} — {item.provision}</p><p className="text-xs text-[#a1a1aa] mt-1">{item.provision_key} · submitted {when(item.created_at)}</p><a href={item.legal_sources?.official_url} target="_blank" rel="noreferrer" className="text-xs text-[#2997ff] mt-1 inline-flex gap-1">Open official source <ExternalLink className="w-3 h-3" /></a></div><button disabled={busyId === item.id} onClick={() => transition(item, 'pending')} className="px-3 py-2 h-fit rounded-xl bg-white/10 text-sm">Keep pending</button></div><p className="text-sm whitespace-pre-wrap bg-white/[0.03] p-3 rounded-xl">{item.exact_text}</p><p className="text-xs text-[#a1a1aa]">Fingerprint: <span className="font-mono">{item.content_sha256}</span></p><Text label="Review notes required for approval" value={notes[item.id] || ''} onChange={(value) => setNotes({ ...notes, [item.id]: value })} /><button disabled={busyId === item.id} onClick={() => transition(item, 'approve')} className="px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 disabled:opacity-50 text-sm flex gap-2"><CheckCircle2 className="w-4 h-4" />Approve after source check</button></article>)}</div>}</div>
    <div className="rounded-2xl border border-white/10 overflow-hidden"><div className="p-5 border-b border-white/10"><h2 className="font-bold">Recent audit history</h2></div><div className="divide-y divide-white/10">{workspace.events.map((event) => <div key={event.id} className="p-4 text-sm flex justify-between gap-4"><span className="capitalize">{event.action} · {event.source_version}</span><span className="text-xs text-[#a1a1aa]">{when(event.occurred_at)}</span></div>)}</div></div>
    <p className="text-xs text-[#a1a1aa] flex gap-2"><ShieldAlert className="w-4 h-4 shrink-0 text-[#e2b714]" />Approval records trusted source material in Supabase. Publishing it to FastAPI remains a separate controlled release.</p></>}</section>;
}

function Input({ label, type = 'text', value, onChange, required = true }) { return <label className="block text-xs text-[#a1a1aa]">{label}<input required={required} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 w-full p-3 rounded-xl bg-[#121217] border border-white/10 text-white" /></label>; }
function Text({ label, value, onChange }) { return <label className="block text-xs text-[#a1a1aa]">{label}<textarea required value={value} onChange={(event) => onChange(event.target.value)} rows="4" className="mt-1 w-full p-3 rounded-xl bg-[#121217] border border-white/10 text-white" /></label>; }
function Submit({ busy, label }) { return <button disabled={busy} className="px-4 py-2 rounded-xl bg-[#0071e3] text-white text-sm disabled:opacity-50 flex gap-2"><FilePlus2 className="w-4 h-4" />{busy ? 'Saving…' : label}</button>; }
function FormCard({ title, children }) { return <div className="rounded-2xl border border-white/10 p-5"><h2 className="font-bold mb-4">{title}</h2>{children}</div>; }
function Metric({ label, value }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><p className="text-xs uppercase tracking-wider text-[#a1a1aa]">{label}</p><p className="text-3xl font-bold mt-2">{value}</p></div>; }
function AccessMessage({ title, text }) { return <section className="max-w-xl mx-auto px-4 py-24 text-center"><ShieldAlert className="w-10 h-10 mx-auto text-[#e2b714]" /><h1 className="text-2xl font-bold mt-4">{title}</h1><p className="text-[#a1a1aa] mt-3">{text}</p></section>; }
function Message({ tone, text }) { const icon = tone === 'error' ? <AlertCircle className="w-5 h-5 shrink-0" /> : <CheckCircle2 className="w-5 h-5 shrink-0" />; return <div className={`p-4 rounded-xl text-sm flex gap-2 ${tone === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-300' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300'}`}>{icon}{text}</div>; }
