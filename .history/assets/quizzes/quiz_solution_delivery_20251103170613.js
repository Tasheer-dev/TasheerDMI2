// quizzes/quiz_solutions_delivery.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["solutions_delivery"] = {
  title: "Solutions Delivery Department Digital Maturity Assessment (DMI)",
  shortcode: "SOLDEV",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Service Automation Coverage", questions: ["Q4", "Q5"] },
    { name: "3) Workflow & Process Automation and Integration", questions: ["Q6", "Q7", "Q8", "Q9", "Q10", "Q11"] },
    { name: "4) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q12"] },
    { name: "5) Knowledge Repository & Templates", questions: ["Q13"] },
    { name: "6) Compliance & Policy Adoption", questions: ["Q14", "Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Kindly share your Solutions Delivery service catalogue, including the types of services offered (e.g., application development, DevOps support, release management, solution design) and their SLAs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; services are delivered reactively with no formal catalogue or SLAs." },
        { value: 2, text: "2. Basic list of delivery services maintained manually (Excel or internal notes)." },
        { value: 3, text: "3. Documented catalogue with defined SLAs and assigned service owners." },
        { value: 4, text: "4. Fully digital service catalogue published internally with ownership and version tracking." },
        { value: 5, text: "5. Dynamic DevOps service catalogue integrated with ITSM, automatically updating SLAs and metrics." }
      ]
    },
    {
      id: "Q2", area: "Documentation",
      title: "Service Process Documentation",
      text: "What percentage of Solutions Delivery services and processes are fully documented (with scope, process flow, owners, and KPIs)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes undocumented or inconsistent." },
        { value: 2, text: "2. Partial documentation covering core development workflows only." },
        { value: 3, text: "3. 50–75% of delivery processes documented with ownership and KPIs." },
        { value: 4, text: "4. Comprehensive, version-controlled process library with periodic reviews." },
        { value: 5, text: "5. Automated documentation and continuous update through integrated DevOps pipeline." }
      ]
    },
    {
      id: "Q3", area: "Integration",
      title: "Workflow Integration Across Functions",
      text: "How are Solutions Delivery workflows integrated with other IT and business functions (e.g., intake → design → build → test → deploy → handover)? Is there an end-to-end delivery workflow documented?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; workflows are siloed and manually coordinated." },
        { value: 2, text: "2. Partial integration between select teams (e.g., Dev–Test)." },
        { value: 3, text: "3. Defined workflows connecting design, build, test, and deploy phases." },
        { value: 4, text: "4. Fully documented and automated end-to-end CI/CD value stream." },
        { value: 5, text: "5. AI-driven DevOps orchestration integrating EPMO, QA, and Change Management tools." }
      ]
    },
    {
      id: "Q4", area: "Automation",
      title: "Delivery Automation Coverage",
      text: "What percentage of delivery processes (e.g., code build, testing, deployment, monitoring) are fully or partially automated?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; builds and releases handled manually." },
        { value: 2, text: "2. Partial automation (e.g., CI scripts for builds only)." },
        { value: 3, text: "3. 50–75% automation covering build, test, and deploy pipelines." },
        { value: 4, text: "4. Fully automated CI/CD pipelines with integrated monitoring." },
        { value: 5, text: "5. Predictive, self-healing DevOps pipelines with zero-touch deployment." }
      ]
    },
    {
      id: "Q5", area: "Roadmap",
      title: "Automation Roadmap",
      text: "What percentage of manual processes are targeted for automation in the next 12 months?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no automation roadmap." },
        { value: 2, text: "2. Informal automation initiatives planned without documentation." },
        { value: 3, text: "3. Documented DevOps automation backlog under review." },
        { value: 4, text: "4. Approved automation roadmap with metrics and timeline." },
        { value: 5, text: "5. Fully implemented roadmap achieving > 90% automation with continuous optimization." }
      ]
    },
    {
      id: "Q6", area: "Workflow",
      title: "Workflow & Process Automation",
      text: "Can you share examples of automated workflows (e.g., CI builds, automated testing, release approvals) and identify steps still requiring manual intervention?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; minimal automation in workflows." },
        { value: 2, text: "2. Some CI automation for code builds and test runs." },
        { value: 3, text: "3. End-to-end automation for most workflows with minor manual steps." },
        { value: 4, text: "4. Fully orchestrated CI/CD process with approval gates and monitoring." },
        { value: 5, text: "5. AI-enabled autonomous workflow optimization and rollback recovery." }
      ]
    },
    {
      id: "Q7", area: "IntegrationSystems",
      title: "Systems Integration",
      text: "Are Solutions Delivery workflows integrated with EPMO, QA, ITSM, and Change Management systems?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no integration across systems." },
        { value: 2, text: "2. Manual data exchange between DevOps and QA systems." },
        { value: 3, text: "3. Partial integration across key delivery tools (Jira, Git, Jenkins, ServiceNow)." },
        { value: 4, text: "4. Fully integrated ecosystem with traceability from requirement to release." },
        { value: 5, text: "5. Intelligent orchestration platform integrating CI/CD, QA, PMO, and compliance." }
      ]
    },
    {
      id: "Q8", area: "AIOps",
      title: "Automated Feedback & Monitoring",
      text: "Do you have automated feedback loops (e.g., defect tracking, deployment rollback alerts, incident triggers)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback handled manually." },
        { value: 2, text: "2. Basic post-deployment feedback tracking." },
        { value: 3, text: "3. Automated defect and rollback alerts connected to DevOps tools." },
        { value: 4, text: "4. Continuous feedback loops integrated with analytics dashboards." },
        { value: 5, text: "5. Predictive DevOps monitoring identifying issues before deployment impact." }
      ]
    },
    {
      id: "Q9", area: "Policies",
      title: "Coding & Delivery Policies",
      text: "Do you have documented policies, procedures, and guidelines for coding standards, testing, DevOps, security, and release management?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies informal or outdated." },
        { value: 2, text: "2. Partial documentation for core delivery processes." },
        { value: 3, text: "3. Comprehensive policy set covering development, testing, and release." },
        { value: 4, text: "4. Version-controlled policy library accessible to all delivery teams." },
        { value: 5, text: "5. Automated compliance engine validating code against policies pre-release." }
      ]
    },
    {
      id: "Q10", area: "GapAnalysis",
      title: "Gap Analysis of Delivery Procedures",
      text: "Can you share a gap analysis of which solution delivery procedures exist versus what is still missing or under review?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no review conducted." },
        { value: 2, text: "2. Informal identification of gaps." },
        { value: 3, text: "3. Annual manual review of delivery documentation completeness." },
        { value: 4, text: "4. Automated gap tracking dashboard linked to CI/CD governance." },
        { value: 5, text: "5. Continuous improvement system with self-assessment and compliance metrics." }
      ]
    },
    {
      id: "Q11", area: "Knowledge",
      title: "Accessibility of Delivery Knowledge",
      text: "Are all development and release processes easily accessible to the team and stakeholders (e.g., via wiki or knowledge base)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge shared by email or files." },
        { value: 2, text: "2. Central folder with partial documentation." },
        { value: 3, text: "3. Wiki or Confluence page accessible to Dev and Ops teams." },
        { value: 4, text: "4. Fully digital knowledge portal integrated with CI/CD documentation." },
        { value: 5, text: "5. AI-powered knowledge base recommending guides and SOPs dynamically." }
      ]
    },
    {
      id: "Q12", area: "SOPs",
      title: "Runbooks & SOPs for Delivery Operations",
      text: "Do you maintain runbooks or SOPs for recurring delivery activities (e.g., production deployment, incident response, hotfix releases)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs absent or inconsistent." },
        { value: 2, text: "2. Runbooks exist for key deployments only." },
        { value: 3, text: "3. Documented and versioned runbook library for delivery operations." },
        { value: 4, text: "4. Fully digital runbook automation system triggered by pipeline events." },
        { value: 5, text: "5. Self-executing runbooks integrated with automated deployment workflows." }
      ]
    },
    {
      id: "Q13", area: "KnowledgeRepo",
      title: "Knowledge Repository & Templates",
      text: "Where is the knowledge base hosted, and what templates/playbooks are available for developers, testers, and release managers?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no centralized repository." },
        { value: 2, text: "2. Templates stored in shared drives." },
        { value: 3, text: "3. Structured DevOps repository with templates for developers/testers." },
        { value: 4, text: "4. Version-controlled knowledge hub accessible to all project teams." },
        { value: 5, text: "5. AI-based repository providing automated template recommendations based on project type." }
      ]
    },
    {
      id: "Q14", area: "Compliance",
      title: "Compliance & Delivery Adherence",
      text: "Do you measure adherence to coding standards, security policies, and delivery procedures? Can you share compliance results for recent releases?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not monitored." },
        { value: 2, text: "2. Manual post-release checks for select projects." },
        { value: 3, text: "3. Regular audits and compliance reports generated manually." },
        { value: 4, text: "4. Automated DevSecOps compliance scans with real-time dashboards." },
        { value: 5, text: "5. Predictive compliance engine with release-blocking enforcement." }
      ]
    },
    {
      id: "Q15", area: "WorkflowAdherence",
      title: "Release Workflow Adherence",
      text: "What percentage of releases follow the documented CI/CD pipeline without manual bypass? How do you handle non-compliance?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; releases handled manually." },
        { value: 2, text: "2. Partial adherence with some manual approvals." },
        { value: 3, text: "3. 75–90% of releases follow the CI/CD flow." },
        { value: 4, text: "4. Fully automated release governance with audit tracking." },
        { value: 5, text: "5. Intelligent CI/CD enforcement blocking manual overrides automatically." }
      ]
    },
    {
      id: "Q16", area: "Stakeholder",
      title: "Stakeholder Satisfaction & Feedback",
      text: "Do you measure stakeholder (business/product owner) satisfaction with solution delivery performance? Can you share survey results or feedback scores?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no feedback collected formally." },
        { value: 2, text: "2. Occasional informal feedback sessions." },
        { value: 3, text: "3. Regular stakeholder surveys with basic metrics." },
        { value: 4, text: "4. Automated feedback tracking integrated with DevOps performance dashboards." },
        { value: 5, text: "5. Predictive stakeholder satisfaction analytics using sentiment data and delivery KPIs." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Mostly manual, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some processes documented, basic automation & integrations." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority documented, CI/CD partially automated, integration improving." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented processes, strong CI/CD automation, dashboards in place." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Fully automated, end-to-end integrated, continuous improvement tracked with metrics." }
  ]
};
