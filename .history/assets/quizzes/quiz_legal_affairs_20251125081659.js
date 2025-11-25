// quizzes/quiz_legal Affairs.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["legal_affairs"] = {
  title: "legal Affairs (Legal & Regulatory) Department Digital Maturity Assessment (DMI)",
  shortcode: "PROC",
  totalQuestions: 14,
  maxScore: 14 * 5,
  sections: [
    { name: "1) Service Catalogue & Request Management", questions: ["Q1", "Q2"] },
    { name: "2) Contract Lifecycle & Compliance Monitoring", questions: ["Q3", "Q4"] },
    { name: "3) Licensing & Regulatory Tracking", questions: ["Q5", "Q6"] },
    { name: "4) Policy Governance & Communication", questions: ["Q7", "Q8"] },
    { name: "5) Workflow Integration & Performance Dashboards", questions: ["Q9", "Q10"] },
    { name: "6) Dispute, Risk, & Awareness Management", questions: ["Q11", "Q12", "Q13"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q14"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue", title: "Service Catalogue & Offering Definition",
      text: "Does the Legal & Regulatory Department maintain a formal Service Catalogue outlining the services it provides to other departments (e.g., contract review, legal advisory, regulatory filing, compliance consultation, dispute resolution, and policy drafting)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured legal service catalogue exists." },
        { value: 2, text: "2. Basic service list maintained manually in Excel or Word." },
        { value: 3, text: "3. Documented legal service catalogue with partial coverage of activities and SLAs." },
        { value: 4, text: "4. Comprehensive digital service catalogue published internally with ownership and RACI." },
        { value: 5, text: "5. Fully integrated legal service catalogue linked to ERP/portal with live SLA dashboards." }
      ]
    },
    {
      id: "Q2", area: "RequestTracking", title: "Request Tracking & SLA Monitoring",
      text: "How are legal service requests initiated, tracked, and closed through digital systems (e.g., legal request portal, ERP module, or workflow tool), and how are response SLAs monitored and reported?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; requests handled via email or verbal communication." },
        { value: 2, text: "2. Partial logging of requests without SLA visibility." },
        { value: 3, text: "3. Digital workflow tool used for tracking legal requests and responses." },
        { value: 4, text: "4. Fully automated request management system with SLA monitoring dashboards." },
        { value: 5, text: "5. AI-enabled legal request platform with predictive workload analytics and performance alerts." }
      ]
    },
    {
      id: "Q3", area: "CLM", title: "Contract Lifecycle Management (CLM)",
      text: "Are contract drafting, review, and approval processes digitally managed through a centralized Contract Lifecycle Management (CLM) platform with version control, automated approvals, and audit trails?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; contracts managed manually or via email." },
        { value: 2, text: "2. Shared drives or spreadsheets used for version storage." },
        { value: 3, text: "3. Basic CLM tool in place for drafting and review." },
        { value: 4, text: "4. Fully automated CLM with audit trails, version control, and approval routing." },
        { value: 5, text: "5. Intelligent CLM integrated with ERP and e-signature tools for seamless contract governance." }
      ]
    },
    {
      id: "Q4", area: "Compliance", title: "Contract Expiration & Compliance Alerts",
      text: "Are contract expirations, renewals, and compliance obligations automatically monitored and alerted through digital systems?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; renewals tracked manually." },
        { value: 2, text: "2. Partial automation with manual alerts or reminders." },
        { value: 3, text: "3. Automated renewal reminders for core contracts." },
        { value: 4, text: "4. Fully automated compliance and renewal dashboard with notifications." },
        { value: 5, text: "5. AI-enabled contract analytics system predicting renewals, risks, and upcoming obligations." }
      ]
    },
    {
      id: "Q5", area: "Licensing", title: "Licensing & Regulatory Registry",
      text: "Is there a digital registry of all licenses, permits, and regulatory obligations required by Tasheer and its branches (e.g., visa centers, service hubs), with automated renewal reminders?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; licenses managed manually or in separate spreadsheets." },
        { value: 2, text: "2. Partial registry covering limited licenses or branches." },
        { value: 3, text: "3. Centralized digital licensing register with basic renewal alerts." },
        { value: 4, text: "4. Fully automated compliance calendar integrated with renewal workflows." },
        { value: 5, text: "5. Predictive regulatory management dashboard linked to authority APIs and auto-renewal workflows." }
      ]
    },
    {
      id: "Q6", area: "Regulatory", title: "Regulatory Change Tracking",
      text: "Are regulatory changes tracked automatically (e.g., NCA, Ministry, GDPR equivalents) with alerts or notifications sent to relevant departments for compliance alignment?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; regulatory updates tracked manually." },
        { value: 2, text: "2. Periodic manual monitoring of regulatory changes." },
        { value: 3, text: "3. Digital monitoring of selected regulations via subscribed tools." },
        { value: 4, text: "4. Fully automated tracking and distribution system for regulatory updates." },
        { value: 5, text: "5. AI-enabled compliance intelligence platform with real-time regulatory mapping and alerts." }
      ]
    },
    {
      id: "Q7", area: "Policy", title: "Policy Documentation & Governance",
      text: "Are legal and regulatory policies (e.g., data protection, anti-bribery, contract policy) digitally documented, version-controlled, and approved by management?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies not documented formally." },
        { value: 2, text: "2. Basic documentation stored in shared folders." },
        { value: 3, text: "3. Approved policy repository with manual versioning." },
        { value: 4, text: "4. Fully digital policy management system with approval workflows." },
        { value: 5, text: "5. Automated policy governance platform with audit trails and compliance dashboards." }
      ]
    },
    {
      id: "Q8", area: "PolicyCommunication", title: "Policy Communication & Acknowledgment",
      text: "How are policies communicated and acknowledged across departments (e.g., through policy portal, automated acknowledgment system, or e-learning)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies shared via email or informal channels." },
        { value: 2, text: "2. Manual acknowledgment using signatures or Excel lists." },
        { value: 3, text: "3. Digital acknowledgment through intranet or SharePoint portal." },
        { value: 4, text: "4. Automated acknowledgment and tracking system with compliance reports." },
        { value: 5, text: "5. Integrated policy communication portal with reminders, analytics, and awareness campaigns." }
      ]
    },
    {
      id: "Q9", area: "Workflow", title: "Workflow Integration & Automation",
      text: "Are legal workflows and case management systems automated and integrated with other business functions (e.g., HR, Procurement, GRC, Finance) to ensure visibility and traceability?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows are manual and disconnected." },
        { value: 2, text: "2. Limited digital tools used independently." },
        { value: 3, text: "3. Partial integration with select business systems." },
        { value: 4, text: "4. Fully integrated digital legal workflow across all departments." },
        { value: 5, text: "5. Unified enterprise-wide platform with AI-based workflow orchestration and data analytics." }
      ]
    },
    {
      id: "Q10", area: "KPI", title: "KPI & Performance Dashboards",
      text: "Are KPIs and performance metrics (e.g., contract turnaround time, case resolution rate, regulatory compliance rate) monitored through digital dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; metrics tracked manually or occasionally." },
        { value: 2, text: "2. Periodic reporting through spreadsheets." },
        { value: 3, text: "3. Core KPIs tracked via digital dashboard." },
        { value: 4, text: "4. Real-time dashboard integrating multiple legal performance indicators." },
        { value: 5, text: "5. Predictive KPI analytics with auto-alerts and trend forecasting." }
      ]
    },
    {
      id: "Q11", area: "Disputes", title: "Dispute & Litigation Management",
      text: "Does the Legal Department maintain a digital dispute and litigation register tracking case status, hearing schedules, and outcomes?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; case records tracked manually." },
        { value: 2, text: "2. Shared Excel or basic tracker used for dispute updates." },
        { value: 3, text: "3. Digital case register maintained with periodic updates." },
        { value: 4, text: "4. Fully automated litigation management platform with notifications and audit trails." },
        { value: 5, text: "5. AI-driven case management system providing predictive outcomes and risk scoring." }
      ]
    },
    {
      id: "Q12", area: "LegalRisk", title: "Legal Risk Management",
      text: "Are legal risks identified, assessed, and monitored through digital tools integrated with the organization’s enterprise risk register?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; risks identified informally." },
        { value: 2, text: "2. Legal risk tracking in spreadsheets without linkage to enterprise system." },
        { value: 3, text: "3. Digital legal risk register maintained for core functions." },
        { value: 4, text: "4. Fully integrated risk system connecting Legal and GRC modules." },
        { value: 5, text: "5. Predictive risk analytics platform with automated mitigation and compliance scoring." }
      ]
    },
    {
      id: "Q13", area: "Training", title: "Compliance Awareness & Training",
      text: "Does the Legal Department deliver compliance and regulatory awareness sessions to other departments via digital platforms (e.g., e-learning, webinars, or compliance portal), and track completion digitally?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; awareness sessions delivered manually." },
        { value: 2, text: "2. Occasional sessions without tracking or analytics." },
        { value: 3, text: "3. Digital training calendar maintained with completion records." },
        { value: 4, text: "4. Fully automated LMS with attendance, scoring, and feedback tracking." },
        { value: 5, text: "5. AI-enhanced compliance training system with adaptive learning and impact analytics." }
      ]
    },
    {
      id: "Q14", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a centralized digital knowledge repository containing legal templates, regulatory guidelines, policy drafts, and contract samples with access controls and version management?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documents scattered across systems." },
        { value: 2, text: "2. Shared drive repository with basic structure." },
        { value: 3, text: "3. Centralized repository with limited access control." },
        { value: 4, text: "4. Fully digital knowledge base with version tracking and access logs." },
        { value: 5, text: "5. Intelligent legal knowledge hub with AI search, metadata tagging, and update automation." }
      ]
    }



        // Existing Q1–Q14 retained (placeholder comment)
    // ... (You will insert your original 14 questions here)

    // NEW AREA 8 – 6 New Questions
    {
      id: "Q15", area: "LegalAI",
      title: "AI-Assisted Contract Review & Risk Scoring",
      text: "Does the Legal Department use AI tools for contract scanning, clause extraction, risk scoring, or automated recommendations?",
      choices: [
        { value: 1, text: "1. No AI usage; contract review fully manual." },
        { value: 2, text: "2. Basic OCR or keyword search tools used." },
        { value: 3, text: "3. AI-assisted clause extraction for selected contract types." },
        { value: 4, text: "4. AI risk scoring used for all contract reviews with approval workflows." },
        { value: 5, text: "5. Fully intelligent contract analytics with automated redlines and negotiation suggestions." }
      ]
    },

    {
      id: "Q16", area: "LegalAnalytics",
      title: "Legal Analytics & Decision Support",
      text: "How well does the Legal Department use analytics to predict workload, case outcomes, turnaround times, and department performance?",
      choices: [
        { value: 1, text: "1. No analytics used; decisions are intuition-based." },
        { value: 2, text: "2. Basic manual reports created occasionally." },
        { value: 3, text: "3. Standard dashboards for tracking caseloads and performance." },
        { value: 4, text: "4. Automated analytics for forecasting and risk scoring." },
        { value: 5, text: "5. Advanced predictive analytics and legal intelligence used for strategic decisions." }
      ]
    },

    {
      id: "Q17", area: "Ediscovery",
      title: "Digital Evidence & E‑Discovery Tools",
      text: "Does the Legal Department use digital tools for e‑discovery, evidence management, and investigation documentation?",
      choices: [
        { value: 1, text: "1. Manual evidence management." },
        { value: 2, text: "2. Basic digital storage (folders, drives)." },
        { value: 3, text: "3. Structured e‑discovery tool with tagging and indexing." },
        { value: 4, text: "4. Automated evidence processing and secure chain-of-custody logs." },
        { value: 5, text: "5. Fully integrated e‑discovery platform with AI search and fraud-detection analytics." }
      ]
    },

    {
      id: "Q18", area: "DigitalSignatures",
      title: "Digital Signatures & Secure Authorization",
      text: "How widely are digital signatures and secure approval workflows used for contracts, policies, and legal documents?",
      choices: [
        { value: 1, text: "1. Manual signatures dominate." },
        { value: 2, text: "2. Some documents use digital signatures." },
        { value: 3, text: "3. Standard digital signature solution used across most legal processes." },
        { value: 4, text: "4. Fully automated signature workflows with audit trails." },
        { value: 5, text: "5. End-to-end digital authorization ecosystem integrated with CLM and ERP." }
      ]
    },

    {
      id: "Q19", area: "LegalIntegration",
      title: "Integration with Corporate Systems (ERP, HR, Finance, GRC)",
      text: "Are legal systems integrated with other core business systems for seamless data sharing, compliance validation, and workflow automation?",
      choices: [
        { value: 1, text: "1. No integration; systems operate in silos." },
        { value: 2, text: "2. Limited manual file exchanges." },
        { value: 3, text: "3. Standard API integration with key systems." },
        { value: 4, text: "4. Automated two‑way integrations with data validation." },
        { value: 5, text: "5. Full enterprise-wide integration enabling proactive risk mapping and automated compliance checks." }
      ]
    },

    {
      id: "Q20", area: "LegalInnovation",
      title: "Digital Innovation & Continuous Improvement in Legal Operations",
      text: "How actively does the Legal Department promote digital innovation, new legal technologies, and continuous improvement?",
      choices: [
        { value: 1, text: "1. No innovation activities." },
        { value: 2, text: "2. Occasional pilots without scaling." },
        { value: 3, text: "3. Regular evaluation of new legal tools." },
        { value: 4, text: "4. Formal innovation roadmap and improvement tracking." },
        { value: 5, text: "5. Continuous legal innovation culture with measurable digital transformation impact." }
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
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Legal processes are manual and reactive. No digital systems for case, contract, or compliance tracking. Documentation is scattered and non-standardized." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some digital documentation and contract tracking exist. Compliance logs and policies are partially automated. Limited integration with business systems." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Legal processes are standardized and supported by digital tools (e.g., CLM, case tracker). Policies and compliance registers are version-controlled and routinely reviewed." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Legal workflows are integrated with ERP and business systems. Dashboards track KPIs, risks, and renewals. Automated alerts ensure proactive compliance and reporting." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Legal & Regulatory ecosystem is fully digital, intelligent, and predictive. AI-driven contract analytics, compliance forecasting, and automatic policy updates. Cross-functional integration ensures continuous improvement and proactive risk mitigation." }
  ]
};
