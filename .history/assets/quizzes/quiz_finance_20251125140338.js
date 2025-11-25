// quizzes/quiz_finance.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["finance"] = {
  title: "Finance Department Digital Maturity Assessment (DMI)",
  shortcode: "FIN",
  totalQuestions: 32,
  maxScore: 32 * 5,

  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Service Automation Coverage", questions: ["Q3", "Q4"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q9", "Q10"] },
    { name: "6) Knowledge Repository & Templates", questions: ["Q11", "Q12"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Are all finance services (AP, AR, budgeting, tax, treasury) clearly defined and documented in a formal Service Catalogue?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined or structured list of finance services." },
        { value: 2, text: "2. Basic list of services maintained manually or in spreadsheets." },
        { value: 3, text: "3. Digital catalogue exists but not complete or updated regularly." },
        { value: 4, text: "4. Comprehensive digital finance catalogue with defined owners and descriptions." },
        { value: 5, text: "5. Fully integrated Finance Services Catalogue linked with ERP and updated automatically." }
      ]
    },
    {
      id: "Q2", area: "Digitalization", title: "Digitalization Planning",
      text: "What is the list of finance services planned for digitalization or automation next year?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured plan for finance digitalization." },
        { value: 2, text: "2. Initial list of services discussed informally." },
        { value: 3, text: "3. Prioritized list documented but not approved or resourced." },
        { value: 4, text: "4. Approved annual digitalization roadmap linked to strategic goals." },
        { value: 5, text: "5. Dynamic digitalization plan integrated with KPIs and reviewed quarterly." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Process Automation Ratio",
      text: "What percentage of finance processes are automated vs manual (e.g., invoice, expense, payment)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; minimal or fragmented automation." },
        { value: 2, text: "2. 25–50% automated using basic tools or RPA scripts." },
        { value: 3, text: "3. 50–75% automated with integration in select workflows." },
        { value: 4, text: "4. Over 75% automation across major finance functions." },
        { value: 5, text: "5. End-to-end intelligent automation with predictive validation and exception handling." }
      ]
    },
    {
      id: "Q4", area: "Automation", title: "Full vs Semi-Automation",
      text: "What percentage of finance processes are fully automated versus semi-manual (e.g., invoice processing, expense claims, payments)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; most processes remain manual or semi-manual." },
        { value: 2, text: "2. Few processes fully automated, mostly approvals or data entry." },
        { value: 3, text: "3. Balanced split between manual and automated tasks." },
        { value: 4, text: "4. Full automation for key finance cycles (invoice-to-pay, record-to-report)." },
        { value: 5, text: "5. Fully automated digital finance ecosystem with AI validation and monitoring." }
      ]
    },
    {
      id: "Q5", area: "Workflow", title: "Workflow, Monitoring & Integration",
      text: "Do you have end-to-end digital workflows (from initiation to closure) for major finance processes (e.g., purchase invoice approval, expense reimbursements, budget changes)? Describe integration with upstream/downstream systems (e.g., procurement, HR, ERP, banking).",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; finance workflows managed manually or via email." },
        { value: 2, text: "2. Some workflows automated but not integrated with other systems." },
        { value: 3, text: "3. Workflows digitized and partially connected to ERP/HR." },
        { value: 4, text: "4. End-to-end digital workflows with automated approvals and data sync." },
        { value: 5, text: "5. Fully integrated workflow ecosystem with real-time data, AI routing, and cross-functional reporting." }
      ]
    },
    {
      id: "Q6", area: "Monitoring", title: "Real-Time Monitoring & Alerts",
      text: "How is real-time monitoring or alerting implemented in those workflows (e.g., automatic escalations, SLA tracking, dashboard KPIs)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured monitoring or alerts." },
        { value: 2, text: "2. Manual reviews with occasional alerts." },
        { value: 3, text: "3. Digital dashboards with limited notifications." },
        { value: 4, text: "4. Automated SLA alerts and escalation workflows." },
        { value: 5, text: "5. AI-enabled monitoring with predictive risk alerts and performance insights." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policies & Procedures Documentation",
      text: "Do you maintain documented policies and procedures for each major finance domain (Accounting, Treasury, Budgeting, Tax) covering roles, authorization limits, control points, and digital vs manual rules?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; undocumented or inconsistent finance policies." },
        { value: 2, text: "2. Partial documentation without defined ownership." },
        { value: 3, text: "3. Documented policies exist but not version-controlled." },
        { value: 4, text: "4. Approved and version-controlled policy library accessible to all staff." },
        { value: 5, text: "5. Digital policy management system with workflow approvals and auto-review alerts." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Review & Version Control",
      text: "How frequently are these finance policies reviewed, updated, and version-controlled (e.g., annually, upon system changes)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policy updates occur only after major issues." },
        { value: 2, text: "2. Informal annual reviews without documentation." },
        { value: 3, text: "3. Structured review annually with basic version tracking." },
        { value: 4, text: "4. Automated version control with scheduled review cycles." },
        { value: 5, text: "5. Continuous digital policy governance with audit trail and change analytics." }
      ]
    },
    {
      id: "Q9", area: "SOPs", title: "Finance Runbooks & SOPs",
      text: "For finance operations (e.g., month-end closing, cash reconciliation, tax filing, intercompany settlement), do you maintain runbooks or step-by-step SOPs that guide users (including exception handling)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no standardized runbooks or SOPs." },
        { value: 2, text: "2. Informal checklists or guides exist for critical activities." },
        { value: 3, text: "3. Standard SOPs available in shared folders." },
        { value: 4, text: "4. Digitally maintained SOP repository reviewed regularly." },
        { value: 5, text: "5. Automated SOPs integrated with workflows and updated dynamically." }
      ]
    },
    {
      id: "Q10", area: "SOPs", title: "SOP Testing & Validation",
      text: "Are these SOPs tested or reviewed through dry-runs or drills?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs never tested or validated." },
        { value: 2, text: "2. Tests occur only after major incidents." },
        { value: 3, text: "3. Annual dry-runs or validation checks performed manually." },
        { value: 4, text: "4. Periodic tests with documented drill outcomes." },
        { value: 5, text: "5. Continuous testing and improvement through digital feedback loops." }
      ]
    },
    {
      id: "Q11", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a digital knowledge hub with templates, FAQs, and finance guides?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge scattered across local drives or emails." },
        { value: 2, text: "2. Shared folder with static templates." },
        { value: 3, text: "3. Central knowledge hub with version control." },
        { value: 4, text: "4. Access-controlled repository with tagging and search functions." },
        { value: 5, text: "5. Smart knowledge portal with AI search, usage analytics, and automated updates." }
      ]
    },
    {
      id: "Q12", area: "Analytics", title: "Analytics & AI for Finance Insights",
      text: "Is AI or analytics used for finance insights (forecasting, anomaly detection, chatbot support)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; analytics performed manually or not at all." },
        { value: 2, text: "2. Basic Excel-based trend analysis only." },
        { value: 3, text: "3. Dashboards with descriptive analytics available." },
        { value: 4, text: "4. Predictive and prescriptive analytics for finance decisions." },
        { value: 5, text: "5. Fully automated AI insights with anomaly detection and smart recommendations." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual analytics, undocumented processes, reactive reporting." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation, partial automation, limited governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in pipelines; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented; strong automation; integrated workflows; compliance tracked." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive/self-healing pipelines, end-to-end automation, governed data ecosystem, continuous improvement with feedback loops." }
  ]
};