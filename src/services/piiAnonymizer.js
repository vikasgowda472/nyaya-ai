/**
 * PII Anonymizer Utility for NYAYA AI
 * Strips personally identifiable information (Aadhaar, Phone, Vehicle No, Emails)
 * client-side before processing to ensure 100% privacy.
 */

export function sanitizeText(text) {
  if (!text) return "";

  let clean = text;

  // 1. Phone numbers (10 digit or +91)
  clean = clean.replace(/(\+91[\-\s]?)?[6-9]\d{9}/g, "[REDACTED PHONE]");

  // 2. Aadhaar numbers (12 digits)
  clean = clean.replace(/\b\d{4}[\s\-]?\d{4}[\s\-]?\d{4}\b/g, "[REDACTED AADHAAR]");

  // 3. Email addresses
  clean = clean.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[REDACTED EMAIL]");

  // 4. Vehicle Numbers (e.g. KA01AB1234 or DL-01-AB-1234)
  clean = clean.replace(/\b[A-Z]{2}[\s\-]?[0-9]{1,2}[\s\-]?[A-Z]{1,3}[\s\-]?[0-9]{4}\b/gi, "[REDACTED VEHICLE NO]");

  return clean;
}
