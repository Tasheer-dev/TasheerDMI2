// quizzes/quiz_platforms_it_ops.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["IT_Operations"] = {
  title: "Platforms & IT Solution Operations Digital Maturity Assessment (DMI)",
  shortcode: "PLATOPS",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Service Automation Coverage", questions: ["Q4", "Q5"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q6", "Q7", "Q8"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q9", "Q10", "Q11"] },
    { name: "5) Runbooks & Knowledge Repository", questions: ["Q12", "Q13"] },
    { name: "6) Compliance & Policy Adoption", questions: ["Q14", "Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Kindly share your Platforms & IT Operations service catalogue, including the services offered (e.g., infrastructure & hosting, cloud services, system administration, incident/problem management, monitoring & alerting, backup & recovery, disaster recovery) and their SLAs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; services provided without a documented catalogue or SLAs." },
        { value: 2, text: "2. Basic list of IT operations services maintained manually." },
        { value: 3, text: "3. Documented service catalogue covering most services with defined SLAs." },
        { value: 4, text: "4. Fully digital service catalogue integrated with ITSM and ownership defined." },
        { value: 5, text: "5. Dynamic operations catalogue with automated SLA tracking, service owners, and KPI dashboards." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Documentation of Operations Services",
      text: "What percentage of Platforms & IT Operations services are fully documented (scope, process flows, owners, KPIs)? Can you provide a list or inventory?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; limited or outdated documentation." },
        { value: 2, text: "2. Basic documentation for selected IT services." },
        { value: 3, text: "3. 50–75% of IT services documented with workflows and ownership." },
        { value: 4, text: "4. Fully documented operations repository with version control and approvals." },
        { value: 5, text: "5. Automated documentation and continuous update pipeline integrated with change management." }
      ]
    },
    {
      id: "Q3", area: "Integration",
      title: "Cross-Functional Integration of Operations Workflows",
      text: "How are Platforms & IT Operations workflows integrated with other IT and business functions (e.g., Service Desk, Security Operations, Development teams, Business stakeholders)? Is there an end-to-end operations workflow documented?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows are isolated within teams." },
        { value: 2, text: "2. Partial coordination between core IT functions." },
        { value: 3, text: "3. Documented workflows integrating key functions like Service Desk and Infra." },
        { value: 4, text: "4. Fully automated end-to-end workflows across IT and business domains." },
        { value: 5, text: "5. Unified service orchestration layer connecting IT, Security, and Business Operations." }
      ]
    },
    {
      id: "Q4", area: "Automation",
      title: "Automation of Operational Processes",
      text: "What percentage of operational processes (e.g., server provisioning, patching, backup, capacity scaling, incident resolution) are fully or partially automated?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes manual or semi-structured." },
        { value: 2, text: "2. 25–50% of processes automated using scripts or partial tools." },
        { value: 3, text: "3. Majority (50–75%) automated using RPA/IaC/ITSM workflows." },
        { value: 4, text: "4. Fully automated operational workflows with dashboards." },
        { value: 5, text: "5. AI-driven predictive automation with self-healing capabilities." }
      ]
    },
    {
      id: "Q5", area: "Roadmap",
      title: "Automation Planning & Roadmap",
      text: "What percentage of manual tasks are targeted for automation in the next 12 months?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation roadmap defined." },
        { value: 2, text: "2. Informal list of automation candidates exists." },
        { value: 3, text: "3. Documented automation plan with prioritized backlog." },
        { value: 4, text: "4. Approved automation roadmap with KPIs and progress metrics." },
        { value: 5, text: "5. Fully achieved automation targets with continuous optimization roadmap." }
      ]
    },
    {
      id: "Q6", area: "Workflow",
      title: "Automated Operational Workflows",
      text: "Can you share examples of automated operational workflows (e.g., server patching, automated incident creation, performance scaling, failover procedures) and identify steps still requiring manual intervention?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; most workflows manual." },
        { value: 2, text: "2. Isolated automation scripts used inconsistently." },
        { value: 3, text: "3. Partial automation for core operational tasks." },
        { value: 4, text: "4. End-to-end orchestration across systems with monitoring and audit trails." },
        { value: 5, text: "5. AI-orchestrated workflows with real-time remediation and predictive automation." }
      ]
    },
    {
      id: "Q7", area: "IntegrationSystems",
      title: "System Integration (ITSM, Monitoring, Security)",
      text: "Are operations workflows integrated with ITSM, monitoring, and security systems (e.g., ServiceNow, Splunk, Dynatrace, Nagios, SIEM)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; standalone systems, no integration." },
        { value: 2, text: "2. Partial integration for select tools or data feeds." },
        { value: 3, text: "3. Integration established for core monitoring and ITSM systems." },
        { value: 4, text: "4. Full integration of ITSM, security, and monitoring platforms." },
        { value: 5, text: "5. Unified observability layer across IT, security, and performance analytics." }
      ]
    },
    {
      id: "Q8", area: "AIOps",
      title: "Automated Feedback & AIOps",
      text: "Do you have automated feedback loops (e.g., predictive alerts, vulnerability scans, rollback triggers, MTTR tracking)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback loops manual." },
        { value: 2, text: "2. Reactive alerting and manual tracking." },
        { value: 3, text: "3. Basic automated alerts with limited feedback analysis." },
        { value: 4, text: "4. Fully automated feedback and remediation integrated with ITSM." },
        { value: 5, text: "5. AI-powered AIOps system with anomaly prediction and automated root-cause analysis." }
      ]
    },
    {
      id: "Q9", area: "Policies",
      title: "Policies & Procedures Documentation Completeness",
      text: "Do you maintain documented policies and guidelines for platform management, incident response, performance monitoring, backup & recovery, patch management, DR/BCP, and security protocols?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal documentation exists." },
        { value: 2, text: "2. Basic set of policies for core IT operations." },
        { value: 3, text: "3. Comprehensive policy library covering all operational areas." },
        { value: 4, text: "4. Fully version-controlled and reviewed documentation repository." },
        { value: 5, text: "5. Intelligent policy management system linked to compliance and audit dashboards." }
      ]
    },
    {
      id: "Q10", area: "GapAnalysis",
      title: "Gap Analysis of Procedures",
      text: "Can you share a gap analysis of which operational procedures exist versus those still under review or missing?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; gaps not tracked or documented." },
        { value: 2, text: "2. Informal review conducted occasionally." },
        { value: 3, text: "3. Annual manual review of procedure completeness." },
        { value: 4, text: "4. Automated documentation audit with coverage metrics." },
        { value: 5, text: "5. Continuous compliance-based gap analysis integrated with GRC tools." }
      ]
    },
    {
      id: "Q11", area: "KnowledgeAccess",
      title: "Knowledge Accessibility",
      text: "Are all procedures accessible to the team (e.g., via ITSM portal, wiki, knowledge base)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documents shared via email or drives." },
        { value: 2, text: "2. Shared folder with limited access control." },
        { value: 3, text: "3. Centralized IT operations knowledge base accessible to teams." },
        { value: 4, text: "4. Fully digital portal with analytics on access and usage." },
        { value: 5, text: "5. AI-enabled knowledge system recommending context-based procedures automatically." }
      ]
    },
    {
      id: "Q12", area: "SOPs",
      title: "Runbooks & Standard Operating Procedures (SOPs)",
      text: "Do you maintain runbooks/SOPs for recurring activities (e.g., incident response, patching, backup, DR, failover, maintenance windows)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not defined or scattered." },
        { value: 2, text: "2. Basic SOPs developed for some recurring operations." },
        { value: 3, text: "3. Centralized SOP repository with approval history." },
        { value: 4, text: "4. Fully automated SOP system linked with alert triggers." },
        { value: 5, text: "5. Self-executing runbook automation integrated with orchestration tools." }
      ]
    },
    {
      id: "Q13", area: "KnowledgeBase",
      title: "Knowledge Repository & Templates",
      text: "Where is the knowledge base hosted, and what templates/playbooks exist for administrators, operators, and support staff?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured repository." },
        { value: 2, text: "2. Basic repository or shared SharePoint site." },
        { value: 3, text: "3. Structured Confluence/SharePoint repository with templates and guides." },
        { value: 4, text: "4. Fully digital knowledge management platform with version control." },
        { value: 5, text: "5. AI-driven knowledge hub with template recommendations and usage tracking." }
      ]
    },
    {
      id: "Q14", area: "Compliance",
      title: "Compliance & Policy Adoption",
      text: "Do you measure compliance with operational standards (e.g., patching SLAs, DR test frequency, vulnerability management, ITIL adoption)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not measured." },
        { value: 2, text: "2. Manual compliance tracking through reports." },
        { value: 3, text: "3. Regular audits and compliance dashboards established." },
        { value: 4, text: "4. Fully automated compliance measurement system with alerts." },
        { value: 5, text: "5. Predictive compliance analytics integrated with risk management." }
      ]
    },
    {
      id: "Q15", area: "WorkflowAdherence",
      title: "Workflow Adherence & Non-Compliance Handling",
      text: "What percentage of incidents, requests, and changes follow the documented ITSM workflows without unauthorized bypass? How is non-compliance handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows not followed consistently." },
        { value: 2, text: "2. Manual monitoring of adherence." },
        { value: 3, text: "3. Digital workflow adherence reports available." },
        { value: 4, text: "4. Fully automated workflow monitoring with exception reporting." },
        { value: 5, text: "5. Real-time compliance engine preventing unauthorized deviations." }
      ]
    },
    {
      id: "Q16", area: "Stakeholder",
      title: "Stakeholder Satisfaction & SLA Monitoring",
      text: "Do you measure stakeholder satisfaction with IT operations (e.g., uptime, responsiveness, stability)? Can you share survey results or SLA performance reports?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; stakeholder feedback not formally collected." },
        { value: 2, text: "2. Periodic manual surveys with limited follow-up." },
        { value: 3, text: "3. Regular SLA and satisfaction tracking through dashboards." },
        { value: 4, text: "4. Automated feedback loop with continuous SLA monitoring." },
        { value: 5, text: "5. Predictive SLA optimization engine using AI-based sentiment and performance analytics." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, manual operations, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation; limited automation; reactive monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in place for core workflows; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented, strong automation, integrated monitoring and workflows." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully automated, end-to-end integrated, with continuous improvement metrics." }
  ]
};
