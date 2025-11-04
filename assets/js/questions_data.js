// assets/js/questions_data.js

// --- Standard Choices (Same for all 5 levels) ---
const STANDARD_CHOICES = [
    { value: 1, text: "1. Ad-hoc effort; entirely manual or unstructured." },
    { value: 2, text: "2. Partial documentation or isolated basic automation." },
    { value: 3, text: "3. Standardized/documented processes; 50-75% automated/tracked digitally." },
    { value: 4, text: "4. Full digital workflow; integrated systems, high automation (75%+)." },
    { value: 5, text: "5. Intelligent automation with AI/Predictive analytics; continuous optimization." }
];

// --- Generic DMI Question Set (Used by most departments) ---
// Total 14 questions, 7 groups (2 questions per group)
const GENERIC_QUESTIONS = [
    { id: "Q1", group: "1. Service Catalogue & Offering Definition", title: "Service Catalogue Presence", text: "Does the department have a clear digital services catalogue?", choices: STANDARD_CHOICES },
    { id: "Q2", group: "1. Service Catalogue & Offering Definition", title: "Service Request & SLA Tracking", text: "How are services requested, tracked, and reported, and how are SLAs monitored?", choices: STANDARD_CHOICES },
    { id: "Q3", group: "2. Process Automation & System Integration", title: "Process Automation Coverage", text: "Which core processes are automated, and what percent are digital vs. manual?", choices: STANDARD_CHOICES },
    { id: "Q4", group: "2. Process Automation & System Integration", title: "System Integration", text: "Are department systems integrated with Finance, HR, or other core platforms?", choices: STANDARD_CHOICES },
    { id: "Q5", group: "3. Data & Analytics Capability", title: "Data Governance & Quality", text: "Is there a formal data governance framework and real-time data quality monitoring?", choices: STANDARD_CHOICES },
    { id: "Q6", group: "3. Data & Analytics Capability", title: "Performance Monitoring & Reporting", text: "Are KPIs monitored through real-time dashboards accessible to management?", choices: STANDARD_CHOICES },
    { id: "Q7", group: "4. Digital Workforce & Culture", title: "Digital Skills & Training", text: "Does the department have structured programs to improve digital literacy and skills?", choices: STANDARD_CHOICES },
    { id: "Q8", group: "4. Digital Workforce & Culture", title: "Agile Adoption", text: "Is the department applying Agile or iterative methodologies for project delivery?", choices: STANDARD_CHOICES },
    { id: "Q9", group: "5. Digital Risk & Security", title: "Risk Management Digitization", text: "Are digital risks (cyber, data privacy) managed through an automated, centralized system?", choices: STANDARD_CHOICES },
    { id: "Q10", group: "5. Digital Risk & Security", title: "Security Controls & Compliance", text: "Are security controls and compliance checks automated and regularly audited?", choices: STANDARD_CHOICES },
    { id: "Q11", group: "6. Digital Governance & Operating Model", title: "Digital Strategy Alignment", text: "Is the department's operating model formally aligned with the company's digital strategy?", choices: STANDARD_CHOICES },
    { id: "Q12", group: "6. Digital Governance & Operating Model", title: "Governance Documentation", text: "Are key digital policies (e.g., cloud, API, data sharing) fully documented and updated?", choices: STANDARD_CHOICES },
    { id: "Q13", group: "7. Innovation & Continuous Improvement", title: "Innovation Pipeline", text: "Is there a structured, digitized pipeline for generating, evaluating, and funding innovation ideas?", choices: STANDARD_CHOICES },
    { id: "Q14", group: "7. Innovation & Continuous Improvement", title: "Feedback & Learning Loop", text: "Are feedback mechanisms integrated into digital services to drive continuous improvement?", choices: STANDARD_CHOICES },
];


