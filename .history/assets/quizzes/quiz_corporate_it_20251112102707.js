// quizzes/quiz_corporate_it.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["corporate_it"] = {
// quizzes/quiz_corporate_it.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["corporate_it"] = {
  title: "Corporate IT Department Digital Capability & Maturity Assessment (DMI)",
  shortcode: "CORPORATE_IT",
  totalQuestions: 20,
  maxScore: 20 * 5,
  sections: [
    { name: "1) Service Catalogue & Documentation", questions: ["Q1", "Q2", "Q3", "Q4"] },
    { name: "2) Workflow, Monitoring & Integration", questions: ["Q5", "Q6", "Q7", "Q8"] },
    { name: "3) Runbooks, SOPs & Standardization", questions: ["Q9", "Q10", "Q11", "Q12"] },
    { name: "4) Compliance, Governance & Training", questions: ["Q13", "Q14", "Q15", "Q16"] },
    { name: "5) Knowledge, Operations & Performance", questions: ["Q17", "Q18", "Q19", "Q20"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue",
      title: "IT Service Catalogue Availability",
      text: "Is there an updated IT Service Catalogue in the ITSM system listing all IT services (e.g., device setup, network access, software installation) that employees can request directly?",
      Evidence: "OnClick ITSM portal screenshots, service catalogue file, ownership matrix.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal catalogue exists, services handled manually or by email." },
        { value: 2, text: "2. Basic list exists in Excel or SharePoint but not updated regularly." },
        { value: 3, text: "3. Catalogue documented and partially published on ITSM." },
        { value: 4, text: "4. Fully digital catalogue with SLAs and assigned service owners." },
        { value: 5, text: "5. Dynamic catalogue integrated with ITSM and automated SLA tracking." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Service Workflow Documentation",
      text: "What percentage of IT services have approved workflows (steps, responsible roles, SLAs) documented and accessible in ITSM or a shared repository?",
      Evidence: "Workflow diagrams, SOPs, ITSM configuration, service documentation.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no documented workflows, knowledge resides with individuals." },
        { value: 2, text: "2. Basic documentation exists for a few services only." },
        { value: 3, text: "3. Majority of services documented and accessible to the team." },
        { value: 4, text: "4. Fully documented and version-controlled workflows in ITSM." },
        { value: 5, text: "5. Intelligent documentation repository with audit logs and change tracking." }
      ]
    },
    {
      id: "Q3", area: "Automation",
      title: "Automation Coverage in Service Requests",
      text: "How many routine support services (e.g., password reset, onboarding, software deployment) are automated through OnClick ITSM workflows without manual handling?",
      Evidence: "Automation scripts, workflow logs, automation dashboard.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; all tasks handled manually with no automation." },
        { value: 2, text: "2. Partial automation for selected services only." },
        { value: 3, text: "3. 50–75% of repetitive services automated through ITSM." },
        { value: 4, text: "4. Majority of services automated with performance tracking." },
        { value: 5, text: "5. AI-driven self-service and predictive automation in place." }
      ]
    },
    {
      id: "Q4", area: "Roadmap",
      title: "Process Improvement & Automation Planning",
      text: "Is there a defined roadmap identifying manual processes planned for automation with clear owners, milestones, and KPIs?",
      Evidence: "Automation roadmap, improvement backlog, project plans.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation or improvement plan defined." },
        { value: 2, text: "2. Informal list of improvement ideas only." },
        { value: 3, text: "3. Documented automation backlog under periodic review." },
        { value: 4, text: "4. Approved roadmap with KPIs and implementation schedule." },
        { value: 5, text: "5. Fully executed automation plan with quarterly performance review." }
      ]
    },
    {
      id: "Q5", area: "Workflow",
      title: "IT Workflow Tracking & Monitoring",
      text: "Are incidents, requests, and changes tracked with SLA dashboards, automated escalations, and performance metrics in ITSM?",
      Evidence: "SLA reports, escalation logs, ITSM dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no tracking or visibility into request progress." },
        { value: 2, text: "2. Manual tracking with Excel reports." },
        { value: 3, text: "3. Dashboards available but not actively monitored." },
        { value: 4, text: "4. Automated tracking with SLA compliance reporting." },
        { value: 5, text: "5. Predictive monitoring with automated escalation and analytics." }
      ]
    },
    {
      id: "Q6", area: "Integration",
      title: "System Integration Depth",
      text: "To what extent are IT systems (Active Directory, Asset Management, Monitoring tools) integrated with ITSM for auto-updates and reporting?",
      Evidence: "Integration diagrams, interface logs, data flow documentation.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; systems operate independently with no integration." },
        { value: 2, text: "2. Partial integration for limited systems only." },
        { value: 3, text: "3. Integration between ITSM and key infrastructure systems." },
        { value: 4, text: "4. Full integration enabling automated updates and reporting." },
        { value: 5, text: "5. Enterprise-wide integration with real-time data synchronization." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations, minimal automation, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Partially documented services, some workflow automation, limited monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Standardized processes, ITSM monitoring, growing automation maturity." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Integrated automation, proactive service management, measurable KPIs." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive operations, continuous optimization, AI-driven insights." }
  ]
};
