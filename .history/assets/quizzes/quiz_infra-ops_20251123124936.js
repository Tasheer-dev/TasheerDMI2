// quizzes/quiz_infra_network.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["infra_ops"] = {
  title: "Infrastructure & Network Operations Digital Maturity Assessment (DMI)",
  shortcode: "INFRA",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Service Automation Coverage", questions: ["Q4", "Q5"] },
    { name: "3) Workflow & Process Automation and Integration", questions: ["Q6", "Q7", "Q8"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q9", "Q10", "Q11"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q12"] },
    { name: "6) Knowledge Repository & Templates", questions: ["Q13"] },
    { name: "7) Compliance & Policy Adoption", questions: ["Q14", "Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Kindly share your service catalogue for Infrastructure and Network services, including the types of services offered (e.g., server provisioning, cloud resource management, VPN access, firewall rule changes, load balancing) and their defined SLAs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue or SLAs." },
        { value: 2, text: "2. Basic inventory of services maintained manually or within teams." },
        { value: 3, text: "3. Documented catalogue with defined SLAs and owners." },
        { value: 4, text: "4. Fully digital service catalogue integrated with request systems and SLA tracking." },
        { value: 5, text: "5. Dynamic service catalogue with automated SLA updates, ownership visibility, and KPI dashboards." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Documentation of Operational Processes",
      text: "What percentage of your core operational processes (e.g., server patching, data backup, firewall rule implementation, switch configuration) are fully documented with process flows, owners, and KPIs?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documentation informal or missing." },
        { value: 2, text: "2. Partial documentation for critical network and server operations." },
        { value: 3, text: "3. 50–75% of processes documented with clear ownership and workflow diagrams." },
        { value: 4, text: "4. Comprehensive, version-controlled documentation library accessible to all staff." },
        { value: 5, text: "5. Fully automated documentation and update cycle linked to CMDB and change management systems." }
      ]
    },
    {
      id: "Q3", area: "Integration",
      title: "Workflow Integration",
      text: "How are your services integrated into an end-to-end delivery workflow (e.g., service request → approval → provisioning → configuration → handover)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; service delivery handled in silos." },
        { value: 2, text: "2. Partial integration between provisioning and approval steps." },
        { value: 3, text: "3. Defined workflows connecting service request, approval, and provisioning." },
        { value: 4, text: "4. Fully automated end-to-end workflows documented and monitored." },
        { value: 5, text: "5. AI-driven orchestration of service delivery across ITSM, CMDB, and monitoring systems." }
      ]
    },
    {
      id: "Q4", area: "Automation",
      title: "Service Automation Coverage",
      text: "What percentage of operational tasks (e.g., server builds, patching, backups, health checks, user creation) are fully or partially automated?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; most tasks manual." },
        { value: 2, text: "2. 25–50% automation via scripts or scheduled tasks." },
        { value: 3, text: "3. Majority of operations automated using orchestration tools (e.g., Ansible, Terraform)." },
        { value: 4, text: "4. Fully automated IaC/NaC deployments with auto-remediation workflows." },
        { value: 5, text: "5. Predictive and self-healing infrastructure automation with minimal human intervention." }
      ]
    },
    {
      id: "Q5", area: "Roadmap",
      title: "Automation Planning",
      text: "What percentage of manual processes are targeted for automation in the next 6–12 months?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation planning." },
        { value: 2, text: "2. Initial identification of manual tasks for automation." },
        { value: 3, text: "3. Documented automation backlog under review." },
        { value: 4, text: "4. Approved automation roadmap with measurable KPIs." },
        { value: 5, text: "5. 100% automation goal achieved with continuous optimization cycle." }
      ]
    },
    {
      id: "Q6", area: "WorkflowExamples",
      title: "Workflow & Process Automation Examples",
      text: "Can you share examples of automated workflows, such as auto-provisioning a cloud server or automatically adding a VLAN to a switch port? Identify steps still requiring manual intervention.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes executed manually." },
        { value: 2, text: "2. Basic automation scripts exist for select tasks." },
        { value: 3, text: "3. End-to-end automation in core processes with limited manual review." },
        { value: 4, text: "4. Fully orchestrated workflows connected to ITSM and monitoring tools." },
        { value: 5, text: "5. Intelligent automation with AI-assisted provisioning and change validation." }
      ]
    },
    {
      id: "Q7", area: "SystemIntegration",
      title: "System Integration (ITSM, CMDB, Monitoring)",
      text: "Are your monitoring systems integrated with your ITSM, Change Management, and CMDB platforms (e.g., alerts automatically create tickets linked to the correct server)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; monitoring and ITSM systems operate independently." },
        { value: 2, text: "2. Partial integration for specific alert types." },
        { value: 3, text: "3. Ticket creation automated for key monitored assets." },
        { value: 4, text: "4. Full integration with bi-directional updates between CMDB and ITSM." },
        { value: 5, text: "5. Predictive integration layer with AI correlation of alerts, tickets, and assets." }
      ]
    },
    {
      id: "Q8", area: "Feedback",
      title: "Automated Feedback Loops & Monitoring",
      text: "Do you have automated feedback loops from your infrastructure (e.g., performance alerts, security compliance drift, auto-scaling notifications)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback and alerting handled manually." },
        { value: 2, text: "2. Reactive monitoring dashboards in use." },
        { value: 3, text: "3. Automated feedback loops for key systems and services." },
        { value: 4, text: "4. Centralized monitoring and automated alert handling across infrastructure." },
        { value: 5, text: "5. AI-based predictive feedback mechanisms with proactive issue prevention." }
      ]
    },
    {
      id: "Q9", area: "Policies",
      title: "Policies & Documentation Completeness",
      text: "Do you have documented policies, procedures, and hardening standards for key infrastructure and network components (e.g., OS hardening, segmentation, data protection, cloud security)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies missing or outdated." },
        { value: 2, text: "2. Partial documentation for major components only." },
        { value: 3, text: "3. Comprehensive documentation of infrastructure and network policies." },
        { value: 4, text: "4. Fully version-controlled repository accessible to teams." },
        { value: 5, text: "5. Automated policy compliance monitoring integrated with security scanners." }
      ]
    },
    {
      id: "Q10", area: "GapAnalysis",
      title: "Gap Analysis of Procedures",
      text: "Can you share a gap analysis of which operational procedures exist versus what is still missing or under review?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal review process." },
        { value: 2, text: "2. Informal reviews performed occasionally." },
        { value: 3, text: "3. Annual review identifying documentation and process gaps." },
        { value: 4, text: "4. Automated tracking of documentation completeness via dashboard." },
        { value: 5, text: "5. Continuous improvement engine with live compliance scoring and tracking." }
      ]
    },
    {
      id: "Q11", area: "Accessibility",
      title: "Accessibility of Standards",
      text: "Are all operational processes and standards easily accessible to the team and stakeholders in a centralized location?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies shared informally or by email." },
        { value: 2, text: "2. Basic shared folder or wiki available." },
        { value: 3, text: "3. Central knowledge base with standard templates and guides." },
        { value: 4, text: "4. Fully digital portal with access analytics." },
        { value: 5, text: "5. AI-powered knowledge platform with role-based visibility and intelligent recommendations." }
      ]
    },
    {
      id: "Q12", area: "SOPs",
      title: "Runbooks & SOPs for Operations",
      text: "Do you maintain runbooks or SOPs for recurring operational activities and incident response (e.g., server outage, network link failure, data restoration, DR failover)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; runbooks absent or inconsistent." },
        { value: 2, text: "2. Basic SOPs exist for select critical operations." },
        { value: 3, text: "3. Documented runbooks for recurring infrastructure and network tasks." },
        { value: 4, text: "4. Fully digital runbook library linked with alert automation." },
        { value: 5, text: "5. Intelligent, self-triggering runbooks integrated with monitoring systems." }
      ]
    },
    {
      id: "Q13", area: "KnowledgeBase",
      title: "Knowledge Repository & Templates",
      text: "Where is the knowledge base hosted, and what templates are available for the team (e.g., change request forms, incident post-mortem reports, new server build sheets)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge dispersed across emails or local folders." },
        { value: 2, text: "2. Shared storage location for templates and guides." },
        { value: 3, text: "3. Structured knowledge base with standardized forms and onboarding guides." },
        { value: 4, text: "4. Fully digital, version-controlled repository accessible to all staff." },
        { value: 5, text: "5. Automated repository system suggesting templates contextually via AI." }
      ]
    },
    {
      id: "Q14", area: "Compliance",
      title: "Compliance & Policy Adherence",
      text: "Do you measure adherence to security policies, configuration standards, and operational procedures? Can you share compliance results from recent audits or scans?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not monitored." },
        { value: 2, text: "2. Manual audits and periodic checks performed." },
        { value: 3, text: "3. Automated scanning and compliance reporting for key systems." },
        { value: 4, text: "4. Continuous compliance monitoring integrated with vulnerability management." },
        { value: 5, text: "5. Predictive compliance management with real-time drift detection and automated correction." }
      ]
    },
    {
      id: "Q15", area: "ChangeManagement",
      title: "Change Management Compliance",
      text: "What percentage of infrastructure changes follow the documented Change Management process without manual overrides or emergency changes?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; changes often made outside process." },
        { value: 2, text: "2. Partial adherence; manual approvals dominate." },
        { value: 3, text: "3. 70–90% of changes follow change management workflows." },
        { value: 4, text: "4. Fully automated change control with approval tracking and reporting." },
        { value: 5, text: "5. AI-governed change validation preventing unauthorized modifications." }
      ]
    },
    {
      id: "Q16", area: "Stakeholder",
      title: "Stakeholder Satisfaction",
      text: "Do you measure stakeholder (internal teams, business units) satisfaction with infrastructure stability and service request fulfillment?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no feedback collected." },
        { value: 2, text: "2. Informal or ad-hoc satisfaction surveys conducted occasionally." },
        { value: 3, text: "3. Regular survey reports generated manually." },
        { value: 4, text: "4. Automated SLA and satisfaction dashboards integrated with ticketing systems." },
        { value: 5, text: "5. Predictive sentiment and satisfaction analytics using feedback and uptime metrics." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual, reactive operations; limited documentation or automation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some processes documented; basic automation and integration." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; CI/CD partially automated; improving integrations." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented processes; strong CI/CD automation; dashboards in place." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Fully automated, end-to-end integrated, with continuous improvement tracked by metrics." }
  ]
};
