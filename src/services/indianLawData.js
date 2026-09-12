/**
 * NYAYA AI — Master Indian Statutory & Legal Database
 * Grounded in Gazette of India, India Code, SC Precedents & Circulars.
 * Full Multi-Language Support: English (en), Hindi (hi), Kannada (kn)
 */

export const BNS_IPC_DATABASE = [
  // 1. NDPS Act — Narcotics, Drug Trafficking & Marijuana / Ganja Peddling
  {
    id: "ndps-drug-trafficking",
    category: "Narcotics & Criminal Offences",
    title: "Illegal Sale of Narcotics, Marijuana / Ganja Peddling & Drug Offences",
    oldIpc: "NDPS Act 1985 Section 20 / IPC Section 268 (Public Nuisance)",
    newBns: "Narcotic Drugs and Psychotropic Substances (NDPS) Act 1985 Section 20 / BNS 2023 Section 292 (Public Nuisance)",
    description: "Illegal possession, sale, distribution, cultivation, or trafficking of cannabis, marijuana, ganja, or contraband narcotic substances.",
    punishment: "Rigorous Imprisonment from 1 to 10-20 Years + Mandatory Fine up to ₹1 to ₹2 Lakhs",
    bailable: "Non-Bailable (Strict statutory bail restrictions under Section 37 NDPS Act)",
    cognizable: "Cognizable (Police & Narcotics Control Bureau MUST register FIR and raid immediately)",
    keywords: [
      "marijuana", "weed", "drugs", "selling drugs", "ganja", "cannabis", "narcotics", "ndps", "peddling", 
      "drug dealer", "neighbors selling", "selling marijuana", "contraband", "substance", "peddler", "hashish", "charas"
    ],
    keyPrecedents: [
      "Section 68 NDPS Act: Statutory mandate for 100% informer identity protection & rewards for citizens reporting drug peddling.",
      "Supreme Court Mandate: Narcotics Control Bureau (NCB) & Police must conduct immediate raids upon receiving credible drug trafficking intelligence."
    ],
    citizenRights: [
      "🕵️ Absolute Informer Anonymity: Police and Narcotics Control Bureau (NCB) are legally bound to keep the identity of citizens reporting drug sales 100% confidential.",
      "🚨 Immediate Police Intervention: Sale of narcotics is a severe cognizable offense; police must dispatch anti-narcotics units immediately upon receiving a 112 / 1933 alert.",
      "🏘️ Public Nuisance Protection: Neighbors have the statutory right under BNS Section 292 to demand police action against illegal drug dens in residential areas."
    ],
    actionSteps: [
      "Report anonymously to the National Narcotics Control Bureau (NCB) Helpline 1933 or call Emergency 112.",
      "Submit an anonymous tip on the MHA NCORD Portal (ncord.gov.in) or to the District Anti-Narcotics Cell.",
      "Provide specific location details and timing of sales without confronting the offenders directly."
    ]
  },

  // 2. Tenant Rights & Landlord Security Deposit Refusal / Utility Cut-off
  {
    id: "tenant-deposit-eviction",
    category: "Civil & Property Rights",
    title: "Landlord Withholding Security Deposit, Illegal Eviction & Utility Cut-off",
    oldIpc: "IPC Section 406 (Breach of Trust) / Rent Control Act",
    newBns: "BNS 2023 Section 316 (Criminal Breach of Trust) / State Rent Control Acts",
    description: "Landlord illegally withholding security deposit after tenant moves out, locking tenant out, or cutting off electricity/water supply without a court order.",
    punishment: "Imprisonment up to 5 Years + Refund of Full Deposit with Interest + Rent Tribunal Penalties",
    bailable: "Bailable for deposit dispute; Cognizable for criminal lockout & power/water cut",
    cognizable: "Cognizable for essential service cut-off & illegal lockout",
    keywords: [
      "landlord", "landlord holding", "security deposit", "deposit", "rent", "tenant", "evict", "eviction", 
      "flat", "house", "apartment", "water cut", "electricity cut", "lock out", "withholding deposit", "deposit refund", "406", "316"
    ],
    keyPrecedents: [
      "Supreme Court Mandate: Landlords cannot take law into their own hands; mandatory 3-month eviction notice via Rent Controller Court required.",
      "State Rent Control Acts: Essential utilities (water, electricity, sanitation) CANNOT be cut off by landlords under any circumstances."
    ],
    citizenRights: [
      "🏠 Full Security Deposit Refund: Landlords MUST refund the security deposit minus legitimate agreed repairs upon vacant possession.",
      "⚡ No Utility Cut-off: Landlords CANNOT cut off electricity, water, or cooking gas supply under any circumstances.",
      "🔑 Protection Against Forcible Lockout: Landlords cannot lock out tenants or throw out belongings without a formal court eviction decree."
    ],
    actionSteps: [
      "Send a formal written Legal Demand Notice via Registered Post giving 15 days deadline to refund the deposit.",
      "If electricity/water is cut off, file an urgent petition before the local Rent Controller / Magistrate for immediate restoration.",
      "File a criminal complaint under BNS Section 316 (Criminal Breach of Trust) at the local police station if deposit is misappropriated."
    ]
  }
];

