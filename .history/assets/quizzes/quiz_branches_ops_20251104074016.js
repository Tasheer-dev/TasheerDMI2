// quizzes/quiz_branches.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["branches_ops"] = {
  title: "Branches Operations Digital Maturity Assessment (DMI)",
  shortcode: "BRANCH",
  totalQuestions: 12,
  maxScore: 12 * 5,
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
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue & Offering Definition",
      text: "Does the department maintain a documented digital service catalogue that clearly defines all services (e.g., visa issuance, biometrics, customer support, field visits) offered to internal or external customers?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured or documented service catalogue exists." },
        { value: 2, text: "2. Partial list of services maintained manually or via email communication." },
        { value: 3, text: "3. Documented service catalogue covering most services with basic details." },
        { value: 4, text: "4. Digital service catalogue available on internal portal with version control and ownership." },
        { value: 5, text: "5. Fully integrated and dynamic service catalogue linked to ERP/CRM with live updates and SLA monitoring." }
      ]
    },
    {
      id: "Q2", area: "Service Levels", title: "Service Level Definition & Publication",
      text: "Are digital service levels (e.g., standard turnaround time, SLAs, availability) defined and published for each service in the catalogue?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; service levels undefined or inconsistently communicated." },
        { value: 2, text: "2. Informal SLAs maintained or communicated verbally." },
        { value: 3, text: "3. Documented SLAs exist for major services but not published or tracked." },
        { value: 4, text: "4. SLA matrix and performance standards published and reviewed periodically." },
        { value: 5, text: "5. Real-time SLA dashboards integrated with CRM/ERP, auto-updated and monitored digitally." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Process Automation Coverage",
      text: "Which of your core branch operations (e.g., appointment scheduling, document verification, biometric capture, follow-up escalations) are automated end-to-end, and which still require manual handoffs? Please indicate the percentage of total workflow steps automated.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; all operations handled manually." },
        { value: 2, text: "2. Basic automation for select steps (e.g., data entry, scheduling)." },
        { value: 3, text: "3. 50–75% of workflows automated with system integrations." },
        { value: 4, text: "4. Majority of branch processes automated end-to-end with minimal manual intervention." },
        { value: 5, text: "5. Fully automated digital branch operations with predictive workflow optimization." }
      ]
    },
    {
      id: "Q4", area: "Automation", title: "RPA & Microservices Utilization",
      text: "Have you used robotic process automation (RPA), scripts, APIs, or microservices in branch operations to reduce manual intervention? If yes, for which tasks?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation technologies implemented." },
        { value: 2, text: "2. Limited use of scripts or macros for repetitive tasks." },
        { value: 3, text: "3. Selective adoption of RPA or API integrations in core processes." },
        { value: 4, text: "4. Comprehensive use of RPA and microservices across major branch functions." },
        { value: 5, text: "5. Enterprise-wide automation platform integrated with analytics for optimization and scalability." }
      ]
    },
    {
      id: "Q5", area: "Workflow", title: "Workflow Orchestration & Monitoring",
      text: "How are your workflows orchestrated and monitored (e.g., workflow engine, BPM tool)? Do you have dashboards displaying real-time status of branch operations?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured workflow monitoring or orchestration." },
        { value: 2, text: "2. Manual tracking using Excel or static reports." },
        { value: 3, text: "3. Partial automation with internal dashboards or BPM tools." },
        { value: 4, text: "4. Fully digital workflow engine with automated task routing and alerts." },
        { value: 5, text: "5. Intelligent BPM with predictive analytics, SLA alerts, and AI-driven optimization." }
      ]
    },
    {
      id: "Q6", area: "Integration", title: "System Integration & Data Exchange",
      text: "What systems are integrated with branch operations (e.g., CRM, ERP, identity verification, central systems)? Describe the data exchange flows and integration points.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; independent systems with no integration." },
        { value: 2, text: "2. Basic manual data uploads or API scripts for limited processes." },
        { value: 3, text: "3. Integration with 2–3 core systems (e.g., CRM, ERP, identity tools)." },
        { value: 4, text: "4. Fully integrated data exchange with secure APIs and automated sync." },
        { value: 5, text: "5. Unified integration platform enabling real-time data flow and system interoperability." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Procedure Documentation",
      text: "Does the department have up-to-date documented policies and procedures governing branch operations (e.g., access control, data privacy, escalation, change control)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; undocumented or outdated branch policies." },
        { value: 2, text: "2. Partial documentation covering only major functions." },
        { value: 3, text: "3. Comprehensive policy manual maintained manually." },
        { value: 4, text: "4. Digitally version-controlled policy repository with audit trails." },
        { value: 5, text: "5. Automated policy governance with workflow alerts and review cycles." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Review & Version Control",
      text: "When policies or procedures change, do you follow a formal review, approval, and communication process? How is version control handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no standardized review or approval mechanism." },
        { value: 2, text: "2. Informal approvals via email or offline sign-offs." },
        { value: 3, text: "3. Structured review process conducted periodically." },
        { value: 4, text: "4. Automated approval workflow with version logs and notifications." },
        { value: 5, text: "5. Continuous policy lifecycle management with AI-based tracking and compliance analytics." }
      ]
    },
    {
      id: "Q9", area: "SOPs", title: "Runbooks & SOP Availability",
      text: "Do you maintain runbooks or SOPs for recurring operations (e.g., system recovery, outage escalation, end-of-day reconciliation, branch opening/closing)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no documented SOPs or runbooks exist." },
        { value: 2, text: "2. Informal checklists or manuals shared locally." },
        { value: 3, text: "3. Standard SOPs documented and stored in shared folders." },
        { value: 4, text: "4. Digitally maintained SOP library with periodic updates and access logs." },
        { value: 5, text: "5. Intelligent SOP management system integrated with automation and version tracking." }
      ]
    },
    {
      id: "Q10", area: "SOPs", title: "SOP Testing & Drills",
      text: "Are these SOPs tested periodically (drills, simulations)? If yes, how often and how are deviations handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not tested or reviewed." },
        { value: 2, text: "2. Tests conducted reactively after incidents." },
        { value: 3, text: "3. Annual or scheduled manual drills performed." },
        { value: 4, text: "4. Regular simulations with corrective action tracking." },
        { value: 5, text: "5. Continuous automated testing with performance analytics and improvement feedback loops." }
      ]
    },
    {
      id: "Q11", area: "Knowledge", title: "Knowledge Repository Availability",
      text: "Is there a centralized knowledge repository (intranet, wiki, document management system) that stores guidelines, best practices, templates, and FAQs for branch operations?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge scattered in emails or local drives." },
        { value: 2, text: "2. Shared folder used as basic reference point." },
        { value: 3, text: "3. Organized knowledge portal (e.g., SharePoint, Confluence) accessible to teams." },
        { value: 4, text: "4. Controlled knowledge repository with audit logs and search functionality." },
        { value: 5, text: "5. Intelligent knowledge hub with AI-assisted search, content analytics, and update tracking." }
      ]
    },
    {
      id: "Q12", area: "Templates", title: "Template Standardization & Usage",
      text: "Are templates (e.g., customer complaint form, field visit report, escalation memo) standardized and versioned? How do team members access and use them?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; templates not standardized or tracked." },
        { value: 2, text: "2. Basic templates shared informally or stored locally." },
        { value: 3, text: "3. Standard templates published on intranet with limited tracking." },
        { value: 4, text: "4. Version-controlled digital template repository with usage reports." },
        { value: 5, text: "5. Smart template system integrated with workflows and auto-versioning." }
      ]
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
