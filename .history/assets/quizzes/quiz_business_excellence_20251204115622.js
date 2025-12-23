// quizzes/quiz_business_excellence.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["business_excellence"] = {
  title: "Business Excellence Department Digital Maturity Assessment (DMI)",
  shortcode: "BE",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Service Automation Coverage", questions: ["Q3"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q4", "Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8", "Q9"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q10", "Q11"] },
    { name: "6) Compliance & Policy Adoption", questions: ["Q12", "Q13", "Q14"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Do you maintain a Business Excellence Service Catalogue that describes all available services (quality management, process improvement, KPI governance, policy standardization, internal audits, Lean Six Sigma programs, ISO certification management, and continuous improvement initiatives) and their SLAs?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured catalogue or defined service list." },
        { value: 2, text: "2. Partial list of Business Excellence services maintained manually or in Excel." },
        { value: 3, text: "3. Digital service catalogue exists but lacks updates or ownership." },
        { value: 4, text: "4. Comprehensive digital catalogue with owners, KPIs, and SLA coverage." },
        { value: 5, text: "5. Fully integrated Business Excellence catalogue linked to ERP or Quality Management Systems." }
      ]
    },
    {
      id: "Q2", area: "Service Documentation", title: "Service Documentation Completeness",
      text: "What percentage of Business Excellence services (quality reviews, process documentation, KPI tracking, ISO audits) are fully documented with scope, workflows, owners, and performance indicators?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; limited or incomplete documentation." },
        { value: 2, text: "2. Partial documentation across selected BE domains." },
        { value: 3, text: "3. 50–75% of services documented with defined workflows." },
        { value: 4, text: "4. All core BE services fully documented with KPIs and ownership." },
        { value: 5, text: "5. Centralized documentation platform with automated version tracking and SLA monitoring." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Service Automation Coverage",
      text: "What percentage of Business Excellence processes are automated (e.g., KPI reporting, audit scheduling, policy version control, corrective action tracking, dashboard generation)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; processes are manual or semi-digital." },
        { value: 2, text: "2. Basic automation of selected reporting or scheduling functions." },
        { value: 3, text: "3. 50–75% automation achieved through internal tools." },
        { value: 4, text: "4. End-to-end digital automation for BE operations." },
        { value: 5, text: "5. Fully intelligent automation with AI-driven dashboards and predictive analytics." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "Workflow & System Integration",
      text: "Are Business Excellence workflows integrated with other systems (e.g., ERP for performance data, HR for competency tracking, BI for KPI dashboards, audit management)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; independent systems with no integration." },
        { value: 2, text: "2. Manual data transfer between BE and other systems." },
        { value: 3, text: "3. Partial integration with selected enterprise tools (ERP, BI)." },
        { value: 4, text: "4. Fully integrated workflows with automated data synchronization." },
        { value: 5, text: "5. Unified enterprise integration with real-time dashboards and analytics." }
      ]
    },
    {
      id: "Q5", area: "Monitoring", title: "Monitoring Mechanisms",
      text: "Are monitoring mechanisms in place to track organizational performance, process efficiency, and improvement KPIs (e.g., turnaround time, deviation rates, compliance scores)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; performance monitored manually or reactively." },
        { value: 2, text: "2. Manual tracking of KPIs without visualization." },
        { value: 3, text: "3. Regular digital KPI reporting using standard templates." },
        { value: 4, text: "4. Real-time performance dashboards with alerts and trend analysis." },
        { value: 5, text: "5. Predictive KPI analytics with automated improvement recommendations." }
      ]
    },
    {
      id: "Q6", area: "Feedback", title: "Automated Feedback & Escalation",
      text: "Do you have automated feedback loops (e.g., alerts for KPI deviation, root cause triggers, corrective action initiation, or MTTR tracking)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; feedback handled manually." },
        { value: 2, text: "2. Basic notifications or manual escalation lists." },
        { value: 3, text: "3. Partial automation through internal dashboards." },
        { value: 4, text: "4. Fully automated escalation and corrective-action workflows." },
        { value: 5, text: "5. Intelligent feedback automation using AI for root-cause detection and continuous improvement." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Procedure Documentation",
      text: "Are there documented policies for quality management, process improvement, change control, audit management, and ISO/Lean governance?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; undocumented or outdated policies." },
        { value: 2, text: "2. Partial documentation for major areas only." },
        { value: 3, text: "3. Comprehensive policies maintained but not version-controlled by Automated system." },
        { value: 4, text: "4. Fully documented and approved policies managed digitally." },
        { value: 5, text: "5. Smart policy management system with review cycles and compliance tracking." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Gap Analysis",
      text: "Do you maintain a gap analysis between documented and missing Business Excellence policies or procedures?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured policy gap tracking." },
        { value: 2, text: "2. Occasional informal reviews of policy completeness." },
        { value: 3, text: "3. Formal annual gap analysis using manual methods." },
        { value: 4, text: "4. Automated policy gap dashboards with corrective actions." },
        { value: 5, text: "5. Continuous policy audit and auto-generated improvement plans." }
      ]
    },
    {
      id: "Q9", area: "Policy Access", title: "Policy Accessibility",
      text: "Are all Business Excellence policies and procedures accessible via a central knowledge base or governance portal?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; files scattered across local drives." },
        { value: 2, text: "2. Shared folder access without structure or control." },
        { value: 3, text: "3. Centralized repository (SharePoint, Confluence) available to staff." },
        { value: 4, text: "4. Secure access portal with usage analytics and audit logs." },
        { value: 5, text: "5. Intelligent knowledge hub with AI search, notifications, and auto-updates." }
      ]
    },
    {
      id: "Q10", area: "SOPs", title: "SOP Availability",
      text: "Are SOPs/runbooks available for recurring Business Excellence activities (e.g., audit planning, KPI reviews, process mapping, corrective action plans)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs not standardized." },
        { value: 2, text: "2. SOPs exist but incomplete or unapproved." },
        { value: 3, text: "3. Central SOP manual covers all recurring BE activities." },
        { value: 4, text: "4. Digitally maintained SOP repository with role-based access." },
        { value: 5, text: "5. AI-enhanced SOP system with task automation and smart reminders." }
      ]
    },
    {
      id: "Q11", area: "SOPs", title: "SOP Review & Updates",
      text: "Are runbooks reviewed and updated regularly to reflect new standards, digital tools, and improvement frameworks?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; SOPs rarely reviewed." },
        { value: 2, text: "2. Updates occur only after audits or incidents." },
        { value: 3, text: "3. Periodic manual reviews conducted annually." },
        { value: 4, text: "4. Automated version control with scheduled reviews." },
        { value: 5, text: "5. Continuous digital revision process linked to feedback and audit outcomes." }
      ]
    },
    {
      id: "Q12", area: "Compliance", title: "Compliance with Excellence Frameworks",
      text: "Do you measure compliance with excellence frameworks (e.g., ISO 9001, EFQM, Lean Six Sigma, or corporate governance standards)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance not formally measured." },
        { value: 2, text: "2. Internal checks without consistent metrics." },
        { value: 3, text: "3. Structured compliance reviews annually." },
        { value: 4, text: "4. Automated compliance dashboards and self-assessment reports." },
        { value: 5, text: "5. Predictive compliance analytics with certification readiness tracking." }
      ]
    },
    {
      id: "Q13", area: "Process", title: "Process Conformance",
      text: "What percentage of Business Excellence processes (audits, reviews, process changes) follow documented workflows and quality control measures?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; inconsistent process compliance." },
        { value: 2, text: "2. 25–50% compliance tracked manually." },
        { value: 3, text: "3. 50–75% of processes aligned to documented workflows." },
        { value: 4, text: "4. Over 75% digital tracking with audit evidence." },
        { value: 5, text: "5. 100% workflow compliance monitored through integrated dashboards." }
      ]
    },
    {
      id: "Q14", area: "Training", title: "Team Competency & Certification",
      text: "Are team members trained and certified in quality management, process improvement, and ISO/Lean standards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; minimal or no certification tracking." },
        { value: 2, text: "2. Occasional internal awareness sessions." },
        { value: 3, text: "3. Regular internal training without certifications." },
        { value: 4, text: "4. Certified training program with attendance and results tracked digitally." },
        { value: 5, text: "5. Continuous competency program with AI-based skill mapping and progress analytics." }
      ]
    },
    {
      id: "Q15", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Where is the Business Excellence knowledge base hosted, and what templates exist (audit checklists, KPI review templates, process maps, RCA forms, improvement charters)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; knowledge stored manually or inconsistently." },
        { value: 2, text: "2. Basic template folder maintained without governance." },
        { value: 3, text: "3. Organized knowledge base hosted on internal platforms." },
        { value: 4, text: "4. Access-controlled repository with version tracking and usage logs." },
        { value: 5, text: "5. Intelligent digital library with auto-tagging, search, and update workflows." }
      ]
    },
    {
      id: "Q16", area: "Knowledge", title: "Knowledge Maintenance & Updates",
      text: "Are knowledge materials updated after audits, management reviews, or improvement projects?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured update process." },
        { value: 2, text: "2. Updates made manually and inconsistently." },
        { value: 3, text: "3. Scheduled post-audit reviews with manual updates." },
        { value: 4, text: "4. Automated review and publishing workflow after every audit cycle." },
        { value: 5, text: "5. Continuous digital knowledge governance with audit linkage and analytics." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual, fragmented, reactive GRC processes. No system integration or central repository." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation and spreadsheets. Limited digital tools with manual updates." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Defined workflows, documented processes, and digital tools in partial use." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Integrated GRC platforms, automated dashboards, and cross-functional data flow." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "AI-driven predictive analytics, full automation, and continuous improvement culture." }
  ]
};