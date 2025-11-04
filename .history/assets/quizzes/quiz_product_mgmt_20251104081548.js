// quizzes/quiz_product.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["product_mgmt"] = {
  title: "Product Management Digital Maturity Assessment (DMI)",
  shortcode: "PROD",
  totalQuestions: 15,
  maxScore: 15 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Service Automation Coverage", questions: ["Q3", "Q4"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q9", "Q10"] },
    { name: "6) Compliance & Policy Adoption", questions: ["Q11", "Q12"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q13", "Q14", "Q15"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Does the Product Department maintain a formal service catalogue listing all product-related services and their owners?",
      choices: [
        { value: 1, text: "1. ad-hoc defined list of services." },
        { value: 2, text: "2. Partial list maintained manually or on paper." },
        { value: 3, text: "3. Digital list exists but not complete or updated." },
        { value: 4, text: "4. Comprehensive digital catalogue published internally with owners." },
        { value: 5, text: "5. Fully integrated service catalogue linked to ERP/CRM with real-time updates." }
      ]
    },
    {
      id: "Q2", area: "Workflow Tracking", title: "Request & Workflow Tracking",
      text: "How are product requests, enhancements, and releases submitted and tracked?",
      choices: [
        { value: 1, text: "1. Requests managed via emails or verbal communication." },
        { value: 2, text: "2. Logged in spreadsheets without clear ownership." },
        { value: 3, text: "3. Tracked in digital tools but without SLA visibility." },
        { value: 4, text: "4. Fully tracked via workflow tools (e.g., Jira, DevOps) with SLA dashboards." },
        { value: 5, text: "5. AI-enabled request tracking with automated prioritization and performance insights." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Automation of Product Lifecycle",
      text: "What percentage of the product lifecycle (requirement → design → release → feedback) is automated?",
      choices: [
        { value: 1, text: "1. Entirely manual workflow." },
        { value: 2, text: "2. Basic automation in some phases only." },
        { value: 3, text: "3. 50–70% automated with limited integration." },
        { value: 4, text: "4. End-to-end automation using integrated tools." },
        { value: 5, text: "5. Intelligent automation with predictive analytics and auto-alerts." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "System Integration",
      text: "Are product systems integrated with development, QA, operations, and client systems?",
      choices: [
        { value: 1, text: "1. Systems work independently with no integration." },
        { value: 2, text: "2. Partial integration using manual data uploads." },
        { value: 3, text: "3. Integration exists between 2–3 key platforms only." },
        { value: 4, text: "4. Fully automated data flow between all major systems." },
        { value: 5, text: "5. Unified integration platform with real-time data exchange and monitoring." }
      ]
    },
    {
      id: "Q5", area: "Monitoring", title: "Performance Monitoring & Analytics",
      text: "How is product performance (releases, quality, client satisfaction) monitored?",
      choices: [
        { value: 1, text: "1. ad-hoc tracking of performance metrics." },
        { value: 2, text: "2. Manual reporting from teams on an ad-hoc basis." },
        { value: 3, text: "3. Standard KPIs tracked monthly in Excel or ERP." },
        { value: 4, text: "4. Real-time digital dashboards showing all key metrics." },
        { value: 5, text: "5. Predictive performance analytics with automated insights and alerts." }
      ]
    },
    {
      id: "Q6", area: "Feedback", title: "Client Feedback Integration",
      text: "Is client feedback automatically linked to product updates or backlog?",
      choices: [
        { value: 1, text: "1. ad-hoc client feedback process." },
        { value: 2, text: "2. Feedback collected manually via emails or calls." },
        { value: 3, text: "3. Feedback logged in CRM but not linked to backlog." },
        { value: 4, text: "4. Feedback digitally integrated with product management tools." },
        { value: 5, text: "5. AI-driven sentiment analysis feeding directly into backlog prioritization." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Governance Documentation",
      text: "Are product management policies (governance, testing, change control) documented and updated?",
      choices: [
        { value: 1, text: "1. ad-hoc product governance documents." },
        { value: 2, text: "2. Partial documentation without approval or updates." },
        { value: 3, text: "3. Approved policies exist but not version-controlled." },
        { value: 4, text: "4. Digitally version-controlled policy repository available to teams." },
        { value: 5, text: "5. Automated policy management with review alerts and compliance linkage." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Coverage & Gap Analysis",
      text: "Is there an assessment to identify missing or outdated product management policies?",
      choices: [
        { value: 1, text: "1. ad-hoc policy review or gap analysis." },
        { value: 2, text: "2. Informal review done occasionally." },
        { value: 3, text: "3. Structured review done annually without metrics." },
        { value: 4, text: "4. Digital gap analysis dashboard tracking policy coverage." },
        { value: 5, text: "5. Continuous digital audit with auto-generated gap reports." }
      ]
    },
    {
      id: "Q9", area: "Runbooks", title: "Policy Communication & Access",
      text: "How are product management policies communicated and accessed?",
      choices: [
        { value: 1, text: "1. Shared verbally or through ad-hoc emails." },
        { value: 2, text: "2. Uploaded once on a shared drive." },
        { value: 3, text: "3. Accessible via intranet/SharePoint but not tracked." },
        { value: 4, text: "4. Access-controlled digital portal with acknowledgment tracking." },
        { value: 5, text: "5. Integrated portal with policy access analytics and automated awareness alerts." }
      ]
    },
    {
      id: "Q10", area: "Runbooks", title: "Runbooks & SOP Availability",
      text: "Are runbooks or SOPs available for recurring product activities (e.g., release, rollback, sprint review)?",
      choices: [
        { value: 1, text: "1. Minimum standard SOPs or checklists." },
        { value: 2, text: "2. SOPs exist informally or stored locally." },
        { value: 3, text: "3. Centralized SOP folder exists but rarely updated." },
        { value: 4, text: "4. Version-controlled SOP repository reviewed regularly." },
        { value: 5, text: "5. Digital SOP system with automation, reminders, and workflow integration." }
      ]
    },
    {
      id: "Q11", area: "Compliance", title: "SOP Testing & Updates",
      text: "How often are SOPs tested, reviewed, and updated?",
      choices: [
        { value: 1, text: "1. Minimum tested or reviewed." },
        { value: 2, text: "2. Updated only after major issues occur." },
        { value: 3, text: "3. Reviewed annually without test validation." },
        { value: 4, text: "4. Periodically reviewed and tested before major releases." },
        { value: 5, text: "5. Automatically reviewed and improved through lessons-learned feedback." }
      ]
    },
    {
      id: "Q12", area: "Compliance", title: "Compliance & Audit Monitoring",
      text: "How is compliance with product standards (Agile, ISO, governance) tracked?",
      choices: [
        { value: 1, text: "1. Minimum compliance tracking." },
        { value: 2, text: "2. Manual compliance logs maintained." },
        { value: 3, text: "3. Digital reports available but not reviewed consistently." },
        { value: 4, text: "4. Automated dashboards show compliance metrics and alerts." },
        { value: 5, text: "5. AI-enabled compliance monitoring with predictive issue detection." }
      ]
    },
    {
      id: "Q13", area: "Knowledge", title: "Workflow Compliance",
      text: "What percentage of product activities follow approved workflows and SOPs?",
      choices: [
        { value: 1, text: "1. Less than 25% of activities follow defined workflows." },
        { value: 2, text: "2. 25–50% follow defined processes." },
        { value: 3, text: "3. 50–75% compliance rate tracked manually." },
        { value: 4, text: "4. Over 75% tracked digitally through systems." },
        { value: 5, text: "5. 100% compliance monitored automatically via integrated workflows." }
      ]
    },
    {
      id: "Q14", area: "Knowledge", title: "Team Capability & Training",
      text: "Are team members trained and certified in Agile, Scrum, or product governance?",
      choices: [
        { value: 1, text: "1. Minimum training or certifications." },
        { value: 2, text: "2. Occasional informal sessions." },
        { value: 3, text: "3. Structured internal training without certification." },
        { value: 4, text: "4. Regular training and certification program tracked digitally." },
        { value: 5, text: "5. Continuous learning platform with AI-based skill tracking and progress analytics." }
      ]
    },
    {
      id: "Q15", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a centralized digital repository for templates, SOPs, and vendor forms?",
      choices: [
        { value: 1, text: "1. Files scattered in local drives." },
        { value: 2, text: "2. Shared folder without version control." },
        { value: 3, text: "3. Central repository with limited access control." },
        { value: 4, text: "4. Version-controlled digital repository with access tracking." },
        { value: 5, text: "5. Intelligent knowledge portal with search, tagging, and update automation." }
      ]
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
