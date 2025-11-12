// quizzes/quiz_corporate_it.js
// -----------------------------------------------------------
// Corporate IT Department Digital Capability & Maturity Assessment (DMI)
// Framework aligned with Gartner IT Score Maturity Model (Levels 1–5)
// Levels represent: 1) Ad-hoc, 2) Developing, 3) Defined/Managed, 4) Measured/Advanced, 5) Optimized/Predictive
// -----------------------------------------------------------

window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["corporate_it"] = {
  title: "Corporate IT Department Digital Capability & Maturity Assessment (DMI)",
  shortcode: "CORPORATE_IT",
  totalQuestions: 20,
  maxScore: 20 * 5,
  sections: [
    { name: "1) Service Catalogue & Documentation", questions: ["Q1", "Q2", "Q3", "Q4"] },
    { name: "2) Workflow, Monitoring & Integration", questions: ["Q5", "Q6", "Q7", "Q8"] },
    { name: "3) Runbooks, SOPs & Standardization", questions: ["Q9", "Q10", "Q11", "Q12"] },
    { name: "4) Compliance, Governance & Training", questions: ["Q13", "Q14", "Q15", "Q16"] },
    { name: "5) Knowledge, Operations & Performance", questions: ["Q17", "Q18", "Q19", "Q20"] }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive operations; inconsistent, undocumented, manual processes." },
    { name: "26–50% (Developing)", range: [26, 50], description: "Basic structure emerging; processes partly documented, limited consistency." },
    { name: "51–75% (Defined/Managed)", range: [51, 75], description: "Standardized processes; documented, measured, and reviewed regularly." },
    { name: "76–90% (Measured/Advanced)", range: [76, 90], description: "Integrated automation; data-driven decisions, proactive management." },
    { name: "91–100% (Optimized/Predictive)", range: [91, 100], description: "Predictive analytics, continuous improvement, and business alignment achieved." }
  ]
};
