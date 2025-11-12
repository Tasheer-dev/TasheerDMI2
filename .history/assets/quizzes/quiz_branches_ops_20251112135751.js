// quizzes/quiz_branches_operations.js
// -----------------------------------------------------------------------------
// Tasheer Branches Operations Department
// Digital Capability & Maturity Assessment (DMI)
// Levels: 1) Ad-hoc, 2) Developing, 3) Defined/Managed, 4) Measured/Advanced, 5) Optimized/Predictive
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["branches_ops"] = {
  title: "Branches Operations Department Digital Capability & Maturity Assessment (DMI)",
  shortcode: "branches_ops",
  totalQuestions: 30,
  maxScore: 30 * 5,

  sections: [
    { name: "1) Digital Visa Operations & Integration", questions: ["Q1","Q2","Q3","Q4","Q5"] },
    { name: "2) CRM, Communication & Customer Experience", questions: ["Q6","Q7","Q8","Q9","Q10"] },
    { name: "3) Process Automation & Standardization", questions: ["Q11","Q12","Q13","Q14","Q15"] },
    { name: "4) Governance, Risk & Compliance", questions: ["Q16","Q17","Q18","Q19"] },
    { name: "5) Data, AI & Knowledge Innovation", questions: ["Q20","Q21","Q22","Q23","Q24","Q25"] },
    { name: "6) Branch Management & Workforce Oversight", questions: ["Q26","Q27","Q28","Q29","Q30"] }
  ],

  questions: [
    // ------------------------ 1) Digital Visa Operations & Integration ------------------------
    {
      id: "Q1", area: "Visa Journey",
      title: "End-to-End Visa Processing Automation",
      text: "How digitally integrated is the visa journey (Application → Biometrics → Embassy → Delivery) via Opsys and MoFA systems?",
      Evidence: "Opsys–MoFA integration maps, transaction logs, process diagrams, automation audit trail.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; major steps handled manually; rekeying between systems." },
        { value: 2, text: "2. Developing; some steps integrated but manual handoffs remain." },
        { value: 3, text: "3. Defined; most steps automated and status-tracked in Opsys/MoFA." },
        { value: 4, text: "4. Measured; fully orchestrated workflow with SLA timers and dashboards." },
        { value: 5, text: "5. Optimized; predictive routing/alerts and exception automation across the journey." }
      ]
    },
    {
      id: "Q2", area: "Interoperability",
      title: "Cross-System Data Synchronization",
      text: "Are Opsys, CRM, OnClick and Refund/E‑Wallet systems synchronized for status, reporting and issue resolution?",
      Evidence: "Data flow diagrams, API/interface logs, cross-system reports, reconciliation records.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; systems work independently; manual exports." },
        { value: 2, text: "2. Developing; partial one-way sync for selected data." },
        { value: 3, text: "3. Defined; core modules bi-directionally integrated (status, IDs, outcomes)." },
        { value: 4, text: "4. Measured; near real-time sync with automated reconciliation and alerts." },
        { value: 5, text: "5. Optimized; unified ops data layer powering end-to-end analytics." }
      ]
    },
    {
      id: "Q3", area: "Daily Ops",
      title: "BOD/EOD Automation & Compliance",
      text: "Are Beginning/End-of-Day operations automated with centralized compliance tracking?",
      Evidence: "BOD/EOD checklists, Opsys auto-reports, exception logs, HQ dashboard screenshots.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; BOD/EOD performed manually; no central view." },
        { value: 2, text: "2. Developing; digital templates used; uploads reviewed monthly." },
        { value: 3, text: "3. Defined; 70%+ automated with branch uploads and approvals." },
        { value: 4, text: "4. Measured; real-time completion tracking and exception workflow." },
        { value: 5, text: "5. Optimized; anomaly detection on timings and outcomes with auto-escalation." }
      ]
    },
    {
      id: "Q4", area: "Finance",
      title: "Refunds & Financial Reconciliation Automation",
      text: "To what extent are refunds and reconciliations automated via E‑Wallets and Smartsheet dashboards?",
      Evidence: "Refund SOP, Smartsheet dashboards, E‑Wallet logs, SLA/aging reports.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual refund forms and approvals." },
        { value: 2, text: "2. Developing; digital forms with manual back-office processing." },
        { value: 3, text: "3. Defined; routed through E‑Wallet with electronic approvals and audit trail." },
        { value: 4, text: "4. Measured; fully automated reconciliations with SLA monitoring and alerts." },
        { value: 5, text: "5. Optimized; predictive exception handling and trend analytics for refunds." }
      ]
    },
    {
      id: "Q5", area: "Incidents",
      title: "Incident Management & Escalation Automation",
      text: "Is there a digital system for logging, tracking and escalating operational incidents?",
      Evidence: "CRM/Opsys incident logs, escalation matrix, timestamps, resolution metrics.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; incidents tracked via emails/WhatsApp." },
        { value: 2, text: "2. Developing; standardized templates; manual follow‑ups." },
        { value: 3, text: "3. Defined; centralized incident module used consistently across regions." },
        { value: 4, text: "4. Measured; auto‑escalations with SLA dashboards and MTTR trends." },
        { value: 5, text: "5. Optimized; AI-driven root cause and predictive incident prevention." }
      ]
    },

    // ------------------------ 2) CRM, Communication & Customer Experience ------------------------
    {
      id: "Q6", area: "CRM",
      title: "Omni-Channel CRM Visibility",
      text: "How unified is CRM tracking across WhatsApp, Email, Portal and walk-in complaints?",
      Evidence: "Mioot CRM logs, WhatsApp integration, email connectors, omni-channel dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; channels handled separately." },
        { value: 2, text: "2. Developing; tickets created per channel without consolidation." },
        { value: 3, text: "3. Defined; all channels captured with SLA targets." },
        { value: 4, text: "4. Measured; real-time omni-channel dashboards and analytics." },
        { value: 5, text: "5. Optimized; AI chatbots classify and auto-route; sentiment analysis active." }
      ]
    },
    {
      id: "Q7", area: "CX Feedback",
      title: "Customer Satisfaction Automation (CSAT/ESAT)",
      text: "Is CSAT/ESAT captured digitally and used to improve branch services?",
      Evidence: "Feedback kiosks, dashboards, trend analysis, improvement actions log.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; sporadic manual surveys only." },
        { value: 2, text: "2. Developing; devices/polls in some centers; manual analysis." },
        { value: 3, text: "3. Defined; CSAT live in most regions with monthly review." },
        { value: 4, text: "4. Measured; real-time dashboards and automated insights." },
        { value: 5, text: "5. Optimized; predictive sentiment and closed-loop improvements." }
      ]
    },
    {
      id: "Q8", area: "Complaints",
      title: "Complaint Lifecycle Management",
      text: "Are complaint cases monitored digitally from submission to closure with SLAs and aging controls?",
      Evidence: "CRM SLA reports, lifecycle timestamps, breach analysis, re-open rates.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual follow-up without SLA tracking." },
        { value: 2, text: "2. Developing; partial SLA enforcement and weekly exports." },
        { value: 3, text: "3. Defined; ≥70% tickets meet SLA with standard root cause coding." },
        { value: 4, text: "4. Measured; auto-escalation and coaching triggers on breaches." },
        { value: 5, text: "5. Optimized; dynamic workflow adjustment based on risk scoring." }
      ]
    },
    {
      id: "Q9", area: "Digital Comms",
      title: "Digital Communication Tools Adoption",
      text: "How effectively are WhatsApp bots, email automation and digital templates used for client updates?",
      Evidence: "Bot flows, auto-replies, template library, delivery/engagement metrics.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; mostly manual communications." },
        { value: 2, text: "2. Developing; some automation per country." },
        { value: 3, text: "3. Defined; standard templates and CRM-driven messaging." },
        { value: 4, text: "4. Measured; automated outreach with tracking analytics." },
        { value: 5, text: "5. Optimized; proactive AI communications with personalization." }
      ]
    },
    {
      id: "Q10", area: "Client Portal",
      title: "Digital Transparency & Tracking for Applicants",
      text: "Can customers digitally track applications, refunds and complaints through vc.tasheer.com?",
      Evidence: "Website screenshots, tracker URLs, user access logs, help content.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; minimal digital tracking presented to clients." },
        { value: 2, text: "2. Developing; partial status updates only." },
        { value: 3, text: "3. Defined; full application tracking across all centers." },
        { value: 4, text: "4. Measured; integrated complaint/refund tracking with notifications." },
        { value: 5, text: "5. Optimized; personalized applicant dashboards and proactive alerts." }
      ]
    },

    // ------------------------ 3) Process Automation & Standardization ------------------------
    {
      id: "Q11", area: "SOPs",
      title: "SOP Digitalization & Version Control",
      text: "Are all operational SOPs digitized, versioned and accessible globally?",
      Evidence: "SOP repository, version history, ownership matrix, change logs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs circulated by email; inconsistent versions." },
        { value: 2, text: "2. Developing; partial upload to shared drives." },
        { value: 3, text: "3. Defined; ≥70% processes published with owners and review cycle." },
        { value: 4, text: "4. Measured; version control and access analytics centralized." },
        { value: 5, text: "5. Optimized; auto-updates and integration into workflows and training." }
      ]
    },
    {
      id: "Q12", area: "Self Audit",
      title: "Process Compliance & Self-Audit",
      text: "Do branches conduct and upload self-audits digitally (BOD, EOD, SLA, refund accuracy)?",
      Evidence: "Daily/weekly Excel self-audits, OnClick uploads, review comments, scoring sheets.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; audits infrequent; no central review." },
        { value: 2, text: "2. Developing; quarterly manual self-audits consolidated in Excel." },
        { value: 3, text: "3. Defined; monthly uploads with regional review and actions." },
        { value: 4, text: "4. Measured; automated tracking and compliance dashboards." },
        { value: 5, text: "5. Optimized; predictive compliance scoring with targeted coaching." }
      ]
    },
    {
      id: "Q13", area: "Exceptions",
      title: "Exception Handling Automation",
      text: "Are exceptions (VPN outage, system delays, refund rejections) logged and resolved through a digital workflow?",
      Evidence: "Opsys event logs, exception tickets, RCA templates, trend dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; exceptions handled offline." },
        { value: 2, text: "2. Developing; basic templates used; manual follow-up." },
        { value: 3, text: "3. Defined; exceptions logged in OnClick/CRM and tracked to closure." },
        { value: 4, text: "4. Measured; dashboards and alerts on repeat exceptions." },
        { value: 5, text: "5. Optimized; automated prevention rules and policy updates." }
      ]
    },
    {
      id: "Q14", area: "Biometrics",
      title: "Biometric & Document Handling Digitalization",
      text: "How automated are biometric capture and document validation across branches?",
      Evidence: "MoFA/Opsys biometric logs, device uptime, validation error rates, SLA charts.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; largely manual capture and checks." },
        { value: 2, text: "2. Developing; semi-automated capture with manual validation." },
        { value: 3, text: "3. Defined; ≥80% processes automated with standardized devices." },
        { value: 4, text: "4. Measured; live monitoring with auto-validation and exception routing." },
        { value: 5, text: "5. Optimized; real-time sync, quality scoring and error prediction." }
      ]
    },
    {
      id: "Q15", area: "Reporting",
      title: "Daily Reporting Automation",
      text: "Are daily operations (applications processed, refunds, incidents) compiled automatically for HQ visibility?",
      Evidence: "Daily Report feeds, Power BI dashboards, accuracy checks, refresh schedules.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual compilation by branches." },
        { value: 2, text: "2. Developing; semi-automated Excel with macros." },
        { value: 3, text: "3. Defined; reports generated from OnClick/Opsys to a central store." },
        { value: 4, text: "4. Measured; auto-refresh dashboards with >90% data accuracy." },
        { value: 5, text: "5. Optimized; interactive and predictive reporting with drill-throughs." }
      ]
    },

    // ------------------------ 4) Governance, Risk & Compliance ------------------------
    {
      id: "Q16", area: "Audit",
      title: "Audit Process Digitalization",
      text: "Are internal/external/mystery audits managed digitally with closure tracking and analytics?",
      Evidence: "OP-PR-004, audit plans, non-conformance logs, closure SLAs, dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; audits tracked by email/Excel." },
        { value: 2, text: "2. Developing; digital forms without closure workflow." },
        { value: 3, text: "3. Defined; audits logged in system with owners and due dates." },
        { value: 4, text: "4. Measured; automated reminders and analytics on recurring findings." },
        { value: 5, text: "5. Optimized; risk-based scheduling and predictive audit scoring." }
      ]
    },
    {
      id: "Q17", area: "Risk",
      title: "Risk Register & Control Monitoring",
      text: "Is a live risk register maintained with mitigation tracking and control monitoring?",
      Evidence: "Risk register, mitigation tasks, control dashboards, review minutes.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; risks not formally logged or reviewed." },
        { value: 2, text: "2. Developing; risks logged but progress tracked offline." },
        { value: 3, text: "3. Defined; periodic risk reporting with action owners." },
        { value: 4, text: "4. Measured; dynamic dashboards and automated alerts." },
        { value: 5, text: "5. Optimized; predictive risk analytics integrated with Opsys/CRM." }
      ]
    },
    {
      id: "Q18", area: "Compliance",
      title: "Policy Compliance & Enforcement",
      text: "How actively are MoFA and internal policies enforced and audited digitally across branches?",
      Evidence: "Policy acknowledgements, compliance scorecards, exception waivers, audit trails.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reactive compliance; limited evidence." },
        { value: 2, text: "2. Developing; policy awareness campaigns; sampling checks." },
        { value: 3, text: "3. Defined; quarterly digital compliance reviews and attestations." },
        { value: 4, text: "4. Measured; automated monitoring and remediation tasks." },
        { value: 5, text: "5. Optimized; continuous conformance monitoring and risk scoring." }
      ]
    },
    {
      id: "Q19", area: "Security",
      title: "Security & Data Protection",
      text: "Are data, biometrics and customer information secured and monitored digitally?",
      Evidence: "Access logs, SecurID/VPN records, CCTV, encryption standards, incident reports.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; basic controls; manual checks." },
        { value: 2, text: "2. Developing; role-based access and periodic manual reviews." },
        { value: 3, text: "3. Defined; multi-layer access, logging and regular audits." },
        { value: 4, text: "4. Measured; automated monitoring and alerting for anomalies." },
        { value: 5, text: "5. Optimized; predictive threat detection and continuous hardening." }
      ]
    },

    // ------------------------ 5) Data, AI & Knowledge Innovation ------------------------
    {
      id: "Q20", area: "Analytics",
      title: "Operational Analytics & Visualization",
      text: "Are operational KPIs visualized in real-time dashboards with drill-down by country/center/source?",
      Evidence: "Power BI tiles, filters, map visuals, refresh cadence, user access analytics.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual reports; limited visibility." },
        { value: 2, text: "2. Developing; static monthly dashboards." },
        { value: 3, text: "3. Defined; interactive dashboards reviewed regularly." },
        { value: 4, text: "4. Measured; near real-time updates and automated insights." },
        { value: 5, text: "5. Optimized; forecasting and prescriptive analytics adopted." }
      ]
    },
    {
      id: "Q21", area: "Knowledge",
      title: "Knowledge Base & Employee Self-Service",
      text: "Is a centralized, searchable knowledge base available (SOPs, FAQs, guides) for branch staff?",
      Evidence: "Navigator AI/empowerAssist usage, KB portal, article analytics, update cadence.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no digital KB; tribal knowledge." },
        { value: 2, text: "2. Developing; limited FAQs; manual updates." },
        { value: 3, text: "3. Defined; centralized KB with owners and reviews." },
        { value: 4, text: "4. Measured; AI-guided answers with feedback loops." },
        { value: 5, text: "5. Optimized; adaptive learning and recommendations by role." }
      ]
    },
    {
      id: "Q22", area: "Chatbot",
      title: "Chatbot Intelligence & Feedback Learning",
      text: "Does the Navigator chatbot learn from feedback and update knowledge automatically?",
      Evidence: "Feedback logs, article revision history, release notes, usage KPIs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; static bot; manual curation only." },
        { value: 2, text: "2. Developing; periodic manual updates based on tickets." },
        { value: 3, text: "3. Defined; scheduled learning cycles using feedback analytics." },
        { value: 4, text: "4. Measured; automated updates triggered by usage patterns." },
        { value: 5, text: "5. Optimized; continuous self-learning with quality gates." }
      ]
    },
    {
      id: "Q23", area: "Innovation",
      title: "Innovation & Continuous Improvement",
      text: "Is there a framework to propose, evaluate and implement new digital initiatives at branches and HQ?",
      Evidence: "Innovation backlog, idea portal, quarterly review minutes, pilot outcomes.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; improvements are reactive and ad‑hoc." },
        { value: 2, text: "2. Developing; informal ideation without governance." },
        { value: 3, text: "3. Defined; structured backlog and approval flow." },
        { value: 4, text: "4. Measured; ROI tracking and OKRs for initiatives." },
        { value: 5, text: "5. Optimized; data-driven portfolio with rapid pilots and scale." }
      ]
    },
    {
      id: "Q24", area: "Data Quality",
      title: "Data Accuracy & SLA Integrity",
      text: "How accurate and consistent are operational data submissions from branches to HQ systems?",
      Evidence: "Validation rules, reconciliation checks, error logs, DQ dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; high manual error rates; limited checks." },
        { value: 2, text: "2. Developing; sample validations and periodic clean-ups." },
        { value: 3, text: "3. Defined; weekly validations with DQ KPIs per region." },
        { value: 4, text: "4. Measured; automated validations and reconciliation workflows." },
        { value: 5, text: "5. Optimized; AI-based integrity monitoring and auto-correction." }
      ]
    },
    {
      id: "Q25", area: "Prediction",
      title: "Predictive Decision-Making & Automation Readiness",
      text: "Is the department using forecasting or AI to anticipate workload, staffing or SLA risks?",
      Evidence: "Forecast models, capacity plans, risk heatmaps, what‑if scenarios.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reactive planning only." },
        { value: 2, text: "2. Developing; basic Excel forecasting for peaks." },
        { value: 3, text: "3. Defined; dashboard-based forecasting guides plans." },
        { value: 4, text: "4. Measured; AI-supported predictions for staffing/SLA." },
        { value: 5, text: "5. Optimized; prescriptive actions and auto-orchestration." }
      ]
    },

    // ------------------------ 6) Branch Management & Workforce Oversight ------------------------
    {
      id: "Q26", area: "Establishment",
      title: "Digital Branch Establishment & Onboarding",
      text: "How digitalized is the process for establishing new branches and onboarding staff/IT?",
      Evidence: "OnClick branch creation forms, onboarding checklists, IT activation logs, timelines.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; coordination via email/spreadsheets; no single source of truth." },
        { value: 2, text: "2. Developing; partial automation for document submission/approvals." },
        { value: 3, text: "3. Defined; standardized templates/tasks in OnClick with owners." },
        { value: 4, text: "4. Measured; end-to-end workflow with milestone tracking and alerts." },
        { value: 5, text: "5. Optimized; blueprint-driven provisioning and auto-activation (VPN, access, devices)." }
      ]
    },
    {
      id: "Q27", area: "Monitoring",
      title: "Centralized Branch Monitoring & Health Index",
      text: "Does HQ have live dashboards showing performance, SLAs, incidents and compliance for all branches?",
      Evidence: "Global Power BI overview, SLA dashboards, alert rules, color-coded health index.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; status compiled manually; lagging visibility." },
        { value: 2, text: "2. Developing; periodic Excel consolidations per region." },
        { value: 3, text: "3. Defined; centralized dashboard refreshed daily/weekly." },
        { value: 4, text: "4. Measured; real-time metrics with alerts and drill-down." },
        { value: 5, text: "5. Optimized; predictive branch health scoring and auto-escalations." }
      ]
    },
    {
      id: "Q28", area: "Digital Audit",
      title: "Digital Audit & Non‑Conformance Management",
      text: "How automated is audit execution, finding assignment and non‑conformance closure across branches?",
      Evidence: "Audit plans, NC logs, closure SLAs, dashboards, CAPA (Corrective & Preventive Action) records.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; Word/Excel tracking; inconsistent follow‑up." },
        { value: 2, text: "2. Developing; forms uploaded; manual reminders." },
        { value: 3, text: "3. Defined; audit workflow in system with owners and due dates." },
        { value: 4, text: "4. Measured; automated reminders, closure analytics and repeat‑NC alerts." },
        { value: 5, text: "5. Optimized; risk‑based scheduling and predictive NC prevention." }
      ]
    },
    {
      id: "Q29", area: "Workforce",
      title: "Digital Workforce Management & Productivity",
      text: "Are tasks, training and KPIs tracked digitally for branch employees?",
      Evidence: "HRMS/learning system, task boards, certification records, productivity dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; limited or no digital tracking." },
        { value: 2, text: "2. Developing; partial tracking via spreadsheets/emails." },
        { value: 3, text: "3. Defined; task/training systems used in most regions." },
        { value: 4, text: "4. Measured; integrated dashboards for attendance, KPIs and training." },
        { value: 5, text: "5. Optimized; predictive workforce analytics and AI workload balancing." }
      ]
    },
    {
      id: "Q30", area: "Governance",
      title: "Process Governance & Digital Oversight by HQ",
      text: "To what extent does HQ monitor adherence to standardized digital processes (refund, EOD, CRM handling, incident logging) across all branches?",
      Evidence: "Compliance dashboards, adherence reports, regional review summaries, deviation logs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; oversight reactive and audit-driven only." },
        { value: 2, text: "2. Developing; manual reviews of monthly reports and escalations." },
        { value: 3, text: "3. Defined; structured compliance reporting with action tracking." },
        { value: 4, text: "4. Measured; real-time adherence dashboards and automated alerts." },
        { value: 5, text: "5. Optimized; automated deviation detection with corrective triggers." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations; manual processes; limited visibility; siloed systems." },
    { name: "26–50% (Developing)", range: [26, 50], description: "Basic digitization; partial integrations; early dashboards; some SOPs online." },
    { name: "51–75% (Defined/Managed)", range: [51, 75], description: "Standardized processes with system support; regular reporting; growing automation." },
    { name: "76–90% (Measured/Advanced)", range: [76, 90], description: "Integrated automation; real-time dashboards; strong compliance and analytics." },
    { name: "91–100% (Optimized/Predictive)", range: [91, 100], description: "Predictive operations; AI-enabled decisions; continuous improvement embedded." }
  ]
};