// Multi-Language 15 Rights in 60s Cards (FULL 15 CARDS FOR ALL 3 LANGUAGES)
export const LOCALIZED_RIGHTS_CARDS = {
  en: [
    {
      id: "ndps-drug-shield",
      category: "Cyber & Privacy",
      icon: "🚫",
      title: "Illegal Narcotics & Drug Peddling Reporting Rights",
      tag: "NDPS Act 1985 Sec 20 / BNS 292",
      summary: "Neighbors or persons illegally selling marijuana, ganja, or narcotics nearby?",
      facts: [
        "🕵️ 100% Informer Identity Protection: Section 68 NDPS Act mandates police & NCB MUST keep citizen informer identity 100% confidential.",
        "🚨 Immediate Anti-Narcotics Raid: Sale of marijuana/ganja is a cognizable non-bailable offense punishable up to 10 years imprisonment.",
        "📞 Anonymous Helplines: Call NCB Helpline 1933 or Emergency 112 to report anonymously."
      ]
    },
    {
      id: "tenant-deposit-shield",
      category: "Tenant & Civil",
      icon: "🏠",
      title: "Landlord Security Deposit Protection",
      tag: "Rent Control Act / BNS Sec 316",
      summary: "Landlord refusing to return deposit or cutting power/water?",
      facts: [
        "🏠 Mandatory Deposit Refund: Landlord MUST refund deposit upon vacant possession. Unlawful withholding is Criminal Breach of Trust under BNS Section 316.",
        "❌ No Power/Water Cut: Landlord cutting essential utilities is a criminal offense under Rent Control Act.",
        "📜 Court Eviction Decree: Landlord cannot lock out tenant without a formal 3-month Rent Court eviction decree."
      ]
    },
    {
      id: "interfaith-protection",
      category: "Fundamental Rights",
      icon: "👩‍❤️‍👨",
      title: "Inter-Faith Marriage & Autonomy Protection",
      tag: "Special Marriage Act 1954 / Art 21",
      summary: "Consenting adults facing family or vigilante harassment over inter-faith/caste marriage?",
      facts: [
        "👩‍❤️‍👨 Lata Singh SC Mandate: Consenting adults (18+/21+) have an absolute fundamental right under Article 21 to marry any person of their choice.",
        "🛡️ Mandatory Police Protection: Police MUST provide protection and arrest any vigilantes or family members attempting abduction.",
        "🏠 Safe House Entitlement: Right to stay in District Safe Houses established under Supreme Court Shakti Vahini guidelines."
      ]
    },
    {
      id: "ecommerce-defective",
      category: "Consumer & E-Commerce",
      icon: "🛍️",
      title: "Defective Product & E-Commerce Refund Rights",
      tag: "Consumer Act 2019 Sec 2(47)",
      summary: "Received a defective product online and website refusing a refund or replacement?",
      facts: [
        "🛍️ Mandatory Refund Rule: Refusal to refund or replace defective items within agreed return period is an Unfair Trade Practice under Consumer Protection Act 2019 Sec 2(47).",
        "💻 Intermediary Liability: E-commerce platforms (Amazon, Flipkart, etc.) cannot dodge liability by blaming third-party sellers.",
        "🏛️ Free E-Daakhil Filing: File consumer grievance online at edaakhil.nic.in without hiring a lawyer."
      ]
    },
    {
      id: "hospital-emergency",
      category: "Consumer & Medical",
      icon: "🏥",
      title: "Emergency Medical Treatment Rights",
      tag: "Art 21 / Supreme Court Mandate",
      summary: "Hospital refusing emergency treatment or demanding advance cash deposit first?",
      facts: [
        "🏥 Paschim Banga SC Ruling: Hospitals CANNOT refuse emergency lifesaving medical treatment or demand advance cash deposit before starting care.",
        "🚑 No Police Delay: Doctors must start emergency treatment immediately without waiting for police FIR formalities.",
        "📜 Medical Record Access: Patients have a statutory right to obtain complete ICU/medical case sheets."
      ]
    },
    {
      id: "student-protest-rights",
      category: "Education & Student Rights",
      icon: "🎓",
      title: "Student Protest & Fee Preponement Rights",
      tag: "Constitution Art 19(1)(b) / UGC 2023",
      summary: "College preponing fee dates arbitrarily or threatening students for peaceful protests?",
      facts: [
        "✊ Right to Peaceful Protest: Article 19(1)(b) protects students' right to hold peaceful, non-violent demonstrations on fee issues.",
        "🏛️ 30-Day UGC Notice Rule: UGC 2023 Regulations mandate colleges CANNOT arbitrarily prepone fee deadlines without 30 days notice.",
        "🛍️ Unfair Practice Exemption: Forcing early fee dates without syndicate approval is an Unfair Trade Practice under Consumer Protection Act."
      ]
    },
    {
      id: "cyber-privacy",
      category: "Cyber & Privacy",
      icon: "📸",
      title: "Private Photo Leaks & Revenge Porn Shield",
      tag: "IT Act Sec 66E / BNS Sec 77",
      summary: "Someone uploaded or shared your private photos/videos without consent?",
      facts: [
        "⚡ 24-Hour Takedown Rule: Social media platforms MUST remove non-consensual intimate imagery within 24 hours of complaint under IT Rules 2021.",
        "✅ Anonymous Reporting: File complaint on cybercrime.gov.in anonymously under Women/Child Cyber Crime.",
        "⚖️ Strict Penalty: Up to 3 to 7 years imprisonment under BNS Section 77 & IT Act Section 66E."
      ]
    },
    {
      id: "toll-rules",
      category: "Traffic & Toll",
      icon: "🟡",
      title: "NHAI Toll Plaza & 100m Queue Rules",
      tag: "NHAI Circular 2021",
      summary: "Stuck in a long toll queue or FASTag scanner not reading?",
      facts: [
        "🟡 100-Meter Yellow Line Rule: If queue extends beyond 100 meters (marked by yellow line), toll passage is FREE until queue shortens.",
        "⏱️ 10-Second Rule: Service time per vehicle must not exceed 10 seconds.",
        "📟 Faulty Reader Exemption: If FASTag scanner is faulty (and tag has balance), vehicle passes FREE under NHAI Gazette Rules."
      ]
    },
    {
      id: "traffic-rights",
      category: "Traffic & Toll",
      icon: "🚓",
      title: "Traffic Police Stop & Vehicle Rights",
      tag: "Motor Vehicles Act",
      summary: "Can police take your vehicle keys or demand physical documents during a routine stop?",
      facts: [
        "❌ Traffic officers below Sub-Inspector (SI) rank CANNOT issue fines over ₹100.",
        "❌ Police CANNOT remove your ignition key or deflate your tires forcibly.",
        "✅ You have the right to show digital documents via DigiLocker / mParivahan (valid under IT Act Sec 6A)."
      ]
    },
    {
      id: "arrest-rights",
      category: "Police & Arrest",
      icon: "⚖️",
      title: "Arrest & Detention Shield",
      tag: "Art 22 / BNSS Sec 35",
      summary: "What happens if police ask you to come to the station?",
      facts: [
        "❌ Police CANNOT arrest without issuing a written Sec 35(3) BNSS notice for offenses with punishment < 7 years.",
        "✅ Right to call your family member and advocate immediately upon detention.",
        "✅ Right to be produced before a Magistrate within 24 hours of arrest."
      ]
    },
    {
      id: "cyber-scam-golden-hour",
      category: "Cyber & Privacy",
      icon: "💻",
      title: "Cyber Scam 'Golden Hour' 1930",
      tag: "Cyber Cell 1930",
      summary: "Money deducted by fraud UPI, phishing link, or fake call?",
      facts: [
        "⚡ Golden Hour (First 60 Mins): Calling 1930 immediately triggers automatic lien/freeze on the fraudster's bank account across 140+ banks.",
        "✅ Report online at cybercrime.gov.in with UTR number & SMS screenshots.",
        "✅ Bank must credit unauthorized transaction amount if reported within 3 days (RBI Circular 2017)."
      ]
    },
    {
      id: "zero-fir-women",
      category: "Women & Seniors",
      icon: "👩",
      title: "Women's Safety & Zero FIR Mandate",
      tag: "Supreme Court Mandate",
      summary: "Can a police station refuse your FIR because the crime happened elsewhere?",
      facts: [
        "❌ NO police station can refuse an FIR due to jurisdiction ('Zero FIR' rule).",
        "✅ Women cannot be arrested between sunset (6 PM) and sunrise (6 AM).",
        "✅ Right to record statement at home in front of female officer."
      ]
    },
    {
      id: "workplace-salary-rights",
      category: "Workplace",
      icon: "💼",
      title: "Workplace Salary & Forced Resignation Rights",
      tag: "Code on Wages 2019",
      summary: "Employer withholding salary or experience letter?",
      facts: [
        "✅ Salary must be credited by 7th/10th of every month under Code on Wages.",
        "❌ Employer cannot force unpaid resignation or hold back experience certificate.",
        "✅ Full & Final Settlement (FNF) must be paid within 2 working days."
      ]
    },
    {
      id: "phone-passcode-silence",
      category: "Police & Arrest",
      icon: "🔒",
      title: "Forced Phone Passcode & Silence Rights",
      tag: "Art 20(3) / SC Virender Kumar Ruling",
      summary: "Can police force you or a journalist to reveal phone passwords?",
      facts: [
        "🔒 Right Against Forced Passcodes: Supreme Court Virender Kumar ruling prohibits police from forcing phone unlock without a court warrant.",
        "🤐 Right to Silence: Article 20(3) protects every citizen against compelled self-incrimination.",
        "📜 Written Summons Notice: Police MUST issue a written Section 35(3) BNSS notice for interrogation."
      ]
    },
    {
      id: "free-legal-aid-nalsa",
      category: "Fundamental Rights",
      icon: "⚖️",
      title: "Free Government Legal Aid Rights",
      tag: "NALSA Act 1987 / Art 39A",
      summary: "Cannot afford a private advocate for court representation?",
      facts: [
        "⚖️ Free Government Advocate: Women, children, SC/ST, and citizens with income < ₹3 Lakhs get 100% free advocate representation under NALSA.",
        "📞 Helpline: Call NALSA Helpline 15100 or visit District Legal Services Authority (DLSA).",
        "📜 Court Fee Waiver: Exemption from court fees and legal expenses under Article 39A."
      ]
    }
  ],

  kn: [
    {
      id: "ndps-drug-shield",
      category: "Cyber & Privacy",
      icon: "🚫",
      title: "ಅಕ್ರಮ ಗಾಂಜಾ / ಡ್ರಗ್ಸ್ ದೂರು ಮತ್ತು ಮಾಹಿತಿ ನೀಡುವವರ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "NDPS ಕಾಯ್ದೆ 1985 ಸೆಕ್ಷನ್ 20 / BNS 292",
      summary: "ನೆರೆಹೊರೆಯವರು ಅಥವಾ ವ್ಯಕ್ತಿಗಳು ಅಕ್ರಮವಾಗಿ ಗಾಂಜಾ, ಮಾರಿಜುವಾನಾ ಅಥವಾ ಡ್ರಗ್ಸ್ ಮಾರಾಟ ಮಾಡುತ್ತಿದ್ದಾರೆಯೇ?",
      facts: [
        "🕵️ 100% ರಹಸ್ಯ ಮಾಹಿತಿ ರಕ್ಷಣೆ: NDPS ಕಾಯ್ದೆ ಸೆಕ್ಷನ್ 68 ರ ಪ್ರಕಾರ ಮಾಹಿತಿ ನೀಡಿದ ನಾಗರಿಕರ ಹೆಸರನ್ನು 100% ರಹಸ್ಯವಾಗಿಡಲು ಪೊಲೀಸ್ ಮತ್ತು NCB ಬದ್ಧವಾಗಿವೆ.",
        "🚨 ತಕ್ಷಣದ ಆಂಟಿ-ನಾರ್ಕೋಟಿಕ್ಸ್ ದಾಳಿ: ಗಾಂಜಾ/ಡ್ರಗ್ಸ್ ಮಾರಾಟವು 10 ವರ್ಷಗಳವರೆಗೆ ಜೈಲು ಶಿಕ್ಷೆ ವಿಧಿಸಬಹುದಾದ ಗಂಭೀರ ಅಪರಾಧವಾಗಿದೆ.",
        "📞 ಅನಾಮಧೇಯ ಸಹಾಯವಾಣಿ: ಉಚಿತವಾಗಿ ದೂರು ನೀಡಲು NCB ಸಹಾಯವಾಣಿ 1933 ಅಥವಾ ತುರ್ತು ಸಂಖ್ಯೆ 112 ಗೆ ಕರೆ ಮಾಡಿ."
      ]
    },
    {
      id: "tenant-deposit-shield",
      category: "Tenant & Civil",
      icon: "🏠",
      title: "ಬಾಡಿಗೆದಾರರ ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ಮತ್ತು ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ಬಾಡಿಗೆ ನಿಯಂತ್ರಣ ಕಾಯ್ದೆ / BNS Sec 316",
      summary: "ಮನೆ ಮಾಲೀಕರು ಡೆಪಾಸಿಟ್ ಹಣ ಹಿಂದಿರುಗಿಸಲು ನಿರಾಕರಿಸುತ್ತಿದ್ದಾರೆಯೇ ಅಥವಾ ವಿದ್ಯುತ್/ನೀರು ಸಂಪರ್ಕ ಕಟ್ ಮಾಡಿದ್ದಾರೆಯೇ?",
      facts: [
        "🏠 ಖಡ್ಡಾಯ ಡೆಪಾಸಿಟ್ ಮರುಪಾವತಿ: ಮನೆ ಖಾಲಿ ಮಾಡಿದ ತಕ್ಷಣ ಡೆಪಾಸಿಟ್ ಹಿಂದಿರುಗಿಸುವುದು ಮಾಲೀಕರ ಕರ್ತವ್ಯ. ಇಲ್ಲವಾದರೆ BNS 316 ಅಡಿಯಲ್ಲಿ ಅಪರಾಧ.",
        "❌ ವಿದ್ಯುತ್/ನೀರು ಸಂಪರ್ಕ ಕಟ್ ಮಾಡುವಂತಿಲ್ಲ: ಬಾಡಿಗೆದಾರರ ಮೂಲಭೂತ ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ ಕಟ್ ಮಾಡುವುದು ಕಾನೂನುಬಾಹಿರ.",
        "📜 ನ್ಯಾಯಾಲಯದ ಆದೇಶವಿಲ್ಲದೆ ಖಾಲಿ ಮಾಡಿಸುವಂತಿಲ್ಲ: 3 ತಿಂಗಳ ನೋಟಿಸ್ ಮತ್ತು ಬಾಡಿಗೆ ಕೋರ್ಟ್ ಆದೇಶವಿಲ್ಲದೆ ಮಾಲೀಕರು ಬೀಗ ಹಾಕುವಂತಿಲ್ಲ."
      ]
    },
    {
      id: "interfaith-protection",
      category: "Fundamental Rights",
      icon: "👩‍❤️‍👨",
      title: "ಅಂತರಧರ್ಮೀಯ ಮತ್ತು ಅಂತರಜಾತಿ ವಿವಾಹ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ವಿಶೇಷ ವಿವಾಹ ಕಾಯ್ದೆ 1954 / Art 21",
      summary: "ಅಂತರಧರ್ಮೀಯ ಅಥವಾ ಅಂತರಜಾತಿ ಮದುವೆಯಾದ ವಯಸ್ಕರಿಗೆ ಕುಟುಂಬ ಅಥವಾ ಅಸಮಾಜಿಕ ಶಕ್ತಿಗಳಿಂದ ಬೆದರಿಕೆ ಇದೆಯೇ?",
      facts: [
        "👩‍❤️‍👨 ಲತಾ ಸಿಂಗ್ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪು: ಪ್ರೌಢವಯಸ್ಕರು (18+/21+) ತಮ್ಮಿಷ್ಟದ ವ್ಯಕ್ತಿಯನ್ನು ಮದುವೆಯಾಗಲು ಸಂವಿಧಾನದ ವಿಧಿ 21 ರ ಅಡಿಯಲ್ಲಿ ಪೂರ್ಣ ಹಕ್ಕಿದೆ.",
        "🛡️ ಖಡ್ಡಾಯ ಪೊಲೀಸ್ ರಕ್ಷಣೆ: ಪೊಲೀಸರು ಬೆದರಿಕೆ ಹಾಕುವವರ ವಿರುದ್ಧ ಪ್ರಕರಣ ದಾಖಲಿಸಿ ದಂಪತಿಗೆ ತಕ್ಷಣ ರಕ್ಷಣೆ ನೀಡಬೇಕು.",
        "🏠 ಸುರಕ್ಷಿತ ಗೃಹ (Safe House) ರಕ್ಷಣೆ: ಜಿಲ್ಲಾ ಸುರಕ್ಷಿತ ಗೃಹಗಳಲ್ಲಿ ಉಚಿತ ವಸತಿ ಪಡೆಯುವ ಅರ್ಹತೆ ಇದೆ."
      ]
    },
    {
      id: "ecommerce-defective",
      category: "Consumer & E-Commerce",
      icon: "🛍️",
      title: "ಆನ್‌ಲೈನ್ ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು ಮತ್ತು ಖಡ್ಡಾಯ ರಿಫಂಡ್ ರಕ್ಷಣೆ",
      tag: "ಗ್ರಾಹಕ ರಕ್ಷಣಾ ಕಾಯ್ದೆ 2019",
      summary: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಾಳಾದ ವಸ್ತು ಬಂದಿದ್ದು, ಕಂಪನಿಯು ಹಣ ಹಿಂದಿರುಗಿಸಲು ಅಥವಾ ಬದಲಾಯಿಸಲು ನಿರಾಕರಿಸುತ್ತಿದೆಯೇ?",
      facts: [
        "🛍️ ಖಡ್ಡಾಯ ಹಣ ಮರುಪಾವತಿ: ನಿಯಮಿತ ಅವಧಿಯಲ್ಲಿ ರಿಫಂಡ್ ನಿರಾಕರಿಸುವುದು ಗ್ರಾಹಕ ರಕ್ಷಣಾ ಕಾಯ್ದೆ 2019 ರ ಪ್ರಕಾರ ಅಕ್ರಮ ವ್ಯವಹಾರವಾಗಿದೆ.",
        "💻 ಇಂಟರ್ಮೀಡಿಯರಿ ಜವಾಬ್ದಾರಿ: ಅಮೆಜಾನ್, ಫ್ಲಿಪ್‌ಕಾರ್ಟ್ ಮುಂತಾದ ಕಂಪನಿಗಳು ಸೆಲ್ಲರ್ ಮೇಲೆ ನೆಪ ಹೇಳಿ ತಪ್ಪಿಸಿಕೊಳ್ಳುವಂತಿಲ್ಲ.",
        "🏛️ ಉಚಿತ ಇ-ದಾಖಿಲ್ ದೂರು: e-Daakhil ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ವಕೀಲರಿಲ್ಲದೆ ಉಚಿತವಾಗಿ ದೂರು ಸಲ್ಲಿಸಿ."
      ]
    },
    {
      id: "hospital-emergency",
      category: "Consumer & Medical",
      icon: "🏥",
      title: "ತುರ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆಸ್ಪತ್ರೆ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ವಿಧಿ 21 / ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪು",
      summary: "ಆಸ್ಪತ್ರೆಯು ತುರ್ತು ಚಿಕಿತ್ಸೆ ನೀಡಲು ನಿರಾಕರಿಸುತ್ತಿದೆಯೇ ಅಥವಾ ಮುಂಗಡ ಹಣಕ್ಕಾಗಿ ಒತ್ತಾಯಿಸುತ್ತಿದೆಯೇ?",
      facts: [
        "🏥 ಪಶ್ಚಿಮ ಬಂಗಾ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪು: ತುರ್ತು ಜೀವ ರಕ್ಷಣಾ ಚಿಕಿತ್ಸೆಯನ್ನು ಯಾವುದೇ ಆಸ್ಪತ್ರೆ ನಿರಾಕರಿಸುವಂತಿಲ್ಲ ಅಥವಾ ಹಣಕ್ಕಾಗಿ ಕಾಯಿಸುವಂತಿಲ್ಲ.",
        "🚑 ಪೊಲೀಸ್ ದೂರಿಗಾಗಿ ಚಿಕಿತ್ಸೆ ತಡೆಯುವಂತಿಲ್ಲ: ವೈದ್ಯರು ತಕ್ಷಣ ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸಬೇಕು, ಎಫ್‌ಐಆರ್‌ಗಾಗಿ ಕಾಯಬೇಕಾಗಿಲ್ಲ.",
        "📜 ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳ ಹಕ್ಕು: ರೋಗಿಗೆ ಮತ್ತು ಸಂಬಂಧಿಕರಿಗೆ ಸಂಪೂರ್ಣ ವೈದ್ಯಕೀಯ ರಿಪೋರ್ಟ್ ಪಡೆಯುವ ಶಾಸನಬದ್ಧ ಹಕ್ಕಿದೆ."
      ]
    },
    {
      id: "student-protest-rights",
      category: "Education & Student Rights",
      icon: "🎓",
      title: "ವಿದ್ಯಾರ್ಥಿ ಚಳವಳಿ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಫೀಸ್ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ಸಂವಿಧಾನ ವಿಧಿ 19(1)(b) / UGC 2023",
      summary: "ಕಾಲೇಜು ಆಡಳಿತವು ಮುಂಚಿತವಾಗಿ ಫೀಸ್ ನೀಡಲು ಒತ್ತಾಯಿಸುತ್ತಿದೆಯೇ ಅಥವಾ ಪರೀಕ್ಷೆಗೆ ತಡೆ ಬೆದರಿಕೆ ಹಾಕುತ್ತಿದೆಯೇ?",
      facts: [
        "✊ ಶಾಂತಿಯುತ ಪ್ರತಿಭಟನೆಯ ಹಕ್ಕು: ಸಂವಿಧಾನದ 19(1)(b) ವಿಧಿಯ ಅಡಿಯಲ್ಲಿ ಶಾಂತಿಯುತವಾಗಿ ಪ್ರತಿಭಟಿಸಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹಕ್ಕಿದೆ.",
        "🏛️ 30 ದಿನಗಳ UGC ನೋಟಿಸ್ ನಿಯಮ: UGC 2023 ನಿಯಮಗಳ ಪ್ರಕಾರ 30 ದಿನಗಳ ಮುಂಚಿತ ನೋಟಿಸ್ ಇಲ್ಲದೆ ಫೀಸ್ ದಿನಾಂಕ ಬದಲಾಯಿಸುವಂತಿಲ್ಲ.",
        "🛍️ ಅನಧಿಕೃತ ದಂಡ ತಡೆ: ಮುಂಚಿತವಾಗಿ ಫೀಸ್ ಬಲವಂತ ಮಾಡುವುದು ಗ್ರಾಹಕ ಕಾಯ್ದೆಯಡಿ ಅಕ್ರಮ."
      ]
    },
    {
      id: "cyber-privacy",
      category: "Cyber & Privacy",
      icon: "📸",
      title: "ಖಾಸಗಿ ಫೋಟೋ ಲೀಕ್ ಮತ್ತು ಸೈಬರ್ ಬ್ಲ್ಯಾಕ್‌ಮೇಲ್ ರಕ್ಷಣೆ",
      tag: "IT ಕಾಯ್ದೆ Sec 66E / BNS Sec 77",
      summary: "ನಿಮ್ಮ ಅನುಮತಿಯಿಲ್ಲದೆ ಯಾರಾದರೂ ಖಾಸಗಿ ಫೋಟೋ/ವೀಡಿಯೊ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಂಡಿದ್ದಾರೆಯೇ?",
      facts: [
        "⚡ 24 ಗಂಟೆಗಳ ಡಿಲೀಟ್ ನಿಯಮ: ದೂರು ನೀಡಿದ 24 ಗಂಟೆಗಳಲ್ಲಿ ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಕಂಪನಿಗಳು ಆ ಫೋಟೋಗಳನ್ನು ತೆರವುಗೊಳಿಸಬೇಕು.",
        "✅ ಅನಾಮಧೇಯ ದೂರು: cybercrime.gov.in ನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರು ಬಹಿರಂಗಪಡಿಸದೆ ದೂರು ನೀಡಿ.",
        "⚖️ ಕಠಿಣ ಶಿಕ್ಷೆ: BNS ಸೆಕ್ಷನ್ 77 ರ ಅಡಿಯಲ್ಲಿ 3 ರಿಂದ 7 ವರ್ಷಗಳವರೆಗೆ ಜೈಲು ಶಿಕ್ಷೆ."
      ]
    },
    {
      id: "toll-rules",
      category: "Traffic & Toll",
      icon: "🟡",
      title: "NHAI ಟೋಲ್ ಪ್ಲಾಜಾ ಮತ್ತು 100 ಮೀಟರ್ ಸರದಿ ನಿಯಮಗಳು",
      tag: "NHAI ಸುಸುತ್ತೋಲೆ 2021",
      summary: "ಟೋಲ್ ಪ್ಲಾಜಾದಲ್ಲಿ ಸುದೀರ್ಘ ಕ್ಯೂನಲ್ಲಿ ಸಿಲುಕಿದ್ದೀರಾ ಅಥವಾ ಸ್ಕ್ಯಾನರ್ ಕೆಲಸ ಮಾಡುತ್ತಿಲ್ಲವೇ?",
      facts: [
        "🟡 100 ಮೀಟರ್ ಹಳದಿ ರೇಖೆ ನಿಯಮ: ಕ್ಯೂ 100 ಮೀಟರ್‌ಗಿಂತ ಹೆಚ್ಚಿದ್ದರೆ, ಕ್ಯೂ ಕಡಿಮೆಯಾಗುವವರೆಗೆ ಟೋಲ್ ಪ್ರಯಾಣ ಉಚಿತ.",
        "⏱️ 10 ಸೆಕೆಂಡ್ ನಿಯಮ: ಪ್ರತಿ ವಾಹನಕ್ಕೆ 10 ಸೆಕೆಂಡ್‌ಗಿಂತ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುವಂತಿಲ್ಲ.",
        "📟 ಸ್ಕ್ಯಾನರ್ ದೋಷ: ಟೋಲ್ ಸ್ಕ್ಯಾನರ್ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ ವಾಹನವು ಉಚಿತವಾಗಿ ಸಾಗಬಹುದು."
      ]
    },
    {
      id: "traffic-rights",
      category: "Traffic & Toll",
      icon: "🚓",
      title: "ಟ್ರಾಫಿಕ್ ಪೊಲೀಸ್ ತಪಾಸಣೆ ಮತ್ತು ವಾಹನ ಕೀ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ಮೋಟಾರು ವಾಹನ ಕಾಯ್ದೆ",
      summary: "ಟ್ರಾಫಿಕ್ ಪೊಲೀಸರು ನಿಮ್ಮ ಬೈಕ್ ಕೀ ತೆಗೆದುಕೊಳ್ಳಬಹುದೇ ಅಥವಾ ನಗದು ದಂಡ ಕೇಳಬಹುದೇ?",
      facts: [
        "❌ ಸಬ್-ಇನ್‌ಸ್ಪೆಕ್ಟರ್ (SI) ಗಿಂತ ಕೆಳಗಿನ ಅಧಿಕಾರಿಗಳು ₹100 ಗಿಂತ ಹೆಚ್ಚು ದಂಡ ವಿಧಿಸುವಂತಿಲ್ಲ.",
        "❌ ಪೊಲೀಸರು ಬಲವಂತವಾಗಿ ವಾಹನದ ಕೀ ತೆಗೆಯುವುದು ಅಥವಾ ಟೈರ್ ಗಾಳಿ ತೆಗೆಯುವುದು ಕಾನೂನುಬಾಹಿರ.",
        "✅ ಡಿಜಿಲಾಕರ್ (DigiLocker) ನಲ್ಲಿ ಡಿಜಿಟಲ್ ದಾಖಲೆಗಳನ್ನು ತೋರಿಸಲು ಕಾನೂನಿನಲ್ಲಿ ಪೂರ್ಣ ಅವಕಾಶವಿದೆ."
      ]
    },
    {
      id: "arrest-rights",
      category: "Police & Arrest",
      icon: "⚖️",
      title: "ಪೊಲೀಸ್ ವಿಚಾರಣೆ ಮತ್ತು ಬಂಧನ ರಕ್ಷಣಾ ಶೀಲ್ಡ್",
      tag: "ವಿಧಿ 22 / BNSS Sec 35",
      summary: "ಪೊಲೀಸರು ಠಾಣೆಗೆ ಕರೆದರೆ ಅಥವಾ ವಿಚಾರಣೆ ನಡೆಸಿದರೆ ನಿಮ್ಮ ಹಕ್ಕುಗಳೇನು?",
      facts: [
        "❌ 7 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಶಿಕ್ಷೆ ಇರುವ ಪ್ರಕರಣಗಳಲ್ಲಿ ಲಿಖಿತ ನೋಟಿಸ್ ನೀಡದೆ ಬಂಧಿಸುವಂತಿಲ್ಲ.",
        "✅ ಬಂಧನದ ತಕ್ಷಣ ನಿಮ್ಮ ಕುಟುಂಬದವರಿಗೆ ಮತ್ತು ವಕೀಲರಿಗೆ ಕರೆ ಮಾಡುವ ಹಕ್ಕಿದೆ.",
        "✅ ಬಂಧಿಸಿದ 24 ಗಂಟೆಗಳ ಒಳಗೆ ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಮುಂದೆ ಹಾಜರುಪಡಿಸಬೇಕು."
      ]
    },
    {
      id: "cyber-scam-golden-hour",
      category: "Cyber & Privacy",
      icon: "💻",
      title: "ಸೈಬರ್ ವಂಚನೆ ಮತ್ತು 1930 ಗೋಲ್ಡನ್ ಅವರ್ ರಕ್ಷಣೆ",
      tag: "ಸೈಬರ್ ಸೆಲ್ 1930",
      summary: "ಲಿಂಕ್ ಅಥವಾ ನಕಲಿ ಕರೆಯಿಂದ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗಿದೆಯೇ?",
      facts: [
        "⚡ ಗೋಲ್ಡನ್ ಅವರ್ (ಮೊದಲ 60 ನಿಮಿಷ): 1930 ಗೆ ತಕ್ಷಣ ಕರೆ ಮಾಡಿದರೆ ವಂಚಕನ ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ತಕ್ಷಣ ಫ್ರೀಜ್ ಮಾಡಲಾಗುತ್ತದೆ.",
        "✅ cybercrime.gov.in ನಲ್ಲಿ UTR ಸಂಖ್ಯೆಯೊಂದಿಗೆ ದೂರು ಸಲ್ಲಿಸಿ.",
        "✅ 3 ದಿನಗಳಲ್ಲಿ ದೂರು ನೀಡಿದರೆ ಬ್ಯಾಂಕ್ ಹಣವನ್ನು ಮರುಪಾವತಿಸಲು ಬಾಧ್ಯವಾಗಿದೆ (RBI ನಿಯಮ)."
      ]
    },
    {
      id: "zero-fir-women",
      category: "Women & Seniors",
      icon: "👩",
      title: "ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಮತ್ತು ಜೀರೋ ಎಫ್‌ಐಆರ್ ಹಕ್ಕುಗಳು",
      tag: "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪು",
      summary: "ಘಟನೆ ಬೇರೆಡೆ ನಡೆದಿದೆ ಎಂದು ಪೊಲೀಸರು ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಲು ನಿರಾಕರಿಸಬಹುದೇ?",
      facts: [
        "❌ ಜುರಿಸ್ಡಿಕ್ಷನ್ ನೆಪ ಹೇಳಿ ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯೂ ಎಫ್‌ಐಆರ್ ನಿರಾಕರಿಸುವಂತಿಲ್ಲ (Zero FIR).",
        "✅ ಸೂರ್ಯಾಸ್ತದ ನಂತರ (ಸಂಜೆ 6) ಮತ್ತು ಸೂರ್ಯೋದಯದ ಮೊದಲು (ಬೆಳಿಗ್ಗೆ 6) ಮಹಿಳೆಯರನ್ನು ಬಂಧಿಸುವಂತಿಲ್ಲ.",
        "✅ ಮಹಿಳಾ ಅಧಿಕಾರಿಯ ಸಮ್ಮುಖದಲ್ಲಿ ಮನೆಯಲ್ಲೇ ಹೇಳಿಕೆ ದಾಖಲಿಸುವ ಹಕ್ಕಿದೆ."
      ]
    },
    {
      id: "workplace-salary-rights",
      category: "Workplace",
      icon: "💼",
      title: "ಉದ್ಯೋಗಿ ವೇತನ ಮತ್ತು ಅನುಭವ ಪತ್ರ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ವೇತನ ಸಂಹಿತೆ 2019",
      summary: "ಕಂಪನಿಯು ಸಂಬಳ ಅಥವಾ ಅನುಭವ ಪತ್ರ ನೀಡದೆ ತಡೆಹಿಡಿದಿದೆಯೇ?",
      facts: [
        "✅ ಪ್ರತಿ ತಿಂಗಳ 7 ಅಥವಾ 10 ರೊಳಗೆ ವೇತನ ಜಮೆಯಾಗಬೇಕು.",
        "❌ ರಾಜೀನಾಮೆ ನೀಡಿದ ತಕ್ಷಣ ಅನಗತ್ಯವಾಗಿ ವೇತನ ಅಥವಾ ಅನುಭವ ಪತ್ರ ತಡೆಯುವಂತಿಲ್ಲ.",
        "✅ ಪೂರ್ಣ ಹಣ ಇತ್ಯರ್ಥ (FNF) 2 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಪೂರ್ಣಗೊಳ್ಳಬೇಕು."
      ]
    },
    {
      id: "phone-passcode-silence",
      category: "Police & Arrest",
      icon: "🔒",
      title: "ಫೋನ್ ಪಾಸ್‌ವರ್ಡ್ ಮತ್ತು ಮೌನದ ರಕ್ಷಣಾ ಹಕ್ಕುಗಳು",
      tag: "ವಿಧಿ 20(3) / ವೀರೇಂದರ್ ಕುಮಾರ್ ತೀರ್ಪು",
      summary: "ಪೊಲೀಸರು ನಿಮ್ಮ ಫೋನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ನೀಡಲು ಬಲವಂತ ಮಾಡಬಹುದೇ?",
      facts: [
        "🔒 ಫೋನ್ ಪಾಸ್‌ವರ್ಡ್ ನೀಡದಿರುವ ಹಕ್ಕು: ಕೋರ್ಟ್ ವಾರಂಟ್ ಇಲ್ಲದೆ ಫೋನ್ ಅನ್‌ಲಾಕ್ ಮಾಡಲು ಪೊಲೀಸರು ಒತ್ತಾಯಿಸುವಂತಿಲ್ಲ.",
        "🤐 ಮೌನದ ಹಕ್ಕು: ಸಂವಿಧಾನದ 20(3) ವಿಧಿಯ ಅಡಿಯಲ್ಲಿ ಸ್ವಯಂ ಅಪರಾಧ ಒಪ್ಪಿಕೊಳ್ಳದಿರಲು ಮೌನವಾಗಿರಬಹುದು.",
        "📜 ಲಿಖಿತ ನೋಟಿಸ್: ವಿಚಾರಣೆಗೆ ಕರೆದರೆ ಲಿಖಿತ ನೋಟಿಸ್ ಪಡೆಯುವ ಹಕ್ಕಿದೆ."
      ]
    },
    {
      id: "free-legal-aid-nalsa",
      category: "Fundamental Rights",
      icon: "⚖️",
      title: "ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲ ಮತ್ತು ಕಾನೂನು ನೆರವಿನ ಹಕ್ಕುಗಳು",
      tag: "NALSA ಕಾಯ್ದೆ 1987 / ವಿಧಿ 39A",
      summary: "ಕೋರ್ಟ್‌ನಲ್ಲಿ ವಾದಿಸಲು ಖಾಸಗಿ ವಕೀಲರ ಶುಲ್ಕ ಪಾವತಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲವೇ?",
      facts: [
        "⚖️ ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲರು: ಮಹಿಳೆಯರು, ಮಕ್ಕಳು ಮತ್ತು ಕಡಿಮೆ ಆದಾಯವುಳ್ಳ ನಾಗರಿಕರಿಗೆ NALSA ಉಚಿತ ವಕೀಲರನ್ನು ನೀಡುತ್ತದೆ.",
        "📞 ಸಹಾಯವಾಣಿ: NALSA ಉಚಿತ ಸಹಾಯವಾಣಿ 15100 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವೆಗಳ ಪ್ರಾಧಿಕಾರ (DLSA) ಸಂಪರ್ಕಿಸಿ.",
        "📜 ಕೋರ್ಟ್ ಫೀಸ್ ವಿನಾಯಿತಿ: ಸಂವಿಧಾನದ 39A ವಿಧಿಯ ಅಡಿಯಲ್ಲಿ ಕೋರ್ಟ್ ಶುಲ್ಕದಿಂದ ವಿನಾಯಿತಿ ಸಿಗುತ್ತದೆ."
      ]
    }
  ],

  hi: [
    {
      id: "ndps-drug-shield",
      category: "Cyber & Privacy",
      icon: "🚫",
      title: "अवैध गांजा / ड्रग्स बिक्री रिपोर्टिंग और गुप्त सूचना अधिकार",
      tag: "NDPS अधिनियम 1985 / BNS 292",
      summary: "क्या आसपास के लोग या पड़ोसी अवैध रूप से गांजा या ड्रग्स बेच रहे हैं?",
      facts: [
        "🕵️ 100% सूचनादाता गोपनीयता: NDPS अधिनियम की धारा 68 के तहत पुलिस और NCB सूचना देने वाले नागरिक की पहचान 100% गुप्त रखने के लिए बाध्य है।",
        "🚨 तत्काल एंटी-नारकोटिक्स रेड: गांजा/ड्रग्स बेचना संज्ञेय अपराध है जिसमें 10 साल तक की जेल हो सकती है।",
        "📞 गुमनाम हेल्पलाइन: NCB हेल्पलाइन 1933 या आपातकालीन 112 पर कॉल करके गुप्त रूप से शिकायत दर्ज करें।"
      ]
    },
    {
      id: "tenant-deposit-shield",
      category: "Tenant & Civil",
      icon: "🏠",
      title: "किरायेदार सुरक्षा डिपॉजिट और बेदखली सुरक्षा अधिकार",
      tag: "किराया नियंत्रण अधिनियम / BNS Sec 316",
      summary: "क्या मकान मालिक डिपॉजिट वापस करने से इंकार कर रहा है या बिजली/पानी काट दिया है?",
      facts: [
        "🏠 अनिवार्य डिपॉजिट रिफंड: मकान खाली करने पर डिपॉजिट लौटाना अनिवार्य है। अनाधिकृत रूप से रोकना BNS 316 के तहत अपराध है।",
        "❌ बिजली/पानी नहीं काट सकते: आवश्यक सेवाएं काटना गैर-कानूनी है।",
        "📜 कॉर्ट ऑर्डर के बिना बेदखली नहीं: 3 महीने के कोर्ट नोटिस के बिना मकान मालिक ताला नहीं लगा सकता।"
      ]
    },
    {
      id: "interfaith-protection",
      category: "Fundamental Rights",
      icon: "👩‍❤️‍👨",
      title: "अंतर-धार्मिक और अंतर-जातीय विवाह सुरक्षा अधिकार",
      tag: "विशेष विवाह अधिनियम 1954 / Art 21",
      summary: "क्या बालिग जोड़े को शादी पर असामाजिक तत्वों या परिवार से धमकी मिल रही है?",
      facts: [
        "👩‍❤️‍👨 लता सिंह सुप्रीम कोर्ट फैसला: बालिग नागरिकों (18+/21+) को अपनी पसंद के साथी से शादी करने का अनुच्छेद 21 के तहत मौलिक अधिकार है।",
        "🛡️ अनिवार्य पुलिस सुरक्षा: पुलिस को धमकी देने वालों के खिलाफ एफआईआर दर्ज करके तुरंत सुरक्षा देनी होगी।",
        "🏠 सेफ हाउस अधिकार: सरकारी सेफ हाउस में रहने का कानूनी अधिकार।"
      ]
    },
    {
      id: "ecommerce-defective",
      category: "Consumer & E-Commerce",
      icon: "🛍️",
      title: "खराब प्रोडक्ट और ई-कॉमर्स रिफंड अधिकार",
      tag: "उपभोक्ता संरक्षण अधिनियम 2019",
      summary: "ऑनलाइन खराब सामान मिला और शॉपिंग वेबसाइट रिफंड से मना कर रही है?",
      facts: [
        "🛍️ अनिवार्य रिफंड नियम: तय समय में रिफंड न देना अनुचित व्यापार व्यवहार है।",
        "💻 कंपनी की जवाबदेही: ई-कॉमर्स प्लेटफॉर्म सेलर का बहाना बनाकर बच नहीं सकते।",
        "🏛️ मुफ्त ई-दाखिल शिकायत: e-Daakhil पोर्टल पर बिना वकील के घर बैठे शिकायत दर्ज करें।"
      ]
    },
    {
      id: "hospital-emergency",
      category: "Consumer & Medical",
      icon: "🏥",
      title: "आपातकालीन चिकित्सा उपचार अधिकार",
      tag: "अनुच्छेद 21 / सुप्रीम कोर्ट फैसला",
      summary: "क्या अस्पताल इमरजेंसी इलाज से मना कर रहा है या एडवांस पैसे मांग रहा है?",
      facts: [
        "🏥 पश्चिम बंग सुप्रीम कोर्ट फैसला: कोई भी अस्पताल इमरजेंसी जीवन रक्षक इलाज से मना नहीं कर सकता।",
        "🚑 पुलिस का इंतजार नहीं: डॉक्टर तुरंत इलाज शुरू करेंगे, पुलिस फॉर्मैलिटी का इंतजार नहीं करेंगे।",
        "📜 मेडिकल रिकॉर्ड अधिकार: मरीज को अपनी पूरी केस शीट प्राप्त करने का अधिकार है।"
      ]
    },
    {
      id: "student-protest-rights",
      category: "Education & Student Rights",
      icon: "🎓",
      title: "छात्र विरोध प्रदर्शन और फीस सुरक्षा अधिकार",
      tag: "संविधान अनुच्छेद 19(1)(b) / UGC 2023",
      summary: "क्या कॉलेज बिना नोटिस फीस की तारीख बदल रहा है या शांतिपूर्ण प्रदर्शन पर परीक्षा रोकने की धमकी दे रहा है?",
      facts: [
        "✊ शांतिपूर्ण प्रदर्शन अधिकार: अनुच्छेद 19(1)(b) के तहत शांतिपूर्ण प्रदर्शन का अधिकार है।",
        "🏛️ 30 दिन UGC नोटिस नियम: 30 दिन के पूर्व नोटिस के बिना फीस की तारीख नहीं बदली जा सकती।",
        "🛍️ अनुचित फीस दबाव गैर-कानूनी: जबरन जल्दी फीस मांगना उपभोक्ता अधिनियम के तहत अनुचित है।"
      ]
    },
    {
      id: "cyber-privacy",
      category: "Cyber & Privacy",
      icon: "📸",
      title: "प्राइवेट फोटो लीक और साइबर ब्लैकमेल सुरक्षा",
      tag: "IT एक्ट Sec 66E / BNS Sec 77",
      summary: "क्या किसी ने बिना सहमति आपकी निजी तस्वीरें/वीडियो इंटरनेट पर डाली हैं?",
      facts: [
        "⚡ 24 घंटे में फोटो हटाने का नियम: सोशल मीडिया प्लेटफॉर्म्स को शिकायत के 24 घंटे में फोटो हटानी होगी।",
        "✅ गुमनाम शिकायत: cybercrime.gov.in पर नाम छिपाकर शिकायत दर्ज करें।",
        "⚖️ कठोर सजा: BNS धारा 77 के तहत 3 से 7 साल की जेल।"
      ]
    },
    {
      id: "toll-rules",
      category: "Traffic & Toll",
      icon: "🟡",
      title: "NHAI टोल प्लाजा और 100 मीटर कतार नियम",
      tag: "NHAI सर्कुलर 2021",
      summary: "क्या आप टोल पर 100 मीटर से लंबी कतार में फंसे हैं या स्कैनर काम नहीं कर रहा?",
      facts: [
        "🟡 100 मीटर पीली पट्टी नियम: कतार 100 मीटर से लंबी होने पर कतार छोटी होने तक टोल मुफ़्त है।",
        "⏱️ 10 सेकंड नियम: प्रति वाहन 10 सेकंड से अधिक समय नहीं लगना चाहिए।",
        "📟 स्कैनर खराब होने पर छूट: स्कैनर खराब होने पर गाड़ी बिना टोल दिए जा सकती है।"
      ]
    },
    {
      id: "traffic-rights",
      category: "Traffic & Toll",
      icon: "🚓",
      title: "ट्रैफिक पुलिस चेकिंग और गाड़ी चाबी सुरक्षा अधिकार",
      tag: "मोटर वाहन अधिनियम",
      summary: "क्या ट्रैफिक पुलिस गाड़ी की चाबी निकाल सकती है या नकद जुर्माना मांग सकती है?",
      facts: [
        "❌ सब-इंस्पेक्टर (SI) से नीचे के अधिकारी ₹100 से ज्यादा का जुर्माना नहीं लगा सकते।",
        "❌ पुलिस जबरन गाड़ी की चाबी नहीं निकाल सकती और न ही हवा निकाल सकती है।",
        "✅ डिजीलॉकर (DigiLocker) में डिजिटल दस्तावेज दिखाना 100% वैध है।"
      ]
    },
    {
      id: "arrest-rights",
      category: "Police & Arrest",
      icon: "⚖️",
      title: "पुलिस पूछताछ और गिरफ्तारी सुरक्षा अधिकार",
      tag: "अनुच्छेद 22 / BNSS Sec 35",
      summary: "यदि पुलिस थाने बुलाए या पूछताछ करे तो आपके क्या अधिकार हैं?",
      facts: [
        "❌ 7 साल से कम सजा वाले मामलों में लिखित नोटिस दिए बिना गिरफ्तारी नहीं हो सकती।",
        "✅ हिरासत में लेते ही घर वालों और वकील को फोन करने का अधिकार।",
        "✅ 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश करना अनिवार्य।"
      ]
    },
    {
      id: "cyber-scam-golden-hour",
      category: "Cyber & Privacy",
      icon: "💻",
      title: "साइबर फ्रॉड और 1930 गोल्डन ऑवर सुरक्षा",
      tag: "साइबर सेल 1930",
      summary: "क्या फर्जी लिंक, ओटीपी या कॉल से बैंक से पैसे कट गए हैं?",
      facts: [
        "⚡ गोल्डन ऑवर (पहले 60 मिनट): 1930 पर तुरंत कॉल करने से ठग का बैंक अकाउंट तुरंत फ्रीज हो जाता है।",
        "✅ UTR नंबर के साथ cybercrime.gov.in पर रिपोर्ट दर्ज करें।",
        "✅ 3 दिन में सूचित करने पर बैंक अनधिकृत राशि वापस करने के लिए बाध्य है।"
      ]
    },
    {
      id: "zero-fir-women",
      category: "Women & Seniors",
      icon: "👩",
      title: "महिला सुरक्षा और जीरो एफआईआर अधिकार",
      tag: "सुप्रीम कोर्ट निर्देश",
      summary: "क्या पुलिस स्टेशन क्षेत्राधिकार का बहाना बनाकर एफआईआर से मना कर सकता है?",
      facts: [
        "❌ कोई भी थाना क्षेत्राधिकार का बहाना बनाकर एफआईआर से मना नहीं कर सकता (Zero FIR)।",
        "✅ शाम 6 बजे से सुबह 6 बजे के बीच महिलाओं की गिरफ्तारी नहीं हो सकती।",
        "✅ महिला अधिकारी की मौजूदगी में घर पर बयान दर्ज कराने का अधिकार।"
      ]
    },
    {
      id: "workplace-salary-rights",
      category: "Workplace",
      icon: "💼",
      title: "कर्मचारी वेतन और अनुभव पत्र सुरक्षा अधिकार",
      tag: "वेतन संहिता 2019",
      summary: "क्या कंपनी वेतन या अनुभव पत्र रोक रही है?",
      facts: [
        "✅ हर महीने की 7 या 10 तारीख तक वेतन मिलना अनिवार्य है।",
        "❌ कंपनी बिना वजह वेतन या अनुभव पत्र नहीं रोक सकती।",
        "✅ फुल एंड फाइनल सेटलमेंट (FNF) 2 कार्य दिवसों में होना चाहिए।"
      ]
    },
    {
      id: "phone-passcode-silence",
      category: "Police & Arrest",
      icon: "🔒",
      title: "फोन पासवर्ड और चुप रहने का अधिकार",
      tag: "अनुच्छेद 20(3) / वीरेंद्र कुमार फैसला",
      summary: "क्या पुलिस आपका फोन अनलॉक करने या पासवर्ड देने के लिए मजबूर कर सकती है?",
      facts: [
        "🔒 फोन पासवर्ड न देने का अधिकार: कोर्ट वारंट के बिना पुलिस फोन अनलॉक करने के लिए मजबूर नहीं कर सकती।",
        "🤐 चुप रहने का अधिकार: अनुच्छेद 20(3) के तहत खुद के खिलाफ गवाही न देने का अधिकार।",
        "📜 लिखित नोटिस: पूछताछ के लिए धारा 35(3) BNSS का लिखित नोटिस प्राप्त करने का अधिकार।"
      ]
    },
    {
      id: "free-legal-aid-nalsa",
      category: "Fundamental Rights",
      icon: "⚖️",
      title: "मुफ्त सरकारी वकील और कानूनी सहायता अधिकार",
      tag: "NALSA अधिनियम 1987 / Art 39A",
      summary: "कोर्ट केस के लिए प्राइवेट वकील की फीस नहीं दे सकते?",
      facts: [
        "⚖️ मुफ्त सरकारी वकील: महिलाओं, बच्चों और कम आय वाले नागरिकों को NALSA 100% मुफ्त वकील प्रदान करता है।",
        "📞 हेल्पलाइन: NALSA हेल्पलाइन 15100 पर कॉल करें या जिला कानूनी सेवा प्राधिकरण (DLSA) जाएं।",
        "📜 कोर्ट फीस छूट: अनुच्छेद 39A के तहत कोर्ट फीस से छूट।"
      ]
    }
  ]
};

