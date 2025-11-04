// quizzes/quiz_hr.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["human_capital"] = {
  title: "Human Capital Department Digital Maturity Assessment (DMI)",
  shortcode: "HR",
  totalQuestions: 12,
  maxScore: 12 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Process Automation & Integration", questions: ["Q3", "Q4"] },
    { name: "3) Process Documentation & KPI Tracking", questions: ["Q5", "Q6"] },
    { name: "4) Policy Management & Self-Service", questions: ["Q7", "Q8"] },
    { name: "5) SOPs & Auditability", questions: ["Q9", "Q10"] },
    { name: "6) AI & Knowledge Management", questions: ["Q11", "Q12"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue & Offering Definition",
      text: "What HR services are formally defined and documented (e.g., workforce planning, recruitment, onboarding for visa centers, L&D, payroll, performance, ER/IR), with service owners, SLAs, and request channels?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal HR service catalogue or ownership defined." },
        { value: 2, text: "2. Basic service list maintained manually or via spreadsheets." },
        { value: 3, text: "3. Documented HR service catalogue with partial coverage of processes and SLAs." },
        { value: 4, text: "4. Comprehensive digital HR service catalogue published internally with owners and KPIs." },
        { value: 5, text: "5. Fully integrated HR service catalogue linked to ERP/HCM with real-time SLA dashboards." }
      ]
    },
    {
      id: "Q2", area: "Digitalization", title: "Digitalization & Automation Roadmap",
      text: "What HR services or processes are targeted for digitalization or automation in the upcoming year, and what milestones or initiatives have been defined to achieve this?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined digitalization or automation roadmap." },
        { value: 2, text: "2. Informal plans or pilot automation initiatives under discussion." },
        { value: 3, text: "3. Documented HR digitalization roadmap with limited progress." },
        { value: 4, text: "4. Approved and resourced automation roadmap aligned to HR strategy." },
        { value: 5, text: "5. Fully executed digital transformation plan with continuous improvement metrics." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Process Automation Coverage",
      text: "What percentage of HR processes are automated end-to-end (e.g., hiring → onboarding → payroll activation), and which systems (HCM/HRIS) enable this?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual processes dominate." },
        { value: 2, text: "2. Basic automation for select HR tasks (e.g., leave or payroll)." },
        { value: 3, text: "3. 50–75% of HR workflows automated using HCM systems." },
        { value: 4, text: "4. End-to-end automation across recruitment, onboarding, payroll, and performance." },
        { value: 5, text: "5. Intelligent automation with predictive analytics and AI-enabled process optimization." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "Workflow Integration & Data Consistency",
      text: "Are HR workflows digital and integrated with ERP, ITSM, LMS, and Finance systems for SLA tracking and data consistency?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; isolated HR systems with no integration." },
        { value: 2, text: "2. Manual data synchronization between HR and other departments." },
        { value: 3, text: "3. Partial integration across 2–3 systems (e.g., HR–Payroll–Finance)." },
        { value: 4, text: "4. Fully integrated workflows with data consistency and automated updates." },
        { value: 5, text: "5. Unified digital ecosystem enabling real-time HR analytics and reporting." }
      ]
    },
    {
      id: "Q5", area: "Process Documentation", title: "Process Definition & Documentation",
      text: "Are all HR services (recruitment, onboarding, payroll, L&D, performance, employee relations, etc.) supported by clearly defined, documented, and digitally accessible procedures and end-to-end process maps — including workflows, approvals, SLAs, ownership, and compliance checkpoints?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; undocumented or inconsistent processes." },
        { value: 2, text: "2. Basic documentation maintained manually or in shared folders." },
        { value: 3, text: "3. Process maps defined for core HR services but not version-controlled." },
        { value: 4, text: "4. Fully documented and version-controlled digital repository accessible to all HR staff." },
        { value: 5, text: "5. Dynamic process governance system with automated updates and compliance tracking." }
      ]
    },
    {
      id: "Q6", area: "KPI", title: "KPI Tracking & Visualization",
      text: "Are HR KPIs (e.g., time-to-hire, payroll accuracy, training completion, turnover, satisfaction) tracked and visualized via dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no consistent tracking of HR metrics." },
        { value: 2, text: "2. Manual KPI tracking through Excel or static reports." },
        { value: 3, text: "3. Digital dashboard available for core HR KPIs." },
        { value: 4, text: "4. Real-time HR performance dashboards integrated with HRIS and BI tools." },
        { value: 5, text: "5. Predictive HR analytics using AI for trend detection and decision support." }
      ]
    },
    {
      id: "Q7", area: "Policy", title: "Policy Management & Compliance",
      text: "Are HR policies digital, version-controlled, acknowledged online, and compliant with Saudi regulations (GOSI, Mudad, Qiwa, Labor Law)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; HR policies shared via email or printed format." },
        { value: 2, text: "2. Partially digital policy library without version control." },
        { value: 3, text: "3. Complete digital policy repository with employee acknowledgment tracking." },
        { value: 4, text: "4. Version-controlled HR policy portal aligned with local labor regulations." },
        { value: 5, text: "5. Automated HR compliance management system with digital signatures and audit logs." }
      ]
    },
    {
      id: "Q8", area: "ESS", title: "Employee Self-Service (ESS) Enablement",
      text: "Do employees have digital self-service options (e.g., leave, payslips, requests, grievances)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; HR requests handled manually or via email." },
        { value: 2, text: "2. Limited ESS features available for select services (e.g., leave requests)." },
        { value: 3, text: "3. Centralized ESS portal with common HR functions." },
        { value: 4, text: "4. Fully digital ESS covering all employee services with mobile access." },
        { value: 5, text: "5. AI-enabled ESS with chatbot support, analytics, and predictive employee engagement tools." }
      ]
    },
    {
      id: "Q9", area: "SOPs", title: "SOPs & Runbook Maintenance",
      text: "Do you maintain SOPs/runbooks for center-specific HR activities (e.g., hiring cycles, onboarding steps, payroll processing)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not standardized or stored centrally." },
        { value: 2, text: "2. Informal SOPs exist but lack consistency across centers." },
        { value: 3, text: "3. Standard SOPs maintained in shared folders or intranet." },
        { value: 4, text: "4. Version-controlled SOP library with update tracking and access logs." },
        { value: 5, text: "5. Automated SOP system linked to workflow execution and HR audits." }
      ]
    },
    {
      id: "Q10", area: "Audit", title: "SOP Testing & Auditability",
      text: "Are SOPs testable and auditable (e.g., checklists, dry-runs, RTO/RPO for HR services like payroll or access provisioning)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs never tested." },
        { value: 2, text: "2. Informal testing or drills done only after issues occur." },
        { value: 3, text: "3. Scheduled SOP validation through manual reviews." },
        { value: 4, text: "4. Periodic digital tests and audit reports tracked via dashboards." },
        { value: 5, text: "5. Continuous automation-based testing with corrective-action analytics and evidence logs." }
      ]
    },
    {
      id: "Q11", area: "AI", title: "AI & Predictive HR Adoption",
      text: "Is AI used or being prepared for (e.g., attrition prediction, chatbot support, automated screening)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no AI adoption in HR processes." },
        { value: 2, text: "2. Exploratory discussions or pilot tools under testing." },
        { value: 3, text: "3. Partial AI implementation (e.g., CV screening or HR analytics)." },
        { value: 4, text: "4. Widespread AI adoption across recruitment, engagement, and analytics." },
        { value: 5, text: "5. Fully AI-driven HR ecosystem with predictive modeling and intelligent automation." }
      ]
    },
    {
      id: "Q12", area: "Knowledge", title: "HR Knowledge Management",
      text: "Is HR knowledge centralized (e.g., SharePoint, LMS, Knowledge Portal) with metadata, ownership, and refresh cycles?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; HR knowledge scattered in files or emails." },
        { value: 2, text: "2. Shared folder or local repository for key HR documents." },
        { value: 3, text: "3. Centralized HR knowledge portal with limited metadata and ownership." },
        { value: 4, text: "4. Fully managed HR knowledge base with ownership, versioning, and usage tracking." },
        { value: 5, text: "5. Intelligent HR knowledge hub with auto-refresh cycles, AI search, and audit analytics." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Processes are informal and reactive. HR activities rely heavily on manual efforts and individual experience. No centralized HR system or defined ownership exists. Data is fragmented and not validated." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some HR processes are partially documented (e.g., basic policies, job descriptions, and org charts). A few digital tools may exist but are used in isolation. Limited governance or reporting. Communication and updates are manual." },
    { name: "51–75% (Managed)", range: [51, 75], description: "HR processes are standardized and documented with approved policies, procedures, and SLAs. ERP or HRIS systems are used for core functions. Roles and responsibilities are clearly defined, and performance reviews are conducted." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "HR operations are integrated with digital platforms (ERP, LMS, dashboards). Data flows between recruitment, onboarding, training, and payroll systems. Governance, version control, and continuous monitoring are in place." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "HR ecosystem is fully automated and data-driven. AI-driven insights support predictive hiring and engagement analytics. Systems are self-updating and integrated across all functions with enhanced decision-making through analytics and self-service." }
  ]
};
