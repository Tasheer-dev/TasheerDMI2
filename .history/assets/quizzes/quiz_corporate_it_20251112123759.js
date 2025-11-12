// quizzes/quiz_corporate_it.js
// -----------------------------------------------------------
// Corporate IT Department Digital Capability & Maturity Assessment (DMI)
// Framework aligned with Gartner IT Score Maturity Model (Levels 1–5)
// Levels represent: 1) Ad-hoc, 2) Developing, 3) Defined/Managed, 4) Measured/Advanced, 5) Optimized/Predictive
// -----------------------------------------------------------
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
    // 1) Service Catalogue & Documentation
    {
      id: "Q1", area: "Service Catalogue",
      title: "IT Service Catalogue Availability",
      text: "Is there an updated IT Service Catalogue in the ITSM system listing all IT services (e.g., device setup, network access, software installation) that employees can request directly?",
      Evidence: "OnClick ITSM portal screenshots, service catalogue page/file, ownership matrix, SLA list.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; services not listed or inconsistently handled (<30% standardized)." },
        { value: 2, text: "2. Developing; some services listed but incomplete or outdated (~40–60% coverage)." },
        { value: 3, text: "3. Defined; catalogue documented and visible for most services (~70–80% of offerings)." },
        { value: 4, text: "4. Measured; digital catalogue in ITSM, reviewed quarterly with SLA tracking (>80%)." },
        { value: 5, text: "5. Optimized; dynamic catalogue integrated with ITSM and automated SLA reporting (>90%)." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Service Workflow Documentation",
      text: "What percentage of IT services have approved workflows (steps, responsible roles, SLAs) documented and accessible in ITSM or a shared repository?",
      Evidence: "Workflow diagrams, SOPs, ITSM configuration, service documentation library.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows undocumented or known only by individuals." },
        { value: 2, text: "2. Developing; basic documentation for select core services (~40–50%)." },
        { value: 3, text: "3. Defined; majority of workflows documented and reviewed periodically (~70%)." },
        { value: 4, text: "4. Measured; version-controlled documentation accessible via ITSM (>80%)." },
        { value: 5, text: "5. Optimized; documentation auto-updated, audit-ready, and analytics-enabled (>90%)." }
      ]
    },
    {
      id: "Q3", area: "Automation",
      title: "Automation Coverage in Service Requests",
      text: "How many routine support services (e.g., password reset, onboarding, software deployment) are automated through OnClick ITSM workflows without manual handling?",
      Evidence: "Automation scripts, workflow logs, service catalogue automation tags, automation dashboard.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; <20% of requests automated, mostly manual handling." },
        { value: 2, text: "2. Developing; 30–50% of repetitive tasks automated across some services." },
        { value: 3, text: "3. Defined; 60–75% of routine processes automated through ITSM." },
        { value: 4, text: "4. Measured; >80% automation with monitoring dashboards and KPIs." },
        { value: 5, text: "5. Optimized; >90% predictive automation via AI-driven self-service workflows." }
      ]
    },
    {
      id: "Q4", area: "Roadmap",
      title: "Process Improvement & Automation Planning",
      text: "Is there a defined roadmap identifying manual processes planned for automation with clear owners, milestones, and KPIs?",
      Evidence: "Automation roadmap, improvement backlog, project plans, quarterly review minutes.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined improvement or automation plan." },
        { value: 2, text: "2. Developing; informal list of potential automation ideas without structure." },
        { value: 3, text: "3. Defined; documented automation roadmap reviewed annually (~70% in scope)." },
        { value: 4, text: "4. Measured; formal roadmap tracked via KPIs and quarterly reviews (>80% progress)." },
        { value: 5, text: "5. Optimized; continuous automation pipeline integrated with strategy (>90% executed)." }
      ]
    },

    // 2) Workflow, Monitoring & Integration
    {
      id: "Q5", area: "Workflow",
      title: "IT Workflow Tracking & Monitoring",
      text: "Are incidents, requests, and changes tracked with SLA dashboards, automated escalations, and performance metrics in ITSM?",
      Evidence: "SLA reports, escalation logs, ITSM dashboards, MTTR charts.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; minimal tracking, issues followed manually (<30%)." },
        { value: 2, text: "2. Developing; partial manual tracking through spreadsheets (~50%)." },
        { value: 3, text: "3. Defined; all requests tracked with SLA timers, basic metrics (~70%)." },
        { value: 4, text: "4. Measured; automated tracking, SLA compliance, and trend analysis (>80%)." },
        { value: 5, text: "5. Optimized; predictive monitoring and analytics-driven improvement (>90%)." }
      ]
    },
    {
      id: "Q6", area: "Integration",
      title: "System Integration Depth",
      text: "To what extent are IT systems (Active Directory, Asset Management, Monitoring tools) integrated with ITSM for auto-updates and reporting?",
      Evidence: "Integration diagrams, interface logs, data flow documentation, sync schedules.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; systems disconnected, manual updates only." },
        { value: 2, text: "2. Developing; partial integration across some systems (~50%)." },
        { value: 3, text: "3. Defined; core systems integrated with ITSM (~70%)." },
        { value: 4, text: "4. Measured; end-to-end integration with real-time updates (>80%)." },
        { value: 5, text: "5. Optimized; unified data architecture enabling predictive operations (>90%)." }
      ]
    },
    {
      id: "Q7", area: "Feedback",
      title: "Feedback & Service Insights",
      text: "Does ITSM automatically collect end-user feedback after service closure, and is it used for service quality improvement?",
      Evidence: "CSAT/ESAT survey results, feedback dashboards, improvement actions log.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured feedback or improvement tracking." },
        { value: 2, text: "2. Developing; manual feedback collection for limited services (~50%)." },
        { value: 3, text: "3. Defined; structured survey process reviewed periodically (~70%)." },
        { value: 4, text: "4. Measured; automated CSAT surveys with dashboard analytics (>80%)." },
        { value: 5, text: "5. Optimized; continuous feedback analytics driving service redesign (>90%)." }
      ]
    },
    {
      id: "Q8", area: "Automation Integration",
      title: "Cross-System Automation",
      text: "Are server and infrastructure management activities (e.g., monitoring, patching, alerts) automated and linked with ITSM for ticket creation and closure?",
      Evidence: "Automation scripts, monitoring alerts, ITSM integration logs, closure synchronizations.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no integration or automation between systems." },
        { value: 2, text: "2. Developing; limited automation for select infrastructure processes (~50%)." },
        { value: 3, text: "3. Defined; monitoring integrated for auto-ticket creation (~70%)." },
        { value: 4, text: "4. Measured; full event-to-incident automation and closure feedback (>80%)." },
        { value: 5, text: "5. Optimized; predictive and self-healing infrastructure automation (>90%)." }
      ]
    },

    // 3) Runbooks, SOPs & Standardization
    {
      id: "Q9", area: "SOPs",
      title: "Runbook & SOP Availability",
      text: "Are up-to-date runbooks available for recurring IT operations (e.g., onboarding, printer setup, backup checks)?",
      Evidence: "Runbook documents, SOP library, ITSM links, version table.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal runbooks available." },
        { value: 2, text: "2. Developing; runbooks created for select recurring activities (~50%)." },
        { value: 3, text: "3. Defined; standardized SOPs documented for core IT functions (~70%)." },
        { value: 4, text: "4. Measured; comprehensive SOP repository with review cycles (>80%)." },
        { value: 5, text: "5. Optimized; fully automated runbooks integrated with ITSM (>90%)." }
      ]
    },
    {
      id: "Q10", area: "SOP Updates",
      title: "SOP Testing & Continuous Updates",
      text: "How frequently are SOPs reviewed, tested, and improved based on incidents or performance feedback?",
      Evidence: "Review logs, change records, continuous improvement register.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no regular SOP testing or updates." },
        { value: 2, text: "2. Developing; reviewed after major incidents only (~50%)." },
        { value: 3, text: "3. Defined; SOPs reviewed annually with lessons learned (~70%)." },
        { value: 4, text: "4. Measured; quarterly validation and improvement process (>80%)." },
        { value: 5, text: "5. Optimized; continuous improvement framework with automated validation (>90%)." }
      ]
    },
    {
      id: "Q11", area: "Standardization",
      title: "Process Standardization Across Teams",
      text: "Are IT support processes standardized across departments with unified templates, ticket types, and reporting formats?",
      Evidence: "Process documents, ticketing standards, templates repository, taxonomy guide.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; inconsistent processes across teams." },
        { value: 2, text: "2. Developing; partial standardization for core processes (~50%)." },
        { value: 3, text: "3. Defined; unified templates and consistent categorization (~70%)." },
        { value: 4, text: "4. Measured; fully standardized and audited processes (>80%)." },
        { value: 5, text: "5. Optimized; automation ensures cross-team process alignment (>90%)." }
      ]
    },
    {
      id: "Q12", area: "Agility",
      title: "Process Agility & Adaptation",
      text: "How quickly can IT modify workflows or introduce new processes in ITSM when business needs or technologies change?",
      Evidence: "Change logs, release notes, workflow modification requests, CAB minutes.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; changes take months with manual approvals." },
        { value: 2, text: "2. Developing; limited agility, changes implemented within weeks (~50%)." },
        { value: 3, text: "3. Defined; streamlined change cycle completed within 1–2 weeks (~70%)." },
        { value: 4, text: "4. Measured; agile workflow design and rapid rollout (>80%)." },
        { value: 5, text: "5. Optimized; real-time configuration and adaptive workflow deployment (>90%)." }
      ]
    },

    // 4) Compliance, Governance & Training
    {
      id: "Q13", area: "Compliance",
      title: "Policy Awareness & Adoption",
      text: "Are IT policies (access control, backup, cybersecurity) enforced and tracked digitally for adherence and audit compliance?",
      Evidence: "Policy repository, audit logs, compliance reports, attestation records.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies exist but not actively enforced." },
        { value: 2, text: "2. Developing; policies communicated but compliance not tracked (~50%)." },
        { value: 3, text: "3. Defined; compliance checks performed quarterly (~70%)." },
        { value: 4, text: "4. Measured; automated compliance alerts and reports (>80%)." },
        { value: 5, text: "5. Optimized; predictive compliance analytics with continuous governance (>90%)." }
      ]
    },
    {
      id: "Q14", area: "Workflow Adherence",
      title: "Workflow Adherence & Exception Management",
      text: "What percentage of incidents or requests follow documented ITSM workflows, and how are deviations handled?",
      Evidence: "Deviation logs, SLA compliance reports, ITSM audit results.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows frequently bypassed or inconsistently applied." },
        { value: 2, text: "2. Developing; manual tracking of workflow adherence (~50%)." },
        { value: 3, text: "3. Defined; adherence monitored via ITSM dashboards (~70%)." },
        { value: 4, text: "4. Measured; automated adherence alerts and exception reports (>80%)." },
        { value: 5, text: "5. Optimized; intelligent governance with real-time deviation analytics (>90%)." }
      ]
    },
    {
      id: "Q15", area: "Training",
      title: "IT Staff Competency & Continuous Training",
      text: "How often does the Corporate IT team receive structured training on new technologies, security, or ITSM improvements?",
      Evidence: "Training records, attendance logs, certification reports, LMS analytics.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal training or knowledge-sharing plan." },
        { value: 2, text: "2. Developing; irregular informal sessions (~50%)." },
        { value: 3, text: "3. Defined; annual training programs with progress tracking (~70%)." },
        { value: 4, text: "4. Measured; quarterly role-based training with certification tracking (>80%)." },
        { value: 5, text: "5. Optimized; continuous learning ecosystem linked to KPIs (>90%)." }
      ]
    },
    {
      id: "Q16", area: "Risk",
      title: "Risk & Audit Readiness",
      text: "Are IT operations regularly reviewed for risk (e.g., failed backups, misconfigurations), and can evidence be easily retrieved for audits?",
      Evidence: "Audit reports, risk register, compliance logs, control monitoring dashboards.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured risk or audit review process." },
        { value: 2, text: "2. Developing; irregular manual reviews performed (~50%)." },
        { value: 3, text: "3. Defined; periodic audit and risk reviews documented (~70%)." },
        { value: 4, text: "4. Measured; automated audit tracking and exception alerts (>80%)." },
        { value: 5, text: "5. Optimized; predictive risk management integrated with ITSM (>90%)." }
      ]
    },

    // 5) Knowledge, Operations & Performance
    {
      id: "Q17", area: "Knowledge Base",
      title: "Knowledge Base & Reusability",
      text: "Is there a centralized knowledge base with updated troubleshooting guides, templates, and runbooks accessible to all IT staff?",
      Evidence: "Knowledge portal, ITSM articles, usage analytics, article review records.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no knowledge base maintained." },
        { value: 2, text: "2. Developing; basic articles exist but outdated or limited in scope." },
        { value: 3, text: "3. Defined; updated and categorized KB accessible to IT teams (~70%)." },
        { value: 4, text: "4. Measured; KB integrated with ITSM and version control (>80%)." },
        { value: 5, text: "5. Optimized; AI-driven KB with recommendations and feedback loops (>90%)." }
      ]
    },
    {
      id: "Q18", area: "Performance",
      title: "Operational Efficiency Metrics",
      text: "Does the IT team track KPIs such as ticket resolution time, first-time-fix rate, and system uptime to measure efficiency?",
      Evidence: "Performance reports, KPI dashboards, SLA tracking logs, trend analysis.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no metrics tracked or reported." },
        { value: 2, text: "2. Developing; basic manual tracking without analysis (~50%)." },
        { value: 3, text: "3. Defined; KPIs tracked and reported monthly (~70%)." },
        { value: 4, text: "4. Measured; automated KPI dashboards reviewed by management (>80%)." },
        { value: 5, text: "5. Optimized; predictive analytics used for trend forecasting and optimization (>90%)." }
      ]
    },
    {
      id: "Q19", area: "Automation & Efficiency",
      title: "Process Automation & Error Reduction",
      text: "Have automation or digital initiatives reduced manual errors, repetitive tasks, or average handling time in IT operations?",
      Evidence: "Automation outcomes, productivity metrics, before/after comparisons, error rate trends.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no measurable automation outcomes." },
        { value: 2, text: "2. Developing; limited improvements observed without consistent metrics (~50%)." },
        { value: 3, text: "3. Defined; documented reductions in errors/AHT for key services (~70%)." },
        { value: 4, text: "4. Measured; significant improvements across multiple processes (>80%)." },
        { value: 5, text: "5. Optimized; continuous optimization cycle delivering compounding gains (>90%)." }
      ]
    },
    {
      id: "Q20", area: "Proactive Ops",
      title: "Proactive Monitoring & Preventive Actions",
      text: "Does Corporate IT perform proactive monitoring and take preventive actions (e.g., patching, capacity management) before incidents occur?",
      Evidence: "Monitoring dashboards, patch compliance reports, capacity plans, AIOps alerts.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reactive operations with little preventive action." },
        { value: 2, text: "2. Developing; periodic manual checks and patching cycles (~50%)." },
        { value: 3, text: "3. Defined; scheduled monitoring with action plans (~70%)." },
        { value: 4, text: "4. Measured; automated alerting with preventive maintenance (>80%)." },
        { value: 5, text: "5. Optimized; predictive/AIOps with auto-ticketing and self-healing (>90%)." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations; inconsistent, undocumented, manual processes." },
    { name: "26–50% (Developing)", range: [26, 50], description: "Basic structure emerging; processes partly documented, limited consistency." },
    { name: "51–75% (Defined/Managed)", range: [51, 75], description: "Standardized processes; documented, measured, and reviewed regularly." },
    { name: "76–90% (Measured/Advanced)", range: [76, 90], description: "Integrated automation; data-driven decisions, proactive management." },
    { name: "91–100% (Optimized/Predictive)", range: [91, 100], description: "Predictive analytics, continuous improvement, and business alignment achieved." }
  ]
};
