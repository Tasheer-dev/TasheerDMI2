// quizzes/quiz_procurement.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["procurement"] = {
  title: "Procurement Department Digital Maturity Assessment (DMI)",
  shortcode: "PROC",
  totalQuestions: 14,
  maxScore: 14 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Process Automation & System Integration", questions: ["Q3", "Q4"] },
    { name: "3) Workflow, Monitoring & Dashboards", questions: ["Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8"] },
    { name: "5) Supplier & Contract Management", questions: ["Q9", "Q10"] },
    { name: "6) Audit, Risk & Compliance", questions: ["Q11", "Q12"] },
    { name: "7) Awareness, Training & Knowledge Repository", questions: ["Q13", "Q14"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Does the Procurement Department have a clear list (Service Catalogue) showing all the services it provides — such as vendor registration, sourcing, tenders, purchase orders, contracts, and supplier evaluation?",
      choices: [
        { value: 1, text: "1. Working on a service catalogue." },
        { value: 2, text: "2. Services are listed informally or partially documented." },
        { value: 3, text: "3. A basic service catalogue exists but not updated or published." },
        { value: 4, text: "4. A formal, published service catalogue exists and is used by departments." },
        { value: 5, text: "5. Service catalogue is digital, integrated with ERP/ticketing, and regularly reviewed." }
      ]
    },
    {
      id: "Q2", area: "Requests & SLAs", title: "Service Request & SLA Tracking",
      text: "How are procurement services requested, tracked, and reported, and how are SLAs monitored?",
      choices: [
        { value: 1, text: "1. Manual email or paper-based requests, no SLA tracking." },
        { value: 2, text: "2. Basic tracking through Excel or manual logs." },
        { value: 3, text: "3. Requests handled via ERP or portal, limited SLA visibility." },
        { value: 4, text: "4. Fully digital workflow with SLA dashboards and reports." },
        { value: 5, text: "5. AI-driven ticketing and predictive SLA performance analytics." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Process Automation",
      text: "Which procurement steps (PR→PO→GR→Invoice) are automated, and what percent are digital vs. manual?",
      choices: [
        { value: 1, text: "1. Entirely manual process." },
        { value: 2, text: "2. Some steps (e.g., PR→PO) automated; rest manual." },
        { value: 3, text: "3. Most steps automated through ERP, occasional manual workarounds." },
        { value: 4, text: "4. Fully automated procurement cycle through ERP/e-Procurement tools." },
        { value: 5, text: "5. End-to-end automation with AI validation, exception handling, and RPA bots." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "System Integration",
      text: "Are procurement systems integrated with Finance, HR, GRC, or Asset Management systems?",
      choices: [
        { value: 1, text: "1. Manual system integration." },
        { value: 2, text: "2. Limited data exchange via manual uploads or reports." },
        { value: 3, text: "3. Partial integration between Procurement and Finance only." },
        { value: 4, text: "4. Full system integration with Finance, HR, GRC, etc." },
        { value: 5, text: "5. Seamless, API-driven integration with real-time data sharing and analytics." }
      ]
    },
    {
      id: "Q5", area: "Workflow", title: "Digital Workflow & Alerts",
      text: "Are digital workflows and alerts used for approvals and compliance?",
      choices: [
        { value: 1, text: "1. Manual approval hierarchy without system support." },
        { value: 2, text: "2. Email-based or Excel tracking approvals." },
        { value: 3, text: "3. Digital approvals via ERP with limited alerts." },
        { value: 4, text: "4. Automated approval workflows with alerts and escalations." },
        { value: 5, text: "5. Predictive alerts and AI-based anomaly detection for compliance." }
      ]
    },
    {
      id: "Q6", area: "KPIs", title: "KPI Monitoring",
      text: "Are procurement KPIs monitored through dashboards or analytics tools?",
      choices: [
        { value: 1, text: "1. KPIs not defined or tracked." },
        { value: 2, text: "2. KPIs tracked manually through reports." },
        { value: 3, text: "3. KPIs defined and tracked periodically in ERP." },
        { value: 4, text: "4. Real-time dashboards monitor key procurement KPIs." },
        { value: 5, text: "5. Advanced analytics and predictive KPI trend monitoring." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Procedure Management",
      text: "Are procurement policies, guidelines, and approval matrices digitally managed and reviewed?",
      choices: [
        { value: 1, text: "1. Policies are paper-based or outdated." },
        { value: 2, text: "2. Some digital copies exist, but no version control." },
        { value: 3, text: "3. Policies stored digitally with partial version control." },
        { value: 4, text: "4. Policies fully digital, version-controlled, and reviewed regularly." },
        { value: 5, text: "5. Policies integrated with governance portals and auto-notifications for reviews." }
      ]
    },
    {
      id: "Q8", area: "Policy Communication", title: "Policy Communication & Enforcement",
      text: "How are procurement policies shared and enforced?",
      choices: [
        { value: 1, text: "1. Shared informally via email or verbal communication." },
        { value: 2, text: "2. Uploaded once to shared drive, no tracking." },
        { value: 3, text: "3. Shared through portal or email with basic acknowledgment." },
        { value: 4, text: "4. Portal-based communication with automated acknowledgment tracking." },
        { value: 5, text: "5. Automated enforcement linked to system workflows and user awareness analytics." }
      ]
    },
    {
      id: "Q9", area: "Supplier", title: "Supplier Database",
      text: "Is there a centralized digital supplier database with evaluation and risk scores?",
      choices: [
        { value: 1, text: "1. Supplier data kept in spreadsheets or files." },
        { value: 2, text: "2. Basic supplier list in ERP without scoring." },
        { value: 3, text: "3. Centralized supplier database with basic evaluation." },
        { value: 4, text: "4. Digital supplier profiles with ratings, certifications, and history." },
        { value: 5, text: "5. AI-based supplier evaluation, real-time risk scoring, and performance dashboards." }
      ]
    },
    {
      id: "Q10", area: "Contracts", title: "Contract Management",
      text: "Are supplier contracts stored and monitored digitally?",
      choices: [
        { value: 1, text: "1. Paper contracts stored manually." },
        { value: 2, text: "2. Scanned contracts stored without search or alerts." },
        { value: 3, text: "3. Digital repository with limited search capability." },
        { value: 4, text: "4. Fully digital contract management with auto-renewal alerts." },
        { value: 5, text: "5. Intelligent contract lifecycle management with AI-based compliance and reminders." }
      ]
    },
    {
      id: "Q11", area: "Audit", title: "Audit & Compliance Workflow",
      text: "Are audits and compliance checks managed digitally with follow-up actions?",
      choices: [
        { value: 1, text: "1. Manual audit process using paper or Excel." },
        { value: 2, text: "2. Audits recorded digitally but follow-ups are manual." },
        { value: 3, text: "3. Audit workflows tracked through basic system." },
        { value: 4, text: "4. Full digital workflow with CAPA tracking and dashboards." },
        { value: 5, text: "5. AI-driven audit management with predictive non-compliance detection." }
      ]
    },
    {
      id: "Q12", area: "Risk", title: "Risk Register",
      text: "Is there a digital risk register for supplier/procurement risks with alerts and mitigation tracking?",
      choices: [
        { value: 1, text: "1. Manual and not formal risk register." },
        { value: 2, text: "2. Manual register in Excel." },
        { value: 3, text: "3. Digital register without alerts." },
        { value: 4, text: "4. Integrated risk register with alerts and tracking." },
        { value: 5, text: "5. AI-enabled risk register with predictive risk scoring and dashboards." }
      ]
    },
    {
      id: "Q13", area: "Training", title: "Training & Awareness",
      text: "Does the department deliver and track digital procurement trainings (policies, ethics, anti-fraud)?",
      choices: [
        { value: 1, text: "1. No structured training program." },
        { value: 2, text: "2. Occasional sessions without tracking." },
        { value: 3, text: "3. Regular training with attendance tracking." },
        { value: 4, text: "4. LMS-based digital training with reporting and feedback." },
        { value: 5, text: "5. Continuous learning system with AI-driven recommendations and analytics." }
      ]
    },
    {
      id: "Q14", area: "Knowledge", title: "Knowledge Repository",
      text: "Is there a centralized digital repository for templates, SOPs, and vendor forms?",
      choices: [
        { value: 1, text: "1. Files scattered in local drives." },
        { value: 2, text: "2. Shared folder without version control." },
        { value: 3, text: "3. Central repository with limited access control." },
        { value: 4, text: "4. Version-controlled digital repository with access tracking." },
        { value: 5, text: "5. Intelligent knowledge portal with search, tagging, and update automation." }
      ]
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
[
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual analytics, undocumented processes, reactive reporting." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation, partial automation, limited governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in pipelines; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented; strong automation; integrated workflows; compliance tracked." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive/self-healing pipelines, end-to-end automation, governed data ecosystem, continuous improvement with feedback loops." }
  ]
};


  
};
