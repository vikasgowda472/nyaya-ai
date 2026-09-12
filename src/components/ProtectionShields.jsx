import React, { useState } from 'react';
import { LOCALIZED_PROTECTION_SHIELDS } from '../services/indianLawData';
import { Shield, ChevronDown, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

export default function ProtectionShields({ lang = 'en' }) {
  const [expandedShield, setExpandedShield] = useState('police');
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const shields = LOCALIZED_PROTECTION_SHIELDS[lang] || LOCALIZED_PROTECTION_SHIELDS.en;

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2997ff]/10 text-[#2997ff] text-xs font-semibold mb-3 border border-[#2997ff]/20">
          <Shield className="w-3.5 h-3.5" />
          <span>Statutory Protection Core</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.shieldsTitle}
        </h2>
        <p className="text-sm text-[#86868b] mt-2">
          {t.shieldsSub}
        </p>
      </div>

      {/* Exploded Shield Cards */}
      <div className="space-y-4">
        {shields.map((shield) => {
          const isExpanded = expandedShield === shield.id;
          return (
            <div
              key={shield.id}
              onClick={() => setExpandedShield(isExpanded ? null : shield.id)}
              className={`glass-panel rounded-3xl p-6 border transition-all duration-300 cursor-pointer ${
                isExpanded
                  ? 'border-[#2997ff]/50 bg-gradient-to-r from-[#0e121a] to-[#09090c] shadow-2xl'
                  : 'border-white/10 hover:border-white/20 bg-[#0c0c0f]'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl sm:text-4xl">{shield.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{shield.title}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#0071e3]/20 text-[#2997ff] border border-[#0071e3]/30 hidden sm:inline-block">
                        {shield.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#86868b] mt-0.5">{shield.subtitle}</p>
                  </div>
                </div>

                <div className={`p-2 rounded-full bg-[#16161c] text-[#86868b] transition-transform duration-300 ${isExpanded ? 'rotate-180 text-white bg-[#0071e3]' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>

              {/* Exploded Details Accordion */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                  <h4 className="text-xs font-bold text-[#e2b714] uppercase tracking-wider mb-3">Statutory Protections & Rules:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {shield.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#f5f5f7] bg-[#121218] p-3 rounded-2xl border border-white/5">
                        <CheckCircle className="w-4 h-4 text-[#30d158] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
