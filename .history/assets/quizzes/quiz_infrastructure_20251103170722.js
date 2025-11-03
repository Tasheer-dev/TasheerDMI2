window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["infra_network"] = {
  title: "Infrastructure & Network Operations Digital Maturity Assessment (DMI)",
  shortcode: "INFRA",
  totalQuestions: 16,
  maxScore: 16 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2", "Q3"] },
    { name: "2) Service Automation Coverage", questions: ["Q4", "Q5"] },
    { name: "3) Workflow & Process Automation and Integration", questions: ["Q6", "Q7", "Q8"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q9", "Q10", "Q11"] },
    { name: "5) Runbooks & Standard Operating Procedures (SOPs)", questions: ["Q12"] },
    { name: "6) Knowledge Repository & Templates", questions: ["Q13"] },
    { name: "7) Compliance & Policy Adoption", questions: ["Q14", "Q15", "Q16"] }
  ],
  questions: [
    {
      id: "Q1", area: "Catalogue",
      title: "Service Catalogue & Offering Definition",
      text: "Kindly share your service catalogue for Infrastructure and Network services, including the types of services offered (e.g., server provisioning, cloud resource management, VPN access, firewall rule changes, load balancing) and their defined SLAs.",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; no formal service catalogue or SLAs." },
        { value: 2, text: "2. Basic inventory of services maintained manually or within teams." },
        { value: 3, text: "3. Documented catalogue with defined SLAs and owners." },
        { value: 4, text: "4. Fully digital service catalogue integrated with request systems and SLA tracking." },
        { value: 5, text: "5. Dynamic service catalogue with automated SLA updates, ownership visibility, and KPI dashboards." }
      ]
    },
    ...
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual, reactive operations; limited documentation or automation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some processes documented; basic automation and integration." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; CI/CD partially automated; improving integrations." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented processes; strong CI/CD automation; dashboards in place." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Fully automated, end-to-end integrated, with continuous improvement tracked by metrics." }
  ]
};
