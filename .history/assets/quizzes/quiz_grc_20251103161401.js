// quizzes/quiz_grc.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["grc"] = {
  title: "Governance, Risk & Compliance (GRC) Department Digital Maturity Assessment (DMI)",
  shortcode: "GRC",
  totalQuestions: 9,
  maxScore: 9 * 5,
  sections: [
    { name: "1) Know Your Customer (KYC)", questions: ["Q1"] },
    { name: "2) Risk Register & Automation", questions: ["Q2"] },
    { name: "3) Compliance & Financial Crime Consultation", questions: ["Q3", "Q4"] },
    { name: "4) Incident & Issue Management", questions: ["Q5"] },
    { name: "5) Compliance Reviews & Library", questions: ["Q6", "Q7"] },
    { name: "6) Awareness & Training Management", questions: ["Q8"] },
    { name: "7) Continuous Monitoring & Reporting", questions: ["Q9"] }
  ],
  questions: [
    {
      id: "Q1", area: "KYC", title: "Know Your Customer (KYC)",
      text: "Is the compliance management 'Know Your Customer' process automated and shared with stakeholders?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; KYC data collected manually and not systemized." },
        { value: 2, text: "2. Partial automation of KYC process using spreadsheets or standalone tools." },
        { value: 3, text: "3. Centralized digital KYC platform with partial data-sharing." },
        { value: 4, text: "4. Fully automated KYC workflow with digital verification and stakeholder access." },
        { value: 5, text: "5. Integrated KYC management system with real-time analytics, alerts, and compliance dashboards." }
      ]
    },
    {
      id: "Q2", area: "Risk", title: "Risk Register & Automation",
      text: "Is the enterprise risk register managed through a digital platform that automatically updates risk scores, triggers alerts for overdue actions, and links to business units?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; risks tracked manually or inconsistently." },
        { value: 2, text: "2. Basic risk register maintained in Excel or shared folders." },
        { value: 3, text: "3. Digital risk platform with automated updates for select areas." },
        { value: 4, text: "4. Fully integrated enterprise risk management system with real-time alerts and analytics." },
        { value: 5, text: "5. Predictive risk analytics and automated escalation workflows integrated with GRC dashboard." }
      ]
    },
    {
      id: "Q3", area: "Compliance", title: "Compliance & Financial Crime Consultation",
      text: "Does the GRC department use automated compliance and Financial Crime Consultation tools?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; consultations handled manually via reports or emails." },
        { value: 2, text: "2. Limited automation for compliance data collection." },
        { value: 3, text: "3. Centralized compliance tool with semi-automated consultation tracking." },
        { value: 4, text: "4. Fully automated system with audit trail, workflow, and report generation." },
        { value: 5, text: "5. AI-enabled compliance consultation platform integrated with fraud detection and analytics." }
      ]
    },
    {
      id: "Q4", area: "Incident", title: "Financial Crime-Related Incident Submission",
      text: "Does the GRC department use automated submission of a Compliance or Financial Crime-Related Incident?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; incident reports submitted manually or via email." },
        { value: 2, text: "2. Basic submission system without structured workflows." },
        { value: 3, text: "3. Digital incident submission tool with limited automation." },
        { value: 4, text: "4. Fully automated incident submission and tracking platform with escalation logic." },
        { value: 5, text: "5. Intelligent GRC incident system with automated routing, classification, and root-cause tracking." }
      ]
    },
    {
      id: "Q5", area: "Issue", title: "Incident & Issue Management",
      text: "Is there an automated incident management system that allows digital reporting, categorization, root-cause analysis, and closure tracking for GRC-related incidents?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; incidents logged manually or tracked offline." },
        { value: 2, text: "2. Partial automation for categorization or reporting." },
        { value: 3, text: "3. Digital GRC incident management system in place for standard cases." },
        { value: 4, text: "4. Fully automated incident management with analytics dashboards and escalation tracking." },
        { value: 5, text: "5. Predictive issue management system integrating AI-based root-cause and trend analytics." }
      ]
    },
    {
      id: "Q6", area: "Compliance Review", title: "Compliance Review of Contracts & Transactions",
      text: "Are Compliance Reviews of contracts, agreements, and transactions planned, executed, and monitored through a digital platform?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reviews done manually." },
        { value: 2, text: "2. Spreadsheets or email-based tracking of reviews." },
        { value: 3, text: "3. Centralized compliance review platform with standard templates." },
        { value: 4, text: "4. Fully automated workflow with versioning, approval tracking, and exception reporting." },
        { value: 5, text: "5. AI-driven compliance platform for real-time monitoring and automated contract-risk scoring." }
      ]
    },
    {
      id: "Q7", area: "Library", title: "Compliance Library",
      text: "Is the compliance library established and monitored through a digital platform and shared with all stakeholders?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies stored in scattered folders or email attachments." },
        { value: 2, text: "2. Basic shared folder containing reference documents." },
        { value: 3, text: "3. Centralized compliance repository accessible to select teams." },
        { value: 4, text: "4. Fully digital compliance library with version control and audit tracking." },
        { value: 5, text: "5. Intelligent compliance knowledge hub with AI search, tagging, and engagement analytics." }
      ]
    },
    {
      id: "Q8", area: "Training", title: "Awareness & Training Management",
      text: "Does the GRC Department deliver or manage compliance and governance awareness programs across departments through a digital platform (e.g., LMS or e-learning portal), with automated reminders, completion tracking, and assessment results to ensure organization-wide participation and compliance?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; compliance awareness sessions done manually or irregularly." },
        { value: 2, text: "2. Occasional workshops or email-based reminders." },
        { value: 3, text: "3. Structured LMS platform for training and tracking completion." },
        { value: 4, text: "4. Fully digital compliance training with automated reminders and analytics." },
        { value: 5, text: "5. Continuous adaptive training system integrated with LMS, risk data, and compliance dashboards." }
      ]
    },
    {
      id: "Q9", area: "Monitoring", title: "Continuous Monitoring & Reporting",
      text: "Are compliance and risk metrics continuously monitored and auto-reported to management instead of being manually compiled?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; reports prepared manually on demand." },
        { value: 2, text: "2. Periodic risk and compliance reports compiled manually." },
        { value: 3, text: "3. Digital reporting dashboards with partial automation." },
        { value: 4, text: "4. Fully automated reporting system with scheduled updates and management dashboards." },
        { value: 5, text: "5. Intelligent, self-refreshing compliance analytics with predictive indicators and auto-generated executive summaries." }
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
