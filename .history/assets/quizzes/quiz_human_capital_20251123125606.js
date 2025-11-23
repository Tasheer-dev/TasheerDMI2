// quizzes/quiz_hr.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["human_capital"] = {
  title: "Human Capital Department Digital Maturity Assessment (DMI)",
  shortcode: "HR",
  totalQuestions: 24,
  maxScore: 24 * 5,

  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Process Automation & Integration", questions: ["Q3", "Q4"] },
    { name: "3) Process Documentation & KPI Tracking", questions: ["Q5", "Q6"] },
    { name: "4) Policy Management & Self-Service", questions: ["Q7", "Q8"] },
    { name: "5) SOPs & Auditability", questions: ["Q9", "Q10"] },
    { name: "6) AI & Knowledge Management", questions: ["Q11", "Q12"] },

    // NEW SECTIONS ADDED
    { name: "7) Talent Acquisition Intelligence", questions: ["Q13", "Q14"] },
    { name: "8) Workforce Planning & Productivity", questions: ["Q15", "Q16"] },
    { name: "9) Engagement, Culture & Experience", questions: ["Q17", "Q18"] },
    { name: "10) Learning & Development (L&D)", questions: ["Q19", "Q20"] },
    { name: "11) HR Operations & Case Management", questions: ["Q21", "Q22"] },
    { name: "12) Governance, Compliance & Digital Security", questions: ["Q23", "Q24"] }
  ],

  questions: [
    // -------------------------------
    // ORIGINAL QUESTIONS (Q1–Q12)
    // -------------------------------
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
    },

    // -------------------------------
    // NEW QUESTIONS (Q13–Q24)
    // -------------------------------

    {
      id: "Q13", area: "Recruitment Analytics", title: "Recruitment Analytics & Insight Utilization",
      text: "How effectively does the HR Department use recruitment analytics (e.g., funnel analytics, source effectiveness, rejection insights, interview performance, time-to-fill trends)?",
      choices: [
        { value: 1, text: "1. Recruitment data not analyzed; decisions rely on manual observations." },
        { value: 2, text: "2. Basic reports available but inconsistently reviewed for decision-making." },
        { value: 3, text: "3. Standard dashboards for key recruitment KPIs used periodically." },
        { value: 4, text: "4. Real-time recruitment analytics used to optimize sourcing and screening." },
        { value: 5, text: "5. Predictive models actively improve hiring strategy, success probability, and workforce planning." }
      ]
    },

    {
      id: "Q14", area: "Digital Screening", title: "Digital Assessment & Screening Tools Adoption",
      text: "To what extent are digital tools used for skills assessment, psychometrics, automated screening, or structured competency evaluation?",
      choices: [
        { value: 1, text: "1. No structured digital assessments used for hiring decisions." },
        { value: 2, text: "2. Limited assessments used manually for select roles only." },
        { value: 3, text: "3. Standardized digital assessment tools used across key job families." },
        { value: 4, text: "4. Fully integrated screening platform with competency-based evaluation workflows." },
        { value: 5, text: "5. AI-driven assessment ecosystem providing predictive role fit and success scoring." }
      ]
    },

    {
      id: "Q15", area: "Workforce Planning", title: "Workforce Planning & Forecasting Maturity",
      text: "How mature is HR workforce planning in forecasting manpower demand, skill requirements, and workforce availability using structured methodologies?",
      choices: [
        { value: 1, text: "1. No forecasting; hiring is reactive based on immediate need." },
        { value: 2, text: "2. Informal planning using spreadsheets with inconsistent accuracy." },
        { value: 3, text: "3. Structured annual workforce plan aligned to business needs." },
        { value: 4, text: "4. Data-driven workforce planning integrated with financial and operational systems." },
        { value: 5, text: "5. Predictive workforce modeling leveraging AI and multi-year scenario analytics." }
      ]
    },

    {
      id: "Q16", area: "Productivity", title: "Productivity Measurement & Workforce Insights",
      text: "How effectively does HR track productivity, workload, capacity, and workforce efficiency using digital tools or analytics?",
      choices: [
        { value: 1, text: "1. No productivity tracking or workload visibility." },
        { value: 2, text: "2. Basic manual tracking for select teams or centers." },
        { value: 3, text: "3. Standard dashboards showing workload distribution and employee utilization." },
        { value: 4, text: "4. Advanced analytics integrated with HCM and performance systems." },
        { value: 5, text: "5. Predictive insights forecasting capacity gaps, workload risks, and operational improvements." }
      ]
    },

    {
      id: "Q17", area: "Engagement", title: "Employee Engagement Monitoring & Actions",
      text: "How systematically does HR collect, measure, and act on employee engagement metrics (eNPS, surveys, pulse checks, exit insights)?",
      choices: [
        { value: 1, text: "1. Engagement not measured or monitored consistently." },
        { value: 2, text: "2. Occasional surveys without structured action plans." },
        { value: 3, text: "3. Annual engagement surveys with defined improvement initiatives." },
        { value: 4, text: "4. Continuous pulse-based engagement insights with targeted interventions." },
        { value: 5, text: "5. AI-driven sentiment analytics and predictive engagement risk analysis." }
      ]
    },

    {
      id: "Q18", area: "DEX", title: "Digital Employee Experience (DEX)",
      text: "What is the maturity of HR’s digital tools and processes in enhancing employee experience across the full lifecycle?",
      choices: [
        { value: 1, text: "1. Employee experience unmanaged; processes often manual and fragmented." },
        { value: 2, text: "2. Some digital tools exist but inconsistently applied." },
        { value: 3, text: "3. Standardized digital touchpoints across core HR services." },
        { value: 4, text: "4. End-to-end digital experience with feedback loops and service analytics." },
        { value: 5, text: "5. Personalized AI-driven experience with predictive recommendations and automation." }
      ]
    },

    {
      id: "Q19", area: "LMS", title: "LMS Adoption & Content Digitalization",
      text: "How mature is HR in using a Learning Management System (LMS) for digital courses, certifications, tracking, and development pathways?",
      choices: [
        { value: 1, text: "1. Training tracked manually; no LMS in use." },
        { value: 2, text: "2. Partial use of LMS for uploading training records." },
        { value: 3, text: "3. Standard LMS with course library and completion tracking." },
        { value: 4, text: "4. Full LMS integration with competency frameworks and digital journeys." },
        { value: 5, text: "5. AI-driven upskilling pathways with adaptive learning and predictive training needs." }
      ]
    },

    {
      id: "Q20", area: "Competency", title: "Learning Analytics & Competency Mapping",
      text: "How well does HR track skills, competencies, certification status, and development needs through analytics?",
      choices: [
        { value: 1, text: "1. No structured competency tracking system exists." },
        { value: 2, text: "2. Skills documented manually with limited accuracy." },
        { value: 3, text: "3. Structured competency matrix used for development planning." },
        { value: 4, text: "4. Competency analytics integrated with HRIS and learning systems." },
        { value: 5, text: "5. Predictive skill-gap analytics guiding talent mobility and workforce development." }
      ]
    },

    {
      id: "Q21", area: "Case Management", title: "HR Case Management System Maturity",
      text: "How mature is the HR case management system for handling employee requests, tracking SLAs, and resolving issues?",
      choices: [
        { value: 1, text: "1. Requests handled via email or informal channels." },
        { value: 2, text: "2. Basic tracking through Excel or shared mailboxes." },
        { value: 3, text: "3. Standard HR case management portal with SLAs." },
        { value: 4, text: "4. Fully digital case lifecycle with automated routing and dashboards." },
        { value: 5, text: "5. Intelligent case resolution with AI triage and knowledge-driven self-resolution." }
      ]
    },

    {
      id: "Q22", area: "Automation", title: "Automation of HR Operational Activities",
      text: "To what extent are routine HR tasks (contract creation, letters, payroll changes, attendance updates) automated?",
      choices: [
        { value: 1, text: "1. All activities performed manually." },
        { value: 2, text: "2. Limited automation for document generation." },
        { value: 3, text: "3. Moderate automation for key HR tasks." },
        { value: 4, text: "4. Fully automated workflows connected to HRIS/ERP." },
        { value: 5, text: "5. Intelligent automation with validation rules, data enrichment, and AI checks." }
      ]
    },

    {
      id: "Q23", area: "Data Governance", title: "HR Data Governance & Integrity",
      text: "How effectively does HR manage data quality, accuracy, audit control, and master data governance?",
      choices: [
        { value: 1, text: "1. Data quality unmanaged; frequent errors." },
        { value: 2, text: "2. Basic manual reviews for corrections." },
        { value: 3, text: "3. Defined structure for master data governance." },
        { value: 4, text: "4. Digital data validation and integrity checks embedded." },
        { value: 5, text: "5. Automated governance with AI-driven data cleansing and anomaly detection." }
      ]
    },

    {
      id: "Q24", area: "Cybersecurity", title: "HR Cybersecurity & Access Control",
      text: "How mature is access control, data privacy protection, and HR system security in alignment with corporate cybersecurity?",
      choices: [
        { value: 1, text: "1. No structured HR security controls in place." },
        { value: 2, text: "2. Basic authentication and manual access reviews." },
        { value: 3, text: "3. Role-based access enforced in HR systems." },
        { value: 4, text: "4. Regular audits, logs, and compliance with security policies." },
        { value: 5, text: "5. Advanced identity, privacy monitoring, and automated compliance enforcement." }
      ]
    }
