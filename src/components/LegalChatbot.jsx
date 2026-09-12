import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ShieldCheck, FileText } from 'lucide-react';
import { formatVerifiedAnswer, requestVerifiedLegalAnswer } from '../services/verifiedLegalApi';

/**
 * Clean Markdown Formatter Component
 * Converts raw Markdown tokens (###, **, *, ---, 1.) into styled JSX elements
 * to eliminate raw asterisks and hashes clutter.
 */
function FormattedMessage({ content }) {
  if (!content) return null;

  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed font-sans text-[#f5f5f7]">
      {lines.map((line, idx) => {
        let trimmed = line.trim();

        if (!trimmed) return <div key={idx} className="h-1" />;

        // Horizontal Divider Line ---
        if (trimmed === '---' || trimmed === '***') {
          return <hr key={idx} className="border-white/10 my-3" />;
        }

        // Headings ### or ## or #
        if (trimmed.startsWith('#')) {
          const headingText = trimmed.replace(/^#+\s*/, '');
          const formattedHeading = parseInlineStyles(headingText);
          return (
            <h4 key={idx} className="text-base font-bold text-white mt-4 mb-1 flex items-center gap-1.5 text-[#2997ff]">
              {formattedHeading}
            </h4>
          );
        }

        // Blockquotes >
        if (trimmed.startsWith('>')) {
          const quoteText = trimmed.replace(/^>\s*/, '');
          return (
            <div key={idx} className="p-3 bg-[#161620] border-l-4 border-[#e2b714] rounded-r-2xl my-2 text-xs text-[#86868b]">
              {parseInlineStyles(quoteText)}
            </div>
          );
        }

        // Bullet points - or *
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const bulletText = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-2.5 ml-2 my-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] shrink-0 mt-2" />
              <span className="text-xs sm:text-sm text-[#f5f5f7]">{parseInlineStyles(bulletText)}</span>
            </div>
          );
        }

        // Numbered list 1. 2. 3.
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 ml-2 my-1 text-xs sm:text-sm">
              <span className="w-5 h-5 rounded-full bg-[#0071e3]/20 text-[#2997ff] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#0071e3]/30">
                {numMatch[1]}
              </span>
              <span className="text-[#f5f5f7] mt-0.5">{parseInlineStyles(numMatch[2])}</span>
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm text-[#f5f5f7] leading-relaxed">
            {parseInlineStyles(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Helper to parse bold (**text**), italic (*text*), and inline code (`code`)
 */
function parseInlineStyles(text) {
  // Regex to split by **bold** or *italic* or `code`
  const parts = [];
  let remaining = text;
  let keyIdx = 0;

  // Simple token parser replacing **bold** and *italic*
  const tokens = remaining.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);

  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-white text-[#e2b714]/90">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('*') && token.endsWith('*')) {
      return (
        <em key={i} className="italic text-[#2997ff]">
          {token.slice(1, -1)}
        </em>
      );
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 bg-[#1a1a24] text-[#30d158] font-mono text-[11px] rounded border border-white/10">
          {token.slice(1, -1)}
        </code>
      );
    }
    return token;
  });
}

export default function LegalChatbot({ onSelectDraft }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      content: `### ⚖️ Namaste! I am NYAYA AI Assistant.

I am your grounded legal intelligence companion for Indian Statutory Laws (*Bharatiya Nyaya Sanhita - BNS 2023, IPC, IT Act 2000, Consumer Protection Act, & Supreme Court Rights*).

**How can I help you today?**
- Describe any incident, dispute, or question in plain English or Hinglish.
- Ask about your rights during police questioning or traffic checks.
- Request legal complaint drafts or FIR outlines.`,
      suggestedFollowups: [
        "What are my rights if police ask me to come to the station?",
        "How do I file a 1930 Cyber Fraud complaint?",
        "Landlord holding my security deposit, what to do?"
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const queryText = textToSend || input;
    if (!queryText.trim() || loading) return;

    const newMessages = [...messages, { sender: 'user', content: queryText }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const result = await requestVerifiedLegalAnswer(queryText);
      setMessages([...newMessages, { sender: 'bot', content: formatVerifiedAnswer(result), suggestedFollowups: [] }]);
    } catch (error) {
      setMessages([...newMessages, { sender: 'bot', content: `### Service unavailable\n\n${error.message}`, suggestedFollowups: [] }]);
    }
    setLoading(false);
  };

  return (
    <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 bg-[#0c0c0e] p-5 rounded-3xl border border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">NYAYA LLM Legal Assistant</h2>
            <span className="px-2.5 py-1 text-[11px] font-semibold bg-[#2997ff]/10 text-[#2997ff] border border-[#2997ff]/20 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified corpus only
            </span>
          </div>
          <p className="text-xs text-[#86868b] mt-1">Cited legal information only; unsupported questions are refused.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectDraft('cyber-fraud-complaint')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#16161c] hover:bg-[#202028] text-xs font-semibold text-white border border-white/10 transition-colors shadow-md"
          >
            <FileText className="w-3.5 h-3.5 text-[#e2b714]" />
            <span>Generate Complaint Draft</span>
          </button>
        </div>
      </div>

      {/* Main Chat Panel */}
      <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[650px]">
        
        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0071e3] to-[#e2b714] p-[1px] shrink-0 mt-1">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#2997ff]" />
                  </div>
                </div>
              )}

              <div className={`max-w-3xl rounded-2xl p-4 sm:p-5 text-sm ${
                msg.sender === 'user'
                  ? 'bg-[#0071e3] text-white rounded-tr-none font-medium'
                  : 'bg-[#121217] text-[#f5f5f7] border border-white/10 rounded-tl-none font-sans'
              }`}>
                
                {/* Formatted Markdown rendering without raw asterisks/hashes */}
                {msg.sender === 'bot' ? (
                  <FormattedMessage content={msg.content} />
                ) : (
                  <p className="whitespace-pre-line text-sm leading-relaxed">{msg.content}</p>
                )}

                {/* Suggested Followups if Bot */}
                {msg.sender === 'bot' && msg.suggestedFollowups && msg.suggestedFollowups.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">Suggested Next Questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {msg.suggestedFollowups.map((chip, chipIdx) => (
                        <button
                          key={chipIdx}
                          onClick={() => handleSend(chip)}
                          className="px-3 py-1.5 rounded-xl bg-[#1a1a24] hover:bg-[#262632] text-xs text-[#2997ff] border border-[#2997ff]/20 hover:border-[#2997ff]/50 transition-colors text-left"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#1c1c24] flex items-center justify-center text-white shrink-0 mt-1 border border-white/10">
                  <User className="w-4 h-4 text-[#86868b]" />
                </div>
              )}

            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-[#86868b] text-xs font-mono">
              <div className="w-8 h-8 rounded-full bg-[#121217] flex items-center justify-center border border-white/10">
                <Bot className="w-4 h-4 text-[#2997ff] animate-spin" />
              </div>
              <span>Analyzing BNS 2023 & IPC statutory database...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 sm:p-4 bg-[#09090c] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask any legal question (e.g. Can police search my phone? What is Zero FIR?)"
              className="flex-1 bg-[#121217] text-white placeholder-[#86868b] text-sm px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#2997ff]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-3 rounded-xl bg-[#0071e3] text-white hover:bg-[#0077ed] disabled:opacity-40 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
