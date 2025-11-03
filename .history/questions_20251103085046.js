
const COMMON_MATURITY_BANDS = [
  { name: "Level 1: Ad-hoc", range: [0, 25], description: "Manual, fragmented, no digital workflow, no central repository." },
  { name: "Level 2: Basic", range: [26, 50], description: "Some documentation, partial automation, limited integration." },
  { name: "Level 3: Managed", range: [51, 75], description: "Standardized, digitally tracked, monitored with KPIs." },
  { name: "Level 4: Advanced", range: [76, 90], description: "Integrated, automated, dashboards, SLA monitoring, digital audits." },
  { name: "Level 5: Optimized", range: [91, 100], description: "Fully automated, AI/predictive, continuous improvement." }
];

function STANDARD_CHOICES() {
  return [
    { value: 1, text: "1. Ad-hoc / manual / unstructured." },
    { value: 2, text: "2. Partially documented / isolated basic automation." },
    { value: 3, text: "3. Standardized, documented; 50–75% digitally tracked." },
    { value: 4, text: "4. Fully digital workflow; integrated with other systems." },
    { value: 5, text: "5. AI-assisted / predictive / continuous optimization." }
  ];
}

const DMI_QUESTION_SETS = {
 
  product: {
    title: "Product / Business / Marketing DMI",
    shortcode: "PROD",
    totalQuestions: 15,
    maxScore: 15 * 5,
    sections: [
      { name: "1) Service Catalogue & Requests", questions: ["PM_Q1", "PM_Q2", "PM_Q3", "PM_Q4"] },
      { name: "2) Workflow, Monitoring & Integration", questions: ["PM_Q5", "PM_Q6", "PM_Q7", "PM_Q8", "PM_Q9", "PM_Q10"] },
      { name: "3) Compliance, Knowledge & Training", questions: ["PM_Q11", "PM_Q12", "PM_Q13", "PM_Q14", "PM_Q15"] }
    ],
    questions: [
      { id: "PM_Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
        text: "Does the Product Department maintain a formal service catalogue listing all product-related services and their owners?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q2", area: "Service Catalogue", title: "Request & Workflow Tracking",
        text: "How are product requests, enhancements, and releases submitted and tracked?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q3", area: "Service Automation Coverage", title: "Automation of Product Lifecycle",
        text: "What percentage of the product lifecycle (requirement → design → release → feedback) is automated?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q4", area: "Service Automation Coverage", title: "System Integration",
        text: "Are product systems integrated with development, QA, operations, and client systems?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q5", area: "Workflow, Monitoring & Integration", title: "Performance Monitoring & Analytics",
        text: "How is product performance (releases, quality, client satisfaction) monitored?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q6", area: "Workflow, Monitoring & Integration", title: "Client Feedback Integration",
        text: "Is client feedback automatically linked to product updates or backlog?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q7", area: "Policies & Procedures", title: "Policy & Governance Documentation",
        text: "Are product management policies (governance, testing, change control) documented and updated?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q8", area: "Policies & Procedures", title: "Documentation Gap Analysis",
        text: "Do you maintain a gap analysis of documented vs. missing product procedures?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q9", area: "Runbooks & SOPs", title: "SOPs/Runbooks Availability",
        text: "Are SOPs/runbooks available for recurring product activities (sprint review, release checklist)?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q10", area: "Runbooks & SOPs", title: "SOPs Review & Update",
        text: "Are runbooks tested and updated regularly?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q11", area: "Compliance & Policy Adoption", title: "Compliance Measurement",
        text: "Do you measure compliance with product management standards (e.g., ISO / Agile)?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q12", area: "Compliance & Policy Adoption", title: "Workflow Compliance",
        text: "What percentage of product activities (requirements, releases, testing) follow documented workflows?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q13", area: "Compliance & Policy Adoption", title: "Training & Certification",
        text: "Are team members trained and certified in Agile, Scrum, product governance, and client communication policies?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q14", area: "Knowledge Repository & Templates", title: "Knowledge Base Location",
        text: "Where is the product management knowledge base hosted, and what templates exist?",
        choices: STANDARD_CHOICES()
      },
      { id: "PM_Q15", area: "Knowledge Repository & Templates", title: "Knowledge Materials Update",
        text: "Are knowledge materials updated after project delivery, client meetings, or bid submissions?",
        choices: STANDARD_CHOICES()
      }
    ],
    maturityBands: COMMON_MATURITY_BANDS
  },
  data_analytics: {
    title: "Data Analytics & BI DMI (Template)",
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
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q2", area: "Data Quality", title: "Data Quality Controls",
        text: "Are there automated controls to check data quality (duplicates, missing, wrong codes)?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q3", area: "Data Governance", title: "Data Ownership",
        text: "Is there named data owner and change management for data structures/views?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q4", area: "Analytics", title: "Analytics Tools Adoption",
        text: "Do you use standard BI / analytics tools and are dashboards standardized?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q5", area: "Analytics", title: "KPI Automation",
        text: "Are core KPIs automated and refreshed on schedule?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q6", area: "Integration", title: "ERP/CRM/HR Integration",
        text: "Are data sources integrated from ERP/CRM/HR systems automatically?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q7", area: "AI & Advanced", title: "Predictive / AI Models",
        text: "Are AI/predictive models used in operations (forecasting, capacity, customer behavior)?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q8", area: "AI & Advanced", title: "Self-Service BI",
        text: "Can business users build or edit their own reports/dashboards?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q9", area: "AI & Advanced", title: "Data Sharing & API",
        text: "Is data shareable via APIs / governed data layers?",
        choices: STANDARD_CHOICES()
      },
      { id: "DA_Q10", area: "Adoption", title: "Training & Adoption",
        text: "Are users trained and frequently using dashboards in decision-making?",
        choices: STANDARD_CHOICES()
      }
    ],
    maturityBands: COMMON_MATURITY_BANDS
  }
};
