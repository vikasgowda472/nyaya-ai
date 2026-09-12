const API_BASE_URL = import.meta.env.VITE_NYAYA_API_URL || 'http://localhost:8000';

export async function requestVerifiedLegalAnswer(query, language = 'en') {
  const response = await fetch(`${API_BASE_URL}/api/v1/legal-answer`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, language })
  });
  const payload = await response.json();
  if (!response.ok) {
    if (response.status === 422 && payload.detail?.code === 'insufficient-verified-authority') {
      return payload.detail;
    }
    throw new Error('NYAYA verified legal service is unavailable.');
  }
  return payload;
}

export function formatVerifiedAnswer(answer) {
  if (answer.status === 'refused') {
    return `### Verified authority required\n\n${answer.message}\n\n> ${answer.limitations.join(' ')}`;
  }
  const citations = answer.citations.map((citation) => `- ${citation.law}, ${citation.provision} (${citation.source_version}): ${citation.official_source_url}`).join('\n');
  return `### NYAYA verified legal information\n\n${answer.answer_summary}\n\n### Source text\n${answer.supported_explanation}\n\n### Citations\n${citations}\n\n> ${answer.limitations.join(' ')}`;
}

export function toAnalyzerResult(answer, query) {
  if (answer.status === 'refused') return { status: 'refused', query, ...answer };
  const primary = answer.citations[0];
  return {
    status: 'supported', query, verificationBadge: 'Verified official authority',
    primaryMatch: {
      category: primary.law, title: primary.provision, description: answer.answer_summary,
      newBns: `${primary.law}, ${primary.provision}`, oldIpc: 'Not assessed by this verified answer.',
      citizenRights: [answer.supported_explanation], actionSteps: answer.action_options,
      punishment: 'Not assessed unless stated in the cited provision.', bailable: 'Not assessed.', cognizable: 'Not assessed.'
    },
    citations: answer.citations, limitations: answer.limitations, corpusVersion: answer.corpus_version
  };
}
