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



    
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Legal processes are manual and reactive. No digital systems for case, contract, or compliance tracking. Documentation is scattered and non-standardized." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some digital documentation and contract tracking exist. Compliance logs and policies are partially automated. Limited integration with business systems." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Legal processes are standardized and supported by digital tools (e.g., CLM, case tracker). Policies and compliance registers are version-controlled and routinely reviewed." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Legal workflows are integrated with ERP and business systems. Dashboards track KPIs, risks, and renewals. Automated alerts ensure proactive compliance and reporting." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Legal & Regulatory ecosystem is fully digital, intelligent, and predictive. AI-driven contract analytics, compliance forecasting, and automatic policy updates. Cross-functional integration ensures continuous improvement and proactive risk mitigation." }
  ]
};
