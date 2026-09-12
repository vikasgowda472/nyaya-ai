import React, { useState } from 'react';
import { LOCALIZED_RIGHTS_CARDS } from '../services/indianLawData';
import { Clock, ShieldCheck, ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

// Helper to strip markdown ** and render clean text
const renderCleanText = (str) => {
  if (!str) return '';
  const clean = str.replace(/\*\*/g, '');
  return clean;
};

export default function Rights60SecCards({ lang = 'en' }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const cardsList = LOCALIZED_RIGHTS_CARDS[lang] || LOCALIZED_RIGHTS_CARDS.en;

  const categories = ['All', ...new Set(cardsList.map(c => c.category))];

  const filteredCards = cardsList.filter(card => {
    const matchesCat = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const current = filteredCards[currentIndex] || filteredCards[0] || cardsList[0];

  const nextCard = () => {
    if (filteredCards.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }
  };

  const prevCard = () => {
    if (filteredCards.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30d158]/10 text-[#30d158] text-xs font-semibold mb-3 border border-[#30d158]/20">
          <Clock className="w-3.5 h-3.5" />
          <span>Statutory Quick Read ({cardsList.length} Cards)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.cardsTitle}
        </h2>
        <p className="text-sm text-[#86868b] mt-2">
          {t.cardsSub}
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-[#0c0c0f] p-3 rounded-2xl border border-white/10">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-[#86868b] shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0071e3] text-white shadow-md'
                  : 'bg-[#16161c] text-[#86868b] hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#86868b] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 15 rights cards..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full bg-[#16161c] text-white text-xs pl-9 pr-3 py-1.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
          />
        </div>
      </div>

      {/* Active Card Viewer */}
      {current && (
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative bg-gradient-to-b from-[#121218] to-[#09090c] mb-6">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">{current.icon}</span>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#e2b714]/10 text-[#e2b714] border border-[#e2b714]/20 uppercase">
                  {current.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{current.title}</h3>
              </div>
            </div>
            <span className="text-xs font-mono text-[#2997ff] bg-[#0071e3]/10 px-2.5 py-1 rounded-lg border border-[#0071e3]/20 shrink-0 hidden sm:inline-block">
              {current.tag}
            </span>
          </div>

          <p className="text-sm text-[#f5f5f7] mb-6 font-medium bg-[#16161c] p-3.5 rounded-2xl border border-white/10 leading-relaxed">
            {current.summary}
          </p>

          <div className="space-y-2.5 mb-6">
            <h4 className="text-xs font-bold text-[#30d158] uppercase tracking-wider">Statutory Rights & Facts:</h4>
            {current.facts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#86868b] bg-[#0c0c0f] p-3 rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#30d158] shrink-0 mt-0.5" />
                <span className="text-[#f5f5f7] leading-relaxed font-normal">{renderCleanText(fact)}</span>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-xs text-[#86868b] font-mono">
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prevCard}
                className="p-2 rounded-xl bg-[#16161c] hover:bg-[#23232c] text-white border border-white/10 transition-colors"
                title="Previous Card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextCard}
                className="p-2 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-md transition-colors"
                title="Next Card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Grid of All Cards Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredCards.map((card, idx) => (
          <div
            key={card.id}
            onClick={() => setCurrentIndex(idx)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
              currentIndex === idx
                ? 'bg-[#0071e3]/20 border-[#0071e3] shadow-lg'
                : 'bg-[#0c0c0f] hover:bg-[#16161c] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-lg">{card.icon}</span>
              <span className="text-[10px] text-[#86868b] font-mono">{card.tag}</span>
            </div>
            <h4 className="text-xs font-bold text-white line-clamp-1">{card.title}</h4>
            <p className="text-[11px] text-[#86868b] line-clamp-2 mt-1">{card.summary}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
