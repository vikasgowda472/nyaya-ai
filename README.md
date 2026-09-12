# 🏛️ NYAYA AI — Bharatiya Nyaya Sanhita (BNS 2023) Legal Rights & Intelligence Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![BNS 2023](https://img.shields.io/badge/Statutory_Engine-BNS_2023_Grounded-e2b714)](https://e-gazette.gov.in/)
[![Languages](https://img.shields.io/badge/Languages-EN%20%7C%20%E0%A4%B9%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%80%20%7C%20%E0%B2%95%E0%B2%A8%E0%B3%8D%E0%B2%A8%E0%B2%A1-30d158)](#-multi-language-support)

> **NYAYA AI** is a state-of-the-art, statutory-grounded legal literacy and citizen rights web application. It translates complex Indian legal codes (Bharatiya Nyaya Sanhita 2023, IPC, BNSS, BSA, Constitution of India, and Supreme Court Landmark Precedents) into plain everyday language across **English**, **Hindi (हिंदी)**, and **Kannada (ಕನ್ನಡ)**.

---

## 🌟 Key Features

### 1. 🔍 Natural Language Incident Analyzer
- **Domain Intent Classifier**: High-precision keyword phrase matching (+100/+50 scoring) that accurately links everyday situation descriptions (e.g. *landlord holding deposit*, *neighbors selling marijuana*, *traffic police took bike keys*) to exact statutory provisions.
- **BNS 2023 ↔ IPC Conversion**: Side-by-side mapping of new BNS 2023 sections with legacy IPC equivalents.
- **Zero-Misinformation Policy**: Neutral Constitutional fallback (Article 21 & NALSA 15100) when queries lack specific statutory matches.

### 2. 🖨️ One-Click Printable PDF Statutory Legal Report
- Generate and print/download a clean, professional, formal PDF legal report of any incident analysis to present directly to advocates or police stations.

### 3. 🌐 Full Multi-Language Support (English | हिंदी | ಕನ್ನಡ)
- Instant dynamic translation of **all 12 Layman Scenarios**, **15 Rights Cards**, **4 Protection Shields**, **6 SOS Helplines**, and **Legal Notice Drafts** across English, Hindi, and Kannada.

### 4. 📑 15 Locked Rights in 60 Seconds Story Cards
- Bite-sized, authoritative legal rights cards covering:
  - 🚫 **NDPS Act 1985**: Illegal Marijuana/Ganja peddling reporting & 100% informer identity protection.
  - 🏠 **Rent Control Act / BNS 316**: Landlord security deposit refund & ban on power/water cut-off.
  - 👩‍❤️‍👨 **Special Marriage Act 1954 / Art 21**: Protection for inter-faith & inter-caste couples against vigilante intimidation (*Lata Singh SC Mandate*).
  - 🛍️ **Consumer Protection Act 2019**: Defective product refund denial & free e-Daakhil filing.
  - 🏥 **Paschim Banga SC Mandate**: Emergency lifesaving hospital treatment without advance deposit or police delay.
  - 🎓 **UGC 2023 & Art 19(1)(b)**: Campus protest & fee preponement rules.
  - 📸 **IT Rules 2021 & BNS 77**: 24-hour mandatory takedown for non-consensual intimate imagery.
  - 🟡 **NHAI Toll Rules**: 100-meter yellow line queue free passage rule.
  - 🚓 **Motor Vehicles Act**: Traffic police ignition key seizure ban & DigiLocker validity.
  - ⚖️ **BNSS 35(3) & Arnesh Kumar**: Mandatory written summons notice & 24-hour magistrate production.
  - 💻 **Cyber Cell 1930**: Golden Hour 1-hour account freeze & 3-day RBI zero liability.
  - 👩 **Zero FIR Mandate**: Nationwide police station filing rule for women.
  - 💼 **Code on Wages 2019**: 2-day FNF settlement & unpaid salary demand notice.
  - 🔒 **Art 20(3) & Virender Kumar**: Protection against forced phone passcode disclosure.
  - ⚖️ **NALSA Act 1987 / Art 39A**: 100% free government advocate legal aid.

### 5. 📜 Automated Legal Notice & Complaint Draft Generator
- Auto-generates formal demand notices and police complaints complete with **Sender Address** and **Recipient Address** fields:
  - Landlord Security Deposit Demand Notice
  - E-Commerce Defective Product Refund Notice
  - Cyber Financial Fraud Complaint (Police SHO & Cyber Cell)
  - Student Representation Memorandum
  - Employer Unpaid Salary Demand Notice

### 6. 🚨 National Emergency SOS Helpline Matrix
- Direct 24/7 one-click hotlines for:
  - **112**: All-in-one Emergency (Police, Fire, Ambulance)
  - **1933**: NCB National Narcotics Helpline (Anonymous Drug Reporting)
  - **1930**: National Cyber Crime Helpline (Golden Hour Fraud Freeze)
  - **1915**: National Consumer Helpline
  - **15100**: NALSA Free Legal Aid Helpline
  - **1091**: Women Safety Helpline

### 7. 🔒 Persistent User Auth & Panic Exit (`Esc`)
- Persistent `localStorage` user authentication with TitleCase formatting (`Vikasgowda`).
- **Panic Clear Exit Button (`Esc`)**: Instant local state wipe and browser redirect to Google for privacy.

---

## 🛠️ Technology Stack

- **Frontend**: React 18 + Vite 5
- **Styling**: Vanilla CSS + Tailwind CSS 3 (Custom Dark Mode & Glassmorphism Aesthetics)
- **Icons**: Lucide React
- **Local Audio**: Web Speech API Speech Recognition
- **Statutory Data Engine**: Custom RAG & Topic Intent Classifier (`legalEngine.js`, `indianLawData.js`)

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vikasgowda472/nyaya-legal-ai.git
   cd nyaya-legal-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:3001`) in your web browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
nyaya-legal-ai/
├── public/
│   ├── manifest.json
│   └── sw.js
├── src/
│   ├── components/
│   │   ├── AuthModal.jsx             # Persistent User Authentication Modal
│   │   ├── BnsConverter.jsx          # BNS 2023 ↔ IPC Converter
│   │   ├── DraftGenerator.jsx        # Legal Notice & Complaint Draft Generator
│   │   ├── EmergencyHelplines.jsx    # 24/7 SOS National Helpline Cards
│   │   ├── Footer.jsx                # Footer with Disclaimers & Quick Links
│   │   ├── HeroSection.jsx           # Main Hero with Layman Scenario Buttons & Voice Mic
│   │   ├── IncidentAnalyzer.jsx      # Natural Language Incident Analysis & PDF Export
│   │   ├── LegalChatbot.jsx          # AI Legal Consultation Interface
│   │   ├── Navbar.jsx                # Fixed Header with Language Selector & Panic Clear
│   │   ├── PrivacyDisclaimerModal.jsx# Gemini API Key & Privacy Modal
│   │   ├── ProtectionShields.jsx     # Interactive Citizen Protection Accordions
│   │   └── Rights60SecCards.jsx      # 15 Locked Rights Story Cards with Search & Filters
│   ├── services/
│   │   ├── indianLawData.js          # Master Statutory Database (Gazette, BNS, IPC, SC Precedents)
│   │   ├── legalEngine.js            # Topic-Intent Scoring Algorithm & Analysis Engine
│   │   ├── llmEngine.js              # Gemini API Integration
│   │   ├── piiAnonymizer.js          # PII Sanitizer (Strips Aadhaar, PAN, Phone Nos)
│   │   └── translations.js           # Multi-Language Dictionary (EN, HI, KN)
│   ├── utils/
│   │   └── speechUtils.js            # Web Speech API Recognition Handler
│   ├── App.jsx                       # Root Application State & Tab Navigation
│   ├── index.css                     # Global Design System & Custom Animations
│   └── main.jsx                      # App Mounting Entrypoint
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚖️ Legal Disclaimer

> **NYAYA AI** is an AI-powered legal literacy and statutory informational platform grounded in official Gazette of India publications, Bharatiya Nyaya Sanhita (BNS 2023), Indian Penal Code (IPC), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Supreme Court of India precedents. **NYAYA AI does not provide formal attorney-client legal representation or legal advice.** For specific ongoing litigation or court proceedings, citizens are advised to consult a certified advocate or call NALSA Free Legal Aid Helpline **15100**.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.


