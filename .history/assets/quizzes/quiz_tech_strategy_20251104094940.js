// quizzes/quiz_tech_strategy.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["tech_strategy"] = {
  title: "Enterprise Architecture & Digital Transformation Strategy Assessment",
  shortcode: "TECH_STRATEGY",
  totalQuestions: 14,
  maxScore: 14 * 5,
  sections: [
    { name: "1) Governance & Strategic Alignment (EDM01 / APO02)", questions: ["Q1", "Q2"] },
    { name: "2) Enterprise Architecture Framework & Principles (APO03 / APO10)", questions: ["Q3", "Q4"] },
    { name: "3) Business–IT Alignment & Value Delivery (APO05 / EDM02)", questions: ["Q5", "Q6"] },
    { name: "4) Portfolio & Innovation Management (APO05 / BAI01)", questions: ["Q7", "Q8"] },
    { name: "5) Risk, Compliance & Information Security Integration (APO12 / DSS05)", questions: ["Q9", "Q10"] },
    { name: "6) Performance Measurement & Capability Maturity (MEA01 / APO11)", questions: ["Q11", "Q12"] },
    { name: "7) Technology Enablement & Automation (BAI09 / DSS06)", questions: ["Q13", "Q14"] }
  ],
  questions: [
    {
      id: "Q1", area: "GovernanceAlignment",
      title: "EA & Vision 2030 Alignment",
      text: "Does the organization maintain a governance framework ensuring that EA and digital initiatives align with business strategy and Vision 2030 objectives?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal governance or alignment mechanism." },
        { value: 2, text: "2. Informal alignment between EA and strategic objectives." },
        { value: 3, text: "3. Documented governance framework linking EA with business goals." },
        { value: 4, text: "4. Regular alignment reviews conducted via governance dashboards." },
        { value: 5, text: "5. Fully integrated strategic alignment monitored through digital strategy KPIs and Vision 2030 scorecards." }
      ]
    },
    {
      id: "Q2", area: "SteeringCommittee",
      title: "Steering Committee & Oversight",
      text: "Is there an active steering committee or governance board that reviews architecture and transformation priorities periodically?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal governance body in place." },
        { value: 2, text: "2. Occasional committee meetings without documented outcomes." },
        { value: 3, text: "3. Active EA steering committee with periodic reviews." },
        { value: 4, text: "4. Formal governance board tracking progress against KPIs and architecture roadmap." },
        { value: 5, text: "5. Continuous oversight with real-time dashboards, performance reports, and automated decision tracking." }
      ]
    },
    {
      id: "Q3", area: "FrameworkPrinciples",
      title: "Architecture Principles & Reference Models",
      text: "Has the organization defined architecture principles and reference models (e.g., TOGAF, Zachman) that guide digital solution design?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined principles or frameworks." },
        { value: 2, text: "2. Initial adoption of general EA guidelines." },
        { value: 3, text: "3. Documented EA principles and reference models adopted enterprise-wide." },
        { value: 4, text: "4. Fully integrated principles embedded in project design reviews." },
        { value: 5, text: "5. AI-augmented architecture standards auto-applied across all digital solutions." }
      ]
    },
    {
      id: "Q4", area: "StandardsConsistency",
      title: "Architecture Standards Consistency",
      text: "How consistently are architecture standards applied across projects and technology domains (data, application, infrastructure)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; inconsistent application of standards." },
        { value: 2, text: "2. Partial compliance across select domains." },
        { value: 3, text: "3. Formal enforcement of standards through architecture review boards." },
        { value: 4, text: "4. Automated validation of design compliance within EA tools." },
        { value: 5, text: "5. Predictive governance ensuring continuous architecture compliance." }
      ]
    },
    {
      id: "Q5", area: "InvestmentPrioritization",
      title: "Investment Prioritization",
      text: "Is there a defined process to ensure that IT investments are prioritized based on measurable business value and strategic impact?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; investment decisions made case-by-case." },
        { value: 2, text: "2. Budget approvals linked to general IT initiatives." },
        { value: 3, text: "3. Standardized value-based prioritization using business case evaluations." },
        { value: 4, text: "4. Portfolio scoring and KPI-based investment decisions monitored regularly." },
        { value: 5, text: "5. AI-enabled investment prioritization optimizing value realization dynamically." }
      ]
    },
    {
      id: "Q6", area: "CapabilityLinkage",
      title: "Architecture Roadmaps & Business Capability Linkage",
      text: "How effectively are architecture roadmaps linked to business capabilities and KPI outcomes (financial, operational, customer)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; architecture plans disconnected from business KPIs." },
        { value: 2, text: "2. Partial linkage through select capability maps." },
        { value: 3, text: "3. Defined capability-to-roadmap mapping documented." },
        { value: 4, text: "4. Fully integrated business capability model with measurable KPIs." },
        { value: 5, text: "5. Real-time value realization analytics connecting capabilities, KPIs, and EA roadmaps." }
      ]
    },
    {
      id: "Q7", area: "Portfolio",
      title: "Digital Transformation Portfolio",
      text: "Do you maintain a digital transformation portfolio capturing all ongoing and planned initiatives, with clear ownership and status?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; initiatives tracked individually." },
        { value: 2, text: "2. Spreadsheet-based inventory of transformation projects." },
        { value: 3, text: "3. Centralized portfolio management repository with ownership tracking." },
        { value: 4, text: "4. Fully digital transformation portfolio integrated with dashboards." },
        { value: 5, text: "5. AI-driven portfolio optimization forecasting benefits and dependencies." }
      ]
    },
    {
      id: "Q8", area: "Innovation",
      title: "Innovation & Emerging Technologies",
      text: "Is there a structured approach for evaluating innovation proposals and emerging technologies (AI, IoT, automation) within EA governance?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; innovations evaluated reactively." },
        { value: 2, text: "2. Innovation discussions happen occasionally without framework." },
        { value: 3, text: "3. Formal innovation evaluation framework established under EA." },
        { value: 4, text: "4. Continuous technology scouting embedded into EA lifecycle." },
        { value: 5, text: "5. Predictive innovation framework using trend analytics and risk–benefit scoring." }
      ]
    },
    {
      id: "Q9", area: "RiskAssessment",
      title: "Digital Risk Assessment",
      text: "Are digital and technology risks systematically assessed within the EA framework (architecture risk register, impact analysis)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; risks not formally tracked." },
        { value: 2, text: "2. Risk assessments conducted manually per project." },
        { value: 3, text: "3. Centralized EA risk register maintained and reviewed." },
        { value: 4, text: "4. Automated risk scoring integrated with architecture tools." },
        { value: 5, text: "5. Predictive risk analytics with real-time mitigation tracking." }
      ]
    },
    {
      id: "Q10", area: "Compliance",
      title: "Cybersecurity & Compliance Coordination",
      text: "Does the EA team coordinate with cybersecurity and compliance functions to ensure adherence to NCA and SDAIA standards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined collaboration with security/compliance." },
        { value: 2, text: "2. Informal communication between EA and cybersecurity teams." },
        { value: 3, text: "3. Defined coordination framework aligned with national compliance." },
        { value: 4, text: "4. Integrated governance model linking EA, GRC, and cybersecurity." },
        { value: 5, text: "5. Continuous compliance validation through automated policy enforcement." }
      ]
    },
    {
      id: "Q11", area: "KPIMonitoring",
      title: "KPI Monitoring & Value Tracking",
      text: "Are EA and digital transformation KPIs defined and monitored (e.g., project ROI, reuse rate, time-to-market reduction)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no defined EA KPIs." },
        { value: 2, text: "2. Manual reporting of a few performance indicators." },
        { value: 3, text: "3. Comprehensive KPI framework aligned with EA objectives." },
        { value: 4, text: "4. Automated dashboards measuring digital value and architecture performance." },
        { value: 5, text: "5. Predictive KPI analytics providing early insights into performance outcomes." }
      ]
    },
    {
      id: "Q12", area: "MaturityAssessment",
      title: "EA Capability Maturity Assessment",
      text: "Is there a periodic maturity assessment of EA governance and digital capabilities aligned with COBIT maturity levels?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal maturity evaluation." },
        { value: 2, text: "2. One-time self-assessment conducted manually." },
        { value: 3, text: "3. Annual maturity assessment following COBIT or TOGAF model." },
        { value: 4, text: "4. Continuous assessment integrated with enterprise governance dashboards." },
        { value: 5, text: "5. Real-time maturity tracking and benchmarking using AI analytics." }
      ]
    },
    {
      id: "Q13", area: "TechnologyEnablement",
      title: "Digital Platforms & Interoperability",
      text: "To what extent are digital platforms, APIs, and data integration layers leveraged to enable automation and cross-functional interoperability?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; integrations handled case-by-case." },
        { value: 2, text: "2. Partial use of APIs or middleware." },
        { value: 3, text: "3. Defined integration framework enabling data interoperability." },
        { value: 4, text: "4. Fully automated digital platform layer connecting enterprise systems." },
        { value: 5, text: "5. AI-augmented API management ensuring seamless data flow and optimization." }
      ]
    },
    {
      id: "Q14", area: "RepositoryToolchain",
      title: "Architecture Repository & Toolchain",
      text: "Is there a defined architecture repository and automation toolchain (e.g., EA repository, CMDB, CI/CD pipelines) supporting end-to-end delivery?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; architecture assets not centrally managed." },
        { value: 2, text: "2. Partial repository covering limited domains." },
        { value: 3, text: "3. Centralized EA repository documenting all architecture domains." },
        { value: 4, text: "4. Fully integrated toolchain connecting EA, CMDB, and DevOps pipelines." },
        { value: 5, text: "5. Intelligent repository enabling automated updates and end-to-end traceability." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, unstructured, manual governance; limited strategic alignment." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Foundational governance and architecture principles established; limited enforcement." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Defined EA framework; integrated governance; measurable KPIs." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully automated governance with portfolio tracking and cross-domain integration." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, data-driven EA governance supporting Vision 2030 digital objectives." }
  ]
};
