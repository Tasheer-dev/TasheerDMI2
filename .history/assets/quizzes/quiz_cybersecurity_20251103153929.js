// quizzes/quiz_cybersecurity.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["cybersecurity"] = {
  title: "Cybersecurity Department Digital Maturity Assessment (DMI)",
  shortcode: "CYBER",
  totalQuestions: 8,
  maxScore: 8 * 5,
  sections: [
    { name: "1) Governance, Risk & Compliance Alignment", questions: ["Q1"] },
    { name: "2) Threat Monitoring & Incident Response", questions: ["Q2", "Q3"] },
    { name: "3) Policies, Procedures & Documentation", questions: ["Q4", "Q5"] },
    { name: "4) Awareness, Training & Culture", questions: ["Q6"] },
    { name: "5) Infrastructure Security & Monitoring Automation", questions: ["Q7", "Q8"] }
  ],
  questions: [
    {
      id: "Q1", area: "Governance", title: "Governance, Risk & Compliance Alignment",
      text: "Is the cybersecurity governance framework aligned with the national standard (e.g., NCA) and managed digitally with automated audit and compliance tracking?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; governance handled manually without alignment to national frameworks." },
        { value: 2, text: "2. Initial alignment with national standards but tracked manually." },
        { value: 3, text: "3. Digitally documented governance framework with partial automation for compliance reporting." },
        { value: 4, text: "4. Fully aligned cybersecurity governance system with automated audit and reporting dashboards." },
        { value: 5, text: "5. Integrated digital GRC platform enabling real-time compliance analytics, audit trails, and alerts." }
      ]
    },
    {
      id: "Q2", area: "Monitoring", title: "Security Operations Center (SOC) & Continuous Monitoring",
      text: "Does the department operate a Security Operations Center (SOC) or equivalent system for continuous monitoring, log analysis, and incident detection with automated alerts?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; security events monitored manually or reactively." },
        { value: 2, text: "2. Basic log monitoring using standalone tools or spreadsheets." },
        { value: 3, text: "3. Centralized SOC or SIEM system implemented with limited automation." },
        { value: 4, text: "4. Fully operational SOC with automated alerting, correlation, and analytics." },
        { value: 5, text: "5. Next-generation SOC integrated with threat intelligence and AI-based detection." }
      ]
    },
    {
      id: "Q3", area: "Incident Response", title: "Digital Incident Response & Playbooks",
      text: "Is there a digital incident-response system with automated escalation, predefined playbooks, and post-incident reviews integrated into the SOC workflow?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; incidents tracked by email or Excel." },
        { value: 2, text: "2. Manual response process using ticketing or help-desk tools." },
        { value: 3, text: "3. Standard digital system for incident recording with limited automation." },
        { value: 4, text: "4. Fully automated incident-response system linked with SOC and predefined playbooks." },
        { value: 5, text: "5. AI-orchestrated SOAR platform providing real-time escalation, analytics, and automated mitigation." }
      ]
    },
    {
      id: "Q4", area: "Policies", title: "Policy Documentation & Version Control",
      text: "Are cybersecurity policies, procedures, and standards (e.g., password, classification, incident-response, backup) digitally documented, version-controlled, and acknowledged by users?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies exist in PDFs or scattered folders." },
        { value: 2, text: "2. Partial policy documentation stored without version history." },
        { value: 3, text: "3. Structured repository for policies with manual tracking and user access logs." },
        { value: 4, text: "4. Fully digital policy management portal with versioning and acknowledgment workflows." },
        { value: 5, text: "5. Intelligent compliance system with automated policy lifecycle management and audit linkage." }
      ]
    },
    {
      id: "Q5", area: "Policies", title: "Policy Communication & Updates",
      text: "How are cybersecurity policies communicated and updated across departments (e.g., via policy portal, automated notifications, awareness sessions)?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; policies shared informally or by email." },
        { value: 2, text: "2. Manual updates sent occasionally without tracking acknowledgment." },
        { value: 3, text: "3. Structured communication process with periodic updates to stakeholders." },
        { value: 4, text: "4. Automated policy-communication system with acknowledgment tracking." },
        { value: 5, text: "5. Integrated communication and training platform with AI reminders and awareness analytics." }
      ]
    },
    {
      id: "Q6", area: "Awareness", title: "Awareness, Training & Phishing Culture",
      text: "Does the Cybersecurity Department deliver periodic digital-awareness and phishing-simulation programs to all employees and track participation through LMS?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no structured awareness or phishing program." },
        { value: 2, text: "2. Occasional manual sessions or email reminders." },
        { value: 3, text: "3. Periodic e-learning and phishing tests tracked partially in LMS." },
        { value: 4, text: "4. Regular enterprise-wide cybersecurity-awareness and phishing-simulation program with completion tracking." },
        { value: 5, text: "5. Continuous LMS-integrated training platform with adaptive content, AI scoring, and engagement analytics." }
      ]
    },
    {
      id: "Q7", area: "Infrastructure", title: "Infrastructure Security Integration",
      text: "Are security controls (e.g., firewalls, IDS/IPS, DLP, endpoint protection) centrally managed and integrated into unified monitoring dashboards with automated alerting and reporting?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; individual systems managed separately." },
        { value: 2, text: "2. Partial integration of few security tools with manual reporting." },
        { value: 3, text: "3. Central dashboard available for major security controls." },
        { value: 4, text: "4. Fully integrated unified monitoring dashboard with automated alerts and reports." },
        { value: 5, text: "5. Enterprise-wide SIEM/SOAR ecosystem with cross-platform correlation and predictive analytics." }
      ]
    },
    {
      id: "Q8", area: "Vulnerability", title: "Vulnerability Management & Patch Automation",
      text: "Are vulnerability assessments, penetration tests, and patch-management cycles digitally tracked with automated remediation workflows and follow-up dashboards?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; vulnerability tracking handled manually." },
        { value: 2, text: "2. Basic scanning or patch reports maintained in Excel." },
        { value: 3, text: "3. Scheduled vulnerability assessments and patch tracking via centralized tool." },
        { value: 4, text: "4. Automated remediation workflows with integrated dashboards and alerts." },
        { value: 5, text: "5. Intelligent risk-based vulnerability management with AI-driven prioritization and continuous monitoring." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Cybersecurity is reactive and fragmented. Minimal documentation or automation. Threat monitoring and access controls are manual. No centralized visibility or digital reporting." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic cybersecurity policies and tools exist but operate in silos. Limited automation or monitoring. Incident tracking and awareness programs are occasional and manual." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Cybersecurity is standardized and supported by digital tools (SIEM, IAM, DLP). Policies and response procedures are formalized. Dashboards and compliance audits are regularly reviewed." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Integrated cybersecurity ecosystem with real-time monitoring, automated alerts, IAM-HR-ERP linkage, and centralized dashboards. Proactive risk management and ongoing training programs." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Fully automated, intelligent cybersecurity architecture. AI-driven threat detection, predictive analytics, and self-healing infrastructure. Continuous compliance assurance and enterprise-wide security culture embedded." }
  ]
};
