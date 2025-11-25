// quizzes/quiz_finance.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["finance"] = {
  title: "Finance Department Digital Maturity Assessment (DMI)",
  shortcode: "FIN",
  totalQuestions: 32,
  maxScore: 32 * 5,

  sections: [
    { name: "1) Digital Finance Strategy & Governance", questions: ["Q1","Q2","Q3","Q4"] },
    { name: "2) Core Financial Systems & Automation", questions: ["Q5","Q6","Q7","Q8"] },
    { name: "3) Data, Reporting & Analytics", questions: ["Q9","Q10","Q11","Q12"] },
    { name: "4) Compliance, Risk & Controls Digitization", questions: ["Q13","Q14","Q15","Q16"] },
    { name: "5) Procurement, Payments & AP/AR Automation", questions: ["Q17","Q18","Q19","Q20"] },
    { name: "6) Budgeting, Forecasting & Performance Management", questions: ["Q21","Q22","Q23","Q24"] },
    { name: "7) Finance Operations Efficiency & Workflow Automation", questions: ["Q25","Q26","Q27","Q28"] },
    { name: "8) People, Capability & Innovation in Finance", questions: ["Q29","Q30","Q31","Q32"] }
  ],

  


    
      ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, manual operations, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation; limited automation; reactive monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Documented services, growing automation, proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Strong automation, documentation, and integrated workflows." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully optimized digital operations." }
  ]
};

