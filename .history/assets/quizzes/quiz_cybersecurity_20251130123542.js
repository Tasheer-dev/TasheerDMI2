// quizzes/quiz_cybersecurity.js
// -----------------------------------------------------------------------------
// Tasheer Cybersecurity Department
// Digital Maturity Assessment (DMI)
// Rating Scale: 1) Ad-hoc, 2) Basic Implementation, 3) Managed,
//               4) Advanced, 5) Optimized / Automated
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["cybersecurity"] = {
  title: "Cybersecurity Department Digital Maturity Assessment (DMI)",
  shortcode: "CYBER",
  totalQuestions: 25,
  maxScore: 25 * 5,

  sections: [
    { name: "1) Governance, Risk & Compliance (GRC)", questions: ["Q1","Q2","Q3","Q4","Q5"] },
    { name: "2) SOC, Monitoring & Incident Response", questions: ["Q6","Q7","Q8","Q9","Q10"] },
    { name: "3) Policies, Data Protection & Compliance", questions: ["Q11","Q12","Q13","Q14","Q15"] },
    { name: "4) Awareness, Workforce & Culture", questions: ["Q16","Q17","Q18","Q19","Q20"] },
    { name: "5) Infrastructure, Identity & Automation", questions: ["Q21","Q22","Q23","Q24","Q25"] }
  ],

  questions: [
    // ------------------------ 1) Governance, Risk & Compliance ------------------------
    {
      id: "Q1", area: "Governance, Risk & Compliance (GRC)",
      title: "Cybersecurity Governance Alignment",
      text: "Is the cybersecurity governance framework aligned with the national standard (e.g., NCA) and managed digitally with automated audit and compliance tracking?",
      Evidence: "Governance framework, audit logs, NCA compliance dashboard.",
      choices: [
        { value: 1, text: "1. Ad-hoc governance with no digital tracking." },
        { value: 2, text: "2. Basic alignment with limited manual tracking." },
        { value: 3, text: "3. Managed governance with partial digital automation." },
        { value: 4, text: "4. Advanced digital compliance monitoring and audits." },
        { value: 5, text: "5. Fully optimized, automated and integrated GRC platform." }
      ]
    },
    {
      id: "Q2", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital KPI & KRI Monitoring",
      text: "Are cybersecurity KPIs and KRIs monitored through real-time digital dashboards with automated analytics?",
      Evidence: "Dashboard logs, KPI reports, data refresh cycles.",
      choices: [
        { value: 1, text: "1. KPIs tracked manually." },
        { value: 2, text: "2. Basic dashboards updated manually." },
        { value: 3, text: "3. Managed dashboards updated periodically." },
        { value: 4, text: "4. Advanced automated KPI dashboards." },
        { value: 5, text: "5. Predictive KPI analytics with automated insights." }
      ]
    },
    {
      id: "Q3", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital Policy Governance Workflow",
      text: "Is there a digital workflow for reviewing, approving, and updating cybersecurity policies with automated version control?",
      Evidence: "Policy portal, approval logs, version history.",
      choices: [
        { value: 1, text: "1. Policies handled manually without workflow." },
        { value: 2, text: "2. Partially digital documentation without versioning." },
        { value: 3, text: "3. Managed workflow with structured reviews." },
        { value: 4, text: "4. Automated routing and versioning." },
        { value: 5, text: "5. Fully automated policy governance lifecycle." }
      ]
    },
    {
      id: "Q4", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital Risk & Audit Management",
      text: "Are internal audits, compliance checks, and risk assessments performed using digital tools with automated reporting and tracking?",
      Evidence: "Risk register, audit system logs, assessment reports.",
      choices: [
        { value: 1, text: "1. Manual audits and risk tracking." },
        { value: 2, text: "2. Basic digital logs used manually." },
        { value: 3, text: "3. Digital audit processes partially automated." },
        { value: 4, text: "4. Fully digital audit workflows and dashboards." },
        { value: 5, text: "5. Predictive risk analytics and automated assurance." }
      ]
    },
    {
      id: "Q5", area: "Governance, Risk & Compliance (GRC)",
      title: "Third-Party Cyber Risk Management",
      text: "Is third-party/vendor cybersecurity risk assessed and monitored through a digital platform with automated scoring and alerts?",
      Evidence: "Vendor risk dashboard, SLA tracking, digital scoring.",
      choices: [
        { value: 1, text: "1. Vendor risks tracked manually." },
        { value: 2, text: "2. Basic digital records without monitoring." },
        { value: 3, text: "3. Managed digital assessment process." },
        { value: 4, text: "4. Automated monitoring with alerts." },
        { value: 5, text: "5. Fully optimized, real-time third-party risk platform." }
      ]
    },

    // ------------------------ 2) SOC, Monitoring & Incident Response ------------------------
    {
      id: "Q6", area: "SOC, Monitoring & Incident Response",
      title: "SOC Continuous Monitoring",
      text: "Does the department operate a Security Operations Center (SOC) or equivalent system for continuous monitoring, log analysis, and incident detection with automated alerts?",
      Evidence: "SIEM logs, SOC dashboards, alerting rules.",
      choices: [
        { value: 1, text: "1. No SOC or minimal manual monitoring." },
        { value: 2, text: "2. Basic log monitoring with limited tools." },
        { value: 3, text: "3. Managed SOC with limited automation." },
        { value: 4, text: "4. Advanced SOC with automated detection." },
        { value: 5, text: "5. Fully automated next-gen SOC with AI analytics." }
      ]
    },
    {
      id: "Q7", area: "SOC, Monitoring & Incident Response",
      title: "SOC Automation & SOAR Integration",
      text: "Is the SOC supported by automated detection technologies (e.g., SIEM correlation rules, SOAR workflows) to reduce manual effort?",
      Evidence: "SOAR workflows, automated incident logs.",
      choices: [
        { value: 1, text: "1. No SOC automation." },
        { value: 2, text: "2. Basic rule-based automation." },
        { value: 3, text: "3. Managed automated playbooks." },
        { value: 4, text: "4. Advanced SOAR-enabled automation." },
        { value: 5, text: "5. Fully autonomous incident orchestration." }
      ]
    },
    {
      id: "Q8", area: "SOC, Monitoring & Incident Response",
      title: "Threat Intelligence Automation",
      text: "Are threat-intelligence feeds integrated into monitoring tools with automated enrichment and prioritization of alerts?",
      Evidence: "Threat intel logs, integration proofs.",
      choices: [
        { value: 1, text: "1. No threat intelligence integration." },
        { value: 2, text: "2. Manual intel updates." },
        { value: 3, text: "3. Managed TI integration." },
        { value: 4, text: "4. Automated enrichment and correlation." },
        { value: 5, text: "5. Predictive AI-based threat intelligence." }
      ]
    },
    {
      id: "Q9", area: "SOC, Monitoring & Incident Response",
      title: "Digital Incident Response System",
      text: "Is there a digital incident-response system with automated escalation, predefined playbooks, and post-incident reviews integrated into the SOC workflow?",
      Evidence: "IR platform logs, escalation workflows.",
      choices: [
        { value: 1, text: "1. Manual incident handling." },
        { value: 2, text: "2. Basic ticket-based tracking." },
        { value: 3, text: "3. Managed IR platform with limited automation." },
        { value: 4, text: "4. Advanced IR automation and playbooks." },
        { value: 5, text: "5. Fully automated SOAR-driven response." }
      ]
    },
    {
      id: "Q10", area: "SOC, Monitoring & Incident Response",
      title: "Post-Incident Review Automation",
      text: "Are incident trends, root-cause analytics, and post-incident reports automatically generated and stored in a centralized digital repository?",
      Evidence: "PIR records, analytics dashboard.",
      choices: [
        { value: 1, text: "1. No structured PIR process." },
        { value: 2, text: "2. PIR reports created manually." },
        { value: 3, text: "3. Managed PIR documentation." },
        { value: 4, text: "4. Automated analytics and reporting." },
        { value: 5, text: "5. Predictive and continuous learning engine." }
      ]
    },

    // ------------------------ 3) Policies, Data Protection & Compliance ------------------------
    {
      id: "Q11", area: "Policies, Data Protection & Compliance",
      title: "Digital Policy Documentation",
      text: "Are cybersecurity policies, procedures, and standards digitally documented, version-controlled ?",
      Evidence: "Policy repository, version logs, acknowledgment tracking.",
      choices: [
        { value: 1, text: "1. Policies informal and manual." },
        { value: 2, text: "2. Basic digital documents without tracking." },
        { value: 3, text: "3. Managed policy portal with version control." },
        { value: 4, text: "4. Advanced digital policy lifecycle." },
        { value: 5, text: "5. Fully automated policy governance and analytics." }
      ]
    },
    {
      id: "Q12", area: "Policies, Data Protection & Compliance",
      title: "Policy Communication & Tracking",
      text: "Are policy acknowledgments tracked through a digital system with automated reminders and compliance dashboards?",
      Evidence: "Acknowledgment logs, reminder schedules.",
      choices: [
        { value: 1, text: "1. Manual communication." },
        { value: 2, text: "2. Basic tracking without automation." },
        { value: 3, text: "3. Managed tracking with partial automation." },
        { value: 4, text: "4. Automated reminders and dashboards." },
        { value: 5, text: "5. AI-driven compliance insights." }
      ]
    },
    {
      id: "Q13", area: "Policies, Data Protection & Compliance",
      title: "Digital Data Protection Controls",
      text: "Are data-classification and data-protection requirements enforced using digital tools such as DLP, MDM, and automated encryption?",
      Evidence: "DLP logs, MDM enforcement, encryption policies.",
      choices: [
        { value: 1, text: "1. No digital data protection." },
        { value: 2, text: "2. Basic tools used manually." },
        { value: 3, text: "3. Managed protection policies." },
        { value: 4, text: "4. Automated enforcement across systems." },
        { value: 5, text: "5. Fully integrated intelligent data-protection framework." }
      ]
    },
    {
      id: "Q14", area: "Policies, Data Protection & Compliance",
      title: "Digital PDPL Compliance",
      text: "Is PDPL compliance (data retention, consent, subject rights, and transfers) managed through digital workflows with automated monitoring?",
      Evidence: "PDPL logs, consent workflows, retention schedules.",
      choices: [
        { value: 1, text: "1. PDPL requirements managed manually." },
        { value: 2, text: "2. Basic digital records." },
        { value: 3, text: "3. Managed compliance processes." },
        { value: 4, text: "4. Automated PDPL workflows." },
        { value: 5, text: "5. Fully optimized compliance engine with alerts." }
      ]
    },
    {
      id: "Q15", area: "Policies, Data Protection & Compliance",
      title: "Audit Log Automation",
      text: "Are audit logs automatically collected, securely retained, and analyzed using centralized digital logging and alerting tools?",
      Evidence: "Log retention system, SIEM history, alert logs.",
      choices: [
        { value: 1, text: "1. Logs handled manually." },
        { value: 2, text: "2. Basic log storage." },
        { value: 3, text: "3. Managed logging solution." },
        { value: 4, text: "4. Automated log analysis and alerting." },
        { value: 5, text: "5. Fully intelligent log analytics platform." }
      ]
    },

    // ------------------------ 4) Awareness, Workforce & Culture ------------------------
    {
      id: "Q16", area: "Awareness, Workforce & Culture",
      title: "Digital Awareness & Phishing Programs",
      text: "Does the Cybersecurity Department deliver periodic digital-awareness and phishing-simulation programs to all employees and track participation through LMS?",
      Evidence: "LMS reports, phishing campaign logs.",
      choices: [
        { value: 1, text: "1. No structured awareness program." },
        { value: 2, text: "2. Basic sessions without tracking." },
        { value: 3, text: "3. Managed LMS-based training." },
        { value: 4, text: "4. Automated simulations and scoring." },
        { value: 5, text: "5. Adaptive, AI-based awareness platform." }
      ]
    },
    {
      id: "Q17", area: "Awareness, Workforce & Culture",
      title: "Phishing Analytics & Automation",
      text: "Are phishing results, user-risk scores, and remediation training automatically generated and linked to employee profiles?",
      Evidence: "Phishing analytics logs, risk dashboards.",
      choices: [
        { value: 1, text: "1. Manual phishing reporting." },
        { value: 2, text: "2. Basic analytics without automation." },
        { value: 3, text: "3. Managed scoring system." },
        { value: 4, text: "4. Automated analytics and remediation." },
        { value: 5, text: "5. Predictive user-risk modelling." }
      ]
    },
    {
      id: "Q18", area: "Awareness, Workforce & Culture",
      title: "Digital Skills Gap Assessment",
      text: "Is there a digital skills-gap assessment for cybersecurity staff aligned with NCA workforce competency frameworks?",
      Evidence: "Skills matrix, training dashboards.",
      choices: [
        { value: 1, text: "1. No structured skills assessment." },
        { value: 2, text: "2. Basic assessments done manually." },
        { value: 3, text: "3. Managed digital competency tracking." },
        { value: 4, text: "4. Automated skills assessment." },
        { value: 5, text: "5. Predictive training and competency modelling." }
      ]
    },
    {
      id: "Q19", area: "Awareness, Workforce & Culture",
      title: "Digital Cyber Onboarding",
      text: "Are new employees automatically enrolled in cybersecurity onboarding programs using digital workflow tools?",
      Evidence: "Onboarding workflow, LMS auto-enrollment logs.",
      choices: [
        { value: 1, text: "1. Manual onboarding." },
        { value: 2, text: "2. Partially digital onboarding." },
        { value: 3, text: "3. Managed digital onboarding." },
        { value: 4, text: "4. Automated workflows for onboarding." },
        { value: 5, text: "5. Fully intelligent onboarding with adaptive learning paths." }
      ]
    },
    {
      id: "Q20", area: "Awareness, Workforce & Culture",
      title: "Cybersecurity Culture Measurement",
      text: "Is cybersecurity culture measured regularly using digital surveys, analytics platforms, or automated behavioral tracking mechanisms?",
      Evidence: "Culture surveys, analytics dashboards.",
      choices: [
        { value: 1, text: "1. No culture measurement." },
        { value: 2, text: "2. Basic surveys without analytics." },
        { value: 3, text: "3. Managed culture tracking system." },
        { value: 4, text: "4. Automated analytics and reporting." },
        { value: 5, text: "5. Predictive culture scoring and behavior modelling." }
      ]
    },

    // ------------------------ 5) Infrastructure, Identity & Automation ------------------------
    {
      id: "Q21", area: "Infrastructure, Identity & Automation",
      title: "Security Controls Integration",
      text: "Are security controls (e.g., firewalls, IDS/IPS, DLP, endpoint protection) centrally managed and integrated into unified monitoring dashboards with automated alerting and reporting?",
      Evidence: "SIEM integrations, control dashboards.",
      choices: [
        { value: 1, text: "1. Controls managed manually and separately." },
        { value: 2, text: "2. Partial integration across some tools." },
        { value: 3, text: "3. Managed central dashboard." },
        { value: 4, text: "4. Fully integrated controls with automation." },
        { value: 5, text: "5. Predictive threat correlation across all platforms." }
      ]
    },
    {
      id: "Q22",   area: "Data Classification & Protection",
  title: "National Data Classification Standards",
  text: "Are national data classification standards applied consistently across the organization?",
  Evidence: "Classification framework, national standard mapping, compliance reports.",
  choices: [
    { value: 1, text: "No structured compliance with national classification standards; activities handled ad-hoc." },
    { value: 2, text: "Basic awareness of standards but inconsistent application." },
    { value: 3, text: "Defined mapping to national standards with partial digital enforcement." },
    { value: 4, text: "Advanced digital enforcement of national classification rules." },
    { value: 5, text: "Fully automated classification compliance aligned with national standards." }
  ]
},
    {
      id: "Q23", area: "Infrastructure, Identity & Automation",
      title: "Privileged Access Management",
      text: "Is privileged-access management (PAM) implemented with automated session monitoring, alerting, and recording capabilities?",
      Evidence: "PAM session logs, alert dashboards.",
      choices: [
        { value: 1, text: "1. Privileged access unmanaged." },
        { value: 2, text: "2. Basic PAM with limited monitoring." },
        { value: 3, text: "3. Managed PAM system." },
        { value: 4, text: "4. Automated PAM monitoring." },
        { value: 5, text: "5. Fully intelligent PAM with behavior analytics." }
      ]
    },
    {
      id: "Q24", area: "Infrastructure, Identity & Automation",
      title: "Vulnerability & Patch Automation",
      text: "Are vulnerability assessments, penetration tests, and patch-management cycles digitally tracked with automated remediation workflows and follow-up dashboards?",
      Evidence: "VA reports, patch dashboards, workflow logs.",
      choices: [
        { value: 1, text: "1. Manual vulnerability tracking." },
        { value: 2, text: "2. Basic digital records." },
        { value: 3, text: "3. Managed patch and VA processes." },
        { value: 4, text: "4. Automated remediation workflows." },
        { value: 5, text: "5. Fully optimized risk-based VA automation." }
      ]
    },
    {
      id: "Q25",   area: "Data Classification & Protection",
  title: "Data Classification Process",
  text: "Is data categorized and classified based on its importance, sensitivity, and regulatory requirements?",
  Evidence: "Classification policy, classification logs, data inventory.",
  choices: [
    { value: 1, text: "No structured data classification process; activities handled ad-hoc." },
    { value: 2, text: "Basic classification activities with limited digital tools." },
    { value: 3, text: "Defined classification process with partially digital workflows." },
    { value: 4, text: "Advanced digital classification tools applied consistently." },
    { value: 5, text: "Fully automated classification engine with intelligent tagging and analytics." }
  ]
}




  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Cybersecurity processes are mostly manual, inconsistent, and reactive. Limited digital governance or automation." },
    { name: "26–50% (Basic Implementation)", range: [26, 50], description: "Basic digital tools exist but operations remain manual and disconnected. Early signs of standardization." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Defined and managed cybersecurity processes supported by digital tools, dashboards, and structured workflows." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Highly integrated cybersecurity ecosystem with strong automation, SIEM/SOAR, IAM, and continuous compliance." },
    { name: "91–100% (Optimized / Automated)", range: [91, 100], description: "Fully optimized, intelligent, automated cybersecurity environment with AI analytics, predictive risk management, and seamless integration." }
  ]
};