// --- Department-Specific Question Sets ---
const DMI_QUESTIONS = {
    // Custom Set 1: Finance Department (FIN) - 14 Questions
    "FIN": [
        { id: "FIN_Q1", group: "1. Financial Process Automation", title: "Invoice Processing Digitization", text: "What percentage of invoice processing is fully digitized and automated?", choices: STANDARD_CHOICES },
        { id: "FIN_Q2", group: "1. Financial Process Automation", title: "Budget & Planning Tools", text: "Are budget planning, forecasting, and reporting processes managed through integrated digital tools (e.g., dedicated EPM/BI solutions)?", choices: STANDARD_CHOICES },
        { id: "FIN_Q3", group: "2. Reporting & Data Integrity", title: "Real-Time Financial Reporting", text: "Are financial reports generated in real-time or near real-time via automated dashboards?", choices: STANDARD_CHOICES },
        { id: "FIN_Q4", group: "2. Reporting & Data Integrity", title: "Data Reconciliation", text: "Is financial data reconciliation across various platforms (ERP, banking, etc.) fully automated and audited?", choices: STANDARD_CHOICES },
        { id: "FIN_Q5", group: "3. Transaction Security", title: "Payment Security & Fraud", text: "Are digital payment security controls and fraud detection mechanisms automated and predictive?", choices: STANDARD_CHOICES },
        { id: "FIN_Q6", group: "3. Transaction Security", title: "Audit Trail & Compliance", text: "Are audit trails automatically tracked, logged, and compliant with all relevant regulations?", choices: STANDARD_CHOICES },
        { id: "FIN_Q7", group: "4. Digital Service Management", title: "Service Catalogue for Finance", text: "Does Finance offer its services (e.g., budget submission, payment requests) through a formal digital service catalogue/portal?", choices: STANDARD_CHOICES },
        { id: "FIN_Q8", group: "4. Digital Service Management", title: "SLA Management for Internal Services", text: "Are SLAs for internal finance services digitally tracked with automated alerts?", choices: STANDARD_CHOICES },
        { id: "FIN_Q9", group: "5. Financial Systems Integration", title: "ERP & HR/Procurement Integration", text: "Is the core financial system (ERP) fully integrated bi-directionally with HR and Procurement systems?", choices: STANDARD_CHOICES },
        { id: "FIN_Q10", group: "5. Financial Systems Integration", title: "API Usage for External Links", text: "Are APIs used for secure, real-time data exchange with external financial institutions or regulators?", choices: STANDARD_CHOICES },
        { id: "FIN_Q11", group: "6. Financial Innovation", title: "Robotic Process Automation (RPA)", text: "Is RPA actively utilized for high-volume, repetitive tasks within the department?", choices: STANDARD_CHOICES },
        { id: "FIN_Q12", group: "6. Financial Innovation", title: "Advanced Analytics", text: "Are advanced analytics (e.g., AI/ML) used for liquidity forecasting or risk modeling?", choices: STANDARD_CHOICES },
        { id: "FIN_Q13", group: "7. Documentation & Knowledge", title: "Digital SOPs", text: "Are all financial SOPs and process maps digitized, version-controlled, and centrally accessible?", choices: STANDARD_CHOICES },
        { id: "FIN_Q14", group: "7. Documentation & Knowledge", title: "Knowledge Management System", text: "Is there an intelligent knowledge system for finance staff to quickly retrieve policies and guidelines?", choices: STANDARD_CHOICES },
    ],
    
    // Custom Set 2: Human Capital (HR) - 14 Questions
    "HR": [
        { id: "HR_Q1", group: "1. Employee Lifecycle Automation", title: "Onboarding & Offboarding", text: "Is the employee onboarding and offboarding process end-to-end digital and automated?", choices: STANDARD_CHOICES },
        { id: "HR_Q2", group: "1. Employee Lifecycle Automation", title: "Recruitment Process", text: "Is the recruitment process (screening, interviews, offers) managed through an automated ATS integrated with the HRIS?", choices: STANDARD_CHOICES },
        { id: "HR_Q3", group: "2. Employee Experience", title: "Digital Employee Portal", text: "Is there a comprehensive, mobile-friendly digital portal for all employee self-service tasks?", choices: STANDARD_CHOICES },
        { id: "HR_Q4", group: "2. Employee Experience", title: "Internal Communications", text: "Are internal communications and announcement workflows fully digitized and targeted?", choices: STANDARD_CHOICES },
        { id: "HR_Q5", group: "3. Learning & Development", title: "LMS Utilization & Analytics", text: "Is an LMS used effectively for all training, and is learning effectiveness tracked with analytics?", choices: STANDARD_CHOICES },
        { id: "HR_Q6", group: "3. Learning & Development", title: "Skills Gap Analysis", text: "Is skills gap analysis and personalized training recommendations automated using HR data?", choices: STANDARD_CHOICES },
        { id: "HR_Q7", group: "4. HR Data & Analytics", title: "HR KPI Dashboards", text: "Are HR KPIs (turnover, satisfaction, cost per hire) monitored via real-time dashboards for management?", choices: STANDARD_CHOICES },
        { id: "HR_Q8", group: "4. HR Data & Analytics", title: "Predictive HR Analytics", text: "Are advanced analytics (e.g., AI/ML) used for predictive employee attrition or workforce planning?", choices: STANDARD_CHOICES },
        { id: "HR_Q9", group: "5. Performance Management", title: "Digital Performance System", text: "Is performance management (goals, reviews, feedback) managed through an integrated digital platform?", choices: STANDARD_CHOICES },
        { id: "HR_Q10", group: "5. Performance Management", title: "Continuous Feedback Loop", text: "Does the system facilitate a continuous, digital feedback loop between employees and managers?", choices: STANDARD_CHOICES },
        { id: "HR_Q11", group: "6. Compliance & Risk", title: "Digital Policy Management", text: "Are HR policies and compliance documents managed, version-controlled, and acknowledged digitally by employees?", choices: STANDARD_CHOICES },
        { id: "HR_Q12", group: "6. Compliance & Risk", title: "Automated Compliance Checks", text: "Are compliance checks (e.g., visa/ID expiry) automated with pre-emptive alerts?", choices: STANDARD_CHOICES },
        { id: "HR_Q13", group: "7. Knowledge & Support", title: "HR Knowledge Base", text: "Is there an organized, searchable digital knowledge base for common HR inquiries?", choices: STANDARD_CHOICES },
        { id: "HR_Q14", group: "7. Knowledge & Support", title: "HR Ticketing System", text: "Are all employee HR inquiries resolved and tracked using a dedicated digital ticketing system?", choices: STANDARD_CHOICES },
    ],
    
    // All other departments use the generic set for now. You can customize them later.
    "EA": GENERIC_QUESTIONS,
    "SOL": GENERIC_QUESTIONS,
    "PLT": GENERIC_QUESTIONS,
    "INFRA": GENERIC_QUESTIONS,
    "CIT": GENERIC_QUESTIONS,
    "DATA": GENERIC_QUESTIONS,
    "BIZ": GENERIC_QUESTIONS,
    "PBD": GENERIC_QUESTIONS,
    "BR": GENERIC_QUESTIONS,
    "GRC": GENERIC_QUESTIONS,
    "LEG": GENERIC_QUESTIONS,
    "AUD": GENERIC_QUESTIONS,
    "CYB": GENERIC_QUESTIONS,
};

// Calculate the maximum possible scores dynamically
const DMI_MAX_SCORES = {};
for (const deptCode in DMI_QUESTIONS) {
    const totalQuestions = DMI_QUESTIONS[deptCode].length;
    DMI_MAX_SCORES[deptCode] = {
        totalQuestions: totalQuestions,
        maxScore: totalQuestions * MAX_SCORE_PER_QUESTION
    };
}