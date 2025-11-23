// quizzes/quiz_internal_audit.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["internal_audit"] = {
  title: "Internal Audit Department Digital Maturity Assessment (DMI)",
  shortcode: "AUDIT",
  totalQuestions: 18,
  maxScore: 18 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Audit Planning & Scheduling", questions: ["Q3", "Q4"] },
    { name: "3) Fieldwork & Workflow Automation", questions: ["Q5", "Q6"] },
    { name: "4) Policy & Methodology Management", questions: ["Q7", "Q8"] },
    { name: "5) CAPA & Integration", questions: ["Q9", "Q10"] },
    { name: "6) Reporting & Management Dashboards", questions: ["Q11", "Q12"] },
    { name: "7) Training & Knowledge Management", questions: ["Q13", "Q14"] },
    { name: "8) Digitalization Enhancement", questions: ["Q15", "Q16", "Q17", "Q18"] },

  ],
  questions: [
    {
      id: "Q1", area: "Catalogue", title: "Service Catalogue Definition",
      text: "Does the Internal Audit Department maintain a formal Service Catalogue defining all audit-related services delivered to other departments (e.g., operational audits, IT audits, compliance reviews, advisory engagements, follow-up reviews, and risk assessments)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured or formal audit service catalogue exists." },
        { value: 2, text: "2. Basic list of audit services maintained manually or in Excel." },
        { value: 3, text: "3. Documented Internal Audit Service Catalogue with partial coverage of functions and SLAs." },
        { value: 4, text: "4. Comprehensive digital catalogue with owners, SLAs, and service definitions." },
        { value: 5, text: "5. Fully integrated digital audit service catalogue linked to GRC/ERP with live SLA tracking." }
      ]
    },
    {
      id: "Q2", area: "Workflow", title: "Digital Workflow & SLA Tracking",
      text: "How are audit service requests, findings follow-ups, and advisory engagements initiated, tracked, and reported through digital systems (e.g., ERP, GRC, or ticketing platform)? How are SLAs for responses or closures monitored?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; audit requests handled manually or by email." },
        { value: 2, text: "2. Basic digital tracking in spreadsheets with manual SLA follow-up." },
        { value: 3, text: "3. Centralized workflow system for audit requests with limited automation." },
        { value: 4, text: "4. Fully digital platform with SLA monitoring and dashboard visibility." },
        { value: 5, text: "5. End-to-end workflow automation with predictive SLA alerts and integrated analytics." }
      ]
    },
    {
      id: "Q3", area: "Planning", title: "Annual Audit Plan Management",
      text: "Is the annual audit plan created and managed digitally, linking each engagement to risk assessments, resource planning, and past audit data?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; audit plan prepared manually." },
        { value: 2, text: "2. Basic planning system with limited linkage to risk data." },
        { value: 3, text: "3. Digital audit plan tool used for scheduling and resource tracking." },
        { value: 4, text: "4. Fully automated digital audit plan integrated with enterprise risk data." },
        { value: 5, text: "5. Dynamic risk-based planning engine with predictive audit scheduling and resource analytics." }
      ]
    },
    {
      id: "Q4", area: "Scheduling", title: "Scheduling & Engagement Tracking",
      text: "Are audit schedules, resource allocation, and engagement progress tracked through automated workflows or dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; tracking done manually or through Excel." },
        { value: 2, text: "2. Standalone tool used for basic scheduling and tracking." },
        { value: 3, text: "3. Digital scheduling dashboards with engagement progress visibility." },
        { value: 4, text: "4. Fully automated system linking audit schedules, resources, and KPIs." },
        { value: 5, text: "5. Predictive resource optimization dashboard with AI-based scheduling." }
      ]
    },
    {
      id: "Q5", area: "Fieldwork", title: "Fieldwork & Document Management",
      text: "Are audit fieldwork processes managed through a digital platform that allows working papers, evidence uploads, review notes, and real-time status tracking?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; working papers stored manually or emailed." },
        { value: 2, text: "2. Shared folders used for basic document uploads and reviews." },
        { value: 3, text: "3. Centralized digital platform for fieldwork documentation." },
        { value: 4, text: "4. Fully integrated Audit Management System (AMS) with version control and review workflows." },
        { value: 5, text: "5. Intelligent AMS with automated audit trails, workflow routing, and analytics dashboards." }
      ]
    },
    {
      id: "Q6", area: "Workflow", title: "Workflow Automation & Escalation",
      text: "Are approval workflows, exception handling, and issue escalations digitally automated with audit trail tracking and timestamped documentation?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; approvals managed manually or via email." },
        { value: 2, text: "2. Partial automation for select workflow steps." },
        { value: 3, text: "3. Standardized approval and escalation workflows implemented digitally." },
        { value: 4, text: "4. Fully automated approval and escalation workflows with audit trails." },
        { value: 5, text: "5. AI-enabled workflow orchestration with predictive escalation and compliance alerts." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Methodology Management",
      text: "Are internal audit policies, methodologies, and procedures digitally documented, version-controlled, and approved in alignment with IIA standards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies and procedures scattered or outdated." },
        { value: 2, text: "2. Partial documentation with manual version updates." },
        { value: 3, text: "3. Structured digital repository for audit policies and methodologies." },
        { value: 4, text: "4. Fully version-controlled system with audit compliance linkage." },
        { value: 5, text: "5. Automated policy management lifecycle with real-time updates and digital approvals." }
      ]
    },
    {
      id: "Q8", area: "Policy Updates", title: "Policy Communication & Updates",
      text: "How are updates to audit methodology and procedures communicated across the department and branches (e.g., via knowledge portal, automated alerts, or digital bulletins)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; updates communicated verbally or by email." },
        { value: 2, text: "2. Manual notification through circulars or shared folders." },
        { value: 3, text: "3. Structured update communication via digital bulletins or intranet." },
        { value: 4, text: "4. Automated alerts and acknowledgment tracking for all updates." },
        { value: 5, text: "5. Integrated communication portal with analytics on awareness and policy engagement." }
      ]
    },
    {
      id: "Q9", area: "CAPA", title: "Digital Issue & CAPA Management",
      text: "Is there a digital issue-management system for tracking audit findings, assigning corrective actions (CAPA), and monitoring closure progress across departments?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; CAPA tracked manually or in Excel." },
        { value: 2, text: "2. Basic CAPA logs maintained without closure tracking." },
        { value: 3, text: "3. Digital CAPA system for tracking actions and timelines." },
        { value: 4, text: "4. Fully automated CAPA tracker linked to audit findings and dashboards." },
        { value: 5, text: "5. Intelligent CAPA management platform with predictive alerts and cross-department reporting." }
      ]
    },
    {
      id: "Q10", area: "Integration", title: "Escalation & Integration with GRC Platforms",
      text: "Are escalation alerts, overdue reminders, and closure verifications integrated with ERP or GRC platforms for transparency?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; manual escalation through emails." },
        { value: 2, text: "2. Basic digital tracking with manual escalation follow-up." },
        { value: 3, text: "3. Automated alert system linked to audit reports." },
        { value: 4, text: "4. Fully integrated GRC or ERP module for closure and escalation tracking." },
        { value: 5, text: "5. AI-driven escalation management with automated root-cause linkage and compliance scoring." }
      ]
    },
    {
      id: "Q11", area: "Reporting", title: "Digital Reporting & Analytics",
      text: "Are audit reports generated, approved, and distributed digitally, with automated formatting, analytics visualization, and management dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; audit reports prepared manually." },
        { value: 2, text: "2. Semi-digital reporting with limited formatting templates." },
        { value: 3, text: "3. Fully digital report preparation and distribution system." },
        { value: 4, text: "4. Interactive dashboards and analytics embedded in digital reports." },
        { value: 5, text: "5. Automated report generation integrated with Power BI/GRC dashboards and predictive insights." }
      ]
    },
    {
      id: "Q12", area: "Dashboards", title: "Real-Time Management Dashboards",
      text: "Does management receive real-time visibility of audit status, high-risk findings, and CAPA implementation through digital dashboards or mobile apps?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reports shared periodically in manual form." },
        { value: 2, text: "2. Static dashboards updated manually." },
        { value: 3, text: "3. Live dashboards providing limited KPI visibility." },
        { value: 4, text: "4. Fully automated dashboards and mobile audit analytics for management." },
        { value: 5, text: "5. Predictive BI dashboards with real-time risk scoring and audit performance analytics." }
      ]
    },
    {
      id: "Q13", area: "Training", title: "Digital Training & Awareness",
      text: "Does the Internal Audit Department deliver digital training or awareness sessions for departments on audit readiness, internal controls, and self-assessment procedures?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; training conducted informally." },
        { value: 2, text: "2. Occasional awareness sessions or manual workshops." },
        { value: 3, text: "3. Structured training calendar tracked through LMS." },
        { value: 4, text: "4. Fully digital audit awareness program integrated with LMS analytics." },
        { value: 5, text: "5. Continuous learning system with AI-driven training recommendations and progress analytics." }
      ]
    },
    {
      id: "Q14", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a centralized knowledge repository that stores audit templates, checklists, risk libraries, and best practices accessible to the team with version control and search capability?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; templates and references scattered or outdated." },
        { value: 2, text: "2. Shared folder with limited template control." },
        { value: 3, text: "3. Centralized repository accessible to audit staff." },
        { value: 4, text: "4. Digital knowledge portal with metadata, ownership, and usage tracking." },
        { value: 5, text: "5. Intelligent repository with automated versioning, search, and continuous content improvement." }
      ]
    },


      // New Digitalization Enhancement Questions
    {
      id: "Q15", area: "Analytics", title: "Use of Data Analytics in Audit Execution",
      text: "Does the Internal Audit Department use data analytics or visualization tools (e.g., Power BI, ACL, Excel automation) to detect anomalies, assess transactions, or identify control weaknesses during audits?",
      choices: [
        { value: 1, text: "1. No use of data analytics; testing done manually." },
        { value: 2, text: "2. Occasional analytics using Excel or manual sampling." },
        { value: 3, text: "3. Regular use of analytics for key risk areas with limited automation." },
        { value: 4, text: "4. Integrated analytics dashboards used in most audits for trend analysis and risk detection." },
        { value: 5, text: "5. Continuous audit analytics integrated into ERP/GRC systems with predictive anomaly detection." }
      ]
    },
    {
      id: "Q16", area: "Collaboration", title: "Digital Collaboration & Communication Workflow",
      text: "Are auditees’ responses, evidence submissions, and management comments handled through digital workflow platforms instead of manual email exchanges?",
      choices: [
        { value: 1, text: "1. Manual communication through email or meetings only." },
        { value: 2, text: "2. Shared folders used for limited collaboration." },
        { value: 3, text: "3. Digital workflow used for evidence submission and response tracking." },
        { value: 4, text: "4. Integrated collaboration portal with role-based access and notifications." },
        { value: 5, text: "5. Intelligent collaboration hub with automated reminders, analytics, and response SLAs." }
      ]
    },
    {
      id: "Q17", area: "Performance", title: "Audit KPIs & Performance Dashboards",
      text: "Does the Internal Audit Department monitor audit performance through digital dashboards (e.g., audit cycle time, issue closure rate, resource utilization, and coverage metrics)?",
      choices: [
        { value: 1, text: "1. No digital KPIs or dashboards tracked." },
        { value: 2, text: "2. Basic KPIs tracked manually in Excel." },
        { value: 3, text: "3. Standard KPIs monitored digitally with limited automation." },
        { value: 4, text: "4. Fully automated dashboard tracking real-time audit performance and progress." },
        { value: 5, text: "5. Predictive analytics dashboards for audit performance, efficiency, and resource optimization." }
      ]
    },
    {
      id: "Q18", area: "Innovation", title: "Automation & Innovation Initiatives",
      text: "Has the Internal Audit Department implemented or piloted automation (e.g., RPA, AI-assisted audit testing, or automated report generation) to enhance efficiency and reduce repetitive work?",
      choices: [
        { value: 1, text: "1. No automation initiatives initiated." },
        { value: 2, text: "2. Early discussions or isolated pilot attempts." },
        { value: 3, text: "3. Limited automation implemented in select audit processes." },
        { value: 4, text: "4. Several audit processes automated with measurable efficiency gains." },
        { value: 5, text: "5. Department-wide automation strategy with continuous innovation pipeline." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Internal Audit processes are manual and paper-based. No digital systems or centralized documentation. Reporting is reactive and fragmented." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some audit plans, findings, and policies are documented digitally. Limited use of Excel or SharePoint tools. Manual coordination dominates." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Audit processes are standardized and supported by an Audit Management System (AMS). Findings and CAPAs are tracked systematically. KPIs and dashboards exist but may not be integrated across functions." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Audit operations are digitally integrated across systems. Real-time dashboards, automated reporting, workflow-driven issue management, and digital sign-offs are in place. Data-driven audit planning supports governance." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Internal Audit is fully automated, data-driven, and predictive. AI and analytics identify control weaknesses, emerging risks, and process inefficiencies proactively. Continuous auditing, full system integration, and enterprise-wide assurance mechanisms are embedded." }
  ]
};
  