// Multi-Language 4 Protection Shields
export const LOCALIZED_PROTECTION_SHIELDS = {
  en: [
    {
      id: 'police',
      title: 'Police Encounter & Arrest Rights Shield',
      subtitle: 'Protection under Section 35(3) BNSS & Supreme Court Arnesh Kumar Directives',
      icon: '👮',
      badge: 'BNSS 2023 Shield',
      details: [
        'Mandatory Notice under Sec 35(3) BNSS before any arrest for offenses under 7 years.',
        'Right to silence under Article 20(3) of the Constitution against coerced admissions.',
        'Right to consult an advocate of choice during questioning (Sec 38 BNSS).',
        'Right to medical examination every 48 hours in custody (Sec 53 BNSS).',
        'Police CANNOT seize mobile phones or compel passcodes without a specific judicial search warrant.'
      ]
    },
    {
      id: 'cyber',
      title: 'Cyber Fraud & Digital Arrest Shield',
      subtitle: 'Golden Hour 1930 Protocol & IT Rules 2021 Takedown Mandates',
      icon: '💻',
      badge: 'Cyber Cell 1930 Shield',
      details: [
        'Reporting financial cyber fraud within 60 minutes triggers auto-lien freezing on scammer bank accounts.',
        'Digital Arrest is a 100% fake scam. No Indian law enforcement agency demands money over video call.',
        'Right to 24-hour mandatory takedown of morphed or non-consensual imagery under IT Rules.',
        'Zero liability for unauthorized electronic banking transactions if reported within 3 days (RBI Mandate).'
      ]
    },
    {
      id: 'consumer',
      title: 'Consumer & E-Commerce Fraud Shield',
      subtitle: 'National Consumer Helpline 1915 & Consumer Protection Act 2019',
      icon: '🛍️',
      badge: 'Consumer Rights Shield',
      details: [
        'Right to full refund for defective goods, fake branding, or service cancellation.',
        'E-commerce platforms cannot charge unreasonable cancellation fees.',
        'Right to file e-Daakhil consumer complaint online without needing an advocate.',
        'Strict statutory penalties for misleading advertisements and unfair trade practices.'
      ]
    },
    {
      id: 'women',
      title: 'Women & Senior Citizen Safety Shield',
      subtitle: 'Zero FIR Mandate & Sunset-to-Sunrise Protection Rules',
      icon: '👩',
      badge: 'Zero FIR Shield',
      details: [
        'Zero FIR Rule: Women can file an FIR at ANY police station in India, irrespective of jurisdiction.',
        'Women cannot be arrested between sunset (6 PM) and sunrise (6 AM) except under magistrate permission.',
        'Right to record police statements at home in the presence of female police officers.',
        'Free pro-bono advocate assistance via NALSA Legal Aid Helpline 15100.'
      ]
    }
  ],

  kn: [
    {
      id: 'police',
      title: 'ಪೊಲೀಸ್ ತಪಾಸಣೆ ಮತ್ತು ಬಂಧನ ರಕ್ಷಣಾ ಶೀಲ್ಡ್',
      subtitle: 'BNSS 2023 ಸೆಕ್ಷನ್ 35(3) ಮತ್ತು ಅರ್ನೇಶ್ ಕುಮಾರ್ ಮಾರ್ಗದರ್ಶಿ ಸೂತ್ರಗಳ ರಕ್ಷಣೆ',
      icon: '👮',
      badge: 'BNSS 2023 ಶೀಲ್ಡ್',
      details: [
        '7 ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ಶಿಕ್ಷೆ ಇರುವ ಪ್ರಕರಣಗಳಲ್ಲಿ ಬಂಧಿಸುವ ಮೊದಲು BNSS 35(3) ರ ಅಡಿಯಲ್ಲಿ ಲಿಖಿತ ನೋಟಿಸ್ ಖಡ್ಡಾಯ.',
        'ಸಂವಿಧಾನದ 20(3) ವಿಧಿಯ ಅಡಿಯಲ್ಲಿ ಬಲವಂತದ ಒಪ್ಪಿಗೆ ನೀಡದೆ ಮೌನವಾಗಿರುವ ಹಕ್ಕು.',
        'ವಿಚಾರಣೆ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮಿಷ್ಟದ ವಕೀಲರನ್ನು ಸಂಪರ್ಕಿಸುವ ಹಕ್ಕು (BNSS ಸೆಕ್ಷನ್ 38).',
        'ಕಸ್ಟಡಿಯಲ್ಲಿದ್ದಾಗ ಪ್ರತಿ 48 ಗಂಟೆಗಳಿಗೊಮ್ಮೆ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆಯ ಹಕ್ಕು (BNSS ಸೆಕ್ಷನ್ 53).',
        'ಕೋರ್ಟ್ ವಾರಂಟ್ ಇಲ್ಲದೆ ಪೊಲೀಸರು ಮೊಬೈಲ್ ಫೋನ್ ಜಪ್ತಿ ಮಾಡುವಂತಿಲ್ಲ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಕೇಳುವಂತಿಲ್ಲ.'
      ]
    },
    {
      id: 'cyber',
      title: 'ಸೈಬರ್ ವಂಚನೆ ಮತ್ತು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ರಕ್ಷಣಾ ಶೀಲ್ಡ್',
      subtitle: 'ಗೋಲ್ಡನ್ ಅವರ್ 1930 ಪ್ರೋಟೋಕಾಲ್ ಮತ್ತು IT ನಿಯಮಗಳ ರಕ್ಷಣೆ',
      icon: '💻',
      badge: 'ಸೈಬರ್ ಸೆಲ್ 1930 ಶೀಲ್ಡ್',
      details: [
        '60 ನಿಮಿಷಗಳಲ್ಲಿ ಸೈಬರ್ ಫ್ರಾಡ್ ವರದಿ ಮಾಡಿದರೆ ವಂಚಕನ ಬ್ಯಾಂಕ್ ಖಾತೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಫ್ರೀಜ್ ಆಗುತ್ತದೆ.',
        'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ 100% ನಕಲಿ ವಂಚನೆ. ಯಾವುದೇ ಸರ್ಕಾರಿ ಸಂಸ್ಥೆ ವೀಡಿಯೊ ಕರೆಯಲ್ಲಿ ಹಣ ಕೇಳುವುದಿಲ್ಲ.',
        'ಅನಧಿಕೃತ ಫೋಟೋಗಳನ್ನು 24 ಗಂಟೆಗಳಲ್ಲಿ ಸೋಶಿಯಲ್ ಮೀಡಿಯಾದಿಂದ ತೆರವುಗೊಳಿಸುವ ಹಕ್ಕು.',
        '3 ದಿನಗಳಲ್ಲಿ ವರದಿ ಮಾಡಿದರೆ ಅನಧಿಕೃತ ಬ್ಯಾಂಕಿಂಗ್ ವಹಿವಾಟಿಗೆ ಗ್ರಾಹಕರಿಗೆ ಶೂನ್ಯ ಹೊಣೆಗಾರಿಕೆ (RBI ನಿಯಮ).'
      ]
    },
    {
      id: 'consumer',
      title: 'ಗ್ರಾಹಕ ಮತ್ತು ಆನ್‌ಲೈನ್ ವಂಚನೆ ರಕ್ಷಣಾ ಶೀಲ್ಡ್',
      subtitle: 'ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ 1915 ಮತ್ತು ಗ್ರಾಹಕ ರಕ್ಷಣಾ ಕಾಯ್ದೆ 2019',
      icon: '🛍️',
      badge: 'ಗ್ರಾಹಕ ಹಕ್ಕುಗಳ ಶೀಲ್ಡ್',
      details: [
        'ಹಾಳಾದ ವಸ್ತುಗಳು, ನಕಲಿ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಅಥವಾ ಸೇವೆ ರದ್ದತಿಗೆ ಪೂರ್ಣ ಹಣ ಮರುಪಾವತಿ ಪಡೆಯುವ ಹಕ್ಕು.',
        'ಆನ್‌ಲೈನ್ ಕಂಪನಿಗಳು ಅನಗತ್ಯವಾಗಿ ಹೆಚ್ಚಿನ ಕ್ಯಾನ್ಸಲೇಶನ್ ಶುಲ್ಕ ವಿಧಿಸುವಂತಿಲ್ಲ.',
        'ವಕೀಲರಿಲ್ಲದೆ ಉಚಿತವಾಗಿ e-Daakhil ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ದೂರು ಸಲ್ಲಿಸುವ ಹಕ್ಕು.',
        'ನಕಲಿ ಜಾಹೀರಾತು ಮತ್ತು ಅಕ್ರಮ ವ್ಯವಹಾರಗಳ ವಿರುದ್ಧ ಕಠಿಣ ಶಾಸನಬದ್ಧ ದಂಡ.'
      ]
    },
    {
      id: 'women',
      title: 'ಮಹಿಳೆಯರು ಮತ್ತು ಹಿರಿಯ ನಾಗರಿಕರ ರಕ್ಷಣಾ ಶೀಲ್ಡ್',
      subtitle: 'ಜೀರೋ ಎಫ್‌ಐಆರ್ ನಿಯಮ ಮತ್ತು ಸೂರ್ಯಾಸ್ತ-ಸೂರ್ಯೋದಯ ಬಂಧನ ತಡೆ',
      icon: '👩',
      badge: 'ಜೀರೋ ಎಫ್‌ಐಆರ್ ಶೀಲ್ಡ್',
      details: [
        'ಜೀರೋ ಎಫ್‌ಐಆರ್ ನಿಯಮ: ಮಹಿಳೆಯರು ಭಾರತದ ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಬಹುದು.',
        'ಸೂರ್ಯಾಸ್ತದ ನಂತರ ಮತ್ತು ಸೂರ್ಯೋದಯದ ಮೊದಲು ಮ್ಯಾಜಿಸ್ಟ್ರೇಟ್ ಅನುಮತಿಯಿಲ್ಲದೆ ಮಹಿಳೆಯರನ್ನು ಬಂಧಿಸುವಂತಿಲ್ಲ.',
        'ಮಹಿಳಾ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಯ ಸಮ್ಮುಖದಲ್ಲಿ ಮನೆಯಲ್ಲೇ ಹೇಳಿಕೆ ದಾಖಲಿಸುವ ಹಕ್ಕು.',
        'NALSA ಉಚಿತ ಸಹಾಯವಾಣಿ 15100 ಮೂಲಕ ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲರ ನೆರವು.'
      ]
    }
  ],

  hi: [
    {
      id: 'police',
      title: 'पुलिस मुठभेड़ और गिरफ्तारी सुरक्षा शील्ड',
      subtitle: 'BNSS 2023 धारा 35(3) और अर्नेश कुमार सुप्रीम कोर्ट निर्देशों के तहत सुरक्षा',
      icon: '👮',
      badge: 'BNSS 2023 शील्ड',
      details: [
        '7 साल से कम सजा वाले अपराधों में गिरफ्तारी से पहले धारा 35(3) का लिखित नोटिस अनिवार्य।',
        'अनुच्छेद 20(3) के तहत जबरन बयान न देने और चुप रहने का मौलिक अधिकार।',
        'पूछताछ के दौरान अपनी पसंद के वकील से सलाह लेने का अधिकार (BNSS धारा 38)।',
        'हिरासत में हर 48 घंटे में मेडिकल जांच कराने का अधिकार (BNSS धारा 53)।',
        'कोर्ट वारंट के बिना पुलिस मोबाइल जब्त नहीं कर सकती और न ही पासवर्ड मांग सकती है।'
      ]
    },
    {
      id: 'cyber',
      title: 'साइबर फ्रॉड और डिजिटल अरेस्ट सुरक्षा शील्ड',
      subtitle: 'गोल्डन ऑवर 1930 प्रोटोकॉल और IT नियम 2021',
      icon: '💻',
      badge: 'साइबर सेल 1930 शील्ड',
      details: [
        '60 मिनट के भीतर साइबर फ्रॉड की रिपोर्ट करने पर ठग का बैंक खाता फ्रीज हो जाता है।',
        'डिजिटल अरेस्ट 100% फर्जी घोटाला है। कोई भी सरकारी एजेंसी वीडियो कॉल पर पैसे नहीं मांगती।',
        'निजी फोटो 24 घंटे के भीतर इंटरनेट से हटवाने का कानूनी अधिकार।',
        '3 दिन में रिपोर्ट करने पर अनधिकृत बैंकिंग लेनदेन पर शून्य देनदारी (RBI नियम)।'
      ]
    },
    {
      id: 'consumer',
      title: 'उपभोक्ता और ई-कॉमर्स फ्रॉड सुरक्षा शील्ड',
      subtitle: 'राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 एवं उपभोक्ता संरक्षण अधिनियम 2019',
      icon: '🛍️',
      badge: 'उपभोक्ता अधिकार शील्ड',
      details: [
        'खराब सामान या फर्जी ब्रांडिंग पर पूरा पैसा वापस पाने का कानूनी अधिकार।',
        'ई-कॉमर्स कंपनियां अनुचित रद्दीकरण शुल्क नहीं वसूल सकतीं।',
        'बिना वकील के घर बैठे e-Daakhil पोर्टल पर शिकायत दर्ज करने का अधिकार।',
        'भ्रामक विज्ञापनों और अनुचित व्यापार व्यवहार के खिलाफ सख्त कानूनी जुर्माना।'
      ]
    },
    {
      id: 'women',
      title: 'महिला एवं वरिष्ठ नागरिक सुरक्षा शील्ड',
      subtitle: 'जीरो एफआईआर और सूर्यास्त से सूर्योदय गिरफ्तारी प्रतिबंध',
      icon: '👩',
      badge: 'जीरो एफआईआर शील्ड',
      details: [
        'जीरो एफआईआर नियम: महिलाएं भारत के किसी भी थाने में एफआईआर दर्ज करा सकती हैं।',
        'सूर्यास्त के बाद और सूर्योदय से पहले मजिस्ट्रेट की अनुमति के बिना गिरफ्तारी नहीं हो सकती।',
        'महिला पुलिस अधिकारी की मौजूदगी में घर पर बयान दर्ज कराने का अधिकार।',
        'NALSA हेल्पलाइन 15100 के जरिए मुफ्त सरकारी वकील सहायता।'
      ]
    }
  ]
};

