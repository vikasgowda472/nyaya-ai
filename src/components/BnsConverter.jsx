import React, { useState } from 'react';
import { Search, ArrowRightLeft, Scale, Check, Shield } from 'lucide-react';
import { BNS_IPC_DATABASE } from '../services/indianLawData';

export default function BnsConverter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(BNS_IPC_DATABASE.map(item => item.category))];

  const filteredData = BNS_IPC_DATABASE.filter(item => {
    const matchesSearch = item.oldIpc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.newBns.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2b714]/10 text-[#e2b714] text-xs font-semibold mb-3 border border-[#e2b714]/20">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>India Criminal Code Reform 2023</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          BNS (2023) ↔ IPC (1860) Section Converter
        </h2>
        <p className="text-sm text-[#86868b] mt-2">
          Search any old IPC section (e.g. IPC 420, IPC 302, IPC 498A) to view its exact new Bharatiya Nyaya Sanhita (BNS) statutory replacement, penalties, and bailable classification.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-white/10 mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Section (e.g., 420, 302, BNS 318, Cheating, Extortion)..."
            className="w-full bg-[#121217] text-white placeholder-[#86868b] text-sm pl-11 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-[#121217] text-white text-xs px-4 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-[#16161c] text-[#86868b] text-[11px] font-mono border border-white/5">
                  {item.category}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                  item.bailable.includes('Non-Bailable') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {item.bailable}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-[#86868b] mb-4 leading-relaxed">{item.description}</p>

              {/* Side by side section box */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-[#09090c] border border-white/10 mb-4">
                <div className="p-3 rounded-xl bg-[#121218] border border-white/5">
                  <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-semibold">Old Law</p>
                  <p className="text-sm font-bold text-[#86868b] mt-1">{item.oldIpc}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#161622] border border-[#2997ff]/30">
                  <p className="text-[10px] text-[#2997ff] uppercase tracking-wider font-semibold">New BNS 2023</p>
                  <p className="text-sm font-bold text-white mt-1">{item.newBns}</p>
                </div>
              </div>

              {/* Punishment */}
              <div className="text-xs text-[#86868b]">
                <strong className="text-white">Penalty:</strong> {item.punishment}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#2997ff] flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Grounded in Official Gazette of India 2023</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
