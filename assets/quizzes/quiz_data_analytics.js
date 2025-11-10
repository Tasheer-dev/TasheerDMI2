// quizzes/quiz_data_analytics.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["data_analytics"] = {
  title: "Data Analytics Department Digital Maturity Assessment (DMI)",
  shortcode: "DATA",
  totalQuestions: 18,
  maxScore: 18 * 5,
  sections: [
    { name: "1) Service Catalogue & Documentation", questions: ["Q1", "Q2", "Q3", "Q4"] },
    { name: "2) Data Management & Quality", questions: ["Q5", "Q6", "Q7", "Q8", "Q9", "Q10"] },
    { name: "3) Knowledge Base & Template Standardization ", questions: ["Q11", "Q12"] },
    { name: "4) Compliance & Policy Adoption", questions: ["Q13", "Q14"] },
    { name: "5) Technology Stack Modernization", questions: ["Q15",  "Q16", "Q17", "Q18"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Data Analytics Service Catalogue",
      text: "To what extent does the department maintain a centralized catalogue of analytics services (dashboards, reports, predictive models, data APIs) with ownership and SLAs?",
      Evidence: "Published service catalogue, BI portal page, or SLA documentations.",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue for analytics exists." },
        { value: 2, text: "2. Basic list of analytics services maintained manually or in Excel." },
        { value: 3, text: "3. Documented analytics service catalogue with partial SLAs and owners." },
        { value: 4, text: "4️. Digital catalogue published in ITSM or BI portal with SLA visibility." },
        { value: 5, text: "5. Dynamic analytics catalogue integrated with BI portal, automated SLA tracking, and ownership matrix." }
      ]
    },
    {
      id: "Q2", area: "Documentation of processes",
      title: "Documentation of Analytics Assets",
      text: "What percentage of dashboards, reports, and models are fully documented (scope, workflows, owners, data sources, KPIs)?",
      Evidence: "Pdf documentation, diagrams , or flowcharts .",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; documentation incomplete or informal." },
        { value: 2, text: "2. Partial documentation for selected dashboards or reports." },
        { value: 3, text: "3. Comprehensive documentation maintained for core assets." },
        { value: 4, text: "4. Digitally version-controlled data documentation repository available to all teams." },
        { value: 5, text: "5. Automated data documentation pipeline with metadata tagging and governance alerts." }
      ]
    },
    {
      id: "Q3", area: "Automation",
      title: "Automation of Data Workflows & Integrations",
      text: "What percentage of data pipelines (ETL/ELT), reports, and dashboards are automated (vs. manual refresh)?",
            Evidence: "Workflow swimlanes, ADF pipelines, ITSM request flow.",

      choices: [
        { value: 1, text: "1. Mostly manual.." },
        { value: 2, text: "2. 25–50% automation for recurring dashboards or reports." },
        { value: 3, text: "3. 50–75% of data workflows automated with orchestration tools." },
        { value: 4, text: "4. Fully automated pipelines and dashboards with monitoring dashboards." },
        { value: 5, text: "5. Intelligent automation platform with predictive job orchestration and failure recovery." }
      ]
    },
    {
      id: "Q4", area: "Roadmap",
      title: "Analytics Automation Roadmap",
      text: "Is there a documented backlog/roadmap of manual analytics tasks targeted for automation?",
           Evidence: "DevOps/Jira backlog, ITSM enhancement queue.",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; automation plans not documented." },
        { value: 2, text: "2. Informal backlog maintained for improvement initiatives." },
        { value: 3, text: "3. Documented automation backlog with prioritized roadmap." },
        { value: 4, text: "4. Approved analytics automation strategy with measurable KPIs." },
        { value: 5, text: "5. Fully executed automation roadmap achieving near 100% planned automation." }
      ]
    },
    {
      id: "Q5", area: "Data Quality",
      title: "Data Quality",
      text: "Are data quality dimensions (accuracy, completeness, consistency, timeliness) defined, monitored, and remediated?",
            Evidence: "Data quality dashboard, issue log, governance reports .",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; No formal quality checks." },
        { value: 2, text: "2. Manual corrections after issues arise." },
        { value: 3, text: "3. Defined dimensions with periodic checks." },
        { value: 4, text: "4. Automated Data quality monitoring and remediation workflows." },
        { value: 5, text: "5. Continuous data quality scoring with predictive issue detection." }
      ]
    },
    {
      id: "Q6", area: "Monitoring & Alert Framework",
      title: "Monitoring & Alert Framework",
      text: "Are data pipelines and dashboards monitored for failure or data quality thresholds through integrated alert systems?",
          Evidence: "Monitoring dashboards, email/SMS alerts, ADF/Azure Monitor logs .",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; monitoring handled manually." },
        { value: 2, text: "2. Periodical Manual checks only." },
        { value: 3, text: "3. Centralized monitoring without dashboards." },
        { value: 4, text: "4. Centralized monitoring of data pipelines via dashboards." },
        { value: 5, text: "5. Fully integrated monitoring and alerting system for all data platforms." }
      ]
    },
    {
      id: "Q7", area: "AIOps",
      title: "Incident Feedback & Resolution Tracking",
      text: "Do you use automated mechanisms to capture and analyze failed data jobs or Tableau refresh incidents for continuous improvement?, predictive alerts, rollback triggers, MTTR tracking for failed jobs)?",
           Evidence: "ITSM incident logs, MTTR dashboards, or AIOps analytics .",
 
      choices: [
        { value: 1, text: "1. Failures handled manually with no tracking." },
        { value: 2, text: "2. Manual logs in shared spreadsheets." },
        { value: 3, text: "3. Semi-automated feedback loops using AIOps tools." },
        { value: 4, text: "4. Fully automated analytics alerting system with performance tracking." },
        { value: 5, text: "5. AI-driven anomaly detection and automated remediation platform." }
      ]
    },
    {
      id: "Q8", area: "Data Architecture & Infrastructure Readiness",
      title: "Data Architecture & Infrastructure Readiness",
      text: "How capable is the data architecture (e.g., warehouse, integration, cloud readiness) in supporting scalable analytics?",
           Evidence: "Architecture diagrams, integration logs, cloud migration plan.",

      choices: [
        { value: 1, text: "1. Legacy, siloed data systems." },
        { value: 2, text: "2. Partial integration with limited scalability." },
        { value: 3, text: "3. Modern architecture supporting cross-department analytics." },
        { value: 4, text: "4. Cloud-ready and API-enabled infrastructure." },
        { value: 5, text: "5. Fully cloud-native, integrated, and resilient data ecosystem." }
      ]
    },
    {
      id: "Q9", area: "Metadata Management",
      title: "Metadata Management",
      text: "Is metadata (data definitions, lineage, ownership) actively managed and made available to users??",
          Evidence: "Data catalog, metadata documentation, Tableau/Power BI data source definitions.",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; No metadata documentation." },
        { value: 2, text: "2. No metadata documentation." },
        { value: 3, text: "3. Central metadata repository with manual updates." },
        { value: 4, text: "4. Automated metadata extraction from BI and ETL tools." },
        { value: 5, text: "5. Fully integrated data catalog with searchable metadata and lineage visualization." }
      ]
    },
    {
      id: "Q10", area: "Analytics & Capabilities",
      title: "Analytical Techniques & Maturity",
      text: "What level of analytical methods are regularly applied by the department?",
            Evidence: "Project examples, Tableau dashboards, ML/AI reports.",

      choices: [
        { value: 1, text: "1. Descriptive only (what happened)." },
        { value: 2, text: "2. Diagnostic (why it happened)." },
        { value: 3, text: "3. Predictive (what will happen)." },
        { value: 4, text: "4. Prescriptive (what should we do)." },
        { value: 5, text: "5. Cognitive/AI-driven analytics with automation and adaptive learning." }
      ]
    },
    {
      id: "Q11", area: "SOPs",
      title: "Procedures & Runbooks for Analytics Operations",
      text: "Are SOPs/Procedures available for recurring analytics activities (e.g., pipeline restart, report refresh, data validation, user onboarding)?",
           Evidence: "Pdf documentation, diagrams , or flowcharts .",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not defined." },
        { value: 2, text: "2. Basic workflow exist for limited use cases." },
        { value: 3, text: "3. Documented runbooks for analytics operations." },
        { value: 4, text: "4. Approved runbook repository." },
        { value: 5, text: "5. Fully digital runbook repository integrated with monitoring tools." }
      ]
    },
    {
      id: "Q12", area: "Templates",
      title: "Templates & Reuse Process",
      text: "Is there a centralized template repository for analytics templates, projects, and pre recommending case templates ?",
           Evidence: "SharePoint analytics, or reuse tracking report,portal, template repository, or BI wiki .",

      choices: [
        { value: 1, text: "1. No structured repository, but Rarely updated.." },
        { value: 2, text: "2. Updated manually after some cases on an ad-hoc basis." },
        { value: 3, text: "3. Basic collection of templates manually." },
        { value: 4, text: "4. Organized repository with approved templates." },
        { value: 5, text: "5. Tool knowledge hub recommending templates dynamically." }
      ]
    },
      {
      id: "Q13", area: "Compliance",
      title: "Data Governance & Compliance ",
      text: "Are analytics data governance procedures documented, approved, and aligned with national (NCA/GDPR) standards?",
           Evidence: "compliance report, or governance check list .",

      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies not documented." },
        { value: 2, text: "2. Initial drafts under review" },
        { value: 3, text: "3. Comprehensive compliance report compliance ,Compliance documented and partially implemented." },
        { value: 4, text: "4. Digitally version-controlled compliance report accessible to stakeholders." },
        { value: 5, text: "5. Automated data governance platform with compliance dashboards and audit tracking." }
      ]
    },

    {
      id: "Q14", area: "Policy Communication & Adoption",
      title: "Policy Communication & Adoption",
      text: "Are analytics and data management policies communicated and accessible to all staff and stakeholders?",
           Evidence: "Share Folder repository, policy portal, acknowledgment records.",
 
      choices: [
        { value: 1, text: "1. Ad-hoc activity; Policies scattered or unavailable." },
        { value: 2, text: "2. low tracking Uploaded to shared folders but not maintained." },
        { value: 3, text: "3. Policy partially developed and under review ." },
        { value: 4, text: "4. Approved Central repository accessible to analytics staff." },
        { value: 5, text: "5. Fully digital portal with acknowledgment tracking." }
      ]
    },
    {
      id: "Q15", area: "Tools & Platform Utilization",
      title: "Tools & Platform Utilization",
      text: "How effectively are BI, data science, and visualization tools utilized to meet organizational analytics needs?",
           Evidence: "Tableau usage stats, license reports, performance dashboards..",

      choices: [
        { value: 1, text: "1. Tools underutilized or misaligned with needs." },
        { value: 2, text: "2. Basic usage limited to few users." },
        { value: 3, text: "3. Department-wide adoption of BI platforms." },
        { value: 4, text: "4. Integrated BI + ML toolchain supporting collaboration." },
        { value: 5, text: "5. Optimized tool ecosystem enabling innovation, scalability, and data." }
      ]
    },
    {
      id: "Q16", area: "Automation Across the Analytics Lifecycle",
      title: "Automation Across the Analytics Lifecycle",
      text: "Where is the analytics knowledge base hosted, and what templates/playbooks exist for analysts and business users (e.g., dashboard standards, data model templates, KPI definitions)?",
           Evidence: "ITSM workflows, ADF pipelines, refresh schedules.",
 
      choices: [
        { value: 1, text: "1. Manual processing." },
        { value: 2, text: "2. Partial automation for select workflows." },
        { value: 3, text: "3. Majority automated with exceptions logged." },
        { value: 4, text: "4. Fully automated with exception handling and monitoring." },
        { value: 5, text: "5. Fully automated with exception handling and monitoring, with Tableau reports." }
      ]
    },
    {
      id: "Q17", area: "Performance Measurement & KPI Tracking",
      title: "Performance Measurement & KPI Tracking",
      text: "Are there defined KPIs that measure the success and timeliness of analytics services?",
           Evidence: "Internal Tableau KPI dashboard, SLA reports, ITSM analytics.",
 
      choices: [
        { value: 1, text: "1. Manual measurement No KPIs defined system ." },
        { value: 2, text: "2. KPIs exist but not monitored." },
        { value: 3, text: "3. Regular KPI tracking for analytics delivery." },
        { value: 4, text: "4. Automated performance dashboards with SLA metrics." },
        { value: 5, text: "5. Predictive KPI monitoring for service optimization and forecasting." }
      ]
    }
    ,
    {
      id: "Q18", area: "Customer Experience & Insight-Driven Actionability",
      title: "Customer Experience & Insight-Driven Tracking",
      text: "How effectively are analytics and insights used to improve customer experience and services?",
           Evidence: "User feedback, analytics-driven initiatives, satisfaction surveys.",
 
      choices: [
        { value: 1, text: "1. Ad-hoc feedback considered." },
        { value: 2, text: "2. Manual feedback by E-mail , No customer-focused analytics system .." },
        { value: 3, text: "3. Regular Customer data analyzed feed back for service improvements." },
        { value: 4, text: "4. Automated Customer feedback request analytical system ." },
        { value: 5, text: "5. Personalized dashboards or campaigns based on insights from Customer Experience ." }
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
