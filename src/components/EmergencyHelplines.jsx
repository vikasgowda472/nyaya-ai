import React from 'react';
import { LOCALIZED_HELPLINES } from '../services/indianLawData';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

export default function EmergencyHelplines({ lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const helplines = LOCALIZED_HELPLINES[lang] || LOCALIZED_HELPLINES.en;

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Statutory SOS Network</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.helplinesTitle}
        </h2>
        <p className="text-sm text-[#86868b] mt-2">
          {t.helplinesSub}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {helplines.map((item) => (
          <div
            key={item.number}
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#2997ff]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{item.icon}</span>
                <a
                  href={`tel:${item.number}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0071e3] text-white text-xs font-bold hover:bg-[#0077ed] transition-colors shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {item.number}</span>
                </a>
              </div>
              <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
              <p className="text-xs text-[#86868b] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
