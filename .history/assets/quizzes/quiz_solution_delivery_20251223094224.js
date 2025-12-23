// quizzes/quiz_solutions_delivery.js
// -----------------------------------------------------------------------------
// Solutions Delivery Department
// Digital Capability & Maturity Assessment (DMI)
// Levels: 0) Not Started / No Effort, 1) Ad-hoc, 2) Developing,
//         3) Defined/Managed, 4) Measured/Advanced, 5) Optimized/Predictive
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["solution_delivery"] = {
  title: "Solutions Delivery Department Digital Capability & Maturity Assessment (DMI)",
  shortcode: "solutions_delivery",
  totalQuestions: 20,
  maxScore: 20 * 5,

  sections: [
    { name: "1) Agile Delivery & Project Governance", questions: ["Q1","Q2","Q3","Q4"] },
    { name: "2) DevOps, CI/CD & Technical Automation", questions: ["Q5","Q6","Q7","Q8"] },
    { name: "3) Software Engineering & Architecture Excellence", questions: ["Q9","Q10","Q11"] },
    { name: "4) Quality Engineering & Testing Automation", questions: ["Q12","Q13","Q14"] },
    { name: "5) Cross-Team Collaboration & Operations Integration", questions: ["Q15","Q16","Q17"] },
    { name: "6) Innovation, Tools, Documentation & Knowledge Management", questions: ["Q18","Q19","Q20"] }
  ],

  questions: [
    // -------------------------------------------------------------------------
    // 1) Agile Delivery & Project Governance
    // -------------------------------------------------------------------------
    {
      id: "Q1", area: "Agile",
      title: "Agile Adoption & Sprint Discipline",
      text: "To what extent are Agile practices consistently applied across teams?",
      Evidence: "Sprint calendars, attendance, retrospectives, reviews, backlog records, velocity trends.",
      choices: [
        { value: 0, text: " 0- No Agile practices; work handled reactively without structured sprints." },
        { value: 1, text: " 1- Some teams occasionally hold ceremonies, but practices remain inconsistent." },
        { value: 2, text: " 2- Basic Agile exists, but varies widely; backlog discipline partially applied." },
        { value: 3, text: "Teams follow consistent Agile cadence with all standard ceremonies." },
        { value: 4, text: "Agile KPIs tracked; dependencies planned; lessons shared across teams." },
        { value: 5, text: "Agile scaled fully; metrics enable prediction and continuous improvement." }
      ]
    },

    {
      id: "Q2", area: "Product Alignment",
      title: "Coordination with Business Product Owners",
      text: "How structured and effective is alignment with Product Owners?",
      Evidence: "Requirements, ADO stories, acceptance criteria, minutes, logs, prioritization.",
      choices: [
        { value: 0, text: " 0- No formal interaction; requirements arrive informally without clarity." },
        { value: 1, text: " 1- POs consulted irregularly; priorities shift without clear assessment." },
        { value: 2, text: " 2- Meetings exist but requirement documentation and criteria are inconsistent." },
        { value: 3, text: "Clear alignment cadence; structured stories and acceptance criteria used." },
        { value: 4, text: "Traceability established; prioritization frameworks applied consistently." },
        { value: 5, text: "Highly collaborative, data-driven alignment with predictive demand planning." }
      ]
    },

    {
      id: "Q3", area: "Risk",
      title: "Risk, Issue & Dependency Management",
      text: "How well are risks, issues and dependencies managed?",
      Evidence: "RAID logs, mitigation plans, boards, escalations, post-mortems.",
      choices: [
        { value: 0, text: " 0- No formal tracking; problems addressed only when they escalate." },
        { value: 1, text: " 1- Risks discussed informally; dependencies discovered late." },
        { value: 2, text: " 2- Basic RAID exists but irregularly updated with missing details." },
        { value: 3, text: "Risks logged with owners; periodic reviews occur." },
        { value: 4, text: "Trends monitored; dependencies visualized and proactively coordinated." },
        { value: 5, text: "Predictive indicators used to foresee issues and improve processes." }
      ]
    },

    {
      id: "Q4", area: "Governance",
      title: "Project Governance, Reporting & Decision-Making",
      text: "How mature is the governance model for project tracking and reporting?",
      Evidence: "RAG dashboards, reports, decisions, governance documents.",
      choices: [
        { value: 0, text: " 0- No governance; reporting unstructured and inconsistent." },
        { value: 1, text: " 1- Informal updates; inconsistent documentation and transparency." },
        { value: 2, text: " 2- Some reporting exists but lacks standardization across projects." },
        { value: 3, text: "Defined governance with standard templates and KPIs." },
        { value: 4, text: "Consolidated dashboards with drill-down capabilities." },
        { value: 5, text: "Fully data-driven governance with predictive indicators guiding decisions." }
      ]
    },

    // -------------------------------------------------------------------------
    // 2) DevOps, CI/CD & Technical Automation
    // -------------------------------------------------------------------------
    {
      id: "Q5", area: "DevOps Boards",
      title: "Azure DevOps Boards Utilization & Workflow Discipline",
      text: "How effectively are ADO boards used across teams?",
      Evidence: "Boards, states, WIP limits, dashboards, updates.",
      choices: [
        { value: 0, text: " 0- ADO barely used; work tracked mainly outside the system." },
        { value: 1, text: " 1- Boards exist but inconsistently updated across teams." },
        { value: 2, text: " 2- Teams use ADO, but workflows lack standardization." },
        { value: 3, text: "Common workflow used; boards consistently updated." },
        { value: 4, text: "Automation and dashboards widely used across ADO." },
        { value: 5, text: "ADO data used for advanced analytics and predictive insights." }
      ]
    },

    {
      id: "Q6", area: "CI/CD",
      title: "CI/CD Pipeline Automation & Reliability",
      text: "To what extent are CI/CD pipelines automated and reliable?",
      Evidence: "Pipelines, logs, rollback processes, promotion model.",
      choices: [
        { value: 0, text: " 0- Builds and deployments fully manual without pipelines." },
        { value: 1, text: " 1- Basic scripts exist; many manual deployment steps remain." },
        { value: 2, text: " 2- Some pipelines exist but limited coverage and standardization." },
        { value: 3, text: "Most applications use standardized CI/CD pipelines." },
        { value: 4, text: "Pipelines include quality gates and advanced deployment patterns." },
        { value: 5, text: "CI/CD integrated with DevSecOps and optimized using metrics." }
      ]
    },

    {
      id: "Q7", area: "Automation Testing",
      title: "Automated Testing Coverage & Integration in DevOps",
      text: "How extensively are automated tests maintained and executed?",
      Evidence: "Coverage reports, test suites, CI integration.",
      choices: [
        { value: 0, text: " 0- Testing fully manual without usable automated suites." },
        { value: 1, text: " 1- Some automated tests exist but inconsistent and unreviewed." },
        { value: 2, text: " 2- Basic unit tests exist; automation coverage remains low." },
        { value: 3, text: "Automated tests cover key flows and run in CI." },
        { value: 4, text: "Coverage monitored; failing tests block deployment." },
        { value: 5, text: "Risk-based automated testing with continuous optimization." }
      ]
    },

    {
      id: "Q8", area: "ITIL Release",
      title: "ITIL-Based Release & Deployment Management",
      text: "How structured is release management following ITIL practices?",
      Evidence: "CAB minutes, RFCs, calendars, PIRs.",
      choices: [
        { value: 0, text: " 0- Releases performed without planning or approvals." },
        { value: 1, text: " 1- Some reviews happen, but most releases uncoordinated." },
        { value: 2, text: " 2- Process exists but inconsistently followed across teams." },
        { value: 3, text: "Documented release process followed with approvals." },
        { value: 4, text: "Success and failure rates monitored; PIRs conducted." },
        { value: 5, text: "Integrated release planning with automation and analytics." }
      ]
    },

    // -------------------------------------------------------------------------
    // 3) Software Engineering & Architecture Excellence
    // -------------------------------------------------------------------------
    {
      id: "Q9", area: "Code Quality",
      title: "Code Quality, Standards & Peer Review Practices",
      text: "How consistently are coding standards and peer reviews applied?",
      Evidence: "Standards, PRs, analysis reports, checklists.",
      choices: [
        { value: 0, text: " 0- No coding standards or review practices exist." },
        { value: 1, text: " 1- Informal reviews occur without structured criteria." },
        { value: 2, text: " 2- Basic conventions exist; reviews and tools inconsistently used." },
        { value: 3, text: "Standards enforced; mandatory PR reviews and analysis tools used." },
        { value: 4, text: "Quality metrics tracked and discussed regularly." },
        { value: 5, text: "Proactive refactoring based on quality and security insights." }
      ]
    },

    {
      id: "Q10", area: "Integration",
      title: "System Integration & API Governance",
      text: "How structured and governed are system integrations?",
      Evidence: "API specs, diagrams, logs, SLAs.",
      choices: [
        { value: 0, text: " 0- Integrations built ad-hoc with minimal documentation." },
        { value: 1, text: " 1- Some documentation exists but inconsistent and incomplete." },
        { value: 2, text: " 2- Gateway and standards partially implemented with basic monitoring." },
        { value: 3, text: "Standards defined; APIs catalogued and monitored." },
        { value: 4, text: "Integration SLAs tracked with dashboards and lifecycle control." },
        { value: 5, text: "Continuous analysis with automated alerts and impact mapping." }
      ]
    },

    {
      id: "Q11", area: "Architecture",
      title: "Solution Architecture Documentation & Governance",
      text: "How robust is architecture documentation and governance?",
      Evidence: "Repository, diagrams, ADRs, runbooks.",
      choices: [
        { value: 0, text: " 0- Architecture undocumented and stored only in minds." },
        { value: 1, text: " 1- Some artifacts exist but not centralized or updated." },
        { value: 2, text: " 2- Documents exist for major systems but lack consistency." },
        { value: 3, text: "Structured architecture repository with reviews and runbooks." },
        { value: 4, text: "Conformance verified; risks and debt tracked." },
        { value: 5, text: "Architecture continuously refined using automation and operational insights." }
      ]
    },

    // -------------------------------------------------------------------------
    // 4) Quality Engineering & Testing Automation
    // -------------------------------------------------------------------------
    {
      id: "Q12", area: "QA",
      title: "Quality Assurance Strategy & Test Coverage",
      text: "How comprehensive is the QA strategy and coverage?",
      Evidence: "Test plans, matrices, reports, UAT sign-offs.",
      choices: [
        { value: 0, text: " 0- No formal QA process; testing unstructured." },
        { value: 1, text: " 1- Some testing occurs but documentation unclear." },
        { value: 2, text: " 2- Basic QA strategy exists with partial coverage." },
        { value: 3, text: "Defined roles with structured test plans and coverage tracking." },
        { value: 4, text: "Quality metrics monitored; risk-based prioritization applied." },
        { value: 5, text: "Continuous testing with data-driven quality improvements." }
      ]
    },

    {
      id: "Q13", area: "Defects",
      title: "Defect Management, Triage & Root Cause Analysis",
      text: "How effectively are defects logged, triaged and resolved?",
      Evidence: "Logs, classifications, triage notes, RCA reports.",
      choices: [
        { value: 0, text: " 0- Defects not systematically logged or tracked." },
        { value: 1, text: " 1- Logged inconsistently; priorities subjective; triage irregular." },
        { value: 2, text: " 2- Structured process exists but not consistently followed." },
        { value: 3, text: "Regular triage with SLAs and visible progress." },
        { value: 4, text: "Trends monitored; systemic issues addressed proactively." },
        { value: 5, text: "Predictive indicators guide prevention and process improvements." }
      ]
    },

    {
      id: "Q14", area: "Environments",
      title: "Test Environment Stability & Data Management",
      text: "How reliable and well-managed are test environments?",
      Evidence: "Topology, schedules, logs, data management.",
      choices: [
        { value: 0, text: " 0- No dedicated test environments exist." },
        { value: 1, text: " 1- Environments unstable and frequently block testing." },
        { value: 2, text: " 2- Basic management exists but mostly reactive." },
        { value: 3, text: "Dedicated environments with documented configurations." },
        { value: 4, text: "Environment health monitored with defined data practices." },
        { value: 5, text: "Automated provisioning with analytics for planning." }
      ]
    },

    // -------------------------------------------------------------------------
    // 5) Cross-Team Collaboration & Operations Integration
    // -------------------------------------------------------------------------
    {
      id: "Q15", area: "Collaboration",
      title: "Cross-Team Collaboration",
      text: "How effectively do roles collaborate across delivery?",
      Evidence: "Joint planning, shared boards, ceremonies.",
      choices: [
        { value: 0, text: " 0- Teams work independently with minimal collaboration." },
        { value: 1, text: " 1- Collaboration occurs mostly during urgent issues." },
        { value: 2, text: " 2- Some meetings exist; knowledge sharing inconsistent." },
        { value: 3, text: "Cross-functional collaboration embedded in ceremonies." },
        { value: 4, text: "Shared KPIs improve collaboration effectiveness." },
        { value: 5, text: "Teams operate as unified system with proactive collaboration." }
      ]
    },

    {
      id: "Q16", area: "Operations",
      title: "Integration with Operations",
      text: "How mature is collaboration with Operations?",
      Evidence: "Handover docs, incident reports, reviews.",
      choices: [
        { value: 0, text: " 0- No structured engagement with Operations." },
        { value: 1, text: " 1- Communication occurs mainly for major incidents." },
        { value: 2, text: " 2- Handover exists but not systematically followed." },
        { value: 3, text: "Operational expectations defined; key incidents reviewed jointly." },
        { value: 4, text: "Metrics shared; problem management handled collaboratively." },
        { value: 5, text: "Proactive service transition with strong observability practices." }
      ]
    },

    {
      id: "Q17", area: "Process",
      title: "Process Documentation, Policies & Runbooks",
      text: "How well-managed are processes and documentation?",
      Evidence: "SOPs, version history, runbooks, audits.",
      choices: [
        { value: 0, text: " 0- Processes undocumented; teams rely on verbal knowledge." },
        { value: 1, text: " 1- Documents exist but outdated or hard to locate." },
        { value: 2, text: " 2- Repository exists with inconsistent updates." },
        { value: 3, text: "Documentation maintained, accessible and used regularly." },
        { value: 4, text: "Usage monitored; gaps updated through reviews." },
        { value: 5, text: "Documentation integrated into workflows with continuous updates." }
      ]
    },

    // -------------------------------------------------------------------------
    // 6) Innovation, Tools, Documentation & Knowledge Management
    // -------------------------------------------------------------------------
    {
      id: "Q18", area: "Tools",
      title: "Technology, Tools & Internal Systems Utilization",
      text: "How effectively are tools and systems utilized?",
      Evidence: "Tool usage, integrations, automation scripts.",
      choices: [
        { value: 0, text: " 0- Tools available but rarely used effectively." },
        { value: 1, text: " 1- Basic usage; many capabilities unused; minimal integration." },
        { value: 2, text: " 2- Core functions used but not optimized." },
        { value: 3, text: "Tools embedded in processes with training provided." },
        { value: 4, text: "Usage monitored; advanced capabilities increasingly adopted." },
        { value: 5, text: "Tools fully integrated, enabling predictive insights and automation." }
      ]
    },

    {
      id: "Q19", area: "Knowledge",
      title: "Knowledge Management, Learning & Documentation Culture",
      text: "How strong is the knowledge-sharing culture?",
      Evidence: "Wikis, sessions, onboarding, learnings.",
      choices: [
        { value: 0, text: " 0- Knowledge not captured formally; onboarding informal." },
        { value: 1, text: " 1- Some content exists but uncurated and outdated." },
        { value: 2, text: " 2- Repository exists with inconsistent contributions." },
        { value: 3, text: "Key knowledge documented with regular contributions." },
        { value: 4, text: "Usage monitored; regular knowledge-sharing sessions held." },
        { value: 5, text: "Knowledge treated strategically with intelligent search and reuse." }
      ]
    },

    {
      id: "Q20", area: "Innovation",
      title: "Innovation & Continuous Improvement",
      text: "How mature is the innovation and improvement framework?",
      Evidence: "Backlogs, pilots, feedback, outcomes.",
      choices: [
        { value: 0, text: " 0- No mechanism exists for proposing improvements." },
        { value: 1, text: " 1- Ideas shared informally with little follow-up." },
        { value: 2, text: " 2- Some channels exist but used irregularly." },
        { value: 3, text: "Formal backlog maintained; pilots conducted when feasible." },
        { value: 4, text: "Measured benefits influence scaling of successful ideas." },
        { value: 5, text: "Continuous improvement embedded with data-driven innovation." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations; manual processes; limited visibility; siloed systems; practices depend on individuals." },
    { name: "26–50% (Developing)", range: [26, 50], description: "Basic digitization; some structured processes; uneven adoption; limited automation." },
    { name: "51–75% (Defined/Managed)", range: [51, 75], description: "Standardized processes; regular reporting; growing automation; clearer roles." },
    { name: "76–90% (Measured/Advanced)", range: [76, 90], description: "Integrated automation; dashboards; data-driven decisions; strong business alignment." },
    { name: "91–100% (Optimized/Predictive)", range: [91, 100], description: "Predictive operations; AI-driven insights; continuous improvement across delivery streams." }
  ]
};
