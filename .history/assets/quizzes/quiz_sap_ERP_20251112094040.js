// quizzes/quiz_erp.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["sap_ERP"] = {
  title: "ERP (SAP) Department Digital Maturity Assessment (DMI)",
  shortcode: "ERP",
  totalQuestions: 20,
  maxScore: 20 * 5,
  sections: [
    { name: "1) Service Catalogue & ERP Scope Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Incident & Service Request Management", questions: ["Q4", "Q5", "Q6"] },
    { name: "3) Enhancements, Change Management & Releases", questions: ["Q7", "Q8", "Q9"] },
    { name: "4) System Monitoring & Performance Management", questions: ["Q10", "Q11", "Q12"] },
    { name: "5) Technical Administration & Security", questions: ["Q13", "Q14", "Q15"] },
    { name: "6) Integration & Data Quality / Master Data", questions: ["Q16", "Q17"] },
    { name: "7) User Experience, Training & Adoption", questions: ["Q18", "Q19"] },
    { name: "8) Governance, Planning & Continuous Improvement", questions: ["Q20"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue",
      title: "ERP Service Catalogue",
      text: "To what extent does the ERP team maintain a centralized, up-to-date catalogue of SAP services (modules, functions, and support scope) with owners and SLAs?",
      Evidence: "Published ERP service catalogue, ITSM/portal page, ownership matrix, SLA documents.",
      choices: [
        { value: 1, text: "1. No formal catalogue; services are ad-hoc and undocumented." },
        { value: 2, text: "2. Basic list exists (Excel/SharePoint) but incomplete or outdated." },
        { value: 3, text: "3. Documented catalogue with owners and partial SLAs for core services." },
        { value: 4, text: "4. Digital catalogue in ITSM/portal with SLA visibility and regular reviews." },
        { value: 5, text: "5. Dynamic catalogue integrated with ITSM; automated SLA tracking and ownership matrix." }
      ]
    },
    {
      id: "Q2", area: "Service Catalogue",
      title: "Roles, Responsibilities & Ownership",
      text: "How clearly defined and communicated are roles and responsibilities across functional, technical, basis, and security teams?",
      Evidence: "RACI matrix, org chart, role descriptions, onboarding handbook.",
      choices: [
        { value: 1, text: "1. Responsibilities unclear; work depends on individuals." },
        { value: 2, text: "2. Partial role clarity documented for some areas." },
        { value: 3, text: "3. Roles and ownership documented and shared internally." },
        { value: 4, text: "4. RACI established across functions and used operationally." },
        { value: 5, text: "5. Role model continuously optimized; responsibilities linked to KPIs and SLAs." }
      ]
    },
    {
      id: "Q3", area: "Service Catalogue",
      title: "Standardized Request Intake Channels",
      text: "Are service intake channels (portal, ITSM, email-to-ticket) standardized and adopted by all business units?",
      Evidence: "ITSM configurations, service portal screenshots, intake SOP.",
      choices: [
        { value: 1, text: "1. No standard intake; requests scattered (email/phone/chats)." },
        { value: 2, text: "2. Basic intake defined but adoption is inconsistent." },
        { value: 3, text: "3. Standard portal/ITSM used by most departments." },
        { value: 4, text: "4. All requests via portal/ITSM with routing and prioritization rules." },
        { value: 5, text: "5. End-to-end digital intake with automation, templates, and business self-service." }
      ]
    },
    {
      id: "Q4", area: "Incident & Requests",
      title: "Incident Logging, Prioritization & Assignment",
      text: "How structured and automated is the workflow for logging, prioritizing, assigning, and resolving SAP incidents?",
      Evidence: "ITSM workflows, prioritization matrix, assignment rules, MTTR reports.",
      choices: [
        { value: 1, text: "1. Ad-hoc logging; no standard prioritization or routing." },
        { value: 2, text: "2. Basic ticketing; manual prioritization and assignment." },
        { value: 3, text: "3. Defined workflow with categories, SLAs, and assignment groups." },
        { value: 4, text: "4. Automated routing, SLA timers, and escalation rules." },
        { value: 5, text: "5. AI-assisted triage with predictive prioritization and auto-remediation where possible." }
      ]
    },
    {
      id: "Q5", area: "Incident & Requests",
      title: "SLA Compliance & Reporting",
      text: "Do you measure, track, and report SLA performance for incident response and resolution across modules?",
      Evidence: "SLA dashboards, ITSM analytics, monthly service reports.",
      choices: [
        { value: 1, text: "1. No SLA measurement or reporting." },
        { value: 2, text: "2. SLAs defined but not consistently tracked." },
        { value: 3, text: "3. Regular SLA tracking and monthly reporting to stakeholders." },
        { value: 4, text: "4. Automated SLA dashboards with trend analysis and action plans." },
        { value: 5, text: "5. Predictive SLA forecasting with continuous service improvement initiatives." }
      ]
    },
    {
      id: "Q6", area: "Incident & Requests",
      title: "Root Cause Analysis & Problem Management",
      text: "How effectively are recurring incidents analyzed and prevented through structured Problem Management?",
      Evidence: "RCA templates, KEDB, problem records, prevention action logs.",
      choices: [
        { value: 1, text: "1. Issues fixed repeatedly without structured analysis." },
        { value: 2, text: "2. RCA performed informally for critical cases only." },
        { value: 3, text: "3. Formal Problem Management with RCA and action tracking." },
        { value: 4, text: "4. KEDB and knowledge reuse reduce recurrence measurably." },
        { value: 5, text: "5. Proactive analytics predict problems; prevention embedded in release cycles." }
      ]
    },
    {
      id: "Q7", area: "Enhancements & Changes",
      title: "Enhancement Request Workflow",
      text: "Is there a standardized workflow for capturing, evaluating, prioritizing, and approving SAP enhancement requests from business units?",
      Evidence: "Enhancement intake forms, steering committee minutes, prioritization model.",
      choices: [
        { value: 1, text: "1. No standard process; changes raised informally." },
        { value: 2, text: "2. Basic intake; prioritization inconsistent." },
        { value: 3, text: "3. Defined workflow with business justification and approvals." },
        { value: 4, text: "4. Portfolio-managed backlog with value, effort, and risk scoring." },
        { value: 5, text: "5. Data-driven prioritization with benefits realization tracking post-go-live." }
      ]
    },
    {
      id: "Q8", area: "Enhancements & Changes",
      title: "Transport, Release & Deployment Control",
      text: "How controlled and automated is the SAP transport and release process across DEV → QA → PROD?",
      Evidence: "Transport logs, release calendars, Change Advisory Board (CAB) minutes.",
      choices: [
        { value: 1, text: "1. Manual transports; limited controls or approvals." },
        { value: 2, text: "2. Basic approvals; manual checks and spreadsheets." },
        { value: 3, text: "3. Standard change process with segregation and approvals." },
        { value: 4, text: "4. Automated release orchestration with gates and rollback plans." },
        { value: 5, text: "5. Continuous delivery pipeline with transport automation and change analytics." }
      ]
    },
    {
      id: "Q9", area: "Enhancements & Changes",
      title: "Impact Analysis & UAT Effectiveness",
      text: "Do you perform structured impact analysis and user acceptance testing (UAT) before implementing changes across modules?",
      Evidence: "Impact assessment templates, UAT plans, test scripts, sign-off records.",
      choices: [
        { value: 1, text: "1. Minimal testing; changes moved with limited validation." },
        { value: 2, text: "2. Basic UAT performed by few users; documentation limited." },
        { value: 3, text: "3. Documented impact analysis and UAT with sign-offs." },
        { value: 4, text: "4. Risk-based testing with test automation and traceability." },
        { value: 5, text: "5. Shift-left testing with integrated CI/CD, automated regression, and coverage KPIs." }
      ]
    },
    {
      id: "Q10", area: "Monitoring & Performance",
      title: "System Health & Job Monitoring",
      text: "How proactive is monitoring of SAP system performance (batch jobs, logs, short dumps, DB growth, CPU/memory)?",
      Evidence: "Solution Manager/Focused Run dashboards, CCMS, job monitoring reports.",
      choices: [
        { value: 1, text: "1. Reactive checks after user complaints." },
        { value: 2, text: "2. Periodic manual checks by admins." },
        { value: 3, text: "3. Centralized monitoring with thresholds and alerts." },
        { value: 4, text: "4. Automated alerting with runbooks and response SLAs." },
        { value: 5, text: "5. Predictive monitoring with trend analysis and auto-healing scripts." }
      ]
    },
    {
      id: "Q11", area: "Monitoring & Performance",
      title: "Interface & Integration Monitoring",
      text: "Are SAP interfaces (to HR, Finance, Procurement, CRM, etc.) continuously monitored with automated error handling?",
      Evidence: "PI/PO/CPI monitoring, IDoc/error logs, interface catalog.",
      choices: [
        { value: 1, text: "1. Limited visibility; failures discovered late." },
        { value: 2, text: "2. Manual checks for critical interfaces only." },
        { value: 3, text: "3. Interface monitoring with alerts and daily review." },
        { value: 4, text: "4. Automated retries, alerting, and integration runbooks." },
        { value: 5, text: "5. End-to-end observability with dependency maps and SLOs." }
      ]
    },
    {
      id: "Q12", area: "Monitoring & Performance",
      title: "Operational Dashboards & Early Warning",
      text: "Do you use dashboards/analytics to predict incidents and performance bottlenecks before they affect operations?",
      Evidence: "Operations dashboards, capacity plans, AIOps analytics, trend reports.",
      choices: [
        { value: 1, text: "1. No proactive dashboards or forecasting." },
        { value: 2, text: "2. Basic charts for manual review." },
        { value: 3, text: "3. Trend dashboards used in weekly ops reviews." },
        { value: 4, text: "4. Leading-indicator dashboards with thresholded alerts." },
        { value: 5, text: "5. Predictive/AIOps dashboards with anomaly detection and auto-ticketing." }
      ]
    },
    {
      id: "Q13", area: "Technical Admin & Security",
      title: "Access Provisioning & SoD Control",
      text: "How standardized and automated is user provisioning/de-provisioning and Segregation of Duties (SoD) management?",
      Evidence: "GRC/SoD reports, access request workflow, periodic access review records.",
      choices: [
        { value: 1, text: "1. Manual access changes; SoD conflicts unchecked." },
        { value: 2, text: "2. Basic approvals; ad-hoc SoD reviews." },
        { value: 3, text: "3. Standard workflow with periodic access/SoD reviews." },
        { value: 4, text: "4. GRC automation with risk scoring and mitigations." },
        { value: 5, text: "5. Continuous access monitoring with just-in-time access and automated revocation." }
      ]
    },
    {
      id: "Q14", area: "Technical Admin & Security",
      title: "Patch, Upgrade & Maintenance Cycle",
      text: "Are SAP patches, kernel updates, Notes, and upgrades planned, tested, and documented with rollback plans?",
      Evidence: "Maintenance calendars, change records, upgrade runbooks, rollback tests.",
      choices: [
        { value: 1, text: "1. Irregular updates; minimal documentation." },
        { value: 2, text: "2. Periodic updates without structured testing." },
        { value: 3, text: "3. Planned cycles with testing and documentation." },
        { value: 4, text: "4. Risk-based upgrades with automation and downtime KPIs." },
        { value: 5, text: "5. Evergreen posture with near-zero-downtime strategies and quality gates." }
      ]
    },
    {
      id: "Q15", area: "Technical Admin & Security",
      title: "Backup, Recovery & DR Readiness",
      text: "How robust are backup, restore, and disaster recovery (DR) procedures for SAP landscapes?",
      Evidence: "Backup policies, restore drill records, DR/BCP test reports.",
      choices: [
        { value: 1, text: "1. Backups inconsistent; restores untested." },
        { value: 2, text: "2. Regular backups; restore tests rare." },
        { value: 3, text: "3. Documented backups with periodic restore drills." },
        { value: 4, text: "4. DR plans tested; RTO/RPO tracked and met." },
        { value: 5, text: "5. Geo-redundant architecture with automated failover and continuous validation." }
      ]
    },
    {
      id: "Q16", area: "Integration & Data Quality",
      title: "Master Data Governance",
      text: "How controlled and standardized is master data creation, modification, validation, and approval across SAP modules?",
      Evidence: "MDG/MDM workflows, data steward roles, approval logs, data dictionaries.",
      choices: [
        { value: 1, text: "1. Uncontrolled master data changes; frequent errors." },
        { value: 2, text: "2. Basic maker-checker approvals for select domains." },
        { value: 3, text: "3. Standardized MD processes with stewardship and audits." },
        { value: 4, text: "4. Central MDG with data quality rules and exception queues." },
        { value: 5, text: "5. Enterprise-wide MD governance with KPI-based continuous improvement." }
      ]
    },
    {
      id: "Q17", area: "Integration & Data Quality",
      title: "Data Accuracy & System Reconciliation",
      text: "Do you perform scheduled reconciliations and data quality checks between SAP and integrated systems?",
      Evidence: "Reconciliation schedules, exception reports, DQ dashboards.",
      choices: [
        { value: 1, text: "1. No regular reconciliations; issues found by users." },
        { value: 2, text: "2. Manual reconciliations for high-risk areas only." },
        { value: 3, text: "3. Scheduled reconciliations with issue tracking." },
        { value: 4, text: "4. Automated reconciliations with workflow-based remediation." },
        { value: 5, text: "5. Continuous data quality scoring with predictive anomaly detection." }
      ]
    },
    {
      id: "Q18", area: "UX, Training & Adoption",
      title: "End-User Training & Enablement",
      text: "Do you provide structured training (guides, e-learning, job aids) for end users when launching new features or modules?",
      Evidence: "Training plans, LMS records, attendance/assessment reports.",
      choices: [
        { value: 1, text: "1. Training ad-hoc; materials scarce or outdated." },
        { value: 2, text: "2. Basic manuals provided to limited users." },
        { value: 3, text: "3. Structured training with updated guides and schedules." },
        { value: 4, text: "4. Role-based curricula with assessments and certification." },
        { value: 5, text: "5. Continuous enablement with in-app guidance and on-demand microlearning." }
      ]
    },
    {
      id: "Q19", area: "UX, Training & Adoption",
      title: "User Feedback & Satisfaction",
      text: "How consistently do you measure and act on business user feedback regarding ERP support and enhancements?",
      Evidence: "CSAT/ESAT surveys, feedback portal, improvement backlog.",
      choices: [
        { value: 1, text: "1. Feedback informal; actions rarely tracked." },
        { value: 2, text: "2. Periodic surveys without systematic follow-up." },
        { value: 3, text: "3. Regular surveys with improvement actions logged." },
        { value: 4, text: "4. Always-on feedback channels with analytics and targets." },
        { value: 5, text: "5. Closed-loop experience management driving measurable service improvements." }
      ]
    },
    {
      id: "Q20", area: "Governance & Improvement",
      title: "ERP Strategy, Roadmap & Continuous Improvement",
      text: "Is there a documented ERP strategy and roadmap aligned with business priorities, reviewed with governance forums, and used to drive continuous improvement?",
      Evidence: "ERP strategy deck, roadmap, steering committee minutes, CSI register.",
      choices: [
        { value: 1, text: "1. No documented strategy or roadmap." },
        { value: 2, text: "2. Draft roadmap exists but not actively used." },
        { value: 3, text: "3. Approved roadmap reviewed periodically with stakeholders." },
        { value: 4, text: "4. Roadmap linked to KPIs, budget, and value realization." },
        { value: 5, text: "5. Data-driven portfolio with continuous reprioritization and outcome tracking." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual support, undocumented processes, reactive operations." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation and SLAs; partial monitoring and governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Standardized processes, KPI tracking, proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Automated workflows, integrated monitoring, formal governance." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive operations, AI-assisted triage, continuous improvement culture." }
  ]
};
