import React, { useState } from 'react';
import { X, ShieldAlert, Key, Lock, CheckCircle2, Scale } from 'lucide-react';

export default function PrivacyDisclaimerModal({ isOpen, onClose, modalType, apiKey, setApiKey }) {
  if (!isOpen) return null;

  const [inputKey, setInputKey] = useState(apiKey || '');

  const handleSaveKey = (e) => {
    e.preventDefault();
    setApiKey(inputKey);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-panel w-full max-w-lg rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative bg-[#0c0c0f]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#16161c] text-[#86868b] hover:text-white hover:bg-[#22222a] border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {modalType === 'settings' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#0071e3]/10 text-[#2997ff] border border-[#0071e3]/20">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Gemini API Settings</h3>
                <p className="text-xs text-[#86868b]">Optional AI Key for enhanced LLM legal reasoning.</p>
              </div>
            </div>

            <form onSubmit={handleSaveKey} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#86868b] mb-1">
                  Google Gemini API Key
                </label>
                <input
                  type="password"
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full bg-[#121217] text-white placeholder-[#86868b] text-xs px-3.5 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
                />
                <p className="text-[11px] text-[#86868b] mt-2">
                  *Your API key is saved locally in your browser session only. If left empty, NYAYA AI automatically uses its built-in zero-latency local RAG engine.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setInputKey('');
                    setApiKey('');
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#16161c] text-xs font-semibold text-[#86868b] hover:text-white"
                >
                  Clear Key
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#0071e3] text-xs font-semibold text-white hover:bg-[#0077ed]"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#e2b714]/10 text-[#e2b714] border border-[#e2b714]/20">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Legal Information Disclaimer & Privacy Guarantee</h3>
                <p className="text-xs text-[#86868b]">Please read carefully before using NYAYA AI.</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#86868b] leading-relaxed mb-6">
              <div className="p-3 rounded-2xl bg-[#121217] border border-white/5 text-[#f5f5f7]">
                <strong className="text-white block mb-1">1. Educational & Rights Awareness Purpose Only</strong>
                NYAYA AI is designed strictly to educate Indian citizens on statutory rights under Bharatiya Nyaya Sanhita (BNS 2023), IPC, BNSS, IT Act, and Supreme Court rulings. It does NOT constitute formal advocate representation in a court of law.
              </div>

              <div className="p-3 rounded-2xl bg-[#121217] border border-white/5 text-[#f5f5f7]">
                <strong className="text-white block mb-1">2. 100% Client-Side Privacy</strong>
                All incident parsing and PII redactions execute directly inside your browser memory. No prompt text or personal information is stored on external databases.
              </div>

              <div className="p-3 rounded-2xl bg-[#121217] border border-white/5 text-[#f5f5f7]">
                <strong className="text-white block mb-1">3. Formal Advocate Advice</strong>
                For litigation, court filings, or bail applications, always consult a Bar Council registered advocate or approach NALSA (15100) for free government legal representation.
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#0071e3] text-white font-semibold text-xs hover:bg-[#0077ed] transition-colors"
            >
              I Understand & Accept
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
