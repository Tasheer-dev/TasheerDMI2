// quizzes/quiz_sap.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["sap_ERP"] = {
  title: "SAP Department Digital Maturity Assessment (DMI)",
  shortcode: "sap",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Service Automation Coverage", questions: ["Q4", "Q5"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q6", "Q7", "Q8"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q9", "Q10", "Q11"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q12"] },
    { name: "6) Knowledge Repository & Templates", questions: ["Q13"] },
    { name: "7) Compliance & Policy Adoption", questions: ["Q14", "Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Do you maintain an SAP ERP service catalogue listing all available modules (e.g., Finance, MM, SD, HR) and their SLAs?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no documented SAP ERP service catalogue or SLAs." },
        { value: 2, text: "2. Basic module list exists without defined SLAs." },
        { value: 3, text: "3. Documented service catalogue with SLAs and module ownership." },
        { value: 4, text: "4. Fully digital service catalogue integrated with ITSM or ERP management dashboards." },
        { value: 5, text: "5. Dynamic service catalogue auto-updating with SLA tracking and performance KPIs." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Documentation Coverage",
      text: "What percentage of SAP ERP modules and processes are fully documented (scope, workflows, owners, KPIs)? Can you provide the documentation inventory?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documentation missing or outdated." },
        { value: 2, text: "2. Partial documentation for key SAP modules." },
        { value: 3, text: "3. 50–75% documentation coverage across functional modules." },
        { value: 4, text: "4. Comprehensive documentation repository with version control and review cycles." },
        { value: 5, text: "5. Fully automated documentation updates integrated with SAP Solution Manager." }
      ]
    },
    {
      id: "Q3", area: "Integration",
      title: "Workflow Integration with IT/Business Functions",
      text: "How integrated are your SAP ERP workflows with other IT/business functions (e.g., Service Desk, Security, external apps)? Is an end-to-end workflow available?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows isolated within SAP module teams." },
        { value: 2, text: "2. Basic integration between SAP and key IT systems." },
        { value: 3, text: "3. End-to-end workflow partially documented across business functions." },
        { value: 4, text: "4. Fully integrated cross-functional workflows visible through ERP dashboards." },
        { value: 5, text: "5. AI-driven workflow orchestration integrating SAP, ITSM, and business applications." }
      ]
    },
    {
      id: "Q4", area: "Automation",
      title: "Process Automation Coverage",
      text: "What percentage of SAP ERP processes (e.g., posting, reconciliations, reporting, user creation) are automated or include RPA/bots?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes executed manually." },
        { value: 2, text: "2. Partial automation (e.g., RPA for selected tasks)." },
        { value: 3, text: "3. 50–75% automation achieved across repetitive SAP processes." },
        { value: 4, text: "4. Fully automated SAP operational workflows with orchestration logs." },
        { value: 5, text: "5. Predictive, self-learning RPA bots optimizing SAP workflows automatically." }
      ]
    },
    {
      id: "Q5", area: "Roadmap",
      title: "Automation Roadmap",
      text: "What percentage of manual SAP ERP tasks are targeted for automation in the next year? Is there a documented automation backlog or roadmap?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation roadmap." },
        { value: 2, text: "2. Informal identification of manual SAP processes for automation." },
        { value: 3, text: "3. Documented automation backlog with defined milestones." },
        { value: 4, text: "4. Approved roadmap with measurable progress tracking." },
        { value: 5, text: "5. Continuous optimization roadmap with AI-driven automation planning." }
      ]
    },
    {
      id: "Q6", area: "Workflow",
      title: "Workflow, Monitoring & Integration (Automation Examples)",
      text: "Can you share examples of automated SAP ERP operational workflows (e.g., batch jobs, automated reporting, failure alerts)? Which processes still require manual intervention?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; most workflows manual." },
        { value: 2, text: "2. Some automated jobs implemented via scripts or basic scheduling." },
        { value: 3, text: "3. 50–75% of SAP batch and reporting workflows automated." },
        { value: 4, text: "4. Fully integrated automated workflows monitored via SAP Solution Manager." },
        { value: 5, text: "5. AI-powered workflows with predictive performance and failure prevention." }
      ]
    },
    {
      id: "Q7", area: "SystemIntegration",
      title: "System Integration (Monitoring & ITSM)",
      text: "Is SAP ERP integrated with monitoring tools, ITSM platforms (e.g., Onclick, Solution Manager), and security systems (e.g., SAP GRC)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no system integration." },
        { value: 2, text: "2. Basic integration between SAP and monitoring dashboards." },
        { value: 3, text: "3. Integrated alert and ticket creation between SAP and ITSM." },
        { value: 4, text: "4. Fully automated monitoring and escalation between SAP, GRC, and ITSM." },
        { value: 5, text: "5. Unified monitoring ecosystem powered by AI analytics and auto-remediation." }
      ]
    },
    {
      id: "Q8", area: "Feedback",
      title: "Automated Feedback & Predictive Alerts",
      text: "Do you have automated feedback loops (e.g., predictive alerts, compliance monitoring, rollback triggers, MTTR tracking) for SAP ERP operations?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback handled manually." },
        { value: 2, text: "2. Reactive alerts without analysis or closure tracking." },
        { value: 3, text: "3. Automated alerting and incident feedback loops." },
        { value: 4, text: "4. End-to-end feedback integration with incident resolution and trend analysis." },
        { value: 5, text: "5. Predictive AIOps-driven feedback and self-correcting SAP environments." }
      ]
    },
    {
      id: "Q9", area: "Policies",
      title: "Policies & Procedures Completeness",
      text: "Do documented policies and guidelines exist for SAP ERP management, incident response, change management, performance, backup, DR/BCP, and security protocols?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no documented policies." },
        { value: 2, text: "2. Basic policies covering key SAP functions." },
        { value: 3, text: "3. Comprehensive ERP operations policy library." },
        { value: 4, text: "4. Version-controlled repository accessible via governance portals." },
        { value: 5, text: "5. Automated policy enforcement integrated with compliance reporting." }
      ]
    },
    {
      id: "Q10", area: "GapAnalysis",
      title: "Gap Analysis of Procedures",
      text: "Can you share a gap analysis of documented vs. missing procedures for SAP ERP operations?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no gap analysis available." },
        { value: 2, text: "2. Informal procedure review conducted manually." },
        { value: 3, text: "3. Annual manual gap review documented in reports." },
        { value: 4, text: "4. Automated dashboard tracking missing or outdated SOPs." },
        { value: 5, text: "5. Continuous audit-based gap tracking integrated with GRC and compliance systems." }
      ]
    },
    {
      id: "Q11", area: "Accessibility",
      title: "Accessibility of Procedures",
      text: "Are all procedures accessible to users via SAP Knowledge Base, ITSM portal, or internal wiki?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documents shared informally." },
        { value: 2, text: "2. Shared drives or emails used for storage." },
        { value: 3, text: "3. Centralized SAP knowledge portal available to key teams." },
        { value: 4, text: "4. Fully digital ERP knowledge system with usage analytics." },
        { value: 5, text: "5. AI-enabled knowledge base suggesting relevant guides and procedures." }
      ]
    },
    {
      id: "Q12", area: "SOPs",
      title: "Runbooks & SOPs",
      text: "Are runbooks/SOPs available for recurring SAP ERP activities (e.g., daily closing, user management, audit response, backups)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not formalized." },
        { value: 2, text: "2. Basic runbooks exist for specific recurring SAP operations." },
        { value: 3, text: "3. Documented SOPs covering most routine SAP processes." },
        { value: 4, text: "4. Automated SOPs linked to incident management or workflow triggers." },
        { value: 5, text: "5. Self-executing runbook automation integrated with ERP orchestration tools." }
      ]
    },
    {
      id: "Q13", area: "KnowledgeBase",
      title: "Knowledge Repository & Templates",
      text: "Where is the knowledge base hosted, and what templates/playbooks exist for administrators, operators, and support staff?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; templates scattered across teams." },
        { value: 2, text: "2. Shared drive with limited standardization." },
        { value: 3, text: "3. Centralized SharePoint/Confluence repository with templates." },
        { value: 4, text: "4. Fully versioned and searchable knowledge system with onboarding kits." },
        { value: 5, text: "5. AI-assisted knowledge base auto-recommending playbooks and troubleshooting guides." }
      ]
    },
    {
      id: "Q14", area: "Compliance",
      title: "Compliance & Policy Adoption",
      text: "Do you measure compliance with SAP operational standards (e.g., SLAs, test frequency, security, ITIL adoption)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not monitored." },
        { value: 2, text: "2. Manual reviews and post-audit tracking." },
        { value: 3, text: "3. Automated compliance dashboards for key SAP modules." },
        { value: 4, text: "4. Continuous compliance monitoring with automated alerts." },
        { value: 5, text: "5. Predictive compliance management linked with audit and risk systems." }
      ]
    },
    {
      id: "Q15", area: "WorkflowAdherence",
      title: "Workflow Adherence",
      text: "What percentage of SAP ERP incidents, requests, and changes follow documented ITSM workflows? How is non-compliance handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes bypass formal workflows." },
        { value: 2, text: "2. Partial adherence monitored manually." },
        { value: 3, text: "3. Workflow adherence tracked in ITSM dashboards." },
        { value: 4, text: "4. Automated enforcement with exception reporting." },
        { value: 5, text: "5. AI-driven compliance rules preventing unauthorized bypasses." }
      ]
    },
    {
      id: "Q16", area: "Stakeholder",
      title: "Stakeholder Satisfaction",
      text: "Is stakeholder satisfaction with SAP ERP operations (uptime, responsiveness, stability) reported via survey or SLA dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback not collected." },
        { value: 2, text: "2. Periodic informal feedback collected." },
        { value: 3, text: "3. Regular satisfaction and SLA reports issued manually." },
        { value: 4, text: "4. Automated SLA dashboards integrated with user feedback data." },
        { value: 5, text: "5. Predictive satisfaction analytics correlating performance, uptime, and sentiment." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Ad-hoc, reactive, manual operations, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation; limited automation; reactive monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in place for core workflows; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented, strong automation, integrated monitoring and workflows." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully automated, end-to-end integrated, with continuous improvement metrics." }
  ]
};
