// quizzes/quiz_pmo.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["pmo"] = {
  title: "PMO Digital Maturity Assessment (DMI)",
  shortcode: "PMO",
  totalQuestions: 15,
  maxScore: 15 * 5,
sections: [
  { name: "1) Project Catalogue", questions: ["Q1", "Q2", "Q3"] },
  { name: "2) Automation & Tooling Coverage", questions: ["Q4", "Q5", "Q6"] },
  { name: "3) Workflow & Process Standardization", questions: ["Q7", "Q8"] },
  { name: "4) Policies & Procedures Documentation", questions: ["Q9", "Q10"] },
  { name: "5) Runbooks & SOPs", questions: ["Q11", "Q12"] },
  { name: "6) Knowledge Repository & Templates", questions: ["Q13"] },
  { name: "7) Compliance & Performance Monitoring", questions: ["Q14", "Q15"] }
],


  questions: [
    {
      id: "Q1", area: "Project Catalogue", title: "Project Catalogue Management",
      text: "Kindly share your project catalogue, including ongoing, completed, and planned initiatives, with classification by type (strategic, operational, regulatory).",
      choices: [
        { value: 1, text: "Projects tracked informally or not classified." },
        { value: 2, text: "Partial list maintained manually or in Excel." },
        { value: 3, text: "Digital project list exists but not categorized consistently." },
        { value: 4, text: "Comprehensive digital catalogue with project types and statuses." },
        { value: 5, text: "Centralized PMIS catalogue integrated with ERP and reporting dashboards." }
      ]
    },
    {
      id: "Q2", area: "Project Definition", title: "Project Charter & Scope Definition",
      text: "What percentage of projects have clearly defined charters, scope, and assigned owners?",
      choices: [
        { value: 1, text: "Few or no projects have formal charters." },
        { value: 2, text: "Some projects have draft charters or incomplete ownership details." },
        { value: 3, text: "50–70% of projects have approved charters and scopes." },
        { value: 4, text: "All projects have approved charters and documented ownership." },
        { value: 5, text: "Charters digitally enforced through templates, approvals, and automated tracking." }
      ]
    },
    {
      id: "Q3", area: "Risk Management", title: "PMO Risk Register",
      text: "Kindly share your PMO risk register.",
      choices: [
        { value: 1, text: "No centralized risk register." },
        { value: 2, text: "Risk log maintained manually or by individual project managers." },
        { value: 3, text: "Central digital risk register maintained but not updated consistently." },
        { value: 4, text: "Regularly updated risk register linked to all active projects." },
        { value: 5, text: "Enterprise-level risk register integrated with mitigation dashboards and alerts." }
      ]
    },
    {
      id: "Q4", area: "Automation", title: "Automation of PM Activities",
      text: "What percentage of project management activities (e.g., scheduling, reporting, risk tracking, benefits realization) are fully or partially automated?",
      choices: [
        { value: 1, text: "Entirely manual PM activities." },
        { value: 2, text: "Basic automation for scheduling or reporting only." },
        { value: 3, text: "50–70% automated through standalone tools." },
        { value: 4, text: "Fully automated workflows across PM activities." },
        { value: 5, text: "Intelligent automation with predictive risk and benefit analytics." }
      ]
    },
    {
      id: "Q5", area: "Integration", title: "System Integration",
      text: "Are resource management, demand intake, and financial tracking automated and integrated with other systems (ERP, HR, Finance)?",
      choices: [
        { value: 1, text: "Systems operate independently." },
        { value: 2, text: "Partial integration using manual uploads." },
        { value: 3, text: "Integration between 2–3 systems (e.g., HR + ERP)." },
        { value: 4, text: "Fully automated integration across all key functions." },
        { value: 5, text: "Real-time integrated PMO ecosystem with cross-functional data sharing." }
      ]
    },
    {
      id: "Q6", area: "Standardization", title: "Project Lifecycle Standardization",
      text: "Do you maintain standardized project lifecycle stages (e.g., initiation → planning → execution → monitoring → closure)? If yes, are these stages enforced across all projects?",
      choices: [
        { value: 1, text: "No standardized lifecycle." },
        { value: 2, text: "Informal lifecycle exists but inconsistently applied." },
        { value: 3, text: "Standard lifecycle defined and partially enforced." },
        { value: 4, text: "All projects follow defined lifecycle with stage-gate approvals." },
        { value: 5, text: "Lifecycle automation with digital stage-gate validation and KPI tracking." }
      ]
    },
    {
      id: "Q7", area: "Integration", title: "Cross-Functional Integration",
      text: "Are project workflows integrated with EPMO, ITSM, Solution Delivery, and Finance functions?",
      choices: [
        { value: 1, text: "Independent workflows with no integration." },
        { value: 2, text: "Limited manual coordination between functions." },
        { value: 3, text: "Shared dashboards or manual reporting links exist." },
        { value: 4, text: "Automated workflow integration with key departments." },
        { value: 5, text: "End-to-end digital orchestration across all corporate systems." }
      ]
    },
    {
      id: "Q8", area: "Monitoring", title: "Project Monitoring Dashboards",
      text: "Do you use updated dashboards for project health monitoring (e.g., schedule variance, budget adherence, resource utilization)?",
      choices: [
        { value: 1, text: "Ad-hoc tracking or offline reporting." },
        { value: 2, text: "Periodic Excel reports without visualization." },
        { value: 3, text: "Digital dashboards exist but updated manually." },
        { value: 4, text: "Real-time dashboards with KPI visualization." },
        { value: 5, text: "Predictive dashboards with AI-based forecasting and risk alerts." }
      ]
    },
    {
      id: "Q9", area: "Governance", title: "Governance Policies & Procedures",
      text: "Do you have documented policies and procedures for project governance, stage-gates, reporting cadence, and risk escalation?",
      choices: [
        { value: 1, text: "No formal governance policies." },
        { value: 2, text: "Basic guidelines exist but not documented or approved." },
        { value: 3, text: "Approved policies exist but not version-controlled." },
        { value: 4, text: "Centralized repository for policies and procedures with controlled updates." },
        { value: 5, text: "Automated governance framework with periodic reviews and compliance tracking." }
      ]
    },
    {
      id: "Q10", area: "Methodology", title: "Methodology Adoption",
      text: "Is there a defined methodology/framework in place (e.g., PMI, PRINCE2, Agile, hybrid)? If yes, how widely is it adopted?",
      choices: [
        { value: 1, text: "No standardized methodology." },
        { value: 2, text: "Informal use of mixed approaches." },
        { value: 3, text: "Defined methodology applied in most projects." },
        { value: 4, text: "Fully adopted and enforced methodology across PMO." },
        { value: 5, text: "Adaptive hybrid methodology with continuous optimization and analytics." }
      ]
    },
    {
      id: "Q11", area: "Knowledge", title: "Accessibility of Procedures",
      text: "Are project procedures easily accessible to all stakeholders (via a central repository such as SharePoint, Confluence, or PMO portal)?",
      choices: [
        { value: 1, text: "Documents stored locally or shared informally." },
        { value: 2, text: "Shared folder exists but not organized or version-controlled." },
        { value: 3, text: "Centralized repository available to teams." },
        { value: 4, text: "Access-controlled digital portal with search and download tracking." },
        { value: 5, text: "Smart portal with analytics, notifications, and dynamic document updates." }
      ]
    },
    {
      id: "Q12", area: "Knowledge", title: "PMO Activity Manual",
      text: "Do you maintain a manual for recurring PMO activities (e.g., steering committee preparation, project closure reporting)?",
      choices: [
        { value: 1, text: "No formal PMO manual." },
        { value: 2, text: "Informal checklists or notes exist." },
        { value: 3, text: "Documented manual maintained manually." },
        { value: 4, text: "Digitally version-controlled PMO handbook." },
        { value: 5, text: "Automated PMO playbook with linked templates and workflows." }
      ]
    },
    {
      id: "Q13", area: "Knowledge", title: "Knowledge Base & Templates",
      text: "Where is the PMO knowledge base hosted, and what templates are standardized (e.g., project charter, risk log, stakeholder register, lessons learned)?",
      choices: [
        { value: 1, text: "Templates stored ad-hoc by individuals." },
        { value: 2, text: "Shared folder without version control." },
        { value: 3, text: "Central knowledge base with partial templates." },
        { value: 4, text: "Fully standardized digital repository with version tracking." },
        { value: 5, text: "Intelligent knowledge base with auto-tagging, AI search, and update reminders." }
      ]
    },
    {
      id: "Q14", area: "Compliance", title: "Compliance Measurement",
      text: "Do you measure compliance with PMO methodology, governance checkpoints, and reporting requirements?",
      choices: [
        { value: 1, text: "No compliance monitoring." },
        { value: 2, text: "Manual spot checks by PMO staff." },
        { value: 3, text: "Regular reviews using Excel or manual forms." },
        { value: 4, text: "Automated compliance dashboards with KPI tracking." },
        { value: 5, text: "Predictive compliance analytics with risk alerts and performance scoring." }
      ]
    },
    {
      id: "Q15", area: "Satisfaction", title: "Stakeholder Satisfaction",
      text: "Do you measure stakeholder (business sponsor / steering committee) satisfaction with project management services?",
      choices: [
        { value: 1, text: "No stakeholder satisfaction measurement." },
        { value: 2, text: "Ad-hoc surveys or informal feedback." },
        { value: 3, text: "Periodic surveys conducted manually." },
        { value: 4, text: "Digital survey system linked to PM performance reviews." },
        { value: 5, text: "Continuous satisfaction analytics with trend insights and improvement tracking." }
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
