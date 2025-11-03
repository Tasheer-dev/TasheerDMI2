// quizzes/quiz_data_analytics.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["data_analytics"] = {
  title: "Data Analytics & BI DMI",
  shortcode: "DA",
  totalQuestions: 10,
  maxScore: 10 * 5,
  sections: [
    { name: "1) Data Sources & Governance", questions: ["DA_Q1", "DA_Q2", "DA_Q3"] },
    { name: "2) Analytics & Dashboards", questions: ["DA_Q4", "DA_Q5", "DA_Q6"] },
    { name: "3) AI, Sharing & Adoption", questions: ["DA_Q7", "DA_Q8", "DA_Q9", "DA_Q10"] }
  ],
  questions: [
    { id: "DA_Q1", area: "Data Sources", title: "Data Inventory",
      text: "Do you have an inventory of all data sources used by the department?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q2", area: "Data Quality", title: "Data Quality Controls",
      text: "Are there automated controls to check data quality (duplicates, missing, wrong codes)?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q3", area: "Data Governance", title: "Data Ownership",
      text: "Is there named data owner and change management for data structures/views?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q4", area: "Analytics", title: "Analytics Tools Adoption",
      text: "Do you use standard BI / analytics tools and are dashboards standardized?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q5", area: "Analytics", title: "KPI Automation",
      text: "Are core KPIs automated and refreshed on schedule?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q6", area: "Integration", title: "ERP/CRM/HR Integration",
      text: "Are data sources integrated from ERP/CRM/HR systems automatically?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q7", area: "AI & Advanced", title: "Predictive / AI Models",
      text: "Are AI/predictive models used in operations (forecasting, capacity, customer behavior)?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q8", area: "AI & Advanced", title: "Self-Service BI",
      text: "Can business users build or edit their own reports/dashboards?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q9", area: "AI & Advanced", title: "Data Sharing & API",
      text: "Is data shareable via APIs / governed data layers?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "DA_Q10", area: "Adoption", title: "Training & Adoption",
      text: "Are users trained and frequently using dashboards in decision-making?",
      choices: window.STANDARD_CHOICES()
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
