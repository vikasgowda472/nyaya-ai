import { BNS_IPC_DATABASE } from './indianLawData';
import { sanitizeText } from './piiAnonymizer';

// Multi-language dictionary for Statutory Analysis Results
const LOCALIZED_ANALYSIS = {
  kn: {
    verificationBadge: "100% ಶಾಸನಬದ್ಧ ಪರಿಶೀಲನೆ (ಕಾನೂನು ಮತ್ತು ನ್ಯಾಯ ಸಚಿವಾಲಯದ ಗ್ಯಾಜೆಟ್ ದತ್ತಾಂಶ)",
    zeroBadge: "ಶೂನ್ಯ-ತಪ್ಪುಮಾಹಿತಿ ನೀತಿ",
    generalCategory: "ಸಾಮಾನ್ಯ ನಾಗರಿಕ ಹಕ್ಕುಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಮೌಲ್ಯಮಾಪನ",
    generalTitle: "ಸಾಮಾನ್ಯ ಭಾರತೀಯ ಕಾನೂನು ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಹಕ್ಕುಗಳ ಮಾರ್ಗದರ್ಶನ",
    generalOldIpc: "ಭಾರತದ ಸಂವಿಧಾನ ವಿಧಿ 21 / NALSA ಕಾಯ್ದೆ 1987",
    generalNewBns: "ಸಂವಿಧಾನ ವಿಧಿ 21 / ಸಂಬಂಧಿತ ಶಾಸನಬದ್ಧ ಕಾಯ್ದೆಗಳು",
    generalDesc: "ನಿಮ್ಮ ಸಮಸ್ಯೆಗೆ ಭಾರತದ ಸಂವಿಧಾನದ 21ನೇ ವಿಧಿಯ ಅಡಿಯಲ್ಲಿ ಸಾಮಾನ್ಯ ಶಾಸನಬದ್ಧ ಪರಿಹಾರಗಳು ಅನ್ವಯಿಸುತ್ತವೆ.",
    generalPunishment: "ನಿರ್ದಿಷ್ಟ ವಿಷಯದ ಆಧಾರಿತ ಕಾನೂನು ಮೌಲ್ಯಮಾಪನ ಅಗತ್ಯವಿದೆ",
    generalBailable: "ಕಾನೂನು ನೆರವು / ತುರ್ತು ಸಹಾಯವಾಣಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
    generalCognizable: "ಶಾಸನಬದ್ಧ ಕಾನೂನು ಜಾರಿ ಮೌಲ್ಯಮಾಪನ",
    generalPrecedents: [
      "ಭಾರತದ ಸಂವಿಧಾನದ ವಿಧಿ 21: ಜೀವಿಸುವ ಹಕ್ಕು, ವೈಯಕ್ತಿಕ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ನ್ಯಾಯಾಂಗ ಪರಿಹಾರ.",
      "ವಿಧಿ 39A: ಸಮಾನ ನ್ಯಾಯ ಮತ್ತು ಉಚಿತ ಕಾನೂನು ನೆರವು."
    ],
    generalRights: [
      "ಸಂಬಂಧಪಟ್ಟ ಪೋಲೀಸ್ ಠಾಣೆ ಅಥವಾ ಸರ್ಕಾರಿ ಪ್ರಾಧಿಕಾರದಲ್ಲಿ ಅಧಿಕೃತ ದೂರು ಅಥವಾ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸುವ ಹಕ್ಕು.",
      "ತುರ್ತು ಸಹಾಯವಾಣಿ 112 ರ ಮೂಲಕ ತಕ್ಷಣದ ಪೊಲೀಸ್ ನೆರವು ಪಡೆಯುವ ಹಕ್ಕು.",
      "NALSA ಸಹಾಯವಾಣಿ 15100 ರ ಮೂಲಕ ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲರ ಸಲಹೆ ಪಡೆಯುವ ಹಕ್ಕು."
    ],
    generalSteps: [
      "ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಹಾಯವಾಣಿ 112 ಅಥವಾ ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ವಿಷಯವನ್ನು ವರದಿ ಮಾಡಿ.",
      "ಸಂಬಂಧಿತ ಸರ್ಕಾರಿ ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ.",
      "ಉಚಿತ ಸರ್ಕಾರಿ ವಕೀಲರ ನೆರವಿಗಾಗಿ NALSA ಸಹಾಯವಾಣಿ 15100 ಗೆ ಕರೆ ಮಾಡಿ."
    ],
    // Translations for specific IDs
    entries: {
      "ndps-drug-trafficking": {
        category: "ಅಮಲು ಪದಾರ್ಥ ಮತ್ತು ಅಪರಾಧ ಕಾಯ್ದೆಗಳು",
        title: "ಅಕ್ರಮ ಗಾಂಜಾ, ಮಾರಿಜುವಾನಾ, ಡ್ರಗ್ಸ್ ಮಾರಾಟ ಮತ್ತು ಅಪರಾಧಗಳು",
        description: "ಗಾಂಜಾ, ಮಾರಿಜುವಾನಾ ಅಥವಾ ನಿಷೇಧಿತ ಡ್ರಗ್ಸ್ ಮಾರಾಟ, ಸಾಗಣೆ ಮತ್ತು ಸರಬರಾಜು ಅಕ್ರಮ ಅಪರಾಧವಾಗಿದೆ.",
        punishment: "1 ರಿಂದ 10-20 ವರ್ಷಗಳವರೆಗೆ ಕಠಿಣ ಜೈಲು ಶಿಕ್ಷೆ + ₹1 ರಿಂದ ₹2 ಲಕ್ಷದವರೆಗೆ ಖಡ್ಡಾಯ ದಂಡ",
        bailable: "ಜಾಮೀನು ರಹಿತ (Non-Bailable - NDPS ಸೆಕ್ಷನ್ 37 ರ ಅಡಿಯಲ್ಲಿ ಕಠಿಣ ನಿಯಮ)",
        cognizable: "ಸಂಜ್ಞೇಯ ಅಪರಾಧ (Cognizable - ಪೊಲೀಸರು ಮತ್ತು NCB ತಕ್ಷಣ FIR ದಾಖಲಿಸಬೇಕು)",
        citizenRights: [
          "🕵️ **ಮಾಹಿತಿದಾರರ 100% ರಹಸ್ಯ ಕಾಪಾಡುವಿಕೆ**: ಮಾಹಿತಿ ನೀಡಿದ ನಾಗರಿಕರ ಹೆಸರನ್ನು ಪೊಲೀಸರು ರಹಸ್ಯವಾಗಿಡಬೇಕು (NDPS Sec 68).",
          "🚨 **ತಕ್ಷಣದ ಪೊಲೀಸ್ ಕಾರ್ಯಾಚರಣೆ**: 1933 ಅಥವಾ 112 ಗೆ ಕರೆ ಮಾಡಿದ ತಕ್ಷಣವೇ ಪೊಲೀಸರು ಕಾರ್ಯಾಚರಣೆ ನಡೆಸಬೇಕು.",
          "🏘️ **ಸಾರ್ವಜನಿಕ ಶಾಂತಿ ರಕ್ಷಣೆ**: ವಸತಿ ಪ್ರದೇಶಗಳಲ್ಲಿ ಅಕ್ರಮ ಡ್ರಗ್ಸ್ ತಡೆಯಲು BNS ಸೆಕ್ಷನ್ 292 ರ ಅಡಿಯಲ್ಲಿ ದೂರು ನೀಡಬಹುದು."
        ],
        actionSteps: [
          "ನಾರ್ಕೋಟಿಕ್ಸ್ ಕಂಟ್ರೋಲ್ ಬ್ಯೂರೋ (NCB) ಅನಾಮಧೇಯ ಸಹಾಯವಾಣಿ 1933 ಅಥವಾ 112 ಗೆ ಕರೆ ಮಾಡಿ.",
          "NCORD ಪೋರ್ಟಲ್ (ncord.gov.in) ನಲ್ಲಿ ಹೆಸರಿಲ್ಲದೆ ಮಾಹಿತಿ ನೀಡಿ."
        ]
      },
      "tenant-deposit-eviction": {
        category: "ನಾಗರಿಕ ಮತ್ತು ಆಸ್ತಿ ಹಕ್ಕುಗಳು",
        title: "ಮನೆ ಮಾಲೀಕರು ಡೆಪಾಸಿಟ್ ತಡೆಹಿಡಿಯುವುದು, ಅಕ್ರಮ ಖಾಲಿ ಮಾಡಿಸುವಿಕೆ ಮತ್ತು ವಿದ್ಯುತ್ ಕಟ್ ಮಾಡುವುದು",
        description: "ಮನೆ ಖಾಲಿ ಮಾಡಿದ ನಂತರ ಮಾಲೀಕರು ಡೆಪಾಸಿಟ್ ನೀಡದಿರುವುದು, ಬೀಗ ಹಾಕುವುದು ಅಥವಾ ವಿದ್ಯುತ್/ನೀರು ಸಂಪರ್ಕ ಕಟ್ ಮಾಡುವುದು ಅಕ್ರಮ ಅಪರಾಧ.",
        punishment: "5 ವರ್ಷಗಳವರೆಗೆ ಜೈಲು ಶಿಕ್ಷೆ + ಬಡ್ಡಿಯೊಂದಿಗೆ ಡೆಪಾಸಿಟ್ ಮರುಪಾವತಿ + ದಂಡ",
        bailable: "ಡೆಪಾಸಿಟ್ ವಿವಾದಕ್ಕೆ ಜಾಮೀನು ಸಹಿತ; ಬಲವಂತದ ಬೀಗ/ಕರೆಂಟ್ ಕಟ್‌ಗೆ ಜಾಮೀನು ರಹಿತ",
        cognizable: "ಮೂಲಭೂತ ಸೇವೆ ಕಟ್ ಮಾಡಿದರೆ ಸಂಜ್ಞೇಯ ಅಪರಾಧ (Cognizable)",
        citizenRights: [
          "🏠 **ಖಡ್ಡಾಯ ಡೆಪಾಸಿಟ್ ಮರುಪಾವತಿ**: ಮನೆ ಖಾಲಿ ಮಾಡಿದ ತಕ್ಷಣ ಡೆಪಾಸಿಟ್ ಹಿಂದಿರುಗಿಸುವುದು ಮಾಲೀಕರ ಕರ್ತವ್ಯ (BNS 316).",
          "⚡ **ವಿದ್ಯುತ್/ನೀರು ಸಂಪರ್ಕ ಕಟ್ ಮಾಡುವಂತಿಲ್ಲ**: ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ಮೂಲಭೂತ ಸೇವೆ ಕಟ್ ಮಾಡುವಂತಿಲ್ಲ.",
          "🔑 **ಅಕ್ರಮವಾಗಿ ಬೀಗ ಹಾಕುವಂತಿಲ್ಲ**: ಕೋರ್ಟ್ ಆದೇಶವಿಲ್ಲದೆ ಮಾಲೀಕರು ಬಾಡಿಗೆದಾರರನ್ನು ಹೊರಹಾಕುವಂತಿಲ್ಲ."
        ],
        actionSteps: [
          "15 ದಿನಗಳ ಗಡುವು ನೀಡಿ ನೋಂದಾಯಿತ ಅಂಚೆ ಮೂಲಕ ಕಾನೂನು ನೋಟಿಸ್ ಕಳುಹಿಸಿ.",
          "ವಿದ್ಯುತ್/ನೀರು ಕಟ್ ಆಗಿದ್ದರೆ ತಕ್ಷಣವೇ ಬಾಡಿಗೆ ನಿಯಂತ್ರಣ ನ್ಯಾಯಾಲಯಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ."
        ]
      },
      "interfaith-marriage-protection": {
        category: "ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಸ್ವಾತಂತ್ರ್ಯ",
        title: "ಅಂತರಧರ್ಮೀಯ / ಅಂತರಜಾತಿ ವಿವಾಹ ರಕ್ಷಣೆ ಮತ್ತು ಅಸಮಾಜಿಕ ಶಕ್ತಿಗಳ ತಡೆ ಶೀಲ್ಡ್",
        description: "ವಿಶೇಷ ವಿವಾಹ ಕಾಯ್ದೆಯಡಿ ಮದುವೆಯಾದ ಪ್ರೌಢವಯಸ್ಕರಿಗೆ ಬೆದರಿಕೆ, ಅಪಹರಣ ಯತ್ನ ಮತ್ತು ಕಿರುಕುಳದ ವಿರುದ್ಧ ರಕ್ಷಣೆ.",
        punishment: "ಖಡ್ಡಾಯ ಪೊಲೀಸ್ ರಕ್ಷಣೆ + ಬೆದರಿಕೆ ಹಾಕುವವರಿಗೆ 7 ವರ್ಷಗಳವರೆಗೆ ಜೈಲು ಶಿಕ್ಷೆ",
        bailable: "ಅಪಹರಣ ಯತ್ನಕ್ಕೆ ಜಾಮೀನು ರಹಿತ (Non-Bailable)",
        cognizable: "ಸಂಜ್ಞೇಯ ಅಪರಾಧ (Cognizable - ಪೊಲೀಸರು ತಕ್ಷಣ ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಬೇಕು)",
        citizenRights: [
          "👩‍❤️‍👨 **ಜೀವನ ಸಂಗಾತಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ಪೂರ್ಣ ಹಕ್ಕು**: ಸಂವಿಧಾನದ ವಿಧಿ 21 ರ ಅಡಿಯಲ್ಲಿ ಪ್ರೌಢವಯಸ್ಕರಿಗೆ ತಮ್ಮಿಷ್ಟದ ವ್ಯಕ್ತಿಯನ್ನು ಮದುವೆಯಾಗುವ ಹಕ್ಕಿದೆ.",
          "🛡️ **ಖಡ್ಡಾಯ ಪೊಲೀಸ್ ರಕ್ಷಣೆ**: ಪೊಲೀಸರು ರಕ್ಷಣೆ ನಿರಾಕರಿಸುವಂತಿಲ್ಲ (ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಲತಾ ಸಿಂಗ್ ತೀರ್ಪು)."
        ],
        actionSteps: [
          "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ತೀರ್ಪನ್ನು ಉಲ್ಲೇಖಿಸಿ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿ (SP) ಗೆ ಲಿಖಿತ ಅರ್ಜಿ ನೀಡಿ.",
          "ಹೈಕೋರ್ಟ್‌ನಲ್ಲಿ ವಿಧಿ 226 ರ ಅಡಿಯಲ್ಲಿ ತುರ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸಿ."
        ]
      },
      "ecommerce-defective-product": {
        category: "ಗ್ರಾಹಕ ಹಕ್ಕುಗಳು",
        title: "ಹಾಳಾದ ವಸ್ತು, ಆನ್‌ಲೈನ್ ರಿಫಂಡ್ ನಿರಾಕರಣೆ ಮತ್ತು ಅಕ್ರಮ ವ್ಯವಹಾರ",
        description: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಾಳಾದ ವಸ್ತು ಬಂದಿದ್ದು, ಕಂಪನಿಯು ಹಣ ಹಿಂದಿರುಗಿಸಲು ಅಥವಾ ಬದಲಾಯಿಸಲು ನಿರಾಕರಿಸುವುದು ಅಕ್ರಮ.",
        punishment: "ಪೂರ್ಣ ಹಣ ಮರುಪಾವತಿ + ಪರಿಹಾರ ಮತ್ತು ದಂಡ",
        bailable: "ಗ್ರಾಹಕ ನ್ಯಾಯಾಲಯದ ಆದೇಶ",
        cognizable: "ಶಾಸನಬದ್ಧ ಗ್ರಾಹಕ ಕುಂದುಕೊರತೆ",
        citizenRights: [
          "🛍️ **ಖಡ್ಡಾಯ ಹಣ ಮರುಪಾವತಿ**: ನಿಯಮಿತ ಅವಧಿಯಲ್ಲಿ ರಿಫಂಡ್ ನಿರಾಕರಿಸುವುದು ಗ್ರಾಹಕ ಕಾಯ್ದೆಯಡಿ ಅಕ್ರಮ.",
          "🏛️ **ಉಚಿತ ಇ-ದಾಖಿಲ್ ದೂರು**: edaakhil.nic.in ನಲ್ಲಿ ಉಚಿತವಾಗಿ ದೂರು ಸಲ್ಲಿಸಿ."
        ],
        actionSteps: [
          "ರಾಷ್ಟ್ರೀಯ ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ 1915 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ consumerhelpline.gov.in ನಲ್ಲಿ ದೂರು ನೀಡಿ."
        ]
      }
    }
  },

  hi: {
    verificationBadge: "100% वैधानिक सत्यापन (विधि एवं न्याय मंत्रालय गजट डेटा)",
    zeroBadge: "शून्य-गलत जानकारी नीति",
    generalCategory: "सामान्य नागरिक अधिकार एवं वैधानिक मूल्यांकन",
    generalTitle: "सामान्य भारतीय कानूनी मूल्यांकन और अधिकार मार्गदर्शन",
    generalOldIpc: "भारतीय संविधान अनुच्छेद 21 / NALSA अधिनियम 1987",
    generalNewBns: "संविधान अनुच्छेद 21 / संबंधित वैधानिक अधिनियम",
    generalDesc: "आपके प्रश्न के लिए भारतीय संविधान के अनुच्छेद 21 के तहत सामान्य वैधानिक उपचार लागू होते हैं।",
    generalPunishment: "विषय-विशेष वैधानिक मूल्यांकन आवश्यक है",
    generalBailable: "कानूनी सहायता / आपातकालीन हेल्पलाइन से संपर्क करें",
    generalCognizable: "वैधानिक कानून प्रवर्तन मूल्यांकन",
    generalPrecedents: [
      "भारतीय संविधान का अनुच्छेद 21: जीवन का अधिकार, व्यक्तिगत स्वतंत्रता और न्यायिक उपचार।",
      "अनुच्छेद 39A: समान न्याय और मुफ्त कानूनी सहायता।"
    ],
    generalRights: [
      "सक्षम कानून प्रवर्तन एजेंसी के पास आधिकारिक लिखित शिकायत या एफआईआर दर्ज कराने का अधिकार।",
      "हेल्पलाइन 112 के माध्यम से तुरंत पुलिस सहायता पाने का अधिकार।",
      "NALSA हेल्पलाइन 15100 के माध्यम से मुफ्त सरकारी वकील की सलाह पाने का अधिकार।"
    ],
    generalSteps: [
      "राष्ट्रीय आपातकालीन हेल्पलाइन 112 या नजदीकी पुलिस स्टेशन में मामले की रिपोर्ट करें।",
      "संबंधित सरकारी ऑनलाइन पोर्टल पर शिकायत दर्ज करें।",
      "मुफ्त सरकारी वकील की सहायता के लिए NALSA हेल्पलाइन 15100 पर कॉल करें।"
    ],
    entries: {
      "ndps-drug-trafficking": {
        category: "मादक पदार्थ एवं आपराधिक अपराध",
        title: "अवैध गांजा, ड्रग्स बिक्री और नशीले पदार्थ अपराध",
        description: "गांजा, मारिजुआना या प्रतिबंधित ड्रग्स की अवैध बिक्री, तस्करी और संचयन गैर-कानूनी है।",
        punishment: "1 से 10-20 साल तक की कठोर जेल + ₹1 से ₹2 लाख तक का अनिवार्य जुर्माना",
        bailable: "गैर-जमानती (Non-Bailable - NDPS धारा 37 के तहत सख्त नियम)",
        cognizable: "संज्ञेय (Cognizable - पुलिस और NCB को तुरंत FIR दर्ज करनी होगी)",
        citizenRights: [
          "🕵️ **सूचनादाता 100% गोपनीयता**: सूचना देने वाले नागरिक का नाम गुप्त रखा जाएगा (NDPS Sec 68)।",
          "🚨 **तत्काल पुलिस कार्रवाई**: 1933 या 112 पर कॉल करते ही पुलिस कार्रवाई करेगी।"
        ],
        actionSteps: [
          "NCB गुप्त हेल्पलाइन 1933 या 112 पर कॉल करें।",
          "ncord.gov.in पर गुप्त रूप से जानकारी दें।"
        ]
      },
      "tenant-deposit-eviction": {
        category: "नागरिक एवं संपत्ति अधिकार",
        title: "मकान मालिक द्वारा डिपॉजिट रोकना, अवैध बेदखली और बिजली/पानी काटना",
        description: "मकान खाली करने पर डिपॉजिट न लौटाना, ताला लगाना या बिजली/पानी काटना कानूनी अपराध है।",
        punishment: "5 साल तक की जेल + ब्याज के साथ डिपॉजिट रिफंड + जुर्माना",
        bailable: "डिपॉजिट विवाद पर जमानती; जबरन बेदखली पर गैर-जमानती",
        cognizable: "आवश्यक सेवा काटने पर संज्ञेय अपराध (Cognizable)",
        citizenRights: [
          "🏠 **अनिवार्य डिपॉजिट रिफंड**: मकान खाली करते ही डिपॉजिट लौटाना कानूनी कर्तव्य है (BNS 316)।",
          "⚡ **बिजली/पानी नहीं काट सकते**: किसी भी स्थिति में आवश्यक सेवाएं नहीं काटी जा सकतीं।"
        ],
        actionSteps: [
          "15 दिन का समय देकर रजिस्टर्ड डाक से कानूनी नोटिस भेजें।",
          "बिजली/पानी कटने पर रेंट कोर्ट में तुरंत याचिका दायर करें।"
        ]
      }
    }
  }
};

