import React, { useState, useEffect } from 'react';
import { Scale, ShieldAlert, Key, Menu, X, Globe, HelpCircle, Lock, User, LogOut } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

export default function Navbar({ activeTab, setActiveTab, onPanic, openSettings, openDisclaimer, openAuth, currentUser, onLogout, lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'chat', label: t.navChat },
    { id: 'analyzer', label: t.navAnalyzer },
    { id: 'bns', label: t.navBns },
    { id: 'cards', label: t.navCards },
    { id: 'shields', label: t.navShields },
    { id: 'drafts', label: t.navDrafts }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-2xl py-3' : 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0071e3] via-[#2997ff] to-[#e2b714] p-[1px] shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
                <Scale className="w-5 h-5 text-[#2997ff]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">NYAYA<span className="text-[#2997ff]">.AI</span></span>
                <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wide bg-[#e2b714]/10 text-[#e2b714] border border-[#e2b714]/20 rounded-full">
                  BNS 2023
                </span>
              </div>
              <p className="text-[11px] text-[#86868b] hidden sm:block">Indian Legal Rights & Intelligence Engine</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#121217] p-1 rounded-full border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-[#0071e3] text-white shadow-md'
                    : 'text-[#86868b] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Language Selector Dropdown */}
            <div className="flex items-center gap-1 bg-[#16161c] px-2.5 py-1.5 rounded-full border border-white/10 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#e2b714]" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-white font-medium text-xs focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-[#121217] text-white">English</option>
                <option value="hi" className="bg-[#121217] text-white">हिंदी (Hindi)</option>
                <option value="kn" className="bg-[#121217] text-white">ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

            {/* User Account / Login Button */}
            {currentUser && currentUser.isLoggedIn ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16161c] border border-[#2997ff]/30 text-xs text-white">
                <div className="w-5 h-5 rounded-full bg-[#0071e3] text-white text-[10px] font-bold flex items-center justify-center">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-xs text-white">{currentUser.name}</span>
                <button
                  onClick={onLogout}
                  className="p-1 hover:text-red-400 ml-1 transition-colors"
                  title={t.signOut}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={openAuth}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#16161c] text-[#f5f5f7] hover:text-white hover:bg-[#23232c] border border-white/10 text-xs font-semibold transition-all"
              >
                <User className="w-3.5 h-3.5 text-[#2997ff]" />
                <span>{t.signIn}</span>
              </button>
            )}

            <button
              onClick={openSettings}
              className="p-2 rounded-full bg-[#16161c] text-[#86868b] hover:text-white hover:bg-[#23232c] border border-white/10 transition-colors"
              title="Gemini API Settings"
            >
              <Key className="w-4 h-4" />
            </button>

            <button
              onClick={openDisclaimer}
              className="p-2 rounded-full bg-[#16161c] text-[#86868b] hover:text-white hover:bg-[#23232c] border border-white/10 transition-colors"
              title="Legal Disclaimer & Privacy"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Panic / Quick Wipe Button */}
            <button
              onClick={onPanic}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 text-xs font-semibold transition-all duration-200"
              title="Instant Clear History & Panic Exit (Esc)"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Panic Clear (Esc)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onPanic}
              className="p-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20"
              title="Panic Clear"
            >
              <ShieldAlert className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#16161c] text-white border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-t border-white/10 mt-3 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {/* Mobile Language Selector */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#16161c] border border-white/10 text-xs mb-2">
              <span className="font-semibold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#e2b714]" />
                Language / ಭಾಷೆ
              </span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-[#121217] text-white font-medium text-xs p-1.5 rounded-lg border border-white/10"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी (Hindi)</option>
                <option value="kn">ಕನ್ನಡ (Kannada)</option>
              </select>
            </div>

            {currentUser && currentUser.isLoggedIn ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#16161c] border border-white/10 text-xs mb-2">
                <span className="font-semibold text-white">Signed in as {currentUser.name}</span>
                <button onClick={onLogout} className="text-red-400 hover:underline">{t.signOut}</button>
              </div>
            ) : (
              <button
                onClick={() => { openAuth(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 rounded-xl bg-[#0071e3] text-white text-xs font-semibold mb-2"
              >
                {t.signIn}
              </button>
            )}

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#0071e3] text-white font-semibold'
                    : 'text-[#86868b] bg-[#121217] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
