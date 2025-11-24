window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["it_operations"] = {
  title: "Platforms & IT Solution Operations Digital Maturity Assessment (DMI)",
  shortcode: "PLATOPS",
  totalQuestions: 30,
  maxScore: 30 * 5,
  sections: [
    { name: "1) Strategy, Leadership & Governance", questions: ["Q1", "Q2", "Q3", "Q4", "Q5"] },
    { name: "2) Architecture, Platform Portfolio & DevOps Delivery", questions: ["Q6", "Q7", "Q8", "Q9", "Q10"] },
    { name: "3) Platform Reliability, Operations & Observability", questions: ["Q11", "Q12", "Q13", "Q14", "Q15"] },
    { name: "4) Security, Compliance & Data Management", questions: ["Q16", "Q17", "Q18", "Q19", "Q20"] },
    { name: "5) IT Operations Excellence & Daily Operational Management", questions: ["Q21", "Q22", "Q23", "Q24", "Q25"] },
    { name: "6) People, Culture, Innovation & Continuous Improvement", questions: ["Q26", "Q27", "Q28", "Q29", "Q30"] }
  ],
  questions: [

    /* -----------------------------------------------------------
       AREA 1 – Strategy, Leadership & Governance (Q1–Q5)
    -------------------------------------------------------------*/
    {
      id: "Q1", area: "StrategyLeadership",
      title: "Documented Digital & Operations Strategy",
      text: "Is there a documented digital and operations strategy for Platforms & IT Operations aligned to business outcomes?",
      choices: [
        { value: 1, text: "1. No documented strategy; reactive and siloed activities." },
        { value: 2, text: "2. Basic strategy exists but incomplete or outdated." },
        { value: 3, text: "3. Documented strategy aligned with business goals." },
        { value: 4, text: "4. Strategy actively guides planning and prioritization." },
        { value: 5, text: "5. Fully integrated strategy with measurable outcomes and continuous updates." }
      ]
    },
    {
      id: "Q2", area: "StrategyLeadership",
      title: "Strategy Review & Refresh Cadence",
      text: "How regularly is the Platforms & IT Operations strategy reviewed and updated?",
      choices: [
        { value: 1, text: "1. No structured review process." },
        { value: 2, text: "2. Reviewed occasionally in response to issues." },
        { value: 3, text: "3. Reviewed annually with stakeholders." },
        { value: 4, text: "4. Reviewed bi-annually with clear updates." },
        { value: 5, text: "5. Quarterly or continuous review with metrics-based adjustments." }
      ]
    },
    {
      id: "Q3", area: "StrategyLeadership",
      title: "Leadership Sponsorship & Funding",
      text: "To what extent does leadership sponsor and fund digital and operational improvements?",
      choices: [
        { value: 1, text: "1. Minimal sponsorship and limited funding." },
        { value: 2, text: "2. Occasional sponsorship of selected initiatives." },
        { value: 3, text: "3. Structured sponsorship for key programs." },
        { value: 4, text: "4. Strong leadership commitment with clear investment plans." },
        { value: 5, text: "5. Proactive leadership driving multi-year transformation and ROI tracking." }
      ]
    },
    {
      id: "Q4", area: "StrategyLeadership",
      title: "Governance Structure",
      text: "Is there a formal governance structure overseeing operations, releases, risk, and platform performance?",
      choices: [
        { value: 1, text: "1. No formal governance; decisions ad-hoc." },
        { value: 2, text: "2. Some governance exists but unclear roles." },
        { value: 3, text: "3. Defined governance with regular meetings." },
        { value: 4, text: "4. Governance integrated with dashboards and KPIs." },
        { value: 5, text: "5. Proactive governance with continuous improvement mechanisms." }
      ]
    },
    {
      id: "Q5", area: "StrategyLeadership",
      title: "Risk, Security & Compliance Embedding",
      text: "How well are risk, security, and compliance integrated into daily IT operations?",
      choices: [
        { value: 1, text: "1. Risk and compliance addressed reactively." },
        { value: 2, text: "2. Basic policies exist with manual enforcement." },
        { value: 3, text: "3. Risk and security embedded in core processes." },
        { value: 4, text: "4. Automated controls with strong governance." },
        { value: 5, text: "5. Fully embedded risk-driven operations with continuous monitoring." }
      ]
    },

    /* -----------------------------------------------------------
       AREA 2 – Architecture & DevOps Delivery (Q6–Q10)
    -------------------------------------------------------------*/
    {
      id: "Q6", area: "ArchitectureDevOps",
      title: "Platform Architecture Standardization",
      text: "How standardized and documented are platform architectures across the portfolio?",
      choices: [
        { value: 1, text: "1. Architecture varies by team, undocumented." },
        { value: 2, text: "2. Some patterns exist but inconsistently applied." },
        { value: 3, text: "3. Documented standards used for major platforms." },
        { value: 4, text: "4. Enforced architecture standards with reviews." },
        { value: 5, text: "5. Architecture continuously optimized using data." }
      ]
    },
    {
      id: "Q7", area: "ArchitectureDevOps",
      title: "Platform Portfolio & Lifecycle",
      text: "Does a central portfolio catalog exist (with owners, lifecycle, health indicators)?",
      choices: [
        { value: 1, text: "1. No inventory; fragmented information." },
        { value: 2, text: "2. Basic inventory but outdated or incomplete." },
        { value: 3, text: "3. Structured catalog with lifecycle details." },
        { value: 4, text: "4. Catalog integrated with CMDB and monitoring." },
        { value: 5, text: "5. Dynamic portfolio with automated discovery." }
      ]
    },
    {
      id: "Q8", area: "ArchitectureDevOps",
      title: "Cloud-Native & DevOps Practices",
      text: "How mature are cloud-native and DevOps practices within platform delivery and operations?",
      choices: [
        { value: 1, text: "1. Mostly manual processes." },
        { value: 2, text: "2. DevOps practices applied in isolated areas." },
        { value: 3, text: "3. Standard DevOps practices and IaC adopted widely." },
        { value: 4, text: "4. Enterprise DevOps model with templates and pipelines." },
        { value: 5, text: "5. Continuous delivery with advanced automation and GitOps." }
      ]
    },
    {
      id: "Q9", area: "ArchitectureDevOps",
      title: "DORA Metrics Usage",
      text: "Are DORA metrics (deployment frequency, lead time, change failure rate, MTTR) measured and used for improvements?",
      choices: [
        { value: 1, text: "1. No measurement." },
        { value: 2, text: "2. Basic manual measurement for selected systems." },
        { value: 3, text: "3. Metrics measured for major systems." },
        { value: 4, text: "4. Automated dashboards integrated into reviews." },
        { value: 5, text: "5. Metrics continuously optimized with clear targets." }
      ]
    },
    {
      id: "Q10", area: "ArchitectureDevOps",
      title: "CI/CD & Deployment Automation",
      text: "How automated are build, test, and deployment processes across environments?",
      choices: [
        { value: 1, text: "1. Manual builds and deployments." },
        { value: 2, text: "2. Basic CI/CD for some systems." },
        { value: 3, text: "3. Standard pipelines used for most services." },
        { value: 4, text: "4. Fully automated pipelines with quality gates." },
        { value: 5, text: "5. Advanced pipelines with progressive deployment strategies." }
      ]
    },

    /* -----------------------------------------------------------
       AREA 3 – Reliability & Observability (Q11–Q15)
    -------------------------------------------------------------*/
    {
      id: "Q11", area: "ReliabilityOps",
      title: "Service Availability & SLA Management",
      text: "How effectively are SLAs defined, monitored, and achieved for major platforms?",
      choices: [
        { value: 1, text: "1. SLAs undefined or not tracked." },
        { value: 2, text: "2. SLAs exist but rarely monitored." },
        { value: 3, text: "3. SLAs tracked with periodic reporting." },
        { value: 4, text: "4. Real-time SLA dashboards and proactive actions." },
        { value: 5, text: "5. Predictive SLO/SLA management using SRE principles." }
      ]
    },
    {
      id: "Q12", area: "ReliabilityOps",
      title: "Incident Management Maturity (L1/L2/L3)",
      text: "How structured is the L1/L2/L3 operational model including escalations, triage, and handovers?",
      choices: [
        { value: 1, text: "1. Informal escalation; unclear responsibilities." },
        { value: 2, text: "2. Some structure but inconsistent execution." },
        { value: 3, text: "3. Defined roles, SLAs, and documented escalation paths." },
        { value: 4, text: "4. Automated workflows and on-call rotations supported by tools." },
        { value: 5, text: "5. Mature operational model with continuous review and optimization." }
      ]
    },
    {
      id: "Q13", area: "ReliabilityOps",
      title: "Observability Coverage",
      text: "How comprehensive is monitoring across infrastructure, applications, integrations and logs?",
      choices: [
        { value: 1, text: "1. Basic up/down monitoring." },
        { value: 2, text: "2. Partial coverage with multiple tools." },
        { value: 3, text: "3. Central dashboards with metrics and logs." },
        { value: 4, text: "4. Full observability with traces and correlation of alerts." },
        { value: 5, text: "5. Advanced AIOps-driven observability." }
      ]
    },
    {
      id: "Q14", area: "ReliabilityOps",
      title: "Alerting & Automated Remediation",
      text: "How mature are alerting, noise reduction, and automated remediation mechanisms?",
      choices: [
        { value: 1, text: "1. Noisy alerts, mostly manual handling." },
        { value: 2, text: "2. Threshold-based alerts with frequent noise." },
        { value: 3, text: "3. Tuned alerts with structured on-call rotations." },
        { value: 4, text: "4. Automated runbooks and partial self-healing." },
        { value: 5, text: "5. Fully intelligent alerting and automated remediation with AIOps." }
      ]
    },
    {
      id: "Q15", area: "ReliabilityOps",
      title: "Problem Management & RCA",
      text: "How effectively are root causes identified and long-term fixes applied to prevent recurring issues?",
      choices: [
        { value: 1, text: "1. Symptoms fixed; root causes rarely addressed." },
        { value: 2, text: "2. RCA performed for major incidents only." },
        { value: 3, text: "3. Structured RCA with documented corrective actions." },
        { value: 4, text: "4. Trend analysis and regular problem reviews." },
        { value: 5, text: "5. Proactive prevention of recurring incidents through predictive analytics." }
      ]
    },

    /* -----------------------------------------------------------
       AREA 4 – Security, Compliance & Data (Q16–Q20)
    -------------------------------------------------------------*/
    {
      id: "Q16", area: "SecurityCompliance",
      title: "Identity & Access Management",
      text: "How mature is access control enforcement including least privilege, role-based access, and periodic reviews?",
      choices: [
        { value: 1, text: "1. Access not regularly reviewed; permissions static." },
        { value: 2, text: "2. Basic roles exist but reviews manual." },
        { value: 3, text: "3. Periodic access certifcation in place." },
        { value: 4, text: "4. Central IAM with automated workflows." },
        { value: 5, text: "5. Just-in-time access and automated monitoring." }
      ]
    },
    {
      id: "Q17", area: "SecurityCompliance",
      title: "Security Testing & Vulnerability Management",
      text: "How regularly are platform security controls tested and vulnerabilities remediated?",
      choices: [
        { value: 1, text: "1. Testing rare or reactive." },
        { value: 2, text: "2. Some scanning performed manually." },
        { value: 3, text: "3. Regular scanning with tracked remediations." },
        { value: 4, text: "4. Automated scanning integrated into CI/CD." },
        { value: 5, text: "5. Continuous vulnerability management with risk scoring." }
      ]
    },
    {
      id: "Q18", area: "SecurityCompliance",
      title: "Data Protection & Privacy",
      text: "How well are encryption, masking, retention, and classification controls implemented?",
      choices: [
        { value: 1, text: "1. Data protection limited." },
        { value: 2, text: "2. Basic encryption; manual data controls." },
        { value: 3, text: "3. Standardized data protection for key systems." },
        { value: 4, text: "4. Comprehensive privacy and security controls in all platforms." },
        { value: 5, text: "5. Continuous data governance with proactive monitoring." }
      ]
    },
    {
      id: "Q19", area: "SecurityCompliance",
      title: "Compliance Monitoring",
      text: "How effectively are compliance requirements monitored and validated across platforms?",
      choices: [
        { value: 1, text: "1. Manual compliance activities." },
        { value: 2, text: "2. Periodic manual checks." },
        { value: 3, text: "3. Dashboards for key controls." },
        { value: 4, text: "4. Automated compliance enforcement." },
        { value: 5, text: "5. Continuous compliance with predictive alerts." }
      ]
    },
    {
      id: "Q20", area: "SecurityCompliance",
      title: "Data & Analytics Enablement",
      text: "How effectively do platforms support analytics, standardized data models, and quality controls?",
      choices: [
        { value: 1, text: "1. Minimal analytics support." },
        { value: 2, text: "2. Basic reporting; inconsistent data." },
        { value: 3, text: "3. Structured data models and lineage defined." },
        { value: 4, text: "4. Integrated data layer enabling advanced analytics." },
        { value: 5, text: "5. Real-time data ecosystem with cross-platform analytics." }
      ]
    },

    /* -----------------------------------------------------------
       AREA 5 – IT Operations Excellence (Q21–Q25)
       (Fully rewritten as requested)
    -------------------------------------------------------------*/
    {
      id: "Q21", area: "ITOperations",
      title: "Daily Operational Tasks Execution (Runbooks)",
      text: "How structured and consistent are daily IT operations tasks (health checks, log review, backups, monitoring dashboards, server checks, job verification)?",
      choices: [
        { value: 1, text: "1. Daily tasks not defined; teams work reactively." },
        { value: 2, text: "2. Some checklists exist but used inconsistently." },
        { value: 3, text: "3. Standard daily runbooks followed by teams." },
        { value: 4, text: "4. Automated dashboards and runbook workflows guiding daily tasks." },
        { value: 5, text: "5. Fully automated daily routines with exception-based operations." }
      ]
    },
    {
      id: "Q22", area: "ITOperations",
      title: "Patch, Backup & Maintenance Operations",
      text: "How effectively are patching, backups, maintenance windows, and server lifecycle activities executed and tracked?",
      choices: [
        { value: 1, text: "1. Ad-hoc patching and backup checks." },
        { value: 2, text: "2. Basic patching and backup cycles but limited reporting." },
        { value: 3, text: "3. Scheduled and monitored patch/backup processes with logs." },
        { value: 4, text: "4. Automated patching and backup monitoring with clear SLAs." },
        { value: 5, text: "5. Predictive maintenance and automated compliance verification." }
      ]
    },
    {
      id: "Q23", area: "ITOperations",
      title: "Operational KPI Tracking (MTTA, MTTR, Workload, Trends)",
      text: "How well does the operations team track operational KPIs such as MTTA, MTTR, ticket volume, repeat incidents, job failures, and workload trends?",
      choices: [
        { value: 1, text: "1. KPIs not measured consistently." },
        { value: 2, text: "2. Basic metrics captured manually." },
        { value: 3, text: "3. KPIs tracked regularly with dashboards." },
        { value: 4, text: "4. KPI trends used to drive improvements." },
        { value: 5, text: "5. Predictive analytics used to prevent issues and optimize performance." }
      ]
    },
    {
      id: "Q24", area: "ITOperations",
      title: "On-Call, Escalation & Shift Management",
      text: "How structured and effective are on-call rotations, shift handovers, escalation procedures, and readiness for high-severity incidents?",
      choices: [
        { value: 1, text: "1. Unstructured on-call and handover process." },
        { value: 2, text: "2. Basic rota and escalation, not consistently followed." },
        { value: 3, text: "3. Defined on-call, escalation matrix, and shift logs." },
        { value: 4, text: "4. Tool-supported on-call scheduling and automated alerts." },
        { value: 5, text: "5. Fully optimized operations center with real-time readiness tracking." }
      ]
    },
    {
      id: "Q25", area: "ITOperations",
      title: "Operational Readiness for Deployments & Releases",
      text: "How well does the operations team support deployments (pre-checks, capacity validation, rollback readiness, post-deployment verification)?",
      choices: [
        { value: 1, text: "1. Deployments handled reactively without readiness checks." },
        { value: 2, text: "2. Basic pre-deployment checklist exists but inconsistently applied." },
        { value: 3, text: "3. Standard readiness and verification steps used consistently." },
        { value: 4, text: "4. Automated deployment readiness, monitoring, and validation checks." },
        { value: 5, text: "5. End-to-end automated readiness, with zero-downtime and progressive deployment validation." }
      ]
    },

    /* -----------------------------------------------------------
       AREA 6 – People, Culture & Innovation (Q26–Q30)
    -------------------------------------------------------------*/
    {
      id: "Q26", area: "PeopleInnovation",
      title: "Skills & Capabilities",
      text: "Do operations teams have required SRE, cloud, DevOps, automation, and monitoring skills?",
      choices: [
        { value: 1, text: "1. Major skill gaps exist." },
        { value: 2, text: "2. Some key skills but limited depth." },
        { value: 3, text: "3. Core competencies present with gaps identified." },
        { value: 4, text: "4. Strong capabilities with regular training." },
        { value: 5, text: "5. Highly advanced skills with internal experts and communities of practice." }
      ]
    },
    {
      id: "Q27", area: "PeopleInnovation",
      title: "Training & Knowledge Sharing",
      text: "How structured are training, certifications, documentation, and knowledge-sharing practices?",
      choices: [
        { value: 1, text: "1. Minimal formal training or knowledge-sharing." },
        { value: 2, text: "2. Occasional sessions but not structured." },
        { value: 3, text: "3. Regular training and knowledge-sharing meetings." },
        { value: 4, text: "4. Clear competency models and training paths." },
        { value: 5, text: "5. Continuous learning culture with documented expertise." }
      ]
    },
    {
      id: "Q28", area: "PeopleInnovation",
      title: "Cross-Team Collaboration",
      text: "How well do operations collaborate with development, solution teams, security, and business stakeholders?",
      choices: [
        { value: 1, text: "1. Siloed operations with minimal collaboration." },
        { value: 2, text: "2. Collaboration only during incidents or escalations." },
        { value: 3, text: "3. Regular cross-team communication for key initiatives." },
        { value: 4, text: "4. Integrated DevSecOps collaboration model." },
        { value: 5, text: "5. Fully unified product-centric collaboration." }
      ]
    },
    {
      id: "Q29", area: "PeopleInnovation",
      title: "Innovation & ROI",
      text: "How well are new operational tools, automation ideas, and innovations piloted, evaluated, scaled, and measured?",
      choices: [
        { value: 1, text: "1. Innovation is ad-hoc." },
        { value: 2, text: "2. Some pilots but limited follow-up." },
        { value: 3, text: "3. Structured innovation process exists." },
        { value: 4, text: "4. Clear innovation backlog and ROI tracking." },
        { value: 5, text: "5. Continuous innovation pipeline with measurable business value." }
      ]
    },
    {
      id: "Q30", area: "PeopleInnovation",
      title: "Continuous Improvement Culture",
      text: "How strong is the culture of continuous improvement driven by metrics, retrospectives, and feedback?",
      choices: [
        { value: 1, text: "1. Limited improvement focus." },
        { value: 2, text: "2. Improvements done only after issues." },
        { value: 3, text: "3. Regular retrospectives with action tracking." },
        { value: 4, text: "4. KPI-driven continuous improvement." },
        { value: 5, text: "5. Fully embedded continuous improvement culture." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, manual operations, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation; limited automation; reactive monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Documented services, growing automation, proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Strong automation, documentation, and integrated workflows." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully optimized digital operations." }
  ]
};