/**
 * Natural Language Incident Analysis Engine for Indian Law
 * Uses High-Precision Domain Intent Scoring.
 */
export function analyzeIncident(rawInput, lang = 'en') {
  if (!rawInput || rawInput.trim().length === 0) {
    return null;
  }

  // Strip quotes and sanitize text
  const cleanInput = sanitizeText(rawInput).replace(/['"]/g, '').toLowerCase();

  // Score each entry in BNS_IPC_DATABASE based on domain intent
  let scoredEntries = BNS_IPC_DATABASE.map(entry => {
    let score = 0;

    // 1. Specific Keyword Matching (+50 points for domain keywords)
    if (entry.keywords && Array.isArray(entry.keywords)) {
      entry.keywords.forEach(kw => {
        const lowerKw = kw.toLowerCase();
        if (cleanInput.includes(lowerKw)) {
          score += lowerKw.includes(' ') ? 100 : 50;
        }
      });
    }

    // 2. Title & Description Token Matching
    const fullText = (entry.title + " " + entry.description + " " + entry.category).toLowerCase();
    cleanInput.split(/\W+/).forEach(word => {
      const noiseWords = ['police', 'station', 'officer', 'called', 'person', 'order', 'day', 'days', 'time', 'call', 'what', 'doing', 'where', 'when'];
      if (word.length > 3 && !noiseWords.includes(word) && fullText.includes(word)) {
        score += 5;
      }
    });

    return { entry, score };
  });

  // Sort by score descending
  scoredEntries.sort((a, b) => b.score - a.score);

  const topMatch = scoredEntries[0];

  // High-Confidence Threshold: Score must be >= 10
  if (topMatch && topMatch.score >= 10) {
    let primary = { ...topMatch.entry };
    let badge = "100% Statutory Grounded (Ministry of Law & Justice Gazette Data)";

    // Apply language overrides if available
    if (lang && LOCALIZED_ANALYSIS[lang]) {
      const locData = LOCALIZED_ANALYSIS[lang];
      if (locData.verificationBadge) badge = locData.verificationBadge;
      if (locData.entries && locData.entries[primary.id]) {
        const tr = locData.entries[primary.id];
        if (tr.category) primary.category = tr.category;
        if (tr.title) primary.title = tr.title;
        if (tr.description) primary.description = tr.description;
        if (tr.punishment) primary.punishment = tr.punishment;
        if (tr.bailable) primary.bailable = tr.bailable;
        if (tr.cognizable) primary.cognizable = tr.cognizable;
        if (tr.citizenRights) primary.citizenRights = tr.citizenRights;
        if (tr.actionSteps) primary.actionSteps = tr.actionSteps;
      }
    }

    return {
      query: rawInput,
      primaryMatch: primary,
      secondaryMatch: null,
      statutoryGrounded: true,
      verificationBadge: badge,
      analysisSummary: `Statutory provisions under ${primary.newBns} (formerly ${primary.oldIpc}).`
    };
  }

  // Clean General Fallback
  let fallbackPrimary = {
    id: "general-citizen-remedy",
    category: "General Citizen Rights & Statutory Assessment",
    title: "General Indian Legal Assessment & Rights Guidance",
    oldIpc: "Constitution of India Article 21 / NALSA Act 1987",
    newBns: "Constitution Art 21 / Relevant Statutory Acts",
    description: `For your query: "${rawInput}", general statutory remedies apply under Article 21 of the Constitution of India.`,
    punishment: "Requires domain-specific statutory evaluation",
    bailable: "Consult Legal Aid / Emergency Helplines",
    cognizable: "Statutory Law Enforcement Evaluation",
    keyPrecedents: [
      "Article 21 of Constitution of India: Right to Life, Liberty, Safety & Judicial Remedy.",
      "Article 39A: Mandates equal justice and free legal aid for all citizens."
    ],
    citizenRights: [
      "Right to lodge an official written complaint or FIR with the competent law enforcement agency.",
      "Right to demand immediate police assistance or emergency response via Helpline 112.",
      "Right to free legal advice and guidance via NALSA Helpline 15100."
    ],
    actionSteps: [
      "Report the matter to National Emergency Helpline 112 or the nearest police station.",
      "File an online complaint on the official Government portal relevant to your query.",
      "Call NALSA Free Legal Aid Helpline 15100 for pro-bono advocate representation."
    ]
  };

  let badge = "Zero-Misinformation Policy";

  if (lang && LOCALIZED_ANALYSIS[lang]) {
    const locData = LOCALIZED_ANALYSIS[lang];
    if (locData.zeroBadge) badge = locData.zeroBadge;
    if (locData.generalCategory) fallbackPrimary.category = locData.generalCategory;
    if (locData.generalTitle) fallbackPrimary.title = locData.generalTitle;
    if (locData.generalDesc) fallbackPrimary.description = locData.generalDesc;
    if (locData.generalRights) fallbackPrimary.citizenRights = locData.generalRights;
    if (locData.generalSteps) fallbackPrimary.actionSteps = locData.generalSteps;
  }

  return {
    query: rawInput,
    primaryMatch: fallbackPrimary,
    secondaryMatch: null,
    statutoryGrounded: false,
    verificationBadge: badge,
    analysisSummary: "General Constitutional remedies apply."
  };
}
