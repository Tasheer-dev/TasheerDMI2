// Legal Affairs Digital Maturity Assessment (DMI) – Full Extended Version (20 Questions)

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["legal_affairs"] = {
  title: "Legal Affairs (Legal & Regulatory) Department Digital Maturity Assessment (DMI)",
  shortcode: "LEGAL_EXT",
  totalQuestions: 20,
  maxScore: 20 * 5,

  sections: [
    { name: "1) Service Catalogue & Request Management", questions: ["Q1", "Q2"] },
    { name: "2) Contract Lifecycle & Compliance Monitoring", questions: ["Q3", "Q4"] },
    { name: "3) Licensing & Regulatory Tracking", questions: ["Q5", "Q6"] },
    { name: "4) Policy Governance & Communication", questions: ["Q7", "Q8"] },
    { name: "5) Workflow Integration & Performance Dashboards", questions: ["Q9", "Q10"] },
    { name: "6) Dispute, Risk, & Awareness Management", questions: ["Q11", "Q12", "Q13"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q14"] },
    { name: "8) Advanced Digital Legal Intelligence & Automation", questions: ["Q15","Q16","Q17","Q18","Q19","Q20"] }
  ],

  questions: [

    // --------------------
    // AREA 1 – Service Catalogue & Request Management
    // --------------------

    {
      id: "Q1", area: "Catalogue", title: "Service Catalogue & Offering Definition",
      text: "Does the Legal & Regulatory Department maintain a formal Service Catalogue outlining the services it provides to other departments?",
      choices: [
        { value: 1, text: "1. No structured service catalogue exists." },
        { value: 2, text: "2. Basic manual service list." },
        { value: 3, text: "3. Documented service catalogue with partial SLAs." },
        { value: 4, text: "4. Comprehensive digital catalogue with ownership and RACI." },
        { value: 5, text: "5. Fully integrated catalogue with live SLA dashboards." }
      ]
    },

    {
      id: "Q2", area: "RequestTracking", title: "Request Tracking & SLA Monitoring",
      text: "How are legal service requests initiated, tracked, and monitored?",
      choices: [
        { value: 1, text: "1. Requests handled by email or verbally." },
        { value: 2, text: "2. Partial logging without SLA visibility." },
        { value: 3, text: "3. Digital workflow tool used for request tracking." },
        { value: 4, text: "4. Automated request management with SLA dashboards." },
        { value: 5, text: "5. AI-enabled system with predictive workload analytics." }
      ]
    },

    // --------------------
    // AREA 2 – Contract Lifecycle Management
    // --------------------

    {
      id: "Q3", area: "CLM", title: "Contract Lifecycle Management (CLM)",
      text: "Are contract drafting, review, and approval processes digitally managed?",
      choices: [
        { value: 1, text: "1. Contracts handled manually or via email." },
        { value: 2, text: "2. Shared drive version storage." },
        { value: 3, text: "3. Basic CLM used for drafting and review." },
        { value: 4, text: "4. Full CLM automation with version control and audit trails." },
        { value: 5, text: "5. Intelligent CLM with e-signatures and ERP integration." }
      ]
    },

    {
      id: "Q4", area: "Compliance", title: "Contract Expiration & Compliance Alerts",
      text: "Are contract expirations, renewals, and compliance obligations digitally monitored?",
      choices: [
        { value: 1, text: "1. Renewals tracked manually." },
        { value: 2, text: "2. Basic manual alerts." },
        { value: 3, text: "3. Automated reminders for core contracts." },
        { value: 4, text: "4. Full compliance dashboard with alerts." },
        { value: 5, text: "5. AI predicting renewals, risks, and obligations." }
      ]
    },

    // --------------------
    // AREA 3 – Licensing & Regulatory Tracking
    // --------------------

    {
      id: "Q5", area: "Licensing", title: "Licensing & Regulatory Registry",
      text: "Is there a digital registry of all licenses & regulatory obligations with automated reminders?",
      choices: [
        { value: 1, text: "1. Manual spreadsheets." },
        { value: 2, text: "2. Partial digital registry." },
        { value: 3, text: "3. Central registry with basic alerts." },
        { value: 4, text: "4. Automated compliance calendar." },
        { value: 5, text: "5. Predictive regulatory dashboard integrated with authority APIs." }
      ]
    },

    {
      id: "Q6", area: "Regulatory", title: "Regulatory Change Tracking",
      text: "Are regulatory changes monitored automatically?",
      choices: [
        { value: 1, text: "1. Manual tracking." },
        { value: 2, text: "2. Periodic manual reviews." },
        { value: 3, text: "3. Digital monitoring tools for selected regulations." },
        { value: 4, text: "4. Fully automated regulatory alerts." },
        { value: 5, text: "5. AI-powered real-time compliance monitoring." }
      ]
    },

    // --------------------
    // AREA 4 – Policy Governance
    // --------------------

    {
      id: "Q7", area: "Policy", title: "Policy Documentation & Governance",
      text: "Are legal policies digitally documented, version-controlled, and approved?",
      choices: [
        { value: 1, text: "1. Policies not formally documented." },
        { value: 2, text: "2. Basic documents in shared folders." },
        { value: 3, text: "3. Approved repository with manual versioning." },
        { value: 4, text: "4. Digital policy management system with workflows." },
        { value: 5, text: "5. Automated governance with dashboards and audit trails." }
      ]
    },

    {
      id: "Q8", area: "PolicyCommunication", title: "Policy Communication & Acknowledgment",
      text: "How are policies communicated and acknowledged?",
      choices: [
        { value: 1, text: "1. Shared by email or informally." },
        { value: 2, text: "2. Manual signature collection." },
        { value: 3, text: "3. Digital portal acknowledgment." },
        { value: 4, text: "4. Automated acknowledgment tracking." },
        { value: 5, text: "5. Integrated policy platform with analytics and campaigns." }
      ]
    },

    // --------------------
    // AREA 5 – Workflow Integration & Dashboards
    // --------------------

    {
      id: "Q9", area: "Workflow", title: "Workflow Integration & Automation",
      text: "Are legal workflows automated & integrated with other departments?",
      choices: [
        { value: 1, text: "1. Manual disconnected workflows." },
        { value: 2, text: "2. Limited digital tools." },
        { value: 3, text: "3. Partial integration with selected systems." },
        { value: 4, text: "4. Fully integrated cross-department workflows." },
        { value: 5, text: "5. AI-driven workflow orchestration." }
      ]
    },

    {
      id: "Q10", area: "KPI", title: "KPI & Performance Dashboards",
      text: "Are KPIs monitored through digital dashboards?",
      choices: [
        { value: 1, text: "1. Metrics tracked manually." },
        { value: 2, text: "2. Excel-based reporting." },
        { value: 3, text: "3. Core KPIs tracked digitally." },
        { value: 4, text: "4. Real-time dashboards." },
        { value: 5, text: "5. Predictive KPI analytics with auto-alerts." }
      ]
    },

    // --------------------
    // AREA 6 – Dispute, Risk, & Awareness Management
    // --------------------

    {
      id: "Q11", area: "Disputes", title: "Dispute & Litigation Management",
      text: "Does Legal maintain a digital dispute/litigation register?",
      choices: [
        { value: 1, text: "1. Manual tracking." },
        { value: 2, text: "2. Basic shared tracker." },
        { value: 3, text: "3. Digital litigation register." },
        { value: 4, text: "4. Full litigation system with notifications." },
        { value: 5, text: "5. AI-driven case prediction platform." }
      ]
    },

    {
      id: "Q12", area: "LegalRisk", title: "Legal Risk Management",
      text: "Are legal risks digitally tracked and linked to the enterprise risk register?",
      choices: [
        { value: 1, text: "1. Informal risk identification." },
        { value: 2, text: "2. Spreadsheet-based risk logs." },
        { value: 3, text: "3. Digital legal risk register." },
        { value: 4, text: "4. Integrated risk management platform." },
        { value: 5, text: "5. Predictive risk analytics and automated mitigation." }
      ]
    },

    {
      id: "Q13", area: "Training", title: "Compliance Awareness & Training",
      text: "Is compliance training delivered digitally and tracked?",
      choices: [
        { value: 1, text: "1. Manual sessions; no tracking." },
        { value: 2, text: "2. Occasional training; no analytics." },
        { value: 3, text: "3. Digital training calendar with attendance." },
        { value: 4, text: "4. Fully automated LMS with scoring." },
        { value: 5, text: "5. AI-based adaptive learning with impact analytics." }
      ]
    },

    // --------------------
    // AREA 7 – Knowledge Management
    // --------------------

    {
      id: "Q14", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a centralized digital knowledge repository for templates & legal resources?",
      choices: [
        { value: 1, text: "1. Documents scattered." },
        { value: 2, text: "2. Basic shared drive." },
        { value: 3, text: "3. Central repository with basic access control." },
        { value: 4, text: "4. Fully digital repository with version tracking." },
        { value: 5, text: "5. Intelligent knowledge hub with AI search." }
      ]
    },

    // --------------------
    // NEW AREA 8 – 6 NEW QUESTIONS
    // --------------------

    {
      id: "Q15", area: "LegalAI", title: "AI-Assisted Contract Review & Risk Scoring",
      text: "Does the department use AI tools for contract risk scoring or clause extraction?",
      choices: [
        { value: 1, text: "1. No AI usage." },
        { value: 2, text: "2. Basic OCR/search tools." },
        { value: 3, text: "3. AI clause extraction for some contracts." },
        { value: 4, text: "4. AI risk scoring for all contracts." },
        { value: 5, text: "5. Full AI contract intelligence with automated redlines." }
      ]
    },

    {
      id: "Q16", area: "LegalAnalytics", title: "Legal Analytics & Decision Support",
      text: "How well is analytics used to support legal decision-making?",
      choices: [
        { value: 1, text: "1. No analytics." },
        { value: 2, text: "2. Manual reports." },
        { value: 3, text: "3. Standard dashboards." },
        { value: 4, text: "4. Automated legal analytics." },
        { value: 5, text: "5. Predictive analytics for forecasting & decisions." }
      ]
    },

    {
      id: "Q17", area: "Ediscovery", title: "Digital Evidence & E-Discovery Tools",
      text: "Does Legal use e-discovery tools for evidence tagging and investigation?",
      choices: [
        { value: 1, text: "1. Manual evidence management." },
        { value: 2, text: "2. Basic digital storage." },
        { value: 3, text: "3. Structured e-discovery tools." },
        { value: 4, text: "4. Automated evidence workflows." },
        { value: 5, text: "5. AI-based e-discovery with fraud detection." }
      ]
    },

    {
      id: "Q18", area: "DigitalSignatures", title: "Digital Signatures & Secure Authorization",
      text: "To what extent are digital signatures used across legal processes?",
      choices: [
        { value: 1, text: "1. Rarely used." },
        { value: 2, text: "2. Used for some documents." },
        { value: 3, text: "3. Standard digital signature solution." },
        { value: 4, text: "4. Fully automated signature workflows." },
        { value: 5, text: "5. Integrated authorization ecosystem across all systems." }
      ]
    },

    {
      id: "Q19", area: "LegalIntegration", title: "Integration with Corporate Systems",
      text: "Are legal systems integrated with ERP, HR, Finance, or GRC systems?",
      choices: [
        { value: 1, text: "1. No integration." },
        { value: 2, text: "2. Limited manual data transfer." },
        { value: 3, text: "3. Standard API integrations." },
        { value: 4, text: "4. Automated two-way integrations." },
        { value: 5, text: "5. Full enterprise-wide integration with risk mapping." }
      ]
    },

    {
      id: "Q20", area: "LegalInnovation", title: "Digital Innovation & Continuous Improvement",
      text: "How actively does Legal adopt new digital technologies & improvements?",
      choices: [
        { value: 1, text: "1. No innovation activities." },
        { value: 2, text: "2. Occasional pilots without follow-through." },
        { value: 3, text: "3. Regular evaluation of new tools." },
        { value: 4, text: "4. Formal innovation roadmap." },
        { value: 5, text: "5. Ongoing legal innovation culture." }
      ]
    }

  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Legal processes are manual and reactive. No digital systems for case, contract, or compliance tracking. Documentation is scattered and non-standardized." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some digital documentation and contract tracking exist. Compliance logs and policies are partially automated. Limited integration with business systems." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Legal processes are standardized and supported by digital tools (e.g., CLM, case tracker). Policies and compliance registers are version-controlled and routinely reviewed." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Legal workflows are integrated with ERP and business systems. Dashboards track KPIs, risks, and renewals. Automated alerts ensure proactive compliance and reporting." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Legal & Regulatory ecosystem is fully digital, intelligent, and predictive. AI-driven contract analytics, compliance forecasting, and automatic policy updates. Cross-functional integration ensures continuous improvement and proactive risk mitigation." }
  ]
};
