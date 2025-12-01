// quizzes/quiz_grc.js
// -----------------------------------------------------------------------------
// Tasheer GRC Department
// Digital Maturity Assessment (DMI)
// Rating Scale Applied to All Questions:
// 1) No structured process; activities handled ad-hoc.
// 2) Basic implementation with limited digital tools and inconsistent practices.
// 3) Defined and managed process with partially digital workflows and regular application.
// 4) Advanced, integrated digital process with strong automation and consistent performance.
// 5) Fully optimized and automated process with intelligent analytics and continuous improvement.
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["grc"] = {
  title: "GRC Department Digital Maturity Assessment (DMI)",
  shortcode: "GRC",
  totalQuestions: 25,
  maxScore: 25 * 5,

  sections: [
    { name: "1) Policy Governance & Lifecycle Management", questions: ["Q1","Q2","Q3","Q4","Q5"] },
    { name: "2) Risk Registers & Heatmaps Digitalization", questions: ["Q6","Q7","Q8","Q9","Q10"] },
    { name: "3) Regulatory Compliance & SLA Tracking", questions: ["Q11","Q12","Q13","Q14","Q15"] },
    { name: "4) Enterprise Risk Assessment & BCM Control", questions: ["Q16","Q17","Q18","Q19","Q20"] },
    { name: "5) GRC Reporting, Dashboards & Workflow Automation", questions: ["Q21","Q22","Q23","Q24","Q25"] }
  ],

  questions: [
    // -------------------------------------------------------------
    // 1) POLICY GOVERNANCE & LIFECYCLE MANAGEMENT
    // -------------------------------------------------------------
    {
      id: "Q1", area: "Policy Governance & Lifecycle Management",
      title: "Policy Framework Governance",
      text: "Is the policy governance Policy of policies and  manual charter  formally defined, approved, and managed through a digital tool with clear ownership and responsibilities?",
      Evidence: "Policy framework documents, governance model, ownership matrix, digital policy portal.",
      choices: [
        { value: 1, text: "Add-ho structured policy-governance process; activities handled ad-hoc." },
        { value: 2, text: "Basic implementation with limited digital tools and inconsistent policy-governance practices." },
        { value: 3, text: "Defined and managed policy-governance framework with partially digital workflows and regular application." },
        { value: 4, text: "Advanced, integrated digital policy-governance process with strong automation and consistent performance." },
        { value: 5, text: "Fully optimized and automated policy-governance framework with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q2", area: "Policy Governance & Lifecycle Management",
      title: "Policy Lifecycle Management",
      text: "Is the full policy lifecycle (drafting, review, approval, publication, retirement) managed through structured digital workflows with traceability?",
      Evidence: "Workflow logs, approval records, policy change history, audit trails.",
      choices: [
        { value: 1, text: "No structured policy-lifecycle process; stages handled ad-hoc." },
        { value: 2, text: "Basic lifecycle implementation with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed policy-lifecycle process with partially digital workflows and regular application." },
        { value: 4, text: "Advanced, integrated policy-lifecycle platform with strong automation and traceability." },
        { value: 5, text: "Fully optimized and automated policy-lifecycle management with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q3", area: "Policy Governance & Lifecycle Management",
      title: "Policy Repository & Version Control",
      text: "Are all policies stored in a centralized digital repository with version control and searchable access?",
      Evidence: "Central policy repository, search logs, version history, access permissions.",
      choices: [
        { value: 1, text: "No structured policy-repository process; documents stored ad-hoc." },
        { value: 2, text: "Basic digital storage with limited structure and inconsistent practices." },
        { value: 3, text: "Defined and managed repository with partially digital workflows and regular updates." },
        { value: 4, text: "Advanced, integrated policy repository with automation and strong performance." },
        { value: 5, text: "Fully optimized and automated policy-repository ecosystem with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q4", area: "Policy Governance & Lifecycle Management",
      title: "Policy Communication & Acknowledgment",
      text: "Are policy updates communicated digitally to stakeholders with automated acknowledgments and compliance tracking?",
      Evidence: "Notification logs, acknowledgment records, compliance dashboards.",
      choices: [
        { value: 1, text: "No structured policy-communication process; notifications handled ad-hoc." },
        { value: 2, text: "Basic communication with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed communication with partially digital workflows and regular tracking." },
        { value: 4, text: "Advanced, integrated digital communication and acknowledgment tracking with strong automation." },
        { value: 5, text: "Fully optimized and automated policy-communication process with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q5", area: "Policy Governance & Lifecycle Management",
      title: "Policy Alignment with External Standards",
      text: "Are policies regularly reviewed and digitally mapped against external standards and regulations (e.g., NCA, ISO, DGA) to ensure alignment?",
      Evidence: "Mapping matrices, alignment reports, review logs, regulatory references.",
      choices: [
        { value: 1, text: "No structured policy-alignment process; reviews handled ad-hoc." },
        { value: 2, text: "Basic alignment checks with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed alignment process with partially digital workflows and regular reviews." },
        { value: 4, text: "Advanced, integrated digital alignment tracking with strong automation." },
        { value: 5, text: "Fully optimized and automated alignment engine with intelligent analytics and continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 2) RISK REGISTERS & HEATMAPS DIGITALIZATION
    // -------------------------------------------------------------
    {
      id: "Q6", area: "Risk Registers & Heatmaps Digitalization",
      title: "Digital Risk Register Management",
      text: "Is the enterprise risk register maintained in a centralized digital system with structured data fields and ownership?",
      Evidence: "Risk register platform, ownership logs, change history.",
      choices: [
        { value: 1, text: "No structured risk-register process; risks captured ad-hoc." },
        { value: 2, text: "Basic register implementation with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed risk register with partially digital workflows and regular updates." },
        { value: 4, text: "Advanced, integrated digital risk-register platform with strong automation." },
        { value: 5, text: "Fully optimized and automated risk-register management with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q7", area: "Risk Registers & Heatmaps Digitalization",
      title: "Risk Scoring & Heatmap Automation",
      text: "Are risk scores and heatmaps automatically generated in the digital GRC tool based on likelihood and impact parameters?",
      Evidence: "Heatmap outputs, scoring rules, automation configuration.",
      choices: [
        { value: 1, text: "No structured risk-scoring process; heatmaps produced ad-hoc." },
        { value: 2, text: "Basic scoring performed manually with limited digital visualization." },
        { value: 3, text: "Defined and managed scoring model with partially digital heatmaps." },
        { value: 4, text: "Advanced, integrated digital risk-scoring and heatmapping with strong automation." },
        { value: 5, text: "Fully optimized and automated risk-scoring engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q8", area: "Risk Registers & Heatmaps Digitalization",
      title: "Risk Ownership & Action Tracking",
      text: "Are risk owners, treatment plans, and remediation actions tracked digitally with assigned responsibilities and due dates?",
      Evidence: "Action plans, owner assignment logs, aging reports.",
      choices: [
        { value: 1, text: "No structured risk-action tracking process; follow-ups handled ad-hoc." },
        { value: 2, text: "Basic action tracking with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed action tracking with partially digital workflows and regular reviews." },
        { value: 4, text: "Advanced, integrated digital risk-action tracking with strong automation." },
        { value: 5, text: "Fully optimized and automated risk-action management with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q9", area: "Risk Registers & Heatmaps Digitalization",
      title: "Risk Review & Escalation Workflows",
      text: "Are risk-review cycles and escalation processes configured as digital workflows with periodic reviews and automated escalations?",
      Evidence: "Review schedules, workflow rules, escalation logs.",
      choices: [
        { value: 1, text: "No structured risk-review process; escalations handled ad-hoc." },
        { value: 2, text: "Basic review cycles with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed risk-review workflow with partially digital processes." },
        { value: 4, text: "Advanced digital review and escalation workflows with strong automation." },
        { value: 5, text: "Fully optimized automated risk-review engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q10", area: "Risk Registers & Heatmaps Digitalization",
      title: "Integrated Risk Data Sources",
      text: "Are risk registers and heatmaps fed by integrated data sources (e.g., incidents, audit findings, KRIs) through digital interfaces or APIs?",
      Evidence: "Integration diagrams, API logs, data-feed configurations.",
      choices: [
        { value: 1, text: "No structured risk-data integration process; updates handled ad-hoc." },
        { value: 2, text: "Basic manual data imports with limited digital integration." },
        { value: 3, text: "Defined and managed data integrations with partially digital workflows." },
        { value: 4, text: "Advanced integrated data-feeds into risk registers with strong automation." },
        { value: 5, text: "Fully optimized automated risk-data ecosystem with intelligent analytics and continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 3) REGULATORY COMPLIANCE & SLA TRACKING
    // -------------------------------------------------------------
    {
      id: "Q11", area: "Regulatory Compliance & SLA Tracking",
      title: "Regulatory Obligation Register",
      text: "Is there a digital register of regulatory and legal obligations mapped to controls, owners, and evidence requirements?",
      Evidence: "Obligation register, control mappings, ownership logs.",
      choices: [
        { value: 1, text: "No structured regulatory-obligation process; requirements tracked ad-hoc." },
        { value: 2, text: "Basic regulatory tracking with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed regulatory register with partially digital workflows and regular updates." },
        { value: 4, text: "Advanced integrated regulatory-obligation management with strong automation." },
        { value: 5, text: "Fully optimized and automated regulatory-management engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q12", area: "Regulatory Compliance & SLA Tracking",
      title: "Control Testing & Evidence Collection",
      text: "Are control tests and evidence collection performed through digital workflows with structured templates and automated reminders?",
      Evidence: "Control test logs, evidence repositories, workflow notifications.",
      choices: [
        { value: 1, text: "No structured control-testing process; evidence handled ad-hoc." },
        { value: 2, text: "Basic testing with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed control-testing with partially digital workflows and regular execution." },
        { value: 4, text: "Advanced digital control-testing and evidence collection with strong automation." },
        { value: 5, text: "Fully optimized automated control-testing engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q13", area: "Regulatory Compliance & SLA Tracking",
      title: "Compliance Monitoring & Dashboards",
      text: "Is compliance status (per regulation or framework) monitored through digital dashboards with real-time indicators and drill-down views?",
      Evidence: "Compliance dashboards, framework status views, KPI reports.",
      choices: [
        { value: 1, text: "No structured compliance-monitoring process; status tracked ad-hoc." },
        { value: 2, text: "Basic compliance reports with limited digital dashboards." },
        { value: 3, text: "Defined and managed compliance dashboards with partially digital workflows." },
        { value: 4, text: "Advanced integrated compliance dashboards with strong automation." },
        { value: 5, text: "Fully optimized automated compliance analytics with intelligent insights and continuous improvement." }
      ]
    },
    {
      id: "Q14", area: "Regulatory Compliance & SLA Tracking",
      title: "SLA & Policy Adherence Tracking",
      text: "Are SLAs and internal policy adherence tracked digitally with automated alerts for breaches or overdue actions?",
      Evidence: "SLA monitoring tools, breach logs, alerting dashboards.",
      choices: [
        { value: 1, text: "No structured SLA-tracking process; breaches handled ad-hoc." },
        { value: 2, text: "Basic SLA monitoring with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed SLA tracking with partially digital workflows." },
        { value: 4, text: "Advanced digital SLA monitoring with automated alerts and escalation." },
        { value: 5, text: "Fully optimized SLA and policy-adherence engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q15", area: "Regulatory Compliance & SLA Tracking",
      title: "Regulatory Change Management",
      text: "Is there a digital process for monitoring regulatory changes, assessing impact, and updating controls and policies accordingly?",
      Evidence: "Regulatory change logs, impact assessments, update workflows.",
      choices: [
        { value: 1, text: "No structured regulatory-change process; updates handled ad-hoc." },
        { value: 2, text: "Basic change tracking with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed regulatory-change workflows with partially digital processes." },
        { value: 4, text: "Advanced integrated regulatory-change management with strong automation." },
        { value: 5, text: "Fully optimized regulatory-change engine with intelligent analytics and continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 4) ENTERPRISE RISK ASSESSMENT & BCM CONTROL
    // -------------------------------------------------------------
    {
      id: "Q16", area: "Enterprise Risk Assessment & BCM Control",
      title: "Enterprise Risk Assessment Process",
      text: "Is the enterprise risk assessment process structured, periodic, and fully managed through a digital GRC platform?",
      Evidence: "Risk assessment schedules, methodology documents, platform reports.",
      choices: [
        { value: 1, text: "No structured enterprise risk-assessment process; activities handled ad-hoc." },
        { value: 2, text: "Basic risk assessments with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed risk-assessment process with partially digital workflows and regular execution." },
        { value: 4, text: "Advanced integrated digital risk-assessment process with strong automation." },
        { value: 5, text: "Fully optimized and automated risk-assessment engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q17", area: "Enterprise Risk Assessment & BCM Control",
      title: "Scenario & Stress Testing",
      text: "Are risk scenarios and stress tests defined, executed, and monitored through digital tools with documented outcomes and action plans?",
      Evidence: "Scenario test reports, digital records, follow-up actions.",
      choices: [
        { value: 1, text: "No structured scenario-testing process; activities handled ad-hoc." },
        { value: 2, text: "Basic scenario testing with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed scenario-testing with partially digital workflows and regular execution." },
        { value: 4, text: "Advanced integrated scenario and stress-testing with strong automation." },
        { value: 5, text: "Fully optimized scenario-testing engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q18", area: "Enterprise Risk Assessment & BCM Control",
      title: "BCM Governance & Ownership",
      text: "Is business continuity management (BCM) governed through a digital framework with defined owners, roles, and responsibilities?",
      Evidence: "BCM framework, ownership registry, governance reports.",
      choices: [
        { value: 1, text: "No structured BCM-governance process; activities handled ad-hoc." },
        { value: 2, text: "Basic BCM framework with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed BCM governance with partially digital workflows and regular oversight." },
        { value: 4, text: "Advanced integrated BCM governance through digital platforms with strong automation." },
        { value: 5, text: "Fully optimized BCM-governance engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q19", area: "Enterprise Risk Assessment & BCM Control",
      title: "BCP & DRP Documentation & Testing",
      text: "Are business continuity plans (BCP) and disaster recovery plans (DRP) documented, stored digitally, and tested according to a structured schedule?",
      Evidence: "BCP/DRP documents, test logs, digital repositories.",
      choices: [
        { value: 1, text: "No structured BCP/DRP process; documentation and tests handled ad-hoc." },
        { value: 2, text: "Basic BCP/DRP documentation with limited digital tools and inconsistent testing." },
        { value: 3, text: "Defined and managed BCP/DRP processes with partially digital workflows and regular tests." },
        { value: 4, text: "Advanced digital BCP/DRP management with automated test planning and tracking." },
        { value: 5, text: "Fully optimized continuity and recovery management with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q20", area: "Enterprise Risk Assessment & BCM Control",
      title: "Crisis Management & Incident Coordination",
      text: "Are crisis-management and major-incident coordination activities supported by digital tools (war rooms, collaboration platforms, playbooks)?",
      Evidence: "Crisis logs, collaboration platform usage, digital playbooks.",
      choices: [
        { value: 1, text: "No structured crisis-management process; coordination handled ad-hoc." },
        { value: 2, text: "Basic crisis-response tools with limited digital support and inconsistent practices." },
        { value: 3, text: "Defined and managed crisis-management process with partially digital workflows." },
        { value: 4, text: "Advanced digital crisis-management environment with strong automation and collaboration." },
        { value: 5, text: "Fully optimized crisis-management ecosystem with intelligent analytics and continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 5) GRC REPORTING, DASHBOARDS & WORKFLOW AUTOMATION
    // -------------------------------------------------------------
    {
      id: "Q21", area: "GRC Reporting, Dashboards & Workflow Automation",
      title: "Integrated GRC Dashboards",
      text: "Are integrated GRC dashboards available that consolidate risk, compliance, audit, and BCM information in real time?",
      Evidence: "Dashboard screenshots, data source mappings, usage analytics.",
      choices: [
        { value: 1, text: "No structured GRC-dashboard process; reporting handled ad-hoc." },
        { value: 2, text: "Basic dashboards with limited digital integration and inconsistent practices." },
        { value: 3, text: "Defined and managed GRC dashboards with partially digital workflows." },
        { value: 4, text: "Advanced integrated GRC dashboard environment with strong automation." },
        { value: 5, text: "Fully optimized GRC-analytics ecosystem with intelligent insights and continuous improvement." }
      ]
    },
    {
      id: "Q22", area: "GRC Reporting, Dashboards & Workflow Automation",
      title: "Automated Workflow & Task Management",
      text: "Are GRC-related workflows (e.g., approvals, reviews, actions) automated using a workflow engine with notifications and SLAs?",
      Evidence: "Workflow engine configuration, SLA reports, notification logs.",
      choices: [
        { value: 1, text: "No structured GRC-workflow process; tasks handled ad-hoc." },
        { value: 2, text: "Basic workflow support with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed GRC workflows with partially digital automation." },
        { value: 4, text: "Advanced automated workflow environment with strong performance and monitoring." },
        { value: 5, text: "Fully optimized GRC-workflow automation with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q23", area: "GRC Reporting, Dashboards & Workflow Automation",
      title: "Management & Board-level Reporting",
      text: "Are management and board-level GRC reports generated from digital systems with standardized templates and minimal manual effort?",
      Evidence: "Report templates, export logs, presentation decks with system references.",
      choices: [
        { value: 1, text: "No structured GRC-reporting process; reports built ad-hoc." },
        { value: 2, text: "Basic digital reporting with manual compilation and inconsistent practices." },
        { value: 3, text: "Defined and managed reporting with partially digital automation and regular cycles." },
        { value: 4, text: "Advanced integrated digital reporting with strong automation and standardization." },
        { value: 5, text: "Fully optimized reporting engine with intelligent analytics, self-service views, and continuous improvement." }
      ]
    },
    {
      id: "Q24", area: "GRC Reporting, Dashboards & Workflow Automation",
      title: "Data Quality & Governance for GRC",
      text: "Is data quality for GRC (risk, controls, incidents, audits) monitored and governed through digital rules, validations, and ownership?",
      Evidence: "Data-quality dashboards, ownership assignments, validation rules.",
      choices: [
        { value: 1, text: "No structured GRC-data-quality process; checks handled ad-hoc." },
        { value: 2, text: "Basic data-quality checks with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed data-quality governance with partially digital workflows." },
        { value: 4, text: "Advanced integrated data-quality monitoring with strong automation." },
        { value: 5, text: "Fully optimized data-governance engine with intelligent analytics and continuous improvement." }
      ]
    },
    {
      id: "Q25", area: "GRC Reporting, Dashboards & Workflow Automation",
      title: "Integration with Enterprise Platforms",
      text: "Is the GRC platform integrated with key enterprise systems (ERP, HR, ITSM, Security tools) to automate data flows and reduce manual work?",
      Evidence: "Integration diagrams, API logs, interface specifications.",
      choices: [
        { value: 1, text: "No structured GRC-integration process; data exchange handled ad-hoc." },
        { value: 2, text: "Basic point-to-point integrations with limited digital governance." },
        { value: 3, text: "Defined and managed integration model with partially digital workflows." },
        { value: 4, text: "Advanced integrated GRC ecosystem with strong automation." },
        { value: 5, text: "Fully optimized, automated GRC-integration layer with intelligent analytics and continuous improvement." }
      ]
    }
  ],

  maturityBands: [
    {
      name: "0–25% (Ad-hoc)",
      range: [0, 25],
      description: "GRC practices are unstructured, reactive, and handled ad-hoc with minimal use of digital tools or defined processes."
    },
    {
      name: "26–50% (Basic Implementation)",
      range: [26, 50],
      description: "Basic GRC practices exist with some digital tools, but processes remain inconsistent, manual, and siloed."
    },
    {
      name: "51–75% (Managed)",
      range: [51, 75],
      description: "GRC processes are defined and managed, supported by partially digital workflows, with regular reviews and governance."
    },
    {
      name: "76–90% (Advanced)",
      range: [76, 90],
      description: "GRC operations are advanced, integrated across domains, and supported by strong automation, dashboards, and structured workflows."
    },
    {
      name: "91–100% (Optimized / Automated)",
      range: [91, 100],
      description: "GRC environment is fully optimized, automated, and analytics-driven, enabling predictive insights and continuous improvement."
    }
  ]
};
