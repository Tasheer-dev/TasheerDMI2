// quizzes/quiz_data_analytics.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["data_analytics"] = {
  title: "Data Analytics Department Digital Maturity Assessment (DMI)",
  shortcode: "DATA",
  totalQuestions: 17,
  maxScore: 17 * 5,
  sections: [
    { name: "1) Service Catalogue & Documentation", questions: ["Q1", "Q2", "Q3", "Q4"] },
    { name: "2) Workflow, Monitoring & Integration", questions: ["Q5", "Q6", "Q7", "Q8", "Q9", "Q10"] },
    { name: "3) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q11", "Q12"] },
    { name: "4) Compliance & Policy Adoption", questions: ["Q13", "Q14", "Q15"] },
    { name: "5) Knowledge Repository & Templates", questions: ["Q16", "Q17"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Data Analytics Service Catalogue",
      text: "Do you maintain a Data Analytics service catalogue listing all available analytics services (dashboards, reports, predictive models, self-service BI, data APIs) and their SLAs?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue for analytics exists." },
        { value: 2, text: "2. Basic list of analytics services maintained manually or in Excel." },
        { value: 3, text: "3. Documented analytics service catalogue with partial SLAs and owners." },
        { value: 4, text: "4. Fully digital analytics catalogue published internally with ownership and SLA coverage." },
        { value: 5, text: "5. Dynamic analytics catalogue integrated with BI portal, automated SLA tracking, and ownership matrix." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Analytics Documentation Coverage",
      text: "What percentage of dashboards, reports, and models are fully documented (scope, workflows, owners, data sources, KPIs)?",
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
      title: "Analytics Automation Coverage",
      text: "What percentage of data pipelines (ETL/ELT), reports, and dashboards are automated (vs. manual refresh)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; most analytics workflows are manual." },
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
      choices: [
        { value: 1, text: "1. Ad-hoc activity; automation plans not documented." },
        { value: 2, text: "2. Informal backlog maintained for improvement initiatives." },
        { value: 3, text: "3. Documented automation backlog with prioritized roadmap." },
        { value: 4, text: "4. Approved analytics automation strategy with measurable KPIs." },
        { value: 5, text: "5. Fully executed automation roadmap achieving near 100% planned automation." }
      ]
    },
    {
      id: "Q5", area: "Workflow",
      title: "Workflow, Monitoring & Integration",
      text: "Can you share examples of automated workflows for data ingestion, transformation, quality checks, and dashboard refresh? Which steps are still manual?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no consistent automation." },
        { value: 2, text: "2. Partial automation for key data ingestion processes." },
        { value: 3, text: "3. End-to-end automation for core pipelines with manual exceptions." },
        { value: 4, text: "4. Fully automated orchestration workflows with error-handling and recovery logs." },
        { value: 5, text: "5. AI-managed data orchestration framework with real-time anomaly prediction and resolution." }
      ]
    },
    {
      id: "Q6", area: "Monitoring",
      title: "Monitoring & Alert Integration",
      text: "Are data platforms integrated with monitoring tools (e.g., alerts for pipeline failure, data quality thresholds)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; monitoring handled manually." },
        { value: 2, text: "2. Partial integration for select data systems." },
        { value: 3, text: "3. Centralized monitoring of data pipelines via dashboards." },
        { value: 4, text: "4. Fully integrated monitoring and alerting system for all data platforms." },
        { value: 5, text: "5. Predictive monitoring framework with auto-remediation workflows." }
      ]
    },
    {
      id: "Q7", area: "AIOps",
      title: "Automated Feedback & AIOps",
      text: "Do you have automated feedback loops (e.g., anomaly detection, predictive alerts, rollback triggers, MTTR tracking for failed jobs)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automated feedback or alerts." },
        { value: 2, text: "2. Manual alerts based on failure logs." },
        { value: 3, text: "3. Semi-automated feedback loops using AIOps tools." },
        { value: 4, text: "4. Fully automated analytics alerting system with performance tracking." },
        { value: 5, text: "5. AI-driven anomaly detection and automated remediation platform." }
      ]
    },
    {
      id: "Q8", area: "Governance",
      title: "Data Governance & Compliance Policies",
      text: "Do documented policies exist for data governance, access control, quality management, retention, backup/DR, and compliance (GDPR/NCA)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies not documented." },
        { value: 2, text: "2. Basic data governance policies documented for limited scope." },
        { value: 3, text: "3. Comprehensive policy library covering governance, DR, and compliance." },
        { value: 4, text: "4. Digitally version-controlled data governance repository accessible to stakeholders." },
        { value: 5, text: "5. Automated data governance platform with compliance dashboards and audit tracking." }
      ]
    },
    {
      id: "Q9", area: "GapAnalysis",
      title: "Gap Analysis for Data Procedures",
      text: "Can you share a gap analysis of documented vs. missing data analytics procedures?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no gap analysis conducted." },
        { value: 2, text: "2. Informal identification of documentation gaps." },
        { value: 3, text: "3. Structured gap analysis performed annually." },
        { value: 4, text: "4. Regular digital reviews of documentation completeness." },
        { value: 5, text: "5. Continuous gap analysis dashboard integrated with governance scoring." }
      ]
    },
    {
      id: "Q10", area: "Accessibility",
      title: "Accessibility of Data Policies & Procedures",
      text: "Are all data policies and procedures accessible via a knowledge base or data governance portal?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies scattered across emails or folders." },
        { value: 2, text: "2. Central shared repository available to limited users." },
        { value: 3, text: "3. Knowledge base available to analytics staff." },
        { value: 4, text: "4. Fully digital governance portal with access analytics." },
        { value: 5, text: "5. Intelligent knowledge platform with AI search, access metrics, and acknowledgment tracking." }
      ]
    },
    {
      id: "Q11", area: "SOPs",
      title: "SOPs & Runbooks for Analytics Operations",
      text: "Are SOPs/runbooks available for recurring analytics activities (e.g., pipeline restart, report refresh, data validation, user onboarding)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not defined." },
        { value: 2, text: "2. Basic SOPs exist for limited use cases." },
        { value: 3, text: "3. Documented and approved runbooks for analytics operations." },
        { value: 4, text: "4. Fully digital runbook repository integrated with monitoring tools." },
        { value: 5, text: "5. Intelligent runbook automation system that triggers playbooks based on alerts." }
      ]
    },
    {
      id: "Q12", area: "Testing",
      title: "SOP Testing & Updates",
      text: "Are runbooks tested and updated regularly to reflect new tools, data sources, and incidents?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no update schedule." },
        { value: 2, text: "2. Updated after incidents on an ad-hoc basis." },
        { value: 3, text: "3. Periodic reviews conducted manually." },
        { value: 4, text: "4. Scheduled testing and version-controlled updates." },
        { value: 5, text: "5. Continuous improvement loop with auto-testing and change-tracking analytics." }
      ]
    },
    {
      id: "Q13", area: "Compliance",
      title: "Compliance & Data Policy Measurement",
      text: "Do you measure compliance with data policies (e.g., data classification, access rights, GDPR/NCA, ISO 27001)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not tracked." },
        { value: 2, text: "2. Manual review of policy adherence." },
        { value: 3, text: "3. Periodic compliance audits with reports." },
        { value: 4, text: "4. Automated compliance dashboards and audit alerts." },
        { value: 5, text: "5. AI-enabled data compliance engine with predictive compliance scoring." }
      ]
    },
    {
      id: "Q14", area: "WorkflowAdherence",
      title: "Workflow Adherence & Non-Compliance Handling",
      text: "What percentage of analytics processes (requests, pipeline changes, reports) follow documented workflows? How is non-compliance handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no workflow tracking." },
        { value: 2, text: "2. Manual tracking of workflow compliance." },
        { value: 3, text: "3. Digital reporting for workflow adherence." },
        { value: 4, text: "4. Automated workflow compliance dashboards with deviation alerts." },
        { value: 5, text: "5. Intelligent workflow governance system with real-time scoring and escalation triggers." }
      ]
    },
    {
      id: "Q15", area: "Awareness",
      title: "Data Literacy & Awareness",
      text: "Are business users trained and aware of analytics usage policies (data privacy, acceptable use, interpretation of KPIs)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured training." },
        { value: 2, text: "2. Occasional awareness sessions conducted manually." },
        { value: 3, text: "3. Regular training programs tracked through LMS." },
        { value: 4, text: "4. Digital training platform with analytics-specific courses and completion reports." },
        { value: 5, text: "5. Continuous learning ecosystem integrated with LMS and adaptive data-literacy analytics." }
      ]
    },
    {
      id: "Q16", area: "KnowledgeBase",
      title: "Knowledge Base & Templates",
      text: "Where is the analytics knowledge base hosted, and what templates/playbooks exist for analysts and business users (e.g., dashboard standards, data model templates, KPI definitions)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; templates scattered across shared drives." },
        { value: 2, text: "2. Basic knowledge repository created for reference." },
        { value: 3, text: "3. Structured data knowledge base hosted on SharePoint or Data Catalog." },
        { value: 4, text: "4. Fully digital, version-controlled analytics knowledge hub." },
        { value: 5, text: "5. AI-augmented knowledge repository with dynamic template recommendations and usage tracking." }
      ]
    },
    {
      id: "Q17", area: "KnowledgeReuse",
      title: "Knowledge Update & Reuse",
      text: "Are knowledge articles updated after project delivery, incidents, or governance changes?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge rarely updated." },
        { value: 2, text: "2. Manual updates after major incidents." },
        { value: 3, text: "3. Periodic reviews scheduled by governance team." },
        { value: 4, text: "4. Automated update cycles integrated with data governance workflows." },
        { value: 5, text: "5. Continuous AI-driven knowledge improvement system tracking reuse and relevance." }
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
