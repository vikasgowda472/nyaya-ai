import React, { useState } from 'react';
import { LOCALIZED_DRAFT_TEMPLATES } from '../services/indianLawData';
import { FileText, Copy, Check, Download } from 'lucide-react';
import { TRANSLATIONS } from '../services/translations';

export default function DraftGenerator({ selectedTemplateId, lang = 'en' }) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const draftTemplates = LOCALIZED_DRAFT_TEMPLATES[lang] || LOCALIZED_DRAFT_TEMPLATES.en;

  const [activeTemplateId, setActiveTemplateId] = useState(selectedTemplateId || draftTemplates[0].id);
  const template = draftTemplates.find(tItem => tItem.id === activeTemplateId) || draftTemplates[0];

  const [formData, setFormData] = useState({});
  const [copied, setCopied] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generatedText = template.generateText(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.id}-draft.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="pt-6 pb-16 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2b714]/10 text-[#e2b714] text-xs font-semibold mb-3 border border-[#e2b714]/20">
          <FileText className="w-3.5 h-3.5" />
          <span>Automated Legal Tooling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.draftsTitle}
        </h2>
        <p className="text-sm text-[#86868b] mt-2">
          {t.draftsSub}
        </p>
      </div>

      {/* Template Selector Tabs - Flex Wrap so no buttons get clipped */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-2">
        {draftTemplates.map((tItem) => (
          <button
            key={tItem.id}
            onClick={() => {
              setActiveTemplateId(tItem.id);
              setFormData({});
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTemplateId === tItem.id
                ? 'bg-[#0071e3] text-white shadow-md font-bold ring-2 ring-[#0071e3]/40'
                : 'bg-[#121217] text-[#86868b] hover:text-white border border-white/10'
            }`}
          >
            {tItem.title}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Form vs Generated Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Input Form */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Incident Input Details</h3>
          <div className="space-y-4">
            {template.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-semibold text-[#86868b] mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="w-full bg-[#121217] text-white placeholder-[#86868b] text-xs px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Generated Text Preview */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#e2b714] uppercase tracking-wider">Draft Preview</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#16161c] text-xs text-white hover:bg-[#23232c] border border-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#30d158]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0071e3] text-xs text-white hover:bg-[#0077ed] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
              </div>
            </div>

            <div className="bg-[#09090c] p-4 rounded-2xl border border-white/10 font-mono text-xs text-[#f5f5f7] whitespace-pre-wrap h-[380px] overflow-y-auto leading-relaxed">
              {generatedText}
            </div>
          </div>

          <p className="text-[11px] text-[#86868b] mt-3">
            *Review draft carefully and attach all supporting screenshots / receipts before filing.
          </p>
        </div>

      </div>

    </section>
  );
}
