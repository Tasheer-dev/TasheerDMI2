// quizzes/quiz_solution_delivery.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["solution_delivery"] = {
  title: "Solution Development & Delivery Digital Maturity Assessment",
  shortcode: "SOLUTION_DELIVERY",
  totalQuestions: 10,
  maxScore: 10 * 5,
  sections: [
    { name: "1) Service Catalogue & Requests", questions: ["GEN_Q1", "GEN_Q2", "GEN_Q3"] },
    { name: "2) Workflow, Integration & Security", questions: ["GEN_Q4", "GEN_Q5", "GEN_Q6"] },
    { name: "3) Compliance, Knowledge & Training", questions: ["GEN_Q7", "GEN_Q8", "GEN_Q9", "GEN_Q10"] }
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
