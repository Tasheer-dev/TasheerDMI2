// quizzes/quiz_procurement.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["procurement"] = {
  title: "Procurement Digital Maturity Assessment (DMI)",
  shortcode: "PROC",
  totalQuestions: 14,
  maxScore: 14 * 5,
  sections: [
    { name: "1) Service Catalogue & Requests", questions: ["Q1", "Q2"] },
    { name: "2) Automation, Integration & Operations", questions: ["Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q10"] },
    { name: "2) Automation, Integration & Operations", questions: ["Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q10"] },
    { name: "2) Automation, Integration & Operations", questions: ["Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q10"] },

    { name: "3) GRC, Risk, Audit & Knowledge", questions: ["Q9", "Q11", "Q12", "Q13", "Q14"] },

  ],
  questions: [
    { id: "Q1", area: "Service Catalogue", title: "Service Catalogue & Offering Definition",
      text: "Does the Procurement Department have a clear, digital service catalogue (vendor registration, sourcing, tenders, contracts)?",
      choices: [
        { value: 1, text: "1. Working on a service catalogue." },
        { value: 2, text: "2. Services partially documented / informal." },
        { value: 3, text: "3. Basic catalogue exists but not published/updated." },
        { value: 4, text: "4. Formal, published catalogue used by departments." },
        { value: 5, text: "5. Digital, integrated with ERP/ticketing, reviewed regularly." }
      ]
    },
    { id: "Q2", area: "Service Catalogue", title: "Service Request & SLA Tracking",
      text: "How are procurement services requested, tracked, and reported by internal departments, and how are SLAs monitored?",
      choices: [
        { value: 1, text: "1. Manual email / no SLA tracking." },
        { value: 2, text: "2. Excel/manual logs." },
        { value: 3, text: "3. Via ERP / portal, limited SLA visibility." },
        { value: 4, text: "4. Digital workflow with SLA dashboards." },
        { value: 5, text: "5. AI-driven ticketing & SLA prediction." }
      ]
    },
    { id: "Q3", area: "Process Automation & System Integration", title: "Process Automation",
      text: "Which procurement processes (PR→PO→GR→Invoice) are automated, and what % is digital?",
      choices: [
        { value: 1, text: "1. Entirely manual." },
        { value: 2, text: "2. Some steps automated only." },
        { value: 3, text: "3. Most via ERP, few manual workarounds." },
        { value: 4, text: "4. Fully automated procurement cycle." },
        { value: 5, text: "5. End-to-end + AI validation / RPA." }
      ]
    },
    { id: "Q4", area: "Process Automation & System Integration", title: "System Integration",
      text: "Are procurement systems integrated with Finance, HR, GRC, or Asset Management?",
      choices: [
        { value: 1, text: "1. No integration." },
        { value: 2, text: "2. Manual data transfer." },
        { value: 3, text: "3. Basic one-way integration (Finance)." },
        { value: 4, text: "4. Bi-directional integration with key systems." },
        { value: 5, text: "5. Real-time integration across all core systems." }
      ]
    },
    { id: "Q5", area: "Data & Analytics", title: "Spend Analytics",
      text: "Is there an automated system for analyzing spend data?",
      choices: [
        { value: 1, text: "1. Manual Excel reporting." },
        { value: 2, text: "2. Basic ERP reports, manual cleanup." },
        { value: 3, text: "3. Dedicated spend cube, basic visibility." },
        { value: 4, text: "4. Advanced dashboards & opportunity identification." },
        { value: 5, text: "5. AI-driven predictive spend analysis." }
      ]
    },
    { id: "Q6", area: "Sourcing & Contract Management", title: "E-Sourcing & Tendering",
      text: "How are sourcing/tendering activities managed and tracked?",
      choices: [
        { value: 1, text: "1. Paper-based." },
        { value: 2, text: "2. Email/shared drive." },
        { value: 3, text: "3. E-sourcing tool, basic bid collection." },
        { value: 4, text: "4. Digital platform, automated bid analysis." },
        { value: 5, text: "5. Digital + AI-driven supplier selection / real-time negotiation." }
      ]
    },
    { id: "Q7", area: "Sourcing & Contract Management", title: "Contract Management",
      text: "How are contracts stored, versioned, and renewed?",
      choices: [
        { value: 1, text: "1. Shared folders, no tracking." },
        { value: 2, text: "2. Central repository, manual versioning." },
        { value: 3, text: "3. CLM used for basic storage & access control." },
        { value: 4, text: "4. Digital CLM with obligation alerts." },
        { value: 5, text: "5. CLM + AI risk scoring + automated renewals." }
      ]
    },
    { id: "Q8", area: "Supplier Management", title: "Supplier Relationship Management (SRM)",
      text: "How is supplier onboarding/performance/compliance managed?",
      choices: [
        { value: 1, text: "1. Manual in Excel." },
        { value: 2, text: "2. Vendor master in ERP, but no performance tracking." },
        { value: 3, text: "3. Digital portal, basic performance." },
        { value: 4, text: "4. SRM with real-time dashboards." },
        { value: 5, text: "5. SRM + AI-driven risk + automated onboarding/offboarding." }
      ]
    },
    { id: "Q9", area: "GRC & Risk", title: "Policy & Compliance Management",
      text: "Are procurement policies, ethics, anti-fraud digitally managed?",
      choices: [
        { value: 1, text: "1. Paper/shared drive only." },
        { value: 2, text: "2. Digital, but manual compliance checks." },
        { value: 3, text: "3. Compliance checks in workflows." },
        { value: 4, text: "4. Digital GRC with automated enforcement." },
        { value: 5, text: "5. Real-time, continuous monitoring + alerts." }
      ]
    },
    { id: "Q10", area: "Data & Analytics", title: "Data Quality & Governance",
      text: "How is supplier/material/contract data quality governed?",
      choices: [
        { value: 1, text: "1. No formal checks." },
        { value: 2, text: "2. Periodic manual cleanup." },
        { value: 3, text: "3. Basic validation rules in ERP." },
        { value: 4, text: "4. Automated validation in workflows + data governance." },
        { value: 5, text: "5. Continuous monitoring + predictive data quality alerts." }
      ]
    },
    { id: "Q11", area: "GRC & Risk", title: "Cybersecurity & Data Protection",
      text: "Are procurement systems protected per corporate standard?",
      choices: [
        { value: 1, text: "1. Basic / generic protection." },
        { value: 2, text: "2. Corporate standard, manual backup." },
        { value: 3, text: "3. Regular VA / hardening." },
        { value: 4, text: "4. Advanced monitoring, automated access controls." },
        { value: 5, text: "5. AI-enhanced security, behavioral analytics." }
      ]
    },
    { id: "Q12", area: "GRC & Risk", title: "Audit Management",
      text: "How are internal/external audits tracked and closed?",
      choices: [
        { value: 1, text: "1. Manual / Excel." },
        { value: 2, text: "2. Recorded digitally, follow-up manual." },
        { value: 3, text: "3. Tracked via simple system." },
        { value: 4, text: "4. Full digital CAPA with dashboards." },
        { value: 5, text: "5. AI-driven non-compliance detection." }
      ]
    },
    { id: "Q13", area: "GRC & Risk", title: "Risk Register",
      text: "Do you have digital risk register for supplier/procurement risks?",
      choices: [
        { value: 1, text: "1. None." },
        { value: 2, text: "2. Excel-based." },
        { value: 3, text: "3. Digital, but no alerts." },
        { value: 4, text: "4. Integrated with alerts & tracking." },
        { value: 5, text: "5. AI-enabled predictive risk scoring." }
      ]
    },
    { id: "Q14", area: "Tools & Training", title: "Knowledge Repository",
      text: "Is there a centralized digital repository for SOPs, templates, vendor forms?",
      choices: [
        { value: 1, text: "1. Scattered in local drives." },
        { value: 2, text: "2. Shared folder, no versioning." },
        { value: 3, text: "3. Central repository, limited access control." },
        { value: 4, text: "4. Version-controlled repository with access tracking." },
        { value: 5, text: "5. Intelligent knowledge portal with search and auto-update." }
      ]
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
