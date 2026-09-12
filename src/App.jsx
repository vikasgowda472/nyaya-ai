import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LegalChatbot from './components/LegalChatbot';
import IncidentAnalyzer from './components/IncidentAnalyzer';
import BnsConverter from './components/BnsConverter';
import ProtectionShields from './components/ProtectionShields';
import Rights60SecCards from './components/Rights60SecCards';
import DraftGenerator from './components/DraftGenerator';
import EmergencyHelplines from './components/EmergencyHelplines';
import PrivacyDisclaimerModal from './components/PrivacyDisclaimerModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { requestVerifiedLegalAnswer, toAnalyzerResult } from './services/verifiedLegalApi';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero'); // 'hero', 'chat', 'analyzer', 'bns', 'cards', 'shields', 'drafts', 'helplines'
  const [analysisResult, setAnalysisResult] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const [selectedDraftId, setSelectedDraftId] = useState('cyber-fraud-complaint');
  
  // Language State: 'en' | 'hi' | 'kn'
  const [lang, setLang] = useState('en');

  // API Key & Modal State
  const [apiKey, setApiKey] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('disclaimer'); // 'settings' | 'disclaimer'

  // User Auth State with Persistent LocalStorage Session
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('nyaya_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (err) {
      return null;
    }
  });

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('nyaya_user', JSON.stringify(user));
    } catch (err) {
      console.warn("Failed to persist user session in localStorage", err);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('nyaya_user');
    } catch (err) {
      console.warn("Failed to remove user session from localStorage", err);
    }
  };

  // Quick Panic Wipe & Esc Key Handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handlePanicExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Re-analyze active query when language changes
  useEffect(() => {
    if (currentQuery) {
      requestVerifiedLegalAnswer(currentQuery, lang)
        .then((result) => setAnalysisResult(toAnalyzerResult(result, currentQuery)))
        .catch(() => setAnalysisResult(null));
    }
  }, [lang, currentQuery]);

  const handlePanicExit = () => {
    setAnalysisResult(null);
    setCurrentQuery('');
    setActiveTab('hero');
    window.location.href = 'https://www.google.com';
  };

  const handleAnalyze = async (queryText) => {
    setCurrentQuery(queryText);
    setActiveTab('analyzer');
    try {
      const result = await requestVerifiedLegalAnswer(queryText, lang);
      setAnalysisResult(toAnalyzerResult(result, queryText));
    } catch (error) {
      setAnalysisResult({ status: 'refused', query: queryText, message: error.message, limitations: ['The verified legal service could not be reached.'] });
    }
  };

  const handleGenerateDraft = (templateId) => {
    if (templateId) setSelectedDraftId(templateId);
    setActiveTab('drafts');
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between selection:bg-[#0071e3] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPanic={handlePanicExit}
        openSettings={() => {
          setModalType('settings');
          setModalOpen(true);
        }}
        openDisclaimer={() => {
          setModalType('disclaimer');
          setModalOpen(true);
        }}
        openAuth={() => setAuthModalOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content View Switcher - pt-[110px] top padding clears fixed navbar */}
      <main className="flex-1 pt-[110px]">
        {activeTab === 'hero' && (
          <>
            <HeroSection
              onAnalyze={handleAnalyze}
              onOpenChat={() => setActiveTab('chat')}
              setActiveTab={setActiveTab}
              lang={lang}
            />
            <Rights60SecCards lang={lang} />
            <ProtectionShields lang={lang} />
            <EmergencyHelplines lang={lang} />
          </>
        )}

        {activeTab === 'chat' && (
          <LegalChatbot onSelectDraft={handleGenerateDraft} />
        )}

        {activeTab === 'analyzer' && (
          <IncidentAnalyzer
            analysisResult={analysisResult}
            onReset={() => setActiveTab('hero')}
            onGenerateDraft={handleGenerateDraft}
            lang={lang}
          />
        )}

        {activeTab === 'bns' && <BnsConverter />}

        {activeTab === 'cards' && <Rights60SecCards lang={lang} />}

        {activeTab === 'shields' && <ProtectionShields lang={lang} />}

        {activeTab === 'drafts' && <DraftGenerator selectedTemplateId={selectedDraftId} lang={lang} />}

        {activeTab === 'helplines' && <EmergencyHelplines lang={lang} />}
      </main>

      {/* Footer */}
      <Footer
        onOpenDisclaimer={() => {
          setModalType('disclaimer');
          setModalOpen(true);
        }}
      />

      {/* Privacy & Settings Modal */}
      <PrivacyDisclaimerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalType={modalType}
        apiKey={apiKey}
        setApiKey={setApiKey}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
