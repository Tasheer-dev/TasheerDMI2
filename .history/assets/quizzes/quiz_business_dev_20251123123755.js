// quizzes/quiz_business_development.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["business_dev"] = {
  title: "Business Development Digital Maturity Assessment (DMI)",
  shortcode: "BD",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Service Automation Coverage", questions: ["Q3", "Q4"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q9", "Q10", "Q11"] },
    { name: "6) Compliance & Policy Adoption", questions: ["Q12", "Q13", "Q14"] },
    { name: "7) Knowledge Repository & Continuous Improvement", questions: ["Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Do you maintain a Business Development Service Catalogue describing available services (service name, stakeholders, deliverables, systems, SLAs, and owners)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; BD services not formally listed or standardized." },
        { value: 2, text: "2. Partial list maintained manually or in spreadsheets." },
        { value: 3, text: "3. Digital catalogue exists but outdated or incomplete." },
        { value: 4, text: "4. Comprehensive digital catalogue published internally with owners and SLAs." },
        { value: 5, text: "5. Fully integrated catalogue linked to CRM/ERP with real-time updates and tracking." }
      ]
    },
    {
      id: "Q2", area: "Documentation", title: "Documentation of BD Services",
      text: "What percentage of BD services (client acquisition, tender response, reporting) are fully documented with scope, KPIs, and workflows?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; service documentation rare or inconsistent." },
        { value: 2, text: "2. Basic documentation for select services only." },
        { value: 3, text: "3. Most services documented but formats and owners vary." },
        { value: 4, text: "4. Fully documented digital workflows with version control and KPIs." },
        { value: 5, text: "5. AI-enabled documentation with auto-reporting and real-time KPI dashboards." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Automation of BD Processes",
      text: "What percentage of BD processes (CRM data sync, lead scoring, proposal reminders, client follow-ups, reporting) are automated?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; processes fully manual and unstandardized." },
        { value: 2, text: "2. Some automation via stand-alone tools or macros." },
        { value: 3, text: "3. 50–70% automation through CRM or workflow scripts." },
        { value: 4, text: "4. End-to-end automation with CRM and analytics integration." },
        { value: 5, text: "5. Intelligent automation with AI predictions and automated notifications." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "Workflow Integration",
      text: "Are BD workflows integrated across CRM, ERP, and analytics platforms (e.g., Salesforce → ERP → Power BI)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; systems operate in silos." },
        { value: 2, text: "2. Partial manual data exchange between systems." },
        { value: 3, text: "3. Integration between two main systems only." },
        { value: 4, text: "4. Full data flow across CRM, ERP, and BI tools." },
        { value: 5, text: "5. Real-time integration platform with automatic synchronization and monitoring." }
      ]
    },
    {
      id: "Q5", area: "Monitoring", title: "Performance Monitoring",
      text: "Are monitoring mechanisms in place for BD performance (pipeline health, conversion rate, client retention)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no consistent performance tracking." },
        { value: 2, text: "2. Manual reporting performed periodically." },
        { value: 3, text: "3. Standard KPI dashboards reviewed monthly." },
        { value: 4, text: "4. Real-time digital dashboards with automated alerts." },
        { value: 5, text: "5. Predictive analytics engine providing performance insights and recommendations." }
      ]
    },
    {
      id: "Q6", area: "Feedback", title: "Feedback & Predictive Insights",
      text: "Do you have feedback loops (e.g., churn alerts, tender outcome prediction, opportunity scoring)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; feedback collected informally and not analyzed." },
        { value: 2, text: "2. Feedback logged manually without integration to systems." },
        { value: 3, text: "3. Feedback recorded in CRM but not linked to improvement plans." },
        { value: 4, text: "4. Automated alerts and dashboards for client feedback and churn risk." },
        { value: 5, text: "5. AI-driven predictive analytics feeding directly into BD planning and backlog." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "BD Policy & Governance Documentation",
      text: "Are there documented policies for BD governance, client data handling, sales ethics, communication protocols, and compliance (NCA/GDPR)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no formal policies or standards." },
        { value: 2, text: "2. Partial drafts exist but not approved or tracked." },
        { value: 3, text: "3. Approved policies exist without version control." },
        { value: 4, text: "4. Digitally managed and version-controlled policy repository." },
        { value: 5, text: "5. Automated policy system with review alerts and compliance integration." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Coverage & Gap Analysis",
      text: "Do you maintain a gap analysis between documented and missing BD policies and procedures?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no formal gap analysis." },
        { value: 2, text: "2. Occasional informal reviews." },
        { value: 3, text: "3. Structured manual review conducted annually." },
        { value: 4, text: "4. Digital gap dashboard showing policy coverage and status." },
        { value: 5, text: "5. Continuous digital audit with auto-generated gap reports." }
      ]
    },
    {
      id: "Q9", area: "Runbooks", title: "Policy Communication & Access",
      text: "Are policies accessible through a central knowledge hub (e.g., intranet, Confluence, SharePoint)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; policies shared via emails or local folders." },
        { value: 2, text: "2. Uploaded once on shared drive without tracking." },
        { value: 3, text: "3. Accessible digitally but no usage monitoring." },
        { value: 4, text: "4. Access-controlled portal with acknowledgment tracking." },
        { value: 5, text: "5. Integrated portal with usage analytics and automated awareness campaigns." }
      ]
    },
    {
      id: "Q10", area: "Runbooks", title: "SOP & Runbook Availability",
      text: "Are SOPs/runbooks available for recurring BD tasks (e.g., RFP submission, client onboarding, CRM updates)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no standard SOPs or templates." },
        { value: 2, text: "2. SOPs exist but stored locally and inconsistently." },
        { value: 3, text: "3. Central folder available but rarely updated." },
        { value: 4, text: "4. Version-controlled SOP repository reviewed quarterly." },
        { value: 5, text: "5. Digital SOP system linked to workflows with automated reminders." }
      ]
    },
    {
      id: "Q11", area: "Runbooks", title: "SOP Review & Updates",
      text: "Are SOPs regularly reviewed and updated to reflect new tools, market practices, and lessons learned?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; SOPs never reviewed or tested." },
        { value: 2, text: "2. Updated only after issues arise." },
        { value: 3, text: "3. Reviewed annually without validation." },
        { value: 4, text: "4. Periodically reviewed and tested before new projects." },
        { value: 5, text: "5. Automatically updated based on feedback and audit results." }
      ]
    },
    {
      id: "Q12", area: "Compliance", title: "Compliance & Policy Adoption",
      text: "Do you measure compliance with BD-related standards (data privacy, communication ethics, approvals)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no structured compliance monitoring." },
        { value: 2, text: "2. Manual logs maintained sporadically." },
        { value: 3, text: "3. Digital reports exist but not reviewed regularly." },
        { value: 4, text: "4. Automated dashboards display compliance metrics and alerts." },
        { value: 5, text: "5. AI-driven compliance tracking with predictive risk detection." }
      ]
    },
    {
      id: "Q13", area: "Workflow", title: "Workflow Compliance",
      text: "What percentage of BD activities (lead qualification, proposal approval, client onboarding) follow documented workflows?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; less than 25% follow defined processes." },
        { value: 2, text: "2. 25–50% follow defined processes." },
        { value: 3, text: "3. 50–75% compliance tracked manually." },
        { value: 4, text: "4. 75% compliance monitored digitally through CRM." },
        { value: 5, text: "5. 100% compliance automatically tracked via integrated systems." }
      ]
    },
    {
      id: "Q14", area: "Capability", title: "Team Capability & Training",
      text: "Are BD staff trained and certified in data privacy, proposal compliance, and CRM usage policies?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no structured training program." },
        { value: 2, text: "2. Occasional informal training." },
        { value: 3, text: "3. Structured internal training without certification." },
        { value: 4, text: "4. Regular digital training and certification tracking." },
        { value: 5, text: "5. Continuous learning system with AI-based skill tracking and progress analytics." }
      ]
    },
    {
      id: "Q15", area: "Knowledge", title: "Knowledge Repository Hosting",
      text: "Where is the BD knowledge base hosted, and what templates exist (RFP templates, proposal decks, customer profiles, success stories)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; files stored across local drives and emails." },
        { value: 2, text: "2. Shared folder without version control." },
        { value: 3, text: "3. Central repository with limited permissions." },
        { value: 4, text: "4. Version-controlled repository with access tracking." },
        { value: 5, text: "5. Intelligent knowledge portal with search, tagging, and auto-update features." }
      ]
    },
    {
      id: "Q16", area: "Knowledge", title: "Knowledge Updates & Lessons Learned",
      text: "Are knowledge materials updated after project delivery, client meetings, or bid submissions?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no consistent update practice." },
        { value: 2, text: "2. Manual updates done occasionally." },
        { value: 3, text: "3. Regular updates but not linked to projects or CRM." },
        { value: 4, text: "4. Automated update workflow triggered by project closure." },
        { value: 5, text: "5. Continuous knowledge-management loop with AI-based insight recommendations." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual analytics, undocumented processes, reactive reporting." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation, partial automation, limited governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in pipelines; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented; strong automation; integrated workflows; compliance tracked." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive/self-healing pipelines, end-to-end automation, governed data ecosystem, continuous improvement with feedback loops." }
  ]
};
