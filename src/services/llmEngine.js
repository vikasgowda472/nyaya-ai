import { BNS_IPC_DATABASE } from './indianLawData';
import { sanitizeText } from './piiAnonymizer';

/**
 * NYAYA Intelligent Conversational LLM Engine
 * Grounded in Gazette of India, India Code, and Supreme Court Precedents.
 */
export async function sendChatMessage(messages, apiKey = null) {
  const lastUserMessage = messages[messages.length - 1].content;
  const cleanInput = sanitizeText(lastUserMessage);

  // If Gemini API Key is provided by user in settings, call Gemini REST API
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are NYAYA AI, a highly precise Indian Legal Rights & Statutory Assistant.
Analyze this user query under Indian Law (Bharatiya Nyaya Sanhita - BNS 2023, NDPS Act 1985, IPC, BNSS, Special Marriage Act 1954, IT Act 2000, Consumer Protection Act 2019, Constitution of India).
Provide:
1. Applicable BNS 2023 / NDPS Act / IPC / Special Act sections.
2. Fundamental Citizen Rights & Supreme Court precedents.
3. Step-by-step actionable advice.
4. Emergency helplines if relevant.
Keep response clear, structured in clean markdown without raw unparsed clutter.

User Incident/Query: "${cleanInput}"`
            }]
          }]
        })
      });

      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return {
          reply: data.candidates[0].content.parts[0].text,
          isGeminiPowered: true,
          suggestedFollowups: getSuggestedFollowups(cleanInput)
        };
      }
    } catch (err) {
      console.warn("Gemini API call failed, falling back to Local RAG Engine", err);
    }
  }

  // Built-in Grounded Local RAG Engine
  return new Promise((resolve) => {
    setTimeout(() => {
      const localResponse = generateLocalRagResponse(cleanInput);
      resolve({
        reply: localResponse,
        isGeminiPowered: false,
        suggestedFollowups: getSuggestedFollowups(cleanInput)
      });
    }, 500);
  });
}

function generateLocalRagResponse(input) {
  // Strip quotes and sanitize text
  const cleanInput = input.replace(/['"]/g, '').toLowerCase();

  // Multi-term keyword scoring matching
  let bestMatch = null;
  let highestScore = 0;

  BNS_IPC_DATABASE.forEach(entry => {
    let score = 0;
    if (entry.keywords && Array.isArray(entry.keywords)) {
      entry.keywords.forEach(kw => {
        const lowerKw = kw.toLowerCase();
        if (cleanInput.includes(lowerKw)) {
          score += lowerKw.includes(' ') ? 100 : 50;
        }
      });
    }

    const fullText = (entry.title + " " + entry.description + " " + entry.category).toLowerCase();
    cleanInput.split(/\W+/).forEach(word => {
      const noiseWords = ['police', 'station', 'officer', 'called', 'person', 'order', 'day', 'days', 'time', 'call'];
      if (word.length > 3 && !noiseWords.includes(word) && fullText.includes(word)) {
        score += 5;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  });

  // Confidence Threshold: Require score >= 10
  if (bestMatch && highestScore >= 10) {
    return `### ⚖️ NYAYA Statutory Analysis

**Applicable Indian Laws & Regulations:**
- **Primary Section/Regulation**: **${bestMatch.newBns}** (formerly *${bestMatch.oldIpc}*) — *${bestMatch.title}*
- **Enforcement Classification**: **${bestMatch.bailable}** | **${bestMatch.cognizable}**
- **Statutory Remedy / Penalty**: ${bestMatch.punishment}

---

### 🛡️ Your Rights Under Indian Law & Supreme Court Rulings:
${bestMatch.citizenRights.map(r => `- ${r}`).join('\n')}

---

### 📋 Recommended Step-by-Step Action Plan:
${bestMatch.actionSteps.map((step, idx) => `${idx + 1}. ${step}`).join('\n')}

---

### 🚨 Emergency Contacts & Support:
- **National Emergency Helpline**: **112**
- **Narcotics Control Bureau (NCB) Helpline**: **1933**
- **Free Legal Aid (NALSA)**: **15100**

> *[Disclaimer: NYAYA AI provides legal literacy & statutory information grounded in Gazette of India & Supreme Court Precedents. For court representation, consult a Bar Council advocate or call NALSA 15100.]*`;
  }

  // Clean General Fallback (Zero Misinformation)
  return `### ⚖️ NYAYA Legal Assessment

**Query Assessment**: "${input}"

**Applicable Constitutional & Legal Rights:**
- **Article 21 (Constitution of India)**: Guarantees Fundamental Right to Life, Safety, Personal Liberty, and Protection against Crime & Public Nuisance.
- **Law Enforcement Statutory Mandate**: Police and regulatory authorities are statutory bound to investigate cognizable offences.

---

### 🛡️ General Citizen Rights:
- Right to report offences anonymously to law enforcement without revealing personal identity.
- Right to emergency response via National Helpline **112** or NALSA Legal Aid **15100**.

---

### 📋 Recommended Action Plan:
1. Report the situation to National Emergency Helpline **112** or the competent authority.
2. File an official complaint or anonymous tip with the relevant law enforcement cell.
3. Call **NALSA Free Legal Aid Helpline 15100** for direct advocate representation.`;
}

function getSuggestedFollowups(input) {
  const lower = input.toLowerCase();
  if (lower.includes('marijuana') || lower.includes('weed') || lower.includes('drugs') || lower.includes('ganja') || lower.includes('selling')) {
    return [
      "How to report drug peddling anonymously on NCB 1933?",
      "What is Section 68 NDPS Act Informer Protection?",
      "What are public nuisance remedies under BNS Section 292?"
    ];
  }
  if (lower.includes('landlord') || lower.includes('deposit') || lower.includes('rent')) {
    return [
      "How to draft a Legal Demand Notice to Landlord for deposit refund?",
      "Can landlord cut electricity or water supply over rent dispute?",
      "What is BNS Section 316 Criminal Breach of Trust for deposit withholding?"
    ];
  }
  return [
    "What are my rights if police call me?",
    "How to file a Zero FIR anywhere in India?",
    "Convert an old IPC section to BNS 2023"
  ];
}
