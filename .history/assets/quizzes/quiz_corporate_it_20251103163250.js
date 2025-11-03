// quizzes/quiz_corporate_it.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["corporate_it"] = {
  title: "Corporate IT Digital Maturity Assessment",
  shortcode: "CORPORATE_IT",
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
      id: "Q1",
      area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Do you maintain a corporate IT service catalogue listing all IT services (network, laptop provisioning, email, VPN, printer support, security, etc.) and their SLAs?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue exists." },
        { value: 2, text: "2. Basic list of services maintained manually." },
        { value: 3, text: "3. Documented IT service catalogue with defined SLAs for key services." },
        { value: 4, text: "4. Fully digital IT service catalogue published on the intranet with assigned owners." },
        { value: 5, text: "5. Dynamic, integrated service catalogue linked to ITSM, automatically updating SLAs and ownership." }
      ]
    },
    {
      id: "Q2",
      area: "Documentation",
      title: "Documentation of IT Services & Processes",
      text: "What percentage of IT services and processes are fully documented (scope, workflows, owners, KPIs)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes undocumented or tribal-knowledge based." },
        { value: 2, text: "2. Partial documentation of core IT services only." },
        { value: 3, text: "3. Comprehensive documentation with workflows and KPIs for most IT services." },
        { value: 4, text: "4. Fully digital documentation inventory with version control and ownership." },
        { value: 5, text: "5. Intelligent documentation repository with audit logs, auto-versioning, and compliance integration." }
      ]
    },
    {
      id: "Q3",
      area: "Automation",
      title: "End-User Support Automation",
      text: "What percentage of end-user IT support processes (e.g., password reset, software deployment, device onboarding) are automated?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; all support handled manually." },
        { value: 2, text: "2. Partial automation for specific tasks (e.g., password reset)." },
        { value: 3, text: "3. 50–75% of user support processes automated via ITSM tools." },
        { value: 4, text: "4. Fully automated support workflows with dashboards and service metrics." },
        { value: 5, text: "5. AI-driven self-service automation with predictive ticket resolution and chatbot integration." }
      ]
    },
    {
      id: "Q4",
      area: "Roadmap",
      title: "IT Task Automation Roadmap",
      text: "What percentage of manual IT tasks are targeted for automation in the next year? Is there a documented automation backlog or roadmap?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined automation plan." },
        { value: 2, text: "2. Informal list of potential automations maintained manually." },
        { value: 3, text: "3. Documented backlog of automation candidates under review." },
        { value: 4, text: "4. Approved automation roadmap with KPIs and implementation plan." },
        { value: 5, text: "5. Fully executed automation strategy achieving over 90–100% of planned targets." }
      ]
    },
    {
      id: "Q5",
      area: "Workflow",
      title: "Workflow, Monitoring & Integration",
      text: "Can you share examples of automated IT workflows (e.g., laptop provisioning, account creation, incident escalation)? Which activities are still manual?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automated workflows implemented." },
        { value: 2, text: "2. Few isolated workflows automated manually." },
        { value: 3, text: "3. 50–75% of IT workflows automated and monitored through ITSM." },
        { value: 4, text: "4. Fully automated orchestration using workflow engines and dashboards." },
        { value: 5, text: "5. Intelligent IT orchestration using AI to optimize workflow routing and performance analytics." }
      ]
    },
    {
      id: "Q6",
      area: "Integration",
      title: "IT Infrastructure Integration",
      text: "Is the corporate IT infrastructure integrated with monitoring tools, ITSM platforms, and security systems?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; systems work independently." },
        { value: 2, text: "2. Partial integration for selected IT components." },
        { value: 3, text: "3. Full integration between monitoring and ITSM tools." },
        { value: 4, text: "4. Centralized monitoring and reporting via unified dashboards." },
        { value: 5, text: "5. Enterprise-grade integration with cross-domain automation and real-time analytics." }
      ]
    },
    {
      id: "Q7",
      area: "Feedback",
      title: "Automated Feedback & Alerts",
      text: "Do you have automated feedback loops (e.g., proactive alerts, automated incident creation, performance trend analysis)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; alerts handled manually." },
        { value: 2, text: "2. Basic monitoring with limited automated alerts." },
        { value: 3, text: "3. Automated alerts integrated with incident creation." },
        { value: 4, text: "4. Fully automated proactive alerting and performance dashboards." },
        { value: 5, text: "5. Predictive alerting with AI-driven root cause and performance anomaly detection." }
      ]
    },
    {
      id: "Q8",
      area: "Policies",
      title: "IT Operations Policies & Compliance",
      text: "Do documented policies exist for IT operations (network management, device security, access, incident handling, backup/DR, compliance)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies informal or outdated." },
        { value: 2, text: "2. Partial documentation of IT operational policies." },
        { value: 3, text: "3. Comprehensive policy library covering all IT areas." },
        { value: 4, text: "4. Digitally version-controlled IT policy repository accessible to teams." },
        { value: 5, text: "5. Automated policy governance with audit trails and compliance dashboards." }
      ]
    },
    {
      id: "Q9",
      area: "GapAnalysis",
      title: "IT Procedures Gap Analysis",
      text: "Can you share a gap analysis of documented vs. missing IT procedures (e.g., laptop provisioning, patching, Wi-Fi setup)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured gap analysis exists." },
        { value: 2, text: "2. Informal identification of missing IT processes." },
        { value: 3, text: "3. Periodic documentation gap review performed manually." },
        { value: 4, text: "4. Regular automated audits identifying missing or outdated IT procedures." },
        { value: 5, text: "5. Continuous gap analysis dashboard integrated with compliance and audit systems." }
      ]
    },
    {
      id: "Q10",
      area: "KnowledgeAccess",
      title: "Knowledge Accessibility",
      text: "Are IT policies and procedures accessible to staff through an internal portal or knowledge base?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; staff rely on shared folders or emails." },
        { value: 2, text: "2. Centralized folder or SharePoint site with limited structure." },
        { value: 3, text: "3. Knowledge portal available for all IT users." },
        { value: 4, text: "4. Fully managed knowledge system with analytics and access logs." },
        { value: 5, text: "5. Intelligent knowledge portal with AI search, access metrics, and learning recommendations." }
      ]
    },
    {
      id: "Q11",
      area: "SOPs",
      title: "Runbooks & SOPs Availability",
      text: "Are runbooks/SOPs available for recurring IT operations (e.g., incident handling, patching, VPN setup, backup verification)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not formalized." },
        { value: 2, text: "2. Basic SOPs exist for selected IT operations." },
        { value: 3, text: "3. Comprehensive SOP library with periodic updates." },
        { value: 4, text: "4. Fully digital SOP repository with automation triggers." },
        { value: 5, text: "5. Intelligent runbook automation integrated into ITSM workflows." }
      ]
    },
    {
      id: "Q12",
      area: "SOPTesting",
      title: "SOP Testing & Update Frequency",
      text: "Are SOPs tested and updated regularly to reflect real-world incidents and changes?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs rarely reviewed." },
        { value: 2, text: "2. Updated only after major incidents." },
        { value: 3, text: "3. Reviewed annually with lessons-learned input." },
        { value: 4, text: "4. Periodic testing and digital update tracking." },
        { value: 5, text: "5. Continuous SOP testing, validation, and automated version refresh." }
      ]
    },
    {
      id: "Q13",
      area: "Compliance",
      title: "IT Compliance Measurement",
      text: "Do you measure compliance with corporate IT policies (e.g., patch frequency, endpoint security, SLA adherence)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no compliance tracking mechanism." },
        { value: 2, text: "2. Basic manual reviews or audits." },
        { value: 3, text: "3. Regular compliance tracking through IT dashboards." },
        { value: 4, text: "4. Fully automated compliance reporting with audit logs." },
        { value: 5, text: "5. Predictive compliance analytics using AI and automated alerts." }
      ]
    },
    {
      id: "Q14",
      area: "WorkflowAdherence",
      title: "Workflow Adherence & Non-Compliance Handling",
      text: "What percentage of incidents, requests, and changes follow the documented ITSM workflows? How is non-compliance handled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows not consistently followed." },
        { value: 2, text: "2. Manual tracking of workflow adherence." },
        { value: 3, text: "3. 50–75% compliance tracked via ITSM reports." },
        { value: 4, text: "4. Fully automated workflow adherence monitoring and deviation alerts." },
        { value: 5, text: "5. Intelligent workflow governance system with real-time compliance scoring." }
      ]
    },
    {
      id: "Q15",
      area: "Training",
      title: "IT Training & Awareness",
      text: "Are employees trained on IT usage policies (security awareness, acceptable use, device management)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured IT training." },
        { value: 2, text: "2. Periodic awareness sessions without tracking." },
        { value: 3, text: "3. Annual IT policy training program tracked via LMS." },
        { value: 4, text: "4. Fully digital training system with completion and scoring analytics." },
        { value: 5, text: "5. Continuous adaptive awareness program with AI insights and risk-based learning paths." }
      ]
    },
    {
      id: "Q16",
      area: "KnowledgeBase",
      title: "IT Knowledge Repository",
      text: "Where is the corporate IT knowledge base hosted, and what templates/playbooks exist for end users and IT staff?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge scattered across emails or drives." },
        { value: 2, text: "2. Centralized folder containing limited troubleshooting guides." },
        { value: 3, text: "3. SharePoint or Confluence-based knowledge repository with templates." },
        { value: 4, text: "4. Fully managed digital knowledge base with version control and analytics." },
        { value: 5, text: "5. Intelligent self-learning knowledge system with user feedback integration and predictive article suggestions." }
      ]
    },
    {
      id: "Q17",
      area: "KnowledgeReuse",
      title: "Knowledge Update & Reuse",
      text: "Are knowledge articles updated and reused after incidents or problems are resolved?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; articles rarely updated or reused." },
        { value: 2, text: "2. Manual updates post-incident without tracking." },
        { value: 3, text: "3. Periodic updates to key knowledge articles." },
        { value: 4, text: "4. Automated update process linked to problem management workflows." },
        { value: 5, text: "5. AI-driven continuous knowledge optimization with reuse analytics and article recommendations." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations, manual fixes, limited or no documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation and policies; some monitoring; few automated tasks." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; SOPs exist; automation for key workflows; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented processes; integrated monitoring; broad automation coverage; compliance tracked." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive/self-healing operations, end-to-end automation, continuous improvement with feedback loops." }
  ]
};
