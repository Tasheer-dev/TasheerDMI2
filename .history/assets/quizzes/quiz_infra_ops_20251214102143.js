// quizzes/quiz_infra_ops.js
// -----------------------------------------------------------------------------
// Infrastructure & Network / Platform Operations
// Digital Maturity Index (DMI) – 28 Technical Questions
// Covers: monitoring, backup & DR, server lifecycle, security platforms,
// identity & email, databases, cloud & capacity, and service integration.
// -----------------------------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["infra_ops"] = {
  title: "Infrastructure & Platform Operations Digital Maturity Assessment (DMI)",
  shortcode: "INFRA",
  totalQuestions: 28,
  maxScore: 28 * 5,

  sections: [
    { name: "1) Monitoring, Observability & Capacity", questions: ["Q1","Q2","Q3","Q4"] },
    { name: "2) Backup, Restore & Disaster Recovery", questions: ["Q5","Q6","Q7","Q8"] },
    { name: "3) Server & OS Lifecycle Management", questions: ["Q9","Q10","Q11","Q12"] },
    { name: "4) Network Edge, Firewall, WAF & Load Balancing", questions: ["Q13","Q14","Q15","Q16"] },
    { name: "5) Identity, Email & Collaboration Platforms", questions: ["Q17","Q18","Q19","Q20"] },
    { name: "6) Database Platform Operations", questions: ["Q21","Q22","Q23","Q24"] },
    { name: "7) Cloud, Capacity & ITSM Integration", questions: ["Q25","Q26","Q27","Q28"] }
  ],

  questions: [
    // -------------------------------------------------------------------------
    // 1) Monitoring, Observability & Capacity
    // -------------------------------------------------------------------------
    {
      id: "Q1", area: "Monitoring",
      title: "End-to-End Infrastructure Monitoring Coverage",
      text: "To what extent are servers, network devices, databases, WAF, load balancers and cloud resources monitored through tools such as OpManager / Endpoint Central / other monitoring platforms, with health and performance dashboards?",
      choices: [
        { value: 1, text: "1. Limited monitoring; only a few critical components tracked manually or via basic tools." },
        { value: 2, text: "2. Core servers or network devices monitored, but not all layers (DB, WAF, LB, cloud, SaaS)." },
        { value: 3, text: "3. Most infrastructure components onboarded with standard dashboards and alerts." },
        { value: 4, text: "4. Full monitoring coverage across all infrastructure tiers with unified dashboards." },
        { value: 5, text: "5. Holistic observability platform with correlated views across infra, apps and business KPIs." }
      ]
    },
    {
      id: "Q2", area: "Alerting",
      title: "Alerting, Escalation & SLA Handling",
      text: "How mature is the alerting and escalation process for infrastructure incidents (e.g., server/service down, high CPU, link failures) including on-call, auto-ticket creation and SLA tracking?",
      choices: [
        { value: 1, text: "1. Alerts are not standardized; issues discovered reactively by users or manual checks." },
        { value: 2, text: "2. Basic email/SMS alerts exist, but escalation and SLA handling are mostly manual." },
        { value: 3, text: "3. Standard alert rules with documented escalation matrix and manual ticket logging." },
        { value: 4, text: "4. Alerts automatically create ITSM tickets with SLA timers and escalation workflows." },
        { value: 5, text: "5. Intelligent alert correlation, auto-remediation where possible and predictive alerting." }
      ]
    },
    {
      id: "Q3", area: "Logs",
      title: "Log Management & Security Analytics",
      text: "How are infrastructure and database logs (system, security, WAF/LB, Proofpoint, Entra ID, DB activity) collected, centralized and analyzed (e.g., SIEM, log analytics)?",
      choices: [
        { value: 1, text: "1. Logs mainly stored locally on devices/servers; analysis is ad-hoc." },
        { value: 2, text: "2. Partial centralization of critical logs, with manual review when incidents occur." },
        { value: 3, text: "3. Central log collection for key platforms (firewall, WAF, DB, OS) with basic dashboards." },
        { value: 4, text: "4. Full SIEM or log analytics solution with correlation rules and regular reporting." },
        { value: 5, text: "5. Advanced security analytics with UEBA, threat hunting and automated incident response." }
      ]
    },
    {
      id: "Q4", area: "Capacity",
      title: "Capacity & Performance Management",
      text: "How mature is your capacity and performance management across servers, storage, databases and load balancers, including trend analysis and forecasting?",
      choices: [
        { value: 1, text: "1. No formal capacity monitoring; scaling is reactive after issues occur." },
        { value: 2, text: "2. Basic monitoring of utilization, but no regular analysis or forecasting." },
        { value: 3, text: "3. Regular capacity reports with manual review and planning for key systems." },
        { value: 4, text: "4. Automated dashboards with thresholds, alerts and planned capacity actions." },
        { value: 5, text: "5. Predictive capacity analytics integrated with business demand and cost optimization." }
      ]
    },

    // -------------------------------------------------------------------------
    // 2) Backup, Restore & Disaster Recovery
    // -------------------------------------------------------------------------
    {
      id: "Q5", area: "BackupPolicy",
      title: "Backup Policy Coverage (Systems, Network & Databases)",
      text: "What is the maturity of your backup strategy for servers, databases and network/security device configurations (e.g., system backups, DB backups, firewall/WAF/LB configuration backups)?",
      choices: [
        { value: 1, text: "1. Backups are ad-hoc or handled manually without a documented policy." },
        { value: 2, text: "2. Backup policies exist for critical systems only; coverage is incomplete." },
        { value: 3, text: "3. Documented backup policies for all key systems and configurations with defined schedules." },
        { value: 4, text: "4. Centralized backup platform with policy-based coverage and monitoring of job success." },
        { value: 5, text: "5. Fully automated, policy-driven backups with resilience across sites and cloud, plus compliance dashboards." }
      ]
    },
    {
      id: "Q6", area: "RestoreTesting",
      title: "Restore & DR Testing for Systems and Databases",
      text: "How often and how systematically do you test restore procedures and disaster recovery scenarios for servers, applications and databases (including DR drills for DBs and network devices)?",
      choices: [
        { value: 1, text: "1. Restore procedures are rarely or never tested in a structured way." },
        { value: 2, text: "2. Occasional manual restore tests executed for selected systems only." },
        { value: 3, text: "3. Planned restore and DR tests performed annually or semi-annually for key systems." },
        { value: 4, text: "4. Regular DR exercises across multiple tiers with documented results and improvement actions." },
        { value: 5, text: "5. Automated DR testing framework with repeatable scenarios, reporting and continuous improvements." }
      ]
    },
    {
      id: "Q7", area: "RPO_RTO",
      title: "RPO/RTO Definition & Compliance",
      text: "How clearly are Recovery Point Objectives (RPO) and Recovery Time Objectives (RTO) defined, tracked and reported for critical infrastructure and databases?",
      choices: [
        { value: 1, text: "1. No formal RPO/RTO defined for most services." },
        { value: 2, text: "2. RPO/RTO defined on paper for some critical systems, but not monitored." },
        { value: 3, text: "3. Documented RPO/RTO with periodic manual reporting on compliance." },
        { value: 4, text: "4. RPO/RTO integrated into monitoring/DR tools with automated tracking of achievement." },
        { value: 5, text: "5. Business-aligned RPO/RTO continuously optimized and validated via automated tests and analytics." }
      ]
    },
    {
      id: "Q8", area: "BackupAutomation",
      title: "Backup Job Automation & Integrity Checks",
      text: "To what extent are backup jobs, integrity checks and failure alerts automated for servers, network devices and databases?",
      choices: [
        { value: 1, text: "1. Backups initiated manually; failures often discovered late." },
        { value: 2, text: "2. Basic scheduling is used, but failure alerts and integrity checks are manual." },
        { value: 3, text: "3. Automated backup scheduling with email alerts on failures." },
        { value: 4, text: "4. Central backup monitoring with automated integrity checks and SLA dashboards." },
        { value: 5, text: "5. Self-healing backup processes with automatic retries, alternate paths and predictive failure detection." }
      ]
    },

    // -------------------------------------------------------------------------
    // 3) Server & OS Lifecycle Management
    // -------------------------------------------------------------------------
    {
      id: "Q9", area: "ServerBuild",
      title: "Standardized Server Build & Onboarding",
      text: "How standardized and automated is the server provisioning process, including creation, domain join, adding to Qualys, Endpoint Central, OpManager and other monitoring/security tools?",
      choices: [
        { value: 1, text: "1. Server builds are performed manually case-by-case with no standard checklist." },
        { value: 2, text: "2. Basic build checklist exists but onboarding to monitoring/security tools is manual." },
        { value: 3, text: "3. Standardized build templates with semi-automated onboarding to core tools." },
        { value: 4, text: "4. Automated build/orchestration that ensures servers are fully onboarded to all required platforms." },
        { value: 5, text: "5. Fully automated Infrastructure-as-Code (IaC) pipeline for server build, baseline configuration and tool registration." }
      ]
    },
    {
      id: "Q10", area: "Patching",
      title: "OS, Security & Application Patching",
      text: "How mature is your patch management process for operating systems, security tools and internal applications (including Endpoint Central/Qualys or equivalent)?",
      choices: [
        { value: 1, text: "1. Patching is irregular and mainly reactive to vendor alerts or incidents." },
        { value: 2, text: "2. Regular patch cycles exist for some platforms, but many systems are patched manually." },
        { value: 3, text: "3. Monthly or quarterly patch windows defined with centralized reporting on status." },
        { value: 4, text: "4. Automated patch deployment with testing, scheduling and rollback plans across most systems." },
        { value: 5, text: "5. Risk-based, automated patch management integrated with vulnerability scanning and change management." }
      ]
    },
    {
      id: "Q11", area: "Certificates",
      title: "SSL/TLS Certificate Lifecycle Management",
      text: "How do you manage the lifecycle of SSL/TLS certificates (issuance, monitoring, renewal) for internal and external services?",
      choices: [
        { value: 1, text: "1. Certificates are renewed manually and tracked informally; expiries sometimes cause outages." },
        { value: 2, text: "2. Basic inventory of certificates maintained with calendar reminders for renewal." },
        { value: 3, text: "3. Documented certificate management process with regular reviews and manual checks." },
        { value: 4, text: "4. Central certificate management tool with automated expiry alerts and renewal workflows." },
        { value: 5, text: "5. Fully automated certificate lifecycle integrated with CI/CD and configuration management." }
      ]
    },
    {
      id: "Q12", area: "ChangeDeploy",
      title: "Infrastructure Change & Deployment Management",
      text: "What is the maturity of your change and deployment management for infrastructure (server configuration changes, DNS creation, firewall/WAF rules, DB deployments, etc.)?",
      choices: [
        { value: 1, text: "1. Many infrastructure changes are performed directly on production without formal approval." },
        { value: 2, text: "2. Basic change tickets exist, but procedures are inconsistently followed." },
        { value: 3, text: "3. Formal change management process with approvals for most infrastructure changes." },
        { value: 4, text: "4. Automation-assisted deployments with pre-approved templates and tracked rollbacks." },
        { value: 5, text: "5. Fully automated, policy-driven change pipeline with impact analysis and compliance checks." }
      ]
    },

    // -------------------------------------------------------------------------
    // 4) Network Edge, Firewall, WAF & Load Balancing
    // -------------------------------------------------------------------------
    {
      id: "Q13", area: "Firewall",
      title: "Firewall Rule Management & Hardening",
      text: "How are firewall rule changes, reviews and backups managed, including approval workflows and periodic cleanup?",
      choices: [
        { value: 1, text: "1. Firewall rules added/changed on demand with limited documentation or review." },
        { value: 2, text: "2. Change tickets exist, but rule review and cleanup are manual and infrequent." },
        { value: 3, text: "3. Documented firewall policy with regular rule review and backup of configurations." },
        { value: 4, text: "4. Central firewall management platform with automated approvals, backups and audit reports." },
        { value: 5, text: "5. Risk-based firewall governance with automated policy optimization and continuous compliance checks." }
      ]
    },
    {
      id: "Q14", area: "WAF",
      title: "Web Application Firewall (WAF) Operations",
      text: "How mature is the operation of the WAF platform, including alert monitoring, rule tuning, testing after changes and backup of configurations?",
      choices: [
        { value: 1, text: "1. WAF is used mainly with default rules; alerts are rarely analyzed." },
        { value: 2, text: "2. Basic monitoring of WAF alerts; rule changes are reactive to incidents." },
        { value: 3, text: "3. Regular review of WAF alerts with documented rule changes and basic testing." },
        { value: 4, text: "4. Structured WAF operations with change templates, testing, backups and dashboards." },
        { value: 5, text: "5. Proactive WAF tuning using threat intelligence and automated testing of legitimate traffic." }
      ]
    },
    {
      id: "Q15", area: "LoadBalancing",
      title: "Load Balancer Configuration & Health Management",
      text: "How is load balancing configured, monitored and maintained to ensure correct traffic distribution and high availability?",
      choices: [
        { value: 1, text: "1. Load balancer settings rarely reviewed; issues identified only after outages." },
        { value: 2, text: "2. Basic monitoring exists, but no clear KPIs or proactive checks on LB health." },
        { value: 3, text: "3. Standard configuration with health checks and periodic review of LB metrics." },
        { value: 4, text: "4. Advanced LB policies, automated failover and capacity tuning based on traffic patterns." },
        { value: 5, text: "5. Dynamic application delivery with auto-scaling and integrated performance optimization." }
      ]
    },
    {
      id: "Q16", area: "NetworkDesign",
      title: "Network Topology, Documentation & Asset Classification",
      text: "How mature is your network documentation (topology maps) and asset classification by sensitivity/criticality?",
      choices: [
        { value: 1, text: "1. Network diagrams and asset classifications are outdated or incomplete." },
        { value: 2, text: "2. Basic topology diagrams exist with partial asset classification." },
        { value: 3, text: "3. Updated network map and asset inventory with sensitivity levels for key segments." },
        { value: 4, text: "4. Central repository for network design and asset classifications used in risk assessments." },
        { value: 5, text: "5. Continuously maintained CMDB with automated discovery and classification linked to security tools." }
      ]
    },

    // -------------------------------------------------------------------------
    // 5) Identity, Email & Collaboration Platforms
    // -------------------------------------------------------------------------
    {
      id: "Q17", area: "Identity",
      title: "Identity & Access Management (Entra ID / AD)",
      text: "How mature is identity and access management for Entra ID / Active Directory, including role-based access, periodic access reviews and automation for account provisioning/de-provisioning (including SVC accounts)?",
      choices: [
        { value: 1, text: "1. Accounts and permissions are created and modified manually without formal governance." },
        { value: 2, text: "2. Basic group structures and manual periodic reviews exist." },
        { value: 3, text: "3. Role-based access model with documented joiner/mover/leaver processes." },
        { value: 4, text: "4. Automated provisioning, recertification and access reviews integrated with HR/ITSM." },
        { value: 5, text: "5. Full identity governance with risk-based access, conditional access and continuous monitoring." }
      ]
    },
    {
      id: "Q18", area: "EmailSecurity",
      title: "Email Platform Administration & Security (Exchange, Proofpoint)",
      text: "How mature is the management of Exchange and email security gateways such as Proofpoint for spam, malware and phishing protection?",
      choices: [
        { value: 1, text: "1. Email security mainly relies on default vendor settings; limited tuning or monitoring." },
        { value: 2, text: "2. Basic spam/malware policies configured; manual review of critical alerts." },
        { value: 3, text: "3. Structured administration with regular policy review and incident handling procedures." },
        { value: 4, text: "4. Advanced policies, threat intelligence feeds and integrated incident response workflows." },
        { value: 5, text: "5. Email security tightly integrated with SOC/SIEM and user awareness, with continuous tuning." }
      ]
    },
    {
      id: "Q19", area: "Collaboration",
      title: "Office 365 Groups & Collaboration Governance",
      text: "How is the creation, lifecycle and governance of Office 365 groups and collaboration spaces managed (naming conventions, ownership, archiving)?",
      choices: [
        { value: 1, text: "1. Groups are created ad-hoc without standards or lifecycle management." },
        { value: 2, text: "2. Basic guidelines exist, but enforcement is manual and inconsistent." },
        { value: 3, text: "3. Defined governance model for group creation and ownership with periodic cleanup." },
        { value: 4, text: "4. Automated policies for naming, expiration and archival integrated with Entra ID / M365." },
        { value: 5, text: "5. Full collaboration governance with analytics on usage, security and data protection." }
      ]
    },
    {
      id: "Q20", area: "ServiceAccounts",
      title: "Service Account (SVC) Governance",
      text: "How are infrastructure and application service accounts (SVC) created, secured, rotated and monitored?",
      choices: [
        { value: 1, text: "1. Service accounts created on demand with shared credentials and limited tracking." },
        { value: 2, text: "2. Basic register of service accounts kept, but password rotation and monitoring are manual." },
        { value: 3, text: "3. Documented process for service account creation and decommissioning with periodic review." },
        { value: 4, text: "4. Privileged access management tools used for SVC credentials and session monitoring." },
        { value: 5, text: "5. Fully governed SVC lifecycle with just-in-time access and continuous anomaly detection." }
      ]
    },

    // -------------------------------------------------------------------------
    // 6) Database Platform Operations
    // -------------------------------------------------------------------------
    {
      id: "Q21", area: "DB_Resilience",
      title: "Database Backup, High Availability & Replication",
      text: "How mature are database backup, high availability and replication mechanisms (including DR, log shipping, clustering or other HA patterns)?",
      choices: [
        { value: 1, text: "1. Backups and HA for databases are limited or manually managed." },
        { value: 2, text: "2. Regular backups exist, but HA/replication is configured only for a few critical DBs." },
        { value: 3, text: "3. Documented DB backup and HA strategy for key systems with periodic testing." },
        { value: 4, text: "4. Standardized HA/replication architecture across major DB platforms with automated failover tests." },
        { value: 5, text: "5. Enterprise-wide DB resilience strategy with multi-site, cloud-integrated HA and automated DR drills." }
      ]
    },
    {
      id: "Q22", area: "DB_Performance",
      title: "Database Performance & Maintenance Automation",
      text: "How are database performance monitoring, index maintenance, statistics updates and scheduled housekeeping (such as log cleanup) handled?",
      choices: [
        { value: 1, text: "1. Performance issues handled reactively without regular maintenance tasks." },
        { value: 2, text: "2. Basic manual checks and ad-hoc maintenance scripts used when problems occur." },
        { value: 3, text: "3. Regular scheduled maintenance tasks and performance reviews for key databases." },
        { value: 4, text: "4. Automated performance monitoring and maintenance jobs with clear SLAs." },
        { value: 5, text: "5. Advanced performance analytics and tuning integrated with APM/observability platforms." }
      ]
    },
    {
      id: "Q23", area: "DB_Security",
      title: "Database Security, Access Control & Auditing",
      text: "How mature are database access control, privilege management, security auditing and log review processes?",
      choices: [
        { value: 1, text: "1. DB privileges are granted ad-hoc and rarely reviewed; limited auditing in place." },
        { value: 2, text: "2. Basic role separation for DBAs vs users, with manual review of high-risk accounts." },
        { value: 3, text: "3. Documented DB security standards with periodic access recertification and audit logs." },
        { value: 4, text: "4. Centralized DB security monitoring integrated with SIEM and incident response." },
        { value: 5, text: "5. Comprehensive DB security program with continuous risk scoring and automated controls." }
      ]
    },
    {
      id: "Q24", area: "DB_Integration",
      title: "Data Integration, Dashboards & Reporting",
      text: "To what extent are databases integrated with reporting platforms and dashboards (e.g., BI tools, operational dashboards) through governed, reusable data pipelines?",
      choices: [
        { value: 1, text: "1. Data is extracted manually for reports; no formal integration with dashboards." },
        { value: 2, text: "2. Some direct connections from dashboards to production DBs without clear governance." },
        { value: 3, text: "3. Standardized data views and ETL processes for major dashboards." },
        { value: 4, text: "4. Managed data pipelines with version control, staging and performance tuning." },
        { value: 5, text: "5. Enterprise data platform with governed, reusable data products feeding dashboards and analytics." }
      ]
    },

    // -------------------------------------------------------------------------
    // 7) Cloud, Capacity & ITSM Integration
    // -------------------------------------------------------------------------
    {
      id: "Q25", area: "CloudCapacity",
      title: "Cloud Capacity, Cost & Vendor Management",
      text: "How mature is the management of cloud resources (e.g., Azure) and vendor coordination (e.g., periodic meetings with providers to right-size servers and services)?",
      choices: [
        { value: 1, text: "1. Cloud resources are provisioned per request with limited visibility on cost or utilization." },
        { value: 2, text: "2. Basic cost reports available; vendor meetings occur only when issues arise." },
        { value: 3, text: "3. Regular vendor review meetings with capacity and cost optimization actions." },
        { value: 4, text: "4. Cloud governance model with reserved capacity planning, budgeting and optimization dashboards." },
        { value: 5, text: "5. Continuous optimization of cloud usage via automated policies and close vendor partnership." }
      ]
    },
    {
      id: "Q26", area: "ITSM",
      title: "Integration with ITSM / OnClick for Requests & Incidents",
      text: "How well are infrastructure activities integrated with ITSM tools (e.g., OnClick) for requests, incidents and changes (including communication with business owners about planned outages)?",
      choices: [
        { value: 1, text: "1. Many infra activities handled outside ITSM; communication is mainly via email/phone." },
        { value: 2, text: "2. Key incidents and changes are tracked in ITSM, but many tasks still bypass the system." },
        { value: 3, text: "3. Standard practice to log infra requests/incidents/changes in ITSM with basic templates." },
        { value: 4, text: "4. Deep integration: monitoring and tools auto-create tickets; business notified through ITSM workflows." },
        { value: 5, text: "5. Fully orchestrated infra-ITSM integration with analytics on volumes, SLAs and business impact." }
      ]
    },
    {
      id: "Q27", area: "ConfigMgmt",
      title: "Configuration Management & CMDB Accuracy",
      text: "How accurate and automated is your configuration management (CMDB) covering servers, network devices, DNS records, WAF/LB and databases?",
      choices: [
        { value: 1, text: "1. No formal CMDB; configuration data is scattered across spreadsheets and tools." },
        { value: 2, text: "2. Basic CMDB exists, but many items are outdated or incomplete." },
        { value: 3, text: "3. CMDB maintained with periodic manual reconciliation against actual infrastructure." },
        { value: 4, text: "4. Automated discovery populates and updates the CMDB for most infrastructure components." },
        { value: 5, text: "5. CMDB is the single source of truth with strong automation, governance and impact analysis capabilities." }
      ]
    },
    {
      id: "Q28", area: "SelfService",
      title: "Automation & Self-Service for Infrastructure Services",
      text: "To what extent can common infrastructure services (server provisioning, DNS creation, DB creation, firewall/WAF requests, etc.) be requested and fulfilled through automated or self-service workflows?",
      choices: [
        { value: 1, text: "1. Most services require manual tickets and engineer intervention for every step." },
        { value: 2, text: "2. Some scripting exists, but processes remain largely manual for end users." },
        { value: 3, text: "3. Self-service available for selected services with semi-automated fulfillment." },
        { value: 4, text: "4. Broad self-service catalogue with automated provisioning for common infra services." },
        { value: 5, text: "5. Highly automated, policy-driven self-service for infrastructure with minimal manual steps." }
      ]
    }
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)",       range: [0, 25],  description: "Manual, reactive operations; limited documentation or automation." },
    { name: "26–50% (Basic)",       range: [26, 50], description: "Foundational processes documented; partial tooling and automation in place." },
    { name: "51–75% (Managed)",     range: [51, 75], description: "Standardized, repeatable operations with good monitoring and automation coverage." },
    { name: "76–90% (Advanced)",    range: [76, 90], description: "Highly automated, integrated infrastructure with strong governance and analytics." },
    { name: "91–100% (Optimized)",  range: [91, 100],description: "Predictive, self-healing infrastructure with continuous optimization and business alignment." }
  ]
};
