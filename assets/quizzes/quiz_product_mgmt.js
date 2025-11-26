
  // quizzes/quiz_product_management.js
// -----------------------------------------------------------------------------
// Tasheer Product Management Department
// Digital Capability & Maturity Assessment (DMI)
// Levels: 1) Ad-hoc, 2) Developing, 3) Defined/Managed, 4) Measured/Advanced, 5) Optimized/Predictive
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["product_mgmt"] = {
  title: "Product Management Department Digital Capability & Maturity Assessment (DMI)",
  shortcode: "PM",
  totalQuestions: 32,
  maxScore: 32 * 5,

  sections: [
    { name: "1) Policies, Procedures & Digital Governance", questions: ["Q1","Q2","Q3","Q4"] },
    { name: "2) Product Strategy & Decision Governance", questions: ["Q5","Q6","Q7","Q8"] },
    { name: "3) Requirements Management & BRD Standards", questions: ["Q9","Q10","Q11","Q12"] },
    { name: "4) DevOps, User Stories & Delivery Tracking", questions: ["Q13","Q14","Q15","Q16"] },
    { name: "5) Client & Stakeholder Digital Interaction", questions: ["Q17","Q18","Q19","Q20"] },
    { name: "6) Product Roadmapping & Release Management", questions: ["Q21","Q22","Q23"] },
    { name: "7) Architecture Review & Technical Feasibility", questions: ["Q24","Q25","Q26"] },
    { name: "8) Dashboards, Analytics & Performance Tracking", questions: ["Q27","Q28"] },
    { name: "9) Runbook, Capability, Knowledge & Digitalization", questions: ["Q29","Q30","Q31","Q32"] }
  ],

  questions: [
    // ------------------------ 1) Policies, Procedures & Digital Governance ------------------------
    {
      id: "Q1", area: "Governance",
      title: "Policies & Procedures Documentation Completeness",
      text: "How complete, standardized and up-to-date are Product Management policies and procedures?",
      Evidence: "Policy repository, version logs, ownership matrix, change history.",
      choices: [
        { value: 1, text: "1. Ad-hoc; minimal documentation; inconsistent practices." },
        { value: 2, text: "2. Developing; partial documentation but not standardized." },
        { value: 3, text: "3. Defined; most policies documented and periodically reviewed." },
        { value: 4, text: "4. Measured; digital governance enforced with regular audits." },
        { value: 5, text: "5. Optimized; fully governed, auto-versioned and integrated into workflows." }
      ]
    },
    {
      id: "Q2", area: "Governance",
      title: "Digital Governance Tooling",
      text: "How consistently are product governance frameworks applied across all products??",
      Evidence: "Access logs, version control system, repository analytics.",
      choices: [
        { value: 1, text: "1. Ad-hoc; Some products follow the framework, others do not." },
        { value: 2, text: "2. Developing; Partially follow their own methods without consistency , depend on individual Product Owners." },
        { value: 3, text: "3. Defined; Most products follow the same structure (BRD reviews, approvals, RACI)." },
        { value: 4, text: "4. Measured; Approval gates, documentation standards, and reporting are followed." },
        { value: 5, text: "5. Optimized; Governance is fully standardized, monitored, and enforced through digital tools (e.g., DevOps, workflows)." }
      ]
    },
    {
      id: "Q3", area: "Process Governance",
      title: "Process Standardization & Enforcement",
      text: "How standardized and digitally enforced are product management processes across all products?",
      Evidence: "SOPs, workflows, compliance logs, audit reports.",
      choices: [
        { value: 1, text: "1. Ad-hoc; each product team uses its own approach." },
        { value: 2, text: "2. Developing; partial standardization in some areas." },
        { value: 3, text: "3. Defined; documented and followed in most cases." },
        { value: 4, text: "4. Measured; workflow-driven adherence with dashboards." },
        { value: 5, text: "5. Optimized; automated enforcement and continuous improvement." }
      ]
    },
    {
      id: "Q4", area: "Compliance",
      title: "Governance KPIs & Digital Compliance Monitoring",
      text: "Are governance KPIs (approvals, compliance, adherence) monitored digitally?",
      Evidence: "Compliance dashboards, workflow reports, audit cycles.",
      choices: [
        { value: 1, text: "1. Ad-hoc; no visibility into compliance." },
        { value: 2, text: "2. Developing; manual reports periodically created." },
        { value: 3, text: "3. Defined; digital KPIs monitored monthly." },
        { value: 4, text: "4. Measured; automated alerts and dashboards." },
        { value: 5, text: "5. Optimized; predictive compliance scoring." }
      ]
    },

    // ------------------------ 2) Product Strategy & Decision Governance ------------------------
{
  id: "Q5", area: "Planning",
  title: "Digital Demand & Capability Planning",
  text: "Is there a structured digital process for capturing product demands, assessing feasibility, and prioritizing enhancements based on capacity, KPIs, and dependencies?",
  Evidence: "Demand logs, feasibility assessments, capacity planning dashboards, prioritization models.",
  choices: [
    { value: 1, text: "1. No structured process; demands handled reactively." },
    { value: 2, text: "2. Basic demand capture; feasibility assessed manually." },
    { value: 3, text: "3. Standard digital process for demand capture and prioritization." },
    { value: 4, text: "4. Integrated digital workflow with capacity and KPI-based evaluations." },
    { value: 5, text: "5. Fully automated demand planning with predictive feasibility and prioritization." }
  ]
},

{
  id: "Q6", area: "Lifecycle",
  title: "Digital Product Lifecycle Management (PLM)",
  text: "Are product lifecycle stages (initiation → planning → build → release → improvement) clearly defined, documented, and governed through a digital tool?",
  Evidence: "PLM workflow logs, stage documentation, lifecycle dashboards, approval records.",
  choices: [
    { value: 1, text: "1. Ad-hoc Lifecycle not defined; activities handled ad-hoc." },
    { value: 2, text: "2. Basic lifecycle stages exist but not consistently followed." },
    { value: 3, text: "3. Defined lifecycle documented and followed for most products." },
    { value: 4, text: "4. Digitally governed lifecycle with workflows, KPIs, and review cycles." },
    { value: 5, text: "5. Fully digital PLM with automation, traceability, and continuous optimization." }
  ]
},


    {
      id: "Q7", area: "Prioritization",
      title: "Structured Prioritization Framework",
      text: "Are product features prioritized using structured, digital scoring models?",
      Evidence: "RICE/WSJF models, scoring logs, prioritization dashboard.",
      choices: [
        { value: 1, text: "1. Ad-hoc prioritization based on urgent needs." },
        { value: 2, text: "2. Basic prioritization spreadsheets used." },
        { value: 3, text: "3. Standard scoring model applied consistently." },
        { value: 4, text: "4. Automated prioritization dashboard available." },
        { value: 5, text: "5. Predictive prioritization based on analytics and ROI." }
      ]
    },
    {
      id: "Q8", area: "Governance Committee",
      title: "Product Governance & Decision Committees",
      text: "Are governance committees supported by digital dashboards and structured review cycles?",
      Evidence: "Committee minutes, dashboards, approval workflows.",
      choices: [
        { value: 1, text: "1. No formal governance structure." },
        { value: 2, text: "2. Occasional reviews; manually prepared slides." },
        { value: 3, text: "3. Monthly governance with dashboards." },
        { value: 4, text: "4. Automated review cycles with audit trail." },
        { value: 5, text: "5. Fully digital governance with predictive insights." }
      ]
    },

    // ------------------------ 3) Requirements Management & BRD Standards ------------------------
    {
      id: "Q9", area: "Requirements",
      title: "BRD Standardization & Repository",
      text: "Are BRDs created using standardized templates and stored in a centralized digital repository?",
      Evidence: "BRD templates, repository structure, access logs.",
      choices: [
        { value: 1, text: "1. No standard BRDs; inconsistent formats." },
        { value: 2, text: "2. Templates exist but not widely followed." },
        { value: 3, text: "3. Standardized BRDs used across products." },
        { value: 4, text: "4. Repository versioned and governed." },
        { value: 5, text: "5. Integrated BRDs feeding directly into DevOps pipelines." }
      ]
    },
    {
      id: "Q10", area: "Requirements Change",
      title: "Digital Requirements Change Management",
      text: "Are requirement changes digitally tracked with versioning, auditing and approvals?",
      Evidence: "Change logs, approval flows, DevOps history.",
      choices: [
        { value: 1, text: "1. Changes tracked offline or informally." },
        { value: 2, text: "2. Partial digital tracking using documents." },
        { value: 3, text: "3. Standard digital process used for most changes." },
        { value: 4, text: "4. Automated workflow with history and SLA tracking." },
        { value: 5, text: "5. Predictive impact analysis and automated validation." }
      ]
    },
    {
      id: "Q11", area: "Alignment",
      title: "Requirements–DevOps Alignment",
      text: "Is there full alignment between BRDs, user stories and solution design?",
      Evidence: "Traceability matrices, DevOps linking, design documents.",
      choices: [
        { value: 1, text: "1. No alignment; separate documents." },
        { value: 2, text: "2. Partial linking in some products." },
        { value: 3, text: "3. Full alignment for most products." },
        { value: 4, text: "4. Automated linking with dashboards." },
        { value: 5, text: "5. End-to-end traceability including QA/UAT cycles." }
      ]
    },
    {
      id: "Q12", area: "Workflow",
      title: "Requirements Review Digital Workflow",
      text: "Are requirement reviews handled through a digital workflow with approval stages?",
      Evidence: "Workflow audit logs, approvals, timestamps.",
      choices: [
        { value: 1, text: "1. Completely manual review and sign-off." },
        { value: 2, text: "2. Digital templates without workflow routing." },
        { value: 3, text: "3. Workflow in use with defined stages." },
        { value: 4, text: "4. Automated routing with SLA monitoring." },
        { value: 5, text: "5. Intelligent routing with predictive review timelines." }
      ]
    },

    // ------------------------ 4) DevOps, User Stories & Delivery Tracking ------------------------
    {
      id: "Q13", area: "DevOps",
      title: "DevOps Adoption & Usage Maturity",
      text: "How mature is the team’s usage of Azure DevOps for epics, user stories and task tracking?",
      Evidence: "Boards, epics hierarchy, sprint logs, usage analytics.",
      choices: [
        { value: 1, text: "1. DevOps not used or used minimally." },
        { value: 2, text: "2. Basic usage with inconsistent updates." },
        { value: 3, text: "3. Consistent use for backlog and sprint tracking." },
        { value: 4, text: "4. Advanced usage with dashboards and metrics." },
        { value: 5, text: "5. Fully optimized DevOps workflows with automation." }
      ]
    },
    {
      id: "Q14", area: "Backlog",
      title: "Backlog Grooming & Refinement",
      text: "Is backlog grooming performed regularly and documented digitally?",
      Evidence: "Sprint reviews, backlog logs, refinement sessions.",
      choices: [
        { value: 1, text: "1. Backlog unmanaged or outdated." },
        { value: 2, text: "2. Occasional grooming; not systematic." },
        { value: 3, text: "3. Regular grooming tracked digitally." },
        { value: 4, text: "4. Formal process with KPIs and reporting." },
        { value: 5, text: "5. Fully optimized backlog driven by analytics and automation." }
      ]
    },
    {
      id: "Q15", area: "Traceability",
      title: "End-to-End Traceability (BRD → Dev → QA → UAT)",
      text: "Is there full digital traceability from requirements to delivery and UAT?",
      Evidence: "DevOps linking, traceability matrix, test execution logs.",
      choices: [
        { value: 1, text: "1. No digital traceability." },
        { value: 2, text: "2. Partial traceability in some areas." },
        { value: 3, text: "3. Full traceability for most products." },
        { value: 4, text: "4. Automated traceability with dashboards." },
        { value: 5, text: "5. Predictive gap detection and automatic quality scoring." }
      ]
    },
    {
      id: "Q16", area: "Sprint Metrics",
      title: "Sprint & Delivery Performance Tracking",
      text: "Are sprint metrics (velocity, burndown, cycle times) tracked digitally and reviewed regularly?",
      Evidence: "Sprint logs, analytics dashboards.",
      choices: [
        { value: 1, text: "1. No consistent tracking of sprint metrics." },
        { value: 2, text: "2. Basic tracking in Excel or manual reports." },
        { value: 3, text: "3. DevOps dashboards consistently used." },
        { value: 4, text: "4. Automated insights and trends monitored." },
        { value: 5, text: "5. Predictive analytics on delivery risks and capacity." }
      ]
    },

    // ------------------------ 5) Client & Stakeholder Digital Interaction ------------------------
    {
      id: "Q17", area: "Stakeholder",
      title: "Digital Requirement Collection",
      text: "Are client requirements collected, validated and reviewed using digital tools?",
      Evidence: "Forms, portals, validation logs, meeting records.",
      choices: [
        { value: 1, text: "1. Requirements captured manually or informally." },
        { value: 2, text: "2. Basic forms used but not standardized." },
        { value: 3, text: "3. Digital tools used consistently across projects." },
        { value: 4, text: "4. Automated feedback loops and approval workflows." },
        { value: 5, text: "5. Fully digital requirement intake with analytics and traceability." }
      ]
    },
    {
      id: "Q18", area: "Approval",
      title: "Digital Sign-Off & Approval Management",
      text: "Are approvals for BRDs, requirements and changes managed digitally?",
      Evidence: "Approval logs, timestamps, workflow alerts.",
      choices: [
        { value: 1, text: "1. Manual approvals via email or chat." },
        { value: 2, text: "2. Partially digital but inconsistent." },
        { value: 3, text: "3. Centralized digital approval system in place." },
        { value: 4, text: "4. Automated routing and compliance tracking." },
        { value: 5, text: "5. Intelligent approval engine with KPIs and auto-escalation." }
      ]
    },
    {
      id: "Q19", area: "Feedback",
      title: "Client Feedback & Digital Loop Management",
      text: "Are client feedback loops digitally captured, tracked and analyzed?",
      Evidence: "Feedback system logs, surveys, dashboards.",
      choices: [
        { value: 1, text: "1. Feedback collected manually; no logs." },
        { value: 2, text: "2. Basic surveys without integration." },
        { value: 3, text: "3. Feedback system in place with trends." },
        { value: 4, text: "4. Automated actions and dashboards." },
        { value: 5, text: "5. Predictive feedback models and AI-driven insights." }
      ]
    },
    {
      id: "Q20", area: "UAT",
      title: "Digital UAT Execution & Sign-Off",
      text: "Are UAT cycles executed, documented and approved through digital tools?",
      Evidence: "UAT reports, DevOps test plans, approvals.",
      choices: [
        { value: 1, text: "1. UAT tracked manually." },
        { value: 2, text: "2. Digital templates but manual follow-ups." },
        { value: 3, text: "3. Full UAT execution in a digital platform." },
        { value: 4, text: "4. Dashboards showing progress and defects." },
        { value: 5, text: "5. Automated UAT evidence capture and intelligent sign-off." }
      ]
    },

    // ------------------------ 6) Product Roadmapping & Release Management ------------------------
    {
      id: "Q21", area: "Roadmap",
      title: "Digital Product Roadmapping",
      text: "Are product roadmaps created, maintained and shared using digital tools?",
      Evidence: "Roadmap tools, timelines, update logs.",
      choices: [
        { value: 1, text: "1. No formal roadmap or offline files." },
        { value: 2, text: "2. Basic roadmap documents kept manually." },
        { value: 3, text: "3. Digital roadmap in use for major products." },
        { value: 4, text: "4. Fully aligned roadmaps with milestones and KPIs." },
        { value: 5, text: "5. Data-driven roadmap dynamically updated by analytics." }
      ]
    },
    {
      id: "Q22", area: "Release",
      title: "Release Planning & Digital Tracking",
      text: "Are releases planned and monitored digitally with dashboards for readiness and issues?",
      Evidence: "Release logs, DevOps release pipelines, dashboards.",
      choices: [
        { value: 1, text: "1. Releases tracked manually." },
        { value: 2, text: "2. Partial digital documentation." },
        { value: 3, text: "3. Standard release process supported by tools." },
        { value: 4, text: "4. Automated release dashboards and alerts." },
        { value: 5, text: "5. Predictive release readiness scoring and automated rollbacks." }
      ]
    },
    {
      id: "Q23", area: "Roadmap KPIs",
      title: "Roadmap KPIs & Performance Monitoring",
      text: "Are roadmap items monitored using digital KPIs and performance dashboards?",
      Evidence: "Roadmap KPIs, performance dashboards.",
      choices: [
        { value: 1, text: "1. No KPI tracking for roadmap items." },
        { value: 2, text: "2. Manual review of some KPIs." },
        { value: 3, text: "3. KPIs tracked through dashboards." },
        { value: 4, text: "4. Automated KPI trends and alerts." },
        { value: 5, text: "5. Predictive roadmap outcome modeling." }
      ]
    },

    // ------------------------ 7) Architecture Review & Technical Feasibility ------------------------
    {
      id: "Q24", area: "Architecture",
      title: "Architecture Review Process Digitalization",
      text: "Is the architecture review process digitalized with structured workflows?",
      Evidence: "Architecture review logs, workflow systems.",
      choices: [
        { value: 1, text: "1. Reviews informal or undocumented." },
        { value: 2, text: "2. Basic documentation without workflow." },
        { value: 3, text: "3. Standard workflow used consistently." },
        { value: 4, text: "4. Automated routing and approval logs." },
        { value: 5, text: "5. Predictive feasibility scoring and automated assessments." }
      ]
    },
    {
      id: "Q25", area: "Documentation",
      title: "Architectural Decision Records (ADR)",
      text: "Are architectural decisions documented and stored centrally with version history?",
      Evidence: "ADR repository, logs, decision history.",
      choices: [
        { value: 1, text: "1. No documented architecture decisions." },
        { value: 2, text: "2. Partial documentation in some projects." },
        { value: 3, text: "3. ADRs maintained and updated regularly." },
        { value: 4, text: "4. Automated versioning and review cycles." },
        { value: 5, text: "5. Integrated ADRs with DevOps pipelines and design systems." }
      ]
    },
    {
      id: "Q26", area: "Collaboration",
      title: "Digital Collaboration with Architecture Team",
      text: "Is collaboration between product and architecture teams conducted using digital platforms?",
      Evidence: "Meeting logs, design tools, collaboration portals.",
      choices: [
        { value: 1, text: "1. Collaboration informal; manual communication." },
        { value: 2, text: "2. Basic tools used inconsistently." },
        { value: 3, text: "3. Regular digital collaboration in place." },
        { value: 4, text: "4. Fully integrated collaboration environment." },
        { value: 5, text: "5. Real-time digital co-design with traceability and automation." }
      ]
    },

    // ------------------------ 8) Dashboards, Analytics & Performance Tracking ------------------------
    {
      id: "Q27", area: "Analytics",
      title: "Product Performance Dashboards",
      text: "Are product performance metrics tracked through digital dashboards?",
      Evidence: "Dashboards, metrics logs, analytics reports.",
      choices: [
        { value: 1, text: "1. No dashboards; manual reports only." },
        { value: 2, text: "2. Basic dashboards reviewed occasionally." },
        { value: 3, text: "3. Comprehensive dashboards with KPIs." },
        { value: 4, text: "4. Automated insights and real-time updates." },
        { value: 5, text: "5. Predictive analytics and proactive alerts." }
      ]
    },
    {
      id: "Q28", area: "Monitoring",
      title: "Product Health Monitoring",
      text: "Is product health monitored through digitalized KPIs (adoption, incidents, usage, SLAs)?",
      Evidence: "Health dashboards, error logs, performance analytics.",
      choices: [
        { value: 1, text: "1. No structured monitoring." },
        { value: 2, text: "2. Basic KPI tracking." },
        { value: 3, text: "3. Full health monitoring dashboards." },
        { value: 4, text: "4. Automated trend analysis and alerts." },
        { value: 5, text: "5. Predictive health scoring with automated risk mitigation." }
      ]
    },

    // ------------------------ 9) Runbook, Capability, Knowledge & Digitalization ------------------------
    {
      id: "Q29", area: "Runbook",
      title: "Digital Runbook Completeness",
      text: "Is there a comprehensive digital runbook covering processes, escalation paths and product operations?",
      Evidence: "Runbook repository, logs, updates.",
      choices: [
        { value: 1, text: "1. No runbook; fragmented knowledge." },
        { value: 2, text: "2. Basic runbook; not updated regularly." },
        { value: 3, text: "3. Standard digital runbook in place." },
        { value: 4, text: "4. Regularly updated with ownership and review cycles." },
        { value: 5, text: "5. Fully integrated runbook with automation and workflows." }
      ]
    },
    {
      id: "Q30", area: "Capability",
      title: "Team Digital Capability & Training",
      text: "How mature is the team's digital capability and structured training on digital tools and frameworks?",
      Evidence: "Training logs, certifications, skill matrix.",
      choices: [
        { value: 1, text: "1. No structured training or capability development." },
        { value: 2, text: "2. Occasional training without tracking." },
        { value: 3, text: "3. Structured training and tracking." },
        { value: 4, text: "4. Capability mapped with KPIs and analytics." },
        { value: 5, text: "5. Predictive skill development planning and AI-driven training paths." }
      ]
    },
    {
      id: "Q31", area: "Knowledge",
      title: "Knowledge Repository & Template Management",
      text: "Is there a centralized knowledge repository with templates, guidelines and standards?",
      Evidence: "Repository logs, templates library, update history.",
      choices: [
        { value: 1, text: "1. No repository; templates shared informally." },
        { value: 2, text: "2. Basic collection but not governed." },
        { value: 3, text: "3. Structured repository with standard templates." },
        { value: 4, text: "4. Automated versioning and usage monitoring." },
        { value: 5, text: "5. Intelligent repository offering template recommendations." }
      ]
    },
    {
      id: "Q32", area: "Digitalization",
      title: "Digitalization & Automation of Product Activities",
      text: "What percentage of product management activities are digitalized and automated?",
      Evidence: "Process maps, automation logs, system usage analytics.",
      choices: [
        { value: 1, text: "1. <20% digitalized; mostly manual work." },
        { value: 2, text: "2. 20–40% digitalized with basic tools." },
        { value: 3, text: "3. 40–70% digitalized with integrated workflows." },
        { value: 4, text: "4. 70–90% digitalized with automation." },
        { value: 5, text: "5. >90% digitalized with end-to-end automation and AI support." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual processes, inconsistent documentation, low digital adoption." },
    { name: "26–50% (Developing)", range: [26, 50], description: "Basic digital tools adopted; partial standardization; early dashboards." },
    { name: "51–75% (Defined/Managed)", range: [51, 75], description: "Defined processes with structured digital workflows and KPIs." },
    { name: "76–90% (Measured/Advanced)", range: [76, 90], description: "Advanced digitalization, automated governance, strong analytics." },
    { name: "91–100% (Optimized/Predictive)", range: [91, 100], description: "Intelligent automation, predictive insights, continuous improvement culture." }
  ]
};
