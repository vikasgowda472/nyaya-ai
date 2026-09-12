import React, { useState } from 'react';
import { Search, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { startSpeechRecognition } from '../utils/speechUtils';
import { TRANSLATIONS } from '../services/translations';

export default function HeroSection({ onAnalyze, onOpenChat, setActiveTab, lang = 'en' }) {
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState('');

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const laymanScenarios = t.scenarios || TRANSLATIONS.en.scenarios;

  const handleVoiceInput = () => {
    setIsListening(true);
    setVoiceError('');
    startSpeechRecognition(
      (text) => {
        setQuery(text);
        setIsListening(false);
      },
      (err) => {
        setVoiceError(err);
        setIsListening(false);
      },
      () => setIsListening(false)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onAnalyze(query);
      setActiveTab('analyzer');
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-black">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0071e3]/20 via-[#2997ff]/10 to-[#e2b714]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* NYAYA Engine Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161c] border border-white/10 text-xs font-semibold mb-6 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#e2b714]" />
          <span className="text-white">{t.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          {t.headlineMain} <br />
          <span className="text-gradient-blue">{t.headlineSub}</span>
        </h1>

        <p className="text-base sm:text-lg text-[#86868b] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          {t.subtext}
        </p>

        {/* Search & Voice Input Box */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-8">
          <div className="relative glass-panel rounded-2xl p-2 shadow-2xl border border-white/15 focus-within:border-[#2997ff]/60 transition-all duration-300">
            <div className="flex items-center gap-3 px-3">
              <Search className="w-6 h-6 text-[#86868b] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder}
                className="w-full bg-transparent text-white placeholder-[#86868b] text-sm sm:text-base focus:outline-none py-3"
              />
              
              {/* Voice Input Microphone Button */}
              <button
                type="button"
                onClick={handleVoiceInput}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-[#1c1c24] text-[#2997ff] hover:bg-[#282834]'
                }`}
                title="Speak your incident in plain spoken English or Hinglish"
              >
                <Mic className="w-5 h-5" />
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0071e3] to-[#2997ff] text-white font-semibold text-sm hover:brightness-110 transition-all shadow-md shrink-0"
              >
                <span>{t.analyzeBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {voiceError && (
            <p className="text-xs text-red-400 mt-2">{voiceError}</p>
          )}
        </form>

        {/* Everyday Indian Scenarios in Plain Terms (Translated) */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-xs font-bold text-[#e2b714] uppercase tracking-wider">
              {t.scenariosHeader}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {laymanScenarios.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(item.query);
                  onAnalyze(item.query);
                  setActiveTab('analyzer');
                }}
                className="p-3 rounded-2xl bg-[#121217] hover:bg-[#1c1c24] text-xs text-[#f5f5f7] border border-white/10 hover:border-[#2997ff]/50 transition-all text-left flex items-center justify-between group shadow-sm"
              >
                <span className="line-clamp-2 pr-2 font-medium">{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#86868b] group-hover:text-[#2997ff] shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Statutory Stat Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 text-left">
          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-white mb-1">511+</div>
            <div className="text-xs text-[#86868b]">BNS 2023 & IPC Sections Mapped</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-[#e2b714] mb-1">100%</div>
            <div className="text-xs text-[#86868b]">Statutory Grounded Verification</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-[#2997ff] mb-1">Zero</div>
            <div className="text-xs text-[#86868b]">Server Memory / Private Browser Mode</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border border-white/10">
            <div className="text-2xl font-bold text-[#30d158] mb-1">24/7</div>
            <div className="text-xs text-[#86868b]">Free Citizen Rights Access</div>
          </div>
        </div>

      </div>
    </section>
  );
}
