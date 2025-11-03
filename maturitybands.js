// maturitybands.js
window.COMMON_MATURITY_BANDS = [
  { name: "Level 1: Ad-hoc",   range: [0, 25],  description: "Manual, fragmented, no digital workflow, no central repository." },
  { name: "Level 2: Basic",    range: [26, 50], description: "Some documentation, partial automation, limited integration." },
  { name: "Level 3: Managed",  range: [51, 75], description: "Standardized, digitally tracked, monitored with KPIs." },
  { name: "Level 4: Advanced", range: [76, 90], description: "Integrated, automated, dashboards, SLA monitoring, digital audits." },
  { name: "Level 5: Optimized",range: [91, 100],description: "Fully automated, AI/predictive, continuous improvement." }
];

window.STANDARD_CHOICES = function STANDARD_CHOICES() {
  return [
    { value: 1, text: "1. Ad-hoc / manual / unstructured." },
    { value: 2, text: "2. Partially documented / isolated basic automation." },
    { value: 3, text: "3. Standardized, documented; 50–75% digitally tracked." },
    { value: 4, text: "4. Fully digital workflow; integrated with other systems." },
    { value: 5, text: "5. AI-assisted / predictive / continuous optimization." }
  ];
};

// Global container for all quizzes (each quiz_*.js file attaches itself here)
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
