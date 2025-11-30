// quizzes/quiz_cybersecurity.js
// -----------------------------------------------------------------------------
// Tasheer Cybersecurity Department
// Digital Maturity Assessment (DMI)
// Rating Scale Applied to All Questions:
// 1) No structured process; activities handled ad-hoc.
// 2) Basic implementation with limited digital tools and inconsistent practices.
// 3) Defined and managed process with partially digital workflows and regular application.
// 4) Advanced, integrated digital process with strong automation and consistent performance.
// 5) Fully optimized and automated process with intelligent analytics and continuous improvement.
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

    // -------------------------------------------------------------
    // 1) GOVERNANCE, RISK & COMPLIANCE (GRC)
    // -------------------------------------------------------------

    {
      id: "Q1", area: "Governance, Risk & Compliance (GRC)",
      title: "Cybersecurity Governance Alignment",
      text: "Is the cybersecurity governance framework aligned with the national standard (e.g., NCA) and managed digitally with automated audit and compliance tracking?",
      Evidence: "Governance framework, audit logs, NCA compliance dashboards.",
      choices: [
        { value: 1, text: "No structured governance process; activities handled ad-hoc." },
        { value: 2, text: "Basic implementation with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed governance with partially digital workflows and regular application." },
        { value: 4, text: "Advanced, integrated governance process with strong automation and consistent performance." },
        { value: 5, text: "Fully optimized and automated governance processes with intelligent analytics and continuous improvement." }
      ]
    },

    {
      id: "Q2", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital KPI & KRI Monitoring",
      text: "Are cybersecurity KPIs and KRIs monitored through real-time digital dashboards with automated analytics?",
      Evidence: "KPI dashboards, performance analytics, monitoring logs.",
      choices: [
        { value: 1, text: "No structured KPI monitoring process; activities handled ad-hoc." },
        { value: 2, text: "Basic KPI implementation with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed KPI tracking with partially digital workflows and regular application." },
        { value: 4, text: "Advanced, integrated digital KPI dashboards with strong automation." },
        { value: 5, text: "Fully optimized KPI analytics with automated insights and continuous improvement." }
      ]
    },

    {
      id: "Q3", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital Policy Governance Workflow",
      text: "Is there a digital workflow for reviewing, approving, and updating cybersecurity policies with automated version control?",
      Evidence: "Policy portal, workflow automation, versioning logs.",
      choices: [
        { value: 1, text: "No structured policy-management process; activities handled ad-hoc." },
        { value: 2, text: "Basic policy implementation with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed policy workflow with partially digital processes and regular updates." },
        { value: 4, text: "Advanced policy governance with integrated digital workflows and automation." },
        { value: 5, text: "Fully optimized policy lifecycle with automation, analytics, and continuous improvement." }
      ]
    },

    {
      id: "Q4", area: "Governance, Risk & Compliance (GRC)",
      title: "Digital Risk & Audit Management",
      text: "Are internal audits, compliance checks, and risk assessments performed using digital tools with automated reporting and tracking?",
      Evidence: "Risk register, audit dashboards, compliance logs.",
      choices: [
        { value: 1, text: "No structured audit or risk-management process; activities handled ad-hoc." },
        { value: 2, text: "Basic digital audit implementation with inconsistent practices." },
        { value: 3, text: "Defined and managed digital audit processes with partially automated workflows." },
        { value: 4, text: "Advanced digital audit and risk workflows with strong automation." },
        { value: 5, text: "Fully optimized audit and risk engine with automated insights and continuous improvement." }
      ]
    },

    {
      id: "Q5", area: "Governance, Risk & Compliance (GRC)",
      title: "Third-Party Cyber Risk Management",
      text: "Is third-party/vendor cybersecurity risk assessed and monitored through a digital platform with automated scoring and alerts?",
      Evidence: "Vendor risk assessment platform, SLA dashboards.",
      choices: [
        { value: 1, text: "No structured third-party risk process; activities handled ad-hoc." },
        { value: 2, text: "Basic vendor-risk implementation with limited tools and inconsistent practices." },
        { value: 3, text: "Defined and managed vendor-risk assessment with partially digital workflows." },
        { value: 4, text: "Advanced digital vendor-risk platform with strong automation." },
        { value: 5, text: "Fully optimized third-party risk intelligence with predictive analytics and continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 2) SOC, MONITORING & INCIDENT RESPONSE
    // -------------------------------------------------------------

    {
      id: "Q6", area: "SOC, Monitoring & Incident Response",
      title: "SOC Continuous Monitoring",
      text: "Does the department operate a Security Operations Center (SOC) or equivalent system for continuous monitoring, log analysis, and incident detection with automated alerts?",
      Evidence: "SIEM dashboards, alerting rules, SOC reports.",
      choices: [
        { value: 1, text: "No structured SOC monitoring process; activities handled ad-hoc." },
        { value: 2, text: "Basic SOC monitoring with limited digital tools and inconsistent practices." },
        { value: 3, text: "Defined and managed SOC monitoring with partially automated workflows." },
        { value: 4, text: "Advanced SOC operations with integrated automation and strong performance." },
        { value: 5, text: "Fully optimized next-generation SOC with automated analytics and continuous improvement." }
      ]
    },

    {
      id: "Q7", area: "SOC, Monitoring & Incident Response",
      title: "SOC Automation & SOAR Integration",
      text: "Is the SOC supported by automated detection technologies (e.g., SIEM correlation rules, SOAR workflows) to reduce manual effort?",
      Evidence: "SOAR workflows, automated IR logs.",
      choices: [
        { value: 1, text: "No structured SOC automation process; detection handled ad-hoc." },
        { value: 2, text: "Basic SIEM rule use with limited automation and inconsistent practices." },
        { value: 3, text: "Defined SOC automation with partially digital workflows." },
        { value: 4, text: "Advanced automation through SOAR and integrated digital processes." },
        { value: 5, text: "Fully optimized autonomous SOC orchestration with intelligent analytics." }
      ]
    },

    {
      id: "Q8", area: "SOC, Monitoring & Incident Response",
      title: "Threat Intelligence Automation",
      text: "Are threat-intelligence feeds integrated into monitoring tools with automated enrichment and prioritization of alerts?",
      Evidence: "Threat intel feeds, enrichment logs.",
      choices: [
        { value: 1, text: "No structured threat-intelligence process; updates handled ad-hoc." },
        { value: 2, text: "Basic threat-intel implementation with limited digital tools." },
        { value: 3, text: "Defined threat-intel enrichment with partially digital workflows." },
        { value: 4, text: "Advanced integrated threat-intelligence with strong automation." },
        { value: 5, text: "Fully optimized predictive threat intelligence with automated analytics." }
      ]
    },

    {
      id: "Q9", area: "SOC, Monitoring & Incident Response",
      title: "Digital Incident Response System",
      text: "Is there a digital incident-response system with automated escalation, predefined playbooks, and post-incident reviews integrated into the SOC workflow?",
      Evidence: "IR workflows, digital playbooks, escalation logs.",
      choices: [
        { value: 1, text: "No structured incident-response process; actions handled ad-hoc." },
        { value: 2, text: "Basic incident-response implementation with limited digital tools." },
        { value: 3, text: "Defined and managed IR workflows with partially digital processes." },
        { value: 4, text: "Advanced digital IR with integrated automation and strong performance." },
        { value: 5, text: "Fully optimized SOAR-driven IR process with intelligent analytics." }
      ]
    },

    {
      id: "Q10", area: "SOC, Monitoring & Incident Response",
      title: "Post-Incident Review Automation",
      text: "Are incident trends, root-cause analytics, and post-incident reports automatically generated and stored in a centralized digital repository?",
      Evidence: "PIR logs, automated analytics, RCA dashboards.",
      choices: [
        { value: 1, text: "No structured PIR process; reviews handled ad-hoc." },
        { value: 2, text: "Basic PIR implementation with inconsistent practices." },
        { value: 3, text: "Defined and managed PIR workflows with partially digital processes." },
        { value: 4, text: "Advanced digital PIR automation with integrated analytics." },
        { value: 5, text: "Fully optimized intelligent PIR engine with predictive analytics." }
      ]
    },

    // -------------------------------------------------------------
    // 3) POLICIES, DATA PROTECTION & COMPLIANCE
    // -------------------------------------------------------------

    {
      id: "Q11", area: "Policies, Data Protection & Compliance",
      title: "Digital Policy Documentation",
      text: "Are cybersecurity policies, procedures, and standards digitally documented, version-controlled, and acknowledged by users?",
      Evidence: "Policy portal, version history, acknowledgment logs.",
      choices: [
        { value: 1, text: "No structured policy documentation process; updates handled ad-hoc." },
        { value: 2, text: "Basic policy documentation with limited digital tools." },
        { value: 3, text: "Managed and defined policy repository with partially digital workflows." },
        { value: 4, text: "Advanced digital policy lifecycle with automation." },
        { value: 5, text: "Fully optimized and automated policy governance with intelligent analytics." }
      ]
    },

    {
      id: "Q12", area: "Policies, Data Protection & Compliance",
      title: "Policy Communication & Tracking",
      text: "Are policy acknowledgments tracked through a digital system with automated reminders and compliance dashboards?",
      Evidence: "Acknowledgment logs, reminder workflows.",
      choices: [
        { value: 1, text: "No structured policy communication process; reminders handled ad-hoc." },
        { value: 2, text: "Basic communication with limited digital tracking." },
        { value: 3, text: "Defined and managed communication with partially digital tracking." },
        { value: 4, text: "Advanced automated communication and acknowledgment tracking." },
        { value: 5, text: "Fully optimized communication engine with intelligent analytics." }
      ]
    },

    {
      id: "Q13", area: "Policies, Data Protection & Compliance",
      title: "Digital Data Protection Controls",
      text: "Are data-classification and data-protection requirements enforced using digital tools such as DLP, MDM, and automated encryption?",
      Evidence: "DLP logs, encryption enforcement dashboards.",
      choices: [
        { value: 1, text: "No structured data-protection process; controls handled ad-hoc." },
        { value: 2, text: "Basic digital protection with inconsistent implementation." },
        { value: 3, text: "Defined and managed protection controls with partially digital workflows." },
        { value: 4, text: "Advanced digital protection tools with integrated automation." },
        { value: 5, text: "Fully optimized automated data-protection ecosystem with intelligent analytics." }
      ]
    },

    {
      id: "Q14", area: "Policies, Data Protection & Compliance",
      title: "Digital PDPL Compliance",
      text: "Is PDPL compliance (data retention, consent, subject rights, and transfers) managed through digital workflows with automated monitoring?",
      Evidence: "PDPL workflows, consent dashboards, retention logs.",
      choices: [
        { value: 1, text: "No structured PDPL compliance process; activities handled ad-hoc." },
        { value: 2, text: "Basic PDPL tracking with limited digital tools." },
        { value: 3, text: "Defined and managed PDPL workflows with partially digital processes." },
        { value: 4, text: "Advanced automated PDPL compliance with integrated monitoring." },
        { value: 5, text: "Fully optimized PDPL compliance engine with intelligent analytics." }
      ]
    },

    {
      id: "Q15", area: "Policies, Data Protection & Compliance",
      title: "Audit Log Automation",
      text: "Are audit logs automatically collected, securely retained, and analyzed using centralized digital logging and alerting tools?",
      Evidence: "SIEM retention logs, audit dashboards.",
      choices: [
        { value: 1, text: "No structured audit-log process; retention handled ad-hoc." },
        { value: 2, text: "Basic log retention with limited digital tools." },
        { value: 3, text: "Defined and managed audit logging with partially digital workflows." },
        { value: 4, text: "Advanced digital log automation with integrated alerting." },
        { value: 5, text: "Fully optimized log analytics platform with intelligent insights." }
      ]
    },

    // -------------------------------------------------------------
    // 4) AWARENESS, WORKFORCE & CULTURE
    // -------------------------------------------------------------

    {
      id: "Q16", area: "Awareness, Workforce & Culture",
      title: "Digital Awareness & Phishing Programs",
      text: "Does the Cybersecurity Department deliver periodic digital-awareness and phishing-simulation programs to all employees and track participation through LMS?",
      Evidence: "LMS reports, phishing campaign logs.",
      choices: [
        { value: 1, text: "No structured awareness process; activities handled ad-hoc." },
        { value: 2, text: "Basic awareness implementation with limited digital tools." },
        { value: 3, text: "Defined and managed awareness program with partially digital workflows." },
        { value: 4, text: "Advanced integrated awareness platform with strong automation." },
        { value: 5, text: "Fully optimized adaptive awareness engine with intelligent analytics." }
      ]
    },

    {
      id: "Q17", area: "Awareness, Workforce & Culture",
      title: "Phishing Analytics & Automation",
      text: "Are phishing results, user-risk scores, and remediation training automatically generated and linked to employee profiles?",
      Evidence: "Phishing analytics logs, remediation dashboards.",
      choices: [
        { value: 1, text: "No structured phishing-analysis process; reports handled ad-hoc." },
        { value: 2, text: "Basic phishing analytics with limited digital tools." },
        { value: 3, text: "Defined and managed phishing analytics with partially digital workflows." },
        { value: 4, text: "Advanced automated phishing analytics with strong automation." },
        { value: 5, text: "Fully optimized predictive phishing analytics with intelligent scoring." }
      ]
    },

    {
      id: "Q18", area: "Awareness, Workforce & Culture",
      title: "Digital Skills Gap Assessment",
      text: "Is there a digital skills-gap assessment for cybersecurity staff aligned with NCA workforce competency frameworks?",
      Evidence: "Skills matrix, training dashboards.",
      choices: [
        { value: 1, text: "No structured skills-assessment process; activities handled ad-hoc." },
        { value: 2, text: "Basic skills assessment with limited digital tools." },
        { value: 3, text: "Defined and managed skills assessment with partially digital workflows." },
        { value: 4, text: "Advanced automated competency assessment with integrated analytics." },
        { value: 5, text: "Fully optimized intelligent skills-gap engine with continuous improvement insights." }
      ]
    },

    {
      id: "Q19", area: "Awareness, Workforce & Culture",
      title: "Digital Cyber Onboarding",
      text: "Are new employees automatically enrolled in cybersecurity onboarding programs using digital workflow tools?",
      Evidence: "Digital onboarding workflows, LMS logs.",
      choices: [
        { value: 1, text: "No structured onboarding process; cyber onboarding handled ad-hoc." },
        { value: 2, text: "Basic onboarding with limited digital tools." },
        { value: 3, text: "Defined and managed onboarding with partially automated workflows." },
        { value: 4, text: "Advanced automated onboarding with integrated workflows." },
        { value: 5, text: "Fully optimized intelligent onboarding engine with adaptive learning paths." }
      ]
    },

    {
      id: "Q20", area: "Awareness, Workforce & Culture",
      title: "Cybersecurity Culture Measurement",
      text: "Is cybersecurity culture measured regularly using digital surveys, analytics platforms, or automated behavioral tracking mechanisms?",
      Evidence: "Culture analytics dashboards, survey logs.",
      choices: [
        { value: 1, text: "No structured culture measurement process; surveys handled ad-hoc." },
        { value: 2, text: "Basic culture surveys with limited digital tools." },
        { value: 3, text: "Defined and managed culture measurement with partially digital workflows." },
        { value: 4, text: "Advanced automated culture analytics with integrated dashboards." },
        { value: 5, text: "Fully optimized predictive culture engine with continuous improvement." }
      ]
    },

    // -------------------------------------------------------------
    // 5) INFRASTRUCTURE, IDENTITY & AUTOMATION
    // -------------------------------------------------------------

    {
      id: "Q21", area: "Infrastructure, Identity & Automation",
      title: "Security Controls Integration",
      text: "Are security controls (e.g., firewalls, IDS/IPS, DLP, endpoint protection) centrally managed and integrated into unified monitoring dashboards with automated alerting and reporting?",
      Evidence: "SIEM integrations, control dashboards.",
      choices: [
        { value: 1, text: "No structured control-integration process; monitoring handled ad-hoc." },
        { value: 2, text: "Basic security control integration with limited digital tools." },
        { value: 3, text: "Defined and managed control integration with partially digital workflows." },
        { value: 4, text: "Advanced integrated control environment with strong automation." },
        { value: 5, text: "Fully optimized unified security-control ecosystem with intelligent analytics." }
      ]
    },

    {
      id: "Q22", area: "Infrastructure, Identity & Automation",
      title: "Identity & Access Automation",
      text: "Is identity and access management (IAM/IDAM) automated and integrated with HR systems to ensure timely provisioning and deprovisioning?",
      Evidence: "IAM automation logs, HR integration workflows.",
      choices: [
        { value: 1, text: "No structured IAM process; access handled ad-hoc." },
        { value: 2, text: "Basic IAM implementation with limited digital tools." },
        { value: 3, text: "Defined and managed IAM with partially digital workflows." },
        { value: 4, text: "Advanced IAM automation with integrated HR workflows." },
        { value: 5, text: "Fully optimized intelligent IAM with automated analytics and continuous improvement." }
      ]
    },

    {
      id: "Q23", area: "Infrastructure, Identity & Automation",
      title: "Privileged Access Management",
      text: "Is privileged-access management (PAM) implemented with automated session monitoring, alerting, and recording capabilities?",
      Evidence: "PAM logs, session monitoring dashboards.",
      choices: [
        { value: 1, text: "No structured PAM process; privileged access handled ad-hoc." },
        { value: 2, text: "Basic PAM implementation with limited digital tools." },
        { value: 3, text: "Defined and managed PAM with partially digital workflows." },
        { value: 4, text: "Advanced automated PAM monitoring with integrated controls." },
        { value: 5, text: "Fully optimized intelligent PAM with behavior analytics and continuous improvement." }
      ]
    },

    {
      id: "Q24", area: "Infrastructure, Identity & Automation",
      title: "Vulnerability & Patch Automation",
      text: "Are vulnerability assessments, penetration tests, and patch-management cycles digitally tracked with automated remediation workflows and follow-up dashboards?",
      Evidence: "VA dashboards, patch automation logs.",
      choices: [
        { value: 1, text: "No structured vulnerability-management process; remediation handled ad-hoc." },
        { value: 2, text: "Basic vulnerability tracking with limited digital tools." },
        { value: 3, text: "Defined and managed VA and patch processes with partially digital workflows." },
        { value: 4, text: "Advanced automated remediation workflows with integrated dashboards." },
        { value: 5, text: "Fully optimized risk-based automation with intelligent analytics." }
      ]
    },

    {
      id: "Q25", area: "Infrastructure, Identity & Automation",
      title: "Backup, DR & Continuity Automation",
      text: "Are backup, disaster recovery, and business continuity plans automated, digitally tested, and monitored through centralized dashboards?",
      Evidence: "DR test logs, backup automation records.",
      choices: [
        { value: 1, text: "No structured backup or DR process; activities handled ad-hoc." },
        { value: 2, text: "Basic backup and DR implementation with limited digital tools." },
        { value: 3, text: "Defined and managed continuity processes with partially digital workflows." },
        { value: 4, text: "Advanced automated DR testing and monitoring with integrated dashboards." },
        { value: 5, text: "Fully optimized resilience architecture with automated analytics and continuous improvement." }
      ]
    }
  ],

  // -------------------------------------------------------------
  // MATURITY BANDS
  // -------------------------------------------------------------
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Cybersecurity practices are unstructured, reactive, and handled ad-hoc with minimal digital tools." },
    { name: "26–50% (Basic Implementation)", range: [26, 50], description: "Basic cybersecurity practices exist but digital tools are limited and processes remain inconsistent." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Cybersecurity processes are defined, managed, and supported by partially digital workflows." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Cybersecurity operations are advanced, digitally integrated, and automated across systems." },
    { name: "91–100% (Optimized / Automated)", range: [91, 100], description: "Cybersecurity environment is fully automated, AI-driven, and continuously improved." }
  ]
};
