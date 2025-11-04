// quizzes/quiz_itsm.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["tech_ITSM"] = {
  title: "ITSM Digital Transformation Journey Assessment (Architecture & Management Perspective)",
  shortcode: "ITSM",
  totalQuestions: 14,
  maxScore: 14 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Policies, Procedures & Governance", questions: ["Q3", "Q4"] },
    { name: "3) Process Design & Workflow Integration", questions: ["Q5", "Q6"] },
    { name: "4) Service Request & Change Management Automation", questions: ["Q7", "Q8"] },
    { name: "5) Knowledge Management & Documentation Repository", questions: ["Q9", "Q10"] },
    { name: "6) Monitoring, Reporting & Continual Improvement", questions: ["Q11", "Q12"] },
    { name: "7) Runbooks, Automation & Service Orchestration", questions: ["Q13", "Q14"] }
  ],
  questions: [
    {
      id: "Q1", area: "ServiceCatalogue",
      title: "Service Catalogue Definition",
      text: "Do you maintain a well-defined Service Catalogue that clearly lists all IT services, their SLAs, and owners?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue or ownership defined." },
        { value: 2, text: "2. Partial service listing exists without complete SLAs or owners." },
        { value: 3, text: "3. Documented service catalogue covering all IT services with owners and SLAs." },
        { value: 4, text: "4. Fully digital service catalogue integrated with ITSM tools and request workflows." },
        { value: 5, text: "5. Dynamic, auto-updated service catalogue synchronized with CMDB and SLA dashboards." }
      ]
    },
    {
      id: "Q2", area: "CatalogueReview",
      title: "Catalogue Review & Update",
      text: "How frequently is the Service Catalogue reviewed and updated to reflect new or retired services?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; updates done reactively or informally." },
        { value: 2, text: "2. Annual review conducted manually by IT operations." },
        { value: 3, text: "3. Semi-annual formal review process involving service owners." },
        { value: 4, text: "4. Quarterly review cycle automated through ITSM governance workflows." },
        { value: 5, text: "5. Continuous update mechanism triggered automatically through service lifecycle management." }
      ]
    },
    {
      id: "Q3", area: "Policies",
      title: "Policy Documentation",
      text: "Are all ITSM policies and standard operating procedures (SOPs) formally documented and approved by management?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies informal or scattered across teams." },
        { value: 2, text: "2. Basic documentation exists for core ITSM functions." },
        { value: 3, text: "3. Comprehensive policy library covering Incident, Change, Problem, and Request Management." },
        { value: 4, text: "4. Version-controlled documentation repository reviewed periodically." },
        { value: 5, text: "5. Fully automated policy management system linked to ITSM compliance checks." }
      ]
    },
    {
      id: "Q4", area: "Governance",
      title: "Governance & Compliance",
      text: "Is there a governance framework in place to ensure compliance with ITIL-aligned policies across departments?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no governance structure established." },
        { value: 2, text: "2. Partial governance through informal reviews or team meetings." },
        { value: 3, text: "3. Defined governance structure with assigned compliance roles." },
        { value: 4, text: "4. Cross-departmental governance committee actively monitoring compliance." },
        { value: 5, text: "5. Real-time compliance dashboards integrated with ITSM tools and audit systems." }
      ]
    },
    {
      id: "Q5", area: "ProcessDesign",
      title: "Process Mapping & Integration",
      text: "How effectively are ITSM processes (Incident, Problem, Change, etc.) mapped and integrated with related business workflows?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; ITSM processes siloed and manual." },
        { value: 2, text: "2. Partial integration with some business units or functions." },
        { value: 3, text: "3. Defined process maps connecting ITSM and business workflows." },
        { value: 4, text: "4. Fully integrated process architecture enabling data flow between systems." },
        { value: 5, text: "5. Intelligent workflow orchestration aligning ITSM, ERP, HR, and Asset systems." }
      ]
    },
    {
      id: "Q6", area: "Architecture",
      title: "Architecture & Value Stream Visualization",
      text: "Are workflows supported by architecture blueprints or value stream maps to visualize interdependencies?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no visual representation of workflows." },
        { value: 2, text: "2. Basic process flowcharts created manually." },
        { value: 3, text: "3. Standardized architecture diagrams exist for key ITSM processes." },
        { value: 4, text: "4. Enterprise-level value stream maps maintained for all ITIL domains." },
        { value: 5, text: "5. Dynamic architecture visualizations auto-generated from live system data." }
      ]
    },
    {
      id: "Q7", area: "AutomationRequests",
      title: "Automation of Requests & Approvals",
      text: "To what extent are service requests and change approvals automated through digital workflows or ITSM tools?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; approvals and requests handled manually via email." },
        { value: 2, text: "2. Basic workflow automation for standard requests." },
        { value: 3, text: "3. Automated workflows covering 50–75% of request and change types." },
        { value: 4, text: "4. End-to-end digital automation with integrated approval hierarchy." },
        { value: 5, text: "5. AI-enabled automation predicting approvals and routing dynamically." }
      ]
    },
    {
      id: "Q8", area: "EnterpriseIntegration",
      title: "Integration with Enterprise Systems",
      text: "Is there an established integration between the ITSM tool and other enterprise systems (ERP, HR, Asset Mgmt)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; tools operate independently." },
        { value: 2, text: "2. Partial integration between ITSM and asset or HR systems." },
        { value: 3, text: "3. Documented integration workflows for key systems." },
        { value: 4, text: "4. Fully automated data exchange between ITSM, ERP, and HR systems." },
        { value: 5, text: "5. Predictive, event-driven integration enabling proactive change and service orchestration." }
      ]
    },
    {
      id: "Q9", area: "KnowledgeRepository",
      title: "Centralized Knowledge Repository",
      text: "Do you maintain a centralized knowledge repository for procedures, FAQs, and troubleshooting guides?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documentation stored in emails or shared drives." },
        { value: 2, text: "2. Partial knowledge base covering major incidents and solutions." },
        { value: 3, text: "3. Centralized IT knowledge portal with categorized and searchable content." },
        { value: 4, text: "4. Version-controlled repository with user access analytics." },
        { value: 5, text: "5. AI-assisted knowledge base recommending solutions and automating incident responses." }
      ]
    },
    {
      id: "Q10", area: "KnowledgeVersioning",
      title: "Knowledge Review & Version Control",
      text: "Are knowledge assets tagged, versioned, and reviewed regularly to ensure relevance and accuracy?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documents not reviewed or tagged." },
        { value: 2, text: "2. Manual versioning and tagging applied inconsistently." },
        { value: 3, text: "3. Regular scheduled reviews ensuring document accuracy." },
        { value: 4, text: "4. Automated version control and expiry tracking system." },
        { value: 5, text: "5. Continuous knowledge lifecycle management with automated validation and usage analytics." }
      ]
    },
    {
      id: "Q11", area: "Monitoring",
      title: "KPI & SLA Monitoring",
      text: "Are IT service KPIs and SLAs monitored in real-time and reported through dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; KPI tracking done manually." },
        { value: 2, text: "2. Periodic reports generated manually in spreadsheets." },
        { value: 3, text: "3. Automated dashboards for core SLAs and performance indicators." },
        { value: 4, text: "4. Real-time dashboards integrated with ITSM and monitoring tools." },
        { value: 5, text: "5. Predictive analytics and trend forecasting driving proactive service improvement." }
      ]
    },
    {
      id: "Q12", area: "CSI",
      title: "Continual Service Improvement (CSI)",
      text: "Is there a defined CSI (Continual Service Improvement) process using metrics and lessons learned for enhancement?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; improvements made reactively." },
        { value: 2, text: "2. Lessons learned captured occasionally without formal process." },
        { value: 3, text: "3. Defined CSI process aligned with ITIL lifecycle stages." },
        { value: 4, text: "4. Continuous improvement initiatives tracked via governance dashboards." },
        { value: 5, text: "5. Predictive CSI model driven by performance analytics and automation insights." }
      ]
    },
    {
      id: "Q13", area: "Runbooks",
      title: "Runbooks for Key Services",
      text: "Are runbooks available for key services, defining steps for incident response and maintenance activities?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no standardized runbooks available." },
        { value: 2, text: "2. Basic runbooks exist for select IT operations." },
        { value: 3, text: "3. Documented and versioned runbooks for core IT services." },
        { value: 4, text: "4. Digital runbook repository integrated with incident and change workflows." },
        { value: 5, text: "5. Self-executing runbooks orchestrated by ITSM and automation tools." }
      ]
    },
    {
      id: "Q14", area: "Automation",
      title: "Automation & Orchestration Maturity",
      text: "To what level have you implemented service automation or orchestration to reduce manual interventions?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; operations primarily manual." },
        { value: 2, text: "2. Basic automation for routine incidents and requests." },
        { value: 3, text: "3. Partial automation across key ITIL processes (Incident, Request, Change)." },
        { value: 4, text: "4. Full automation and orchestration of end-to-end ITSM processes." },
        { value: 5, text: "5. Predictive, self-healing orchestration with minimal manual input." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, manual, undocumented ITSM practices." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Core ITIL processes established; limited automation; manual governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Documented ITSM processes; defined SLAs; integrated dashboards." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "End-to-end automated workflows and service orchestration in place." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully automated ITSM ecosystem with CSI integration." }
  ]
};
