import React from 'react';
import { Scale, ShieldCheck, AlertTriangle, PhoneCall, CheckCircle2, FileText, ExternalLink, RefreshCw, Printer, Download } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

export default function IncidentAnalyzer({ analysisResult, onReset, onGenerateDraft, lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!analysisResult) {
    return (
      <div className="py-20 text-center text-[#86868b]">
        <Scale className="w-12 h-12 text-[#2997ff] mx-auto mb-3 animate-bounce" />
        <p className="text-base font-semibold text-white">No active incident selected.</p>
        <p className="text-xs mt-1">Please enter your incident description in the search bar above.</p>
      </div>
    );
  }

  if (analysisResult.status === 'refused') {
    return (
      <section className="py-12 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="glass-panel p-7 rounded-3xl border border-amber-400/30">
          <AlertTriangle className="w-9 h-9 text-amber-300 mb-3" />
          <h2 className="text-2xl font-bold text-white mb-2">Verified authority required</h2>
          <p className="text-sm text-[#d1d1d6] leading-relaxed">{analysisResult.message}</p>
          <ul className="mt-4 space-y-2 text-xs text-[#86868b] list-disc pl-5">
            {(analysisResult.limitations || []).map((item) => <li key={item}>{item}</li>)}
          </ul>
          <button onClick={onReset} className="mt-6 px-4 py-2 rounded-xl bg-[#0071e3] text-white text-xs font-semibold">Analyze another question</button>
        </div>
      </section>
    );
  }

  const { primaryMatch, secondaryMatch, verificationBadge, query } = analysisResult;

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#0c0c0e] p-6 rounded-3xl border border-white/10 shadow-xl print:border-none print:p-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#30d158]/10 text-[#30d158] border border-[#30d158]/20 text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {verificationBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
            {t.analysisTitle}
          </h2>
          <p className="text-xs text-[#2997ff] mt-1 font-mono">Query: "{query}"</p>
        </div>

        <div className="flex items-center gap-2 print:hidden">
          {/* Print / Download PDF Report Button */}
          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0071e3] to-[#2997ff] text-white text-xs font-semibold hover:brightness-110 transition-all shadow-md shrink-0"
            title="Print or Save as PDF Statutory Report"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.printReport}</span>
          </button>

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#16161c] hover:bg-[#22222a] text-xs font-semibold text-white border border-white/10 transition-colors w-fit shadow-md shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Analyze Another</span>
          </button>
        </div>
      </div>

      {/* Main Analysis Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Statutory Provisions */}
        <div className="md:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-lg bg-[#e2b714]/10 text-[#e2b714] text-xs font-bold uppercase tracking-wider border border-[#e2b714]/20">
              {primaryMatch.category}
            </span>
            <span className="text-xs font-mono text-[#86868b]">{primaryMatch.bailable}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{primaryMatch.title}</h3>
          <p className="text-sm text-[#86868b] mb-6 leading-relaxed">{primaryMatch.description}</p>

          {/* Section Conversion Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#09090c] border border-white/10 mb-6">
            <div>
              <span className="text-[10px] text-[#86868b] uppercase tracking-wider block font-bold">New Law (BNS 2023 / Gazette)</span>
              <span className="text-sm font-bold text-[#30d158] mt-0.5 block">{primaryMatch.newBns}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#86868b] uppercase tracking-wider block font-bold">Former Equivalent (IPC / CrPC)</span>
              <span className="text-sm font-bold text-[#86868b] mt-0.5 block">{primaryMatch.oldIpc}</span>
            </div>
          </div>

          {/* Citizen Rights */}
          <div className="mb-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {t.rightsTitle}
            </h4>
            <ul className="space-y-2.5">
              {primaryMatch.citizenRights.map((right, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#f5f5f7] bg-[#121218] p-3 rounded-2xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#30d158] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{right}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Steps */}
          <div>
            <h4 className="text-xs font-bold text-[#e2b714] uppercase tracking-wider mb-3">
              {t.actionPlanTitle}
            </h4>
            <div className="space-y-2">
              {primaryMatch.actionSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-[#16161c] border border-white/10 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[#0071e3] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[#f5f5f7] leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Penalties & Quick Tools */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/15 shadow-xl">
            <h4 className="text-xs font-bold text-[#86868b] uppercase tracking-wider mb-3">Statutory Penalty & Remedy</h4>
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 mb-4">
              <span className="text-xs font-bold text-red-400 block mb-1">Punishment & Remedy:</span>
              <p className="text-xs text-white leading-relaxed">{primaryMatch.punishment}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#121217] border border-white/10 text-xs space-y-2">
              <div><span className="text-[#86868b]">Bail Status:</span> <span className="text-white font-semibold">{primaryMatch.bailable}</span></div>
              <div><span className="text-[#86868b]">Cognizable:</span> <span className="text-white font-semibold">{primaryMatch.cognizable}</span></div>
            </div>
          </div>

          {/* Quick Draft Button */}
          <div className="glass-panel p-6 rounded-3xl border border-[#2997ff]/30 bg-gradient-to-b from-[#0c1322] to-[#09090c]">
            <FileText className="w-8 h-8 text-[#2997ff] mb-2" />
            <h4 className="text-base font-bold text-white mb-1">Generate Legal Draft</h4>
            <p className="text-xs text-[#86868b] mb-4">Generate an official complaint or demand notice pre-filled for this category.</p>
            <button
              onClick={() => onGenerateDraft()}
              className="w-full py-2.5 rounded-xl bg-[#0071e3] text-white text-xs font-semibold hover:bg-[#0077ed] transition-colors shadow-md"
            >
              Open Draft Generator
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
