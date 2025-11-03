// quizzes/quiz_pmo.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["pmo"] = {
  title: "PMO Digital Maturity Assessment",
  shortcode: "PMO",
  totalQuestions: 14,
  maxScore: 10 * 5,
  sections: [
    { name: "1) Service Catalogue & Requests", questions: ["Q1", "Q2"] },
    { name: "2) Automation, Integration & Operations", questions: ["Q3", "Q4"] },
    { name: "3) Automation, Integration & Operations", questions: [ "Q5", "Q6"] },
    { name: "4) Automation, Integration & Operations", questions: ["Q7", "Q8"] },
    { name: "5) Automation, Integration & Operations", questions: ["Q9", "Q10"] },
    { name: "5) Automation, Integration & Operations", questions: [ "Q11", "Q12"] },
    { name: "7) GRC, Risk, Audit & Knowledge", questions: [ "Q13", "Q14"] },
  ],
  questions: [
    {
    id: "GEN_Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
    text: "Does the department have a formal, digital service catalogue and owners?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q2", area: "Service Requests", title: "Request Intake & SLA Tracking",
    text: "How are requests submitted, tracked, and reported with SLAs?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q3", area: "Automation", title: "Process Automation Coverage",
    text: "What % of core processes are automated end-to-end?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q4", area: "Integration", title: "Systems Integration",
    text: "Are systems integrated with ERP/HR/CRM and other corporate systems?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q5", area: "Monitoring", title: "Dashboards & KPIs",
    text: "Are operational KPIs monitored via dashboards?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q6", area: "Security", title: "Cybersecurity & Access Control",
    text: "Are systems protected per corporate standards with access controls?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q7", area: "Compliance", title: "Policy & Compliance",
    text: "Are policies/procedures documented and enforced via workflows?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q8", area: "Knowledge", title: "Knowledge Repository",
    text: "Is there a version-controlled repository for SOPs/templates?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q9", area: "Risk/Audit", title: "Risk & Audit Tracking",
    text: "Are risks/audits digitally tracked with CAPA?",
    choices: window.STANDARD_CHOICES()
  },
    {
    id: "GEN_Q10", area: "Training", title: "Training & Adoption",
    text: "Are users trained and is adoption measured?",
    choices: window.STANDARD_CHOICES()
  }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