// Multi-Language 6 Emergency Helplines
export const LOCALIZED_HELPLINES = {
  en: [
    { name: "National Emergency Number", number: "112", icon: "🚨", desc: "All-in-one emergency response for Police, Fire, Ambulance" },
    { name: "National Narcotics Helpline (NCB)", number: "1933", icon: "🚫", desc: "Anonymous reporting for illegal drug trafficking, ganja & marijuana peddling" },
    { name: "National Cyber Crime Helpline", number: "1930", icon: "💻", desc: "Immediate reporting for financial cyber fraud & bank account freezing" },
    { name: "National Consumer Helpline", number: "1915", icon: "🛍️", desc: "Grievance reporting for defective products & e-commerce fraud" },
    { name: "NALSA Free Legal Aid Helpline", number: "15100", icon: "⚖️", desc: "Government pro-bono free advocate & legal advice for eligible citizens" },
    { name: "Women Helpline", number: "1091", icon: "👩", desc: "24/7 National helpline for women safety & domestic abuse support" }
  ],
  kn: [
    { name: "ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಂಖ್ಯೆ", number: "112", icon: "🚨", desc: "ಪೋಲೀಸ್, ಅಗ್ನಿಶಾಮಕ, ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗಾಗಿ ಒಟ್ಟು ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಂಖ್ಯೆ" },
    { name: "ರಾಷ್ಟ್ರೀಯ ನಾರ್ಕೋಟಿಕ್ಸ್ ಸಹಾಯವಾಣಿ (NCB)", number: "1933", icon: "🚫", desc: "ಅಕ್ರಮ ಗಾಂಜಾ, ಡ್ರಗ್ಸ್ ಮಾರಾಟದ ವಿರುದ್ಧ ಅನಾಮಧೇಯ ದೂರು ಸಹಾಯವಾಣಿ" },
    { name: "ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ಸಹಾಯವಾಣಿ", number: "1930", icon: "💻", desc: "ಸೈಬರ್ ಹಣಕಾಸು ವಂಚನೆ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆ ತಕ್ಷಣ ಫ್ರೀಜ್ ಮಾಡಲು ಕರೆ ಮಾಡಿ" },
    { name: "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ", number: "1915", icon: "🛍️", desc: "ಆನ್‌ಲೈನ್ ವಂಚನೆ ಮತ್ತು ಹಾಳಾದ ವಸ್ತುಗಳ ವಿರುದ್ಧ ಉಚಿತ ದೂರು ಸಂಖ್ಯೆ" },
    { name: "NALSA ಉಚಿತ ಕಾನೂನು ನೆರವು ಸಹಾಯವಾಣಿ", number: "15100", icon: "⚖️", desc: "ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲರ ಸಲಹೆ ಮತ್ತು ನ್ಯಾಯಾಲಯದ ನೆರವಿಗಾಗಿ ಉಚಿತ ಸಹಾಯವಾಣಿ" },
    { name: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ", number: "1091", icon: "👩", desc: "ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಮತ್ತು ಗೃಹಹಿಂಸೆ ವಿರುದ್ಧ 24/7 ರಾಷ್ಟ್ರೀಯ ಸಹಾಯವಾಣಿ" }
  ],
  hi: [
    { name: "राष्ट्रीय आपातकालीन नंबर", number: "112", icon: "🚨", desc: "पुलिस, अग्निशमन और एम्बुलेंस के लिए 24/7 ऑल-इन-वन आपातकालीन नंबर" },
    { name: "राष्ट्रीय नारकोटिक्स हेल्पलाइन (NCB)", number: "1933", icon: "🚫", desc: "अवैध गांजा और ड्रग्स तस्करी की गुप्त शिकायत के लिए हेल्पलाइन" },
    { name: "राष्ट्रीय साइबर अपराध हेल्पलाइन", number: "1930", icon: "💻", desc: "साइबर वित्तीय धोखाधड़ी और बैंक खाता तुरंत फ्रीज कराने के लिए" },
    { name: "राष्ट्रीय उपभोक्ता हेल्पलाइन", number: "1915", icon: "🛍️", desc: "खराब प्रोडक्ट और ई-कॉमर्स धोखाधड़ी के लिए शिकायत हेल्पलाइन" },
    { name: "NALSA मुफ्त कानूनी सहायता हेल्पलाइन", number: "15100", icon: "⚖️", desc: "पात्र नागरिकों के लिए मुफ्त सरकारी वकील और कानूनी सलाह" },
    { name: "महिला हेल्पलाइन", number: "1091", icon: "👩", desc: "महिला सुरक्षा और घरेलू हिंसा के खिलाफ 24/7 राष्ट्रीय हेल्पलाइन" }
  ]
};

export const EMERGENCY_HELPLINES = LOCALIZED_HELPLINES.en;
export const RIGHTS_60_SEC_CARDS = LOCALIZED_RIGHTS_CARDS.en;

export const LOCALIZED_DRAFT_TEMPLATES = {
  en: [
    {
      id: "tenant-deposit-notice",
      title: "Landlord Demand Notice for Deposit Refund",
      category: "Tenant & Civil",
      fields: [
        { name: "senderName", label: "Your Full Name (Tenant)", placeholder: "e.g. Vikas Gowda" },
        { name: "senderAddress", label: "Your Current Complete Address", placeholder: "e.g. #45, 2nd Main, Indiranagar, Bengaluru - 560038" },
        { name: "landlordName", label: "Landlord Full Name", placeholder: "e.g. Ramesh Kumar" },
        { name: "landlordAddress", label: "Landlord Complete Address", placeholder: "e.g. #102, Palm Meadows, Whitefield, Bengaluru - 560066" },
        { name: "propertyAddress", label: "Rented Property Address", placeholder: "e.g. Flat 302, Green Acres, Indiranagar, Bengaluru" },
        { name: "depositAmount", label: "Security Deposit Amount (₹)", placeholder: "e.g. 1,00,000" },
        { name: "vacateDate", label: "Date Vacated", placeholder: "e.g. 15th July 2026" }
      ],
      generateText: (data) => `FORMAL LEGAL DEMAND NOTICE FOR REFUND OF SECURITY DEPOSIT

FROM:
${data.senderName || "[TENANT FULL NAME]"}
${data.senderAddress || "[TENANT COMPLETE ADDRESS]"}
Date: ${new Date().toLocaleDateString('en-IN')}

TO,
${data.landlordName || "[LANDLORD NAME]"}
${data.landlordAddress || "[LANDLORD COMPLETE ADDRESS]"}

SUB: LEGAL DEMAND NOTICE FOR IMMEDIATE REFUND OF SECURITY DEPOSIT OF ₹${data.depositAmount || "[AMOUNT]"} FOR RENTED PREMISES AT ${data.propertyAddress || "[RENTED PROPERTY ADDRESS]"}.

Sir/Madam,

Under instructions from my client ${data.senderName || "[TENANT NAME]"}, residing at ${data.senderAddress || "[TENANT ADDRESS]"}, I hereby issue this Formal Legal Demand Notice:

1. My client occupied your rented premises located at ${data.propertyAddress || "[RENTED PROPERTY ADDRESS]"} as a tenant and deposited a refundable security deposit of ₹${data.depositAmount || "[AMOUNT]"}.
2. My client duly vacated the premises on ${data.vacateDate || "[VACATE DATE]"} after handing over peaceful possession and clearing all electricity/water bills.
3. Despite multiple verbal and written requests, you have unlawfully withheld the security deposit of ₹${data.depositAmount || "[AMOUNT]"}, which constitutes Criminal Breach of Trust under Section 316 of Bharatiya Nyaya Sanhita (BNS 2023) read with the Rent Control Act.

TAKE NOTICE that you are hereby called upon to refund the entire security deposit of ₹${data.depositAmount || "[AMOUNT]"} to my client's bank account within 15 DAYS of receipt of this notice. Failing compliance, my client shall initiate criminal prosecution under BNS Section 316 and file a summary recovery petition before the Rent Controller at your sole risk and cost.

Yours Faithfully,

${data.senderName || "[TENANT NAME]"}
Address: ${data.senderAddress || "[TENANT ADDRESS]"}`
    }
  ],

  kn: [
    {
      id: "tenant-deposit-notice",
      title: "ಬಾಡಿಗೆ ಡೆಪಾಸಿಟ್ ಮರುಪಾವತಿ ಕಾನೂನು ನೋಟಿಸ್",
      category: "ಬಾಡಿಗೆದಾರರ ಹಕ್ಕುಗಳು",
      fields: [
        { name: "senderName", label: "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು (ಬಾಡಿಗೆದಾರ)", placeholder: "ಉದಾ: ವಿಕಾಸ್ ಗೌಡ" },
        { name: "senderAddress", label: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸಂಪೂರ್ಣ ವಿಳಾಸ", placeholder: "ಉದಾ: #45, 2ನೇ ಮೇನ್, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು - 560038" },
        { name: "landlordName", label: "ಮನೆ ಮಾಲೀಕರ ಪೂರ್ಣ ಹೆಸರು", placeholder: "ಉದಾ: ರಮೇಶ್ ಕುಮಾರ್" },
        { name: "landlordAddress", label: "ಮನೆ ಮಾಲೀಕರ ಸಂಪೂರ್ಣ ವಿಳಾಸ", placeholder: "ಉದಾ: #102, ವೈಟ್‌ಫೀಲ್ಡ್, ಬೆಂಗಳೂರು - 560066" },
        { name: "propertyAddress", label: "ಬಾಡಿಗೆ ಮನೆಯ ವಿಳಾಸ", placeholder: "ಉದಾ: ಫ್ಲಾಟ್ 302, ಗ್ರೀನ್ ಏಕರ್ಸ್, ಇಂದಿರಾನಗರ, ಬೆಂಗಳೂರು" },
        { name: "depositAmount", label: "ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ಮೊತ್ತ (₹)", placeholder: "ಉದಾ: 1,00,000" },
        { name: "vacateDate", label: "ಮನೆ ಖಾಲಿ ಮಾಡಿದ ದಿನಾಂಕ", placeholder: "ಉದಾ: 15 ಜುಲೈ 2026" }
      ],
      generateText: (data) => `ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ಹಣ ಮರುಪಾವತಿಗಾಗಿ ಅಧಿಕೃತ ಕಾನೂನು ಬೇಡಿಕೆ ನೋಟಿಸ್

ಇವರಿಂದ:
${data.senderName || "[ಬಾಡಿಗೆದಾರರ ಪೂರ್ಣ ಹೆಸರು]"}
${data.senderAddress || "[ಬಾಡಿಗೆದಾರರ ಸಂಪೂರ್ಣ ವಿಳಾಸ]"}
ದಿನಾಂಕ: ${new Date().toLocaleDateString('kn-IN')}

ಇವರಿಗೆ,
${data.landlordName || "[ಮನೆ ಮಾಲೀಕರ ಹೆಸರು]"}
${data.landlordAddress || "[ಮನೆ ಮಾಲೀಕರ ವಿಳಾಸ]"}

ವಿಷಯ: ${data.propertyAddress || "[ಬಾಡಿಗೆ ಮನೆಯ ವಿಳಾಸ]"} ಮನೆಯ ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ಮೊತ್ತ ₹${data.depositAmount || "[ಮೊತ್ತ]"} ಅನ್ನು ತಕ್ಷಣವೇ ಮರುಪಾವತಿಸಲು ಕಾನೂನು ಬೇಡಿಕೆ ನೋಟಿಸ್.

ಮಾನ್ಯರೇ,

ನನ್ನ ಕಕ್ಷಿದಾರರಾದ ${data.senderName || "[ಬಾಡಿಗೆದಾರರ ಹೆಸರು]"} ಅವರ ಸೂಚನೆಯಂತೆ ನಾನು ಈ ಕಾನೂನು ಬೇಡಿಕೆ ನೋಟಿಸ್ ಅನ್ನು ನೀಡುತ್ತಿದ್ದೇನೆ:

1. ನನ್ನ ಕಕ್ಷಿದಾರರು ನಿಮ್ಮ ಬಾಡಿಗೆ ಮನೆಗೆ ₹${data.depositAmount || "[ಮೊತ್ತ]"} ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ಪಾವತಿಸಿ ಬಾಡಿಗೆದಾರರಾಗಿ ವಾಸಿಸುತ್ತಿದ್ದರು.
2. ದಿನಾಂಕ ${data.vacateDate || "[ದಿನಾಂಕ]"} ರಂದು ನನ್ನ ಕಕ್ಷಿದಾರರು ಎಲ್ಲಾ ವಿದ್ಯುತ್ ಮತ್ತು ನೀರು ಬಿಲ್‌ಗಳನ್ನು ಪಾವತಿಸಿ ಮನೆಯನ್ನು ಶಾಂತಿಯುತವಾಗಿ ನಿಮಗೆ ಹಸ್ತಾಂತರಿಸಿದ್ದಾರೆ.
3. ಹಲವು ಬಾರಿ ಮೌಖಿಕ ಮತ್ತು ಲಿಖಿತ ವಿನಂತಿಗಳ ಹೊರತಾಗಿಯೂ, ನೀವು ಭದ್ರತಾ ಡೆಪಾಸಿಟ್ ₹${data.depositAmount || "[ಮೊತ್ತ]"} ಅನ್ನು ಅಕ್ರಮವಾಗಿ ತಡೆಹಿಡಿದಿದ್ದೀರಿ. ಇದು ಭಾರತೀಯ ನ್ಯಾಯ ಸಂಹಿತೆ (BNS 2023) ಸೆಕ್ಷನ್ 316 ರ ಅಡಿಯಲ್ಲಿ ಅಪರಾಧವಾಗಿದೆ.

ಆದ್ದರಿಂದ ಈ ನೋಟಿಸ್ ತಲುಪಿದ 15 ದಿನಗಳ ಒಳಗೆ ಪೂರ್ಣ ಡೆಪಾಸಿಟ್ ಮೊತ್ತ ₹${data.depositAmount || "[ಮೊತ್ತ]"} ಅನ್ನು ನನ್ನ ಕಕ್ಷಿದಾರರ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ ಮಾಡಬೇಕು. ತಪ್ಪಿದ್ದಲ್ಲಿ BNS 316 ರ ಅಡಿಯಲ್ಲಿ ಕ್ರಿಮಿನಲ್ ಮೊಕದ್ದಮೆ ಮತ್ತು ಬಾಡಿಗೆ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಕ್ರಿಮಿನಲ್ ದೂರು ದಾಖಲಿಸಲಾಗುವುದು.

ಇಂತಿ,

${data.senderName || "[ಬಾಡಿಗೆದಾರರ ಹೆಸರು]"}
ವಿಳಾಸ: ${data.senderAddress || "[ವಿಳಾಸ]"}`
    }
  ],

  hi: [
    {
      id: "tenant-deposit-notice",
      title: "मकान मालिक सुरक्षा डिपॉजिट रिफंड कानूनी नोटिस",
      category: "किरायेदार अधिकार",
      fields: [
        { name: "senderName", label: "आपका पूरा नाम (किरायेदार)", placeholder: "उदा: विकास गौड़ा" },
        { name: "senderAddress", label: "आपका वर्तमान पूरा पता", placeholder: "उदा: #45, इंदिरानगर, बेंगलुरु - 560038" },
        { name: "landlordName", label: "मकान मालिक का पूरा नाम", placeholder: "उदा: रमेश कुमार" },
        { name: "landlordAddress", label: "मकान मालिक का पूरा पता", placeholder: "उदा: व्हाइटफील्ड, बेंगलुरु - 560066" },
        { name: "propertyAddress", label: "किराये के मकान का पता", placeholder: "उदा: फ्लैट 302, इंदिरानगर, बेंगलुरु" },
        { name: "depositAmount", label: "सुरक्षा डिपॉजिट राशि (₹)", placeholder: "उदा: 1,00,000" },
        { name: "vacateDate", label: "मकान खाली करने की तारीख", placeholder: "उदा: 15 जुलाई 2026" }
      ],
      generateText: (data) => `सुरक्षा डिपॉजिट राशि रिफंड हेतु कानूनी मांग नोटिस

प्रेषक:
${data.senderName || "[किरायेदार का नाम]"}
${data.senderAddress || "[किरायेदार का पता]"}
दिनांक: ${new Date().toLocaleDateString('hi-IN')}

सेवा में,
${data.landlordName || "[मकान मालिक का नाम]"}
${data.landlordAddress || "[मकान मालिक का पता]"}

विषय: किराये के मकान ${data.propertyAddress || "[मकान का पता]"} की सुरक्षा डिपॉजिट राशि ₹${data.depositAmount || "[राशि]"} तुरंत लौटाने हेतु कानूनी नोटिस।

महोदय/महोदया,

मेरे मुवक्किल ${data.senderName || "[किरायेदार का नाम]"} के निर्देशानुसार मैं यह कानूनी मांग नोटिस भेज रहा हूँ:

1. मेरे मुवक्किल आपके किराये के मकान में ₹${data.depositAmount || "[राशि]"} डिपॉजिट देकर रहते थे।
2. दिनांक ${data.vacateDate || "[तारीख]"} को सभी बिजली व पानी बिल चुकाकर मकान खाली कर दिया गया।
3. बार-बार मांगने पर भी आपने ₹${data.depositAmount || "[राशि]"} डिपॉजिट नहीं लौटाया जो BNS 2023 धारा 316 के तहत अपराध है।

नोटिस प्राप्ति के 15 दिनों के भीतर पूरी डिपॉजिट राशि ₹${data.depositAmount || "[राशि]"} मेरे मुवक्किल के बैंक खाते में रिफंड करें अन्यथा रेंट कोर्ट में आपराधिक केस दर्ज किया जाएगा।

भवदीय,

${data.senderName || "[किरायेदार का नाम]"}
पता: ${data.senderAddress || "[पता]"}`
    }
  ]
};

export const LEGAL_DRAFT_TEMPLATES = LOCALIZED_DRAFT_TEMPLATES.en;

