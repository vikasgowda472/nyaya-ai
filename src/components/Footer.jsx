import React from 'react';
import { Scale, Heart, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenDisclaimer }) {
  return (
    <footer className="border-t border-white/10 bg-[#050507] py-12 px-4 sm:px-6 text-xs text-[#86868b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#16161c] flex items-center justify-center border border-white/10">
            <Scale className="w-4 h-4 text-[#2997ff]" />
          </div>
          <div>
            <span className="font-bold text-sm text-white">NYAYA.AI</span>
            <p className="text-[11px] text-[#86868b]">Indian Legal Rights & Citizen Intelligence Platform</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[11px]">
          <button onClick={onOpenDisclaimer} className="hover:text-white transition-colors">
            Legal Disclaimer
          </button>
          <a href="https://nalsa.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#e2b714] transition-colors">
            NALSA Legal Aid (15100)
          </a>
          <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#2997ff] transition-colors">
            National Cyber Crime Portal (1930)
          </a>
          <a href="https://egazette.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Gazette of India (BNS 2023)
          </a>
        </div>

        <div className="text-[11px] text-[#86868b]">
          © {new Date().getFullYear()} NYAYA AI. Grounded in BNS 2023 & IPC.
        </div>

      </div>
    </footer>
  );
}
