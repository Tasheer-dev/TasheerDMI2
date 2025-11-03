// quizzes/quiz_product.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["product"] = {
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
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q2", area: "Service Catalogue", title: "Request & Workflow Tracking",
      text: "How are product requests, enhancements, and releases submitted and tracked?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q3", area: "Service Automation Coverage", title: "Automation of Product Lifecycle",
      text: "What percentage of the product lifecycle (requirement → design → release → feedback) is automated?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q4", area: "Service Automation Coverage", title: "System Integration",
      text: "Are product systems integrated with development, QA, operations, and client systems?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q5", area: "Workflow, Monitoring & Integration", title: "Performance Monitoring & Analytics",
      text: "How is product performance (releases, quality, client satisfaction) monitored?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q6", area: "Workflow, Monitoring & Integration", title: "Client Feedback Integration",
      text: "Is client feedback automatically linked to product updates or backlog?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q7", area: "Policies & Procedures", title: "Policy & Governance Documentation",
      text: "Are product management policies (governance, testing, change control) documented and updated?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q8", area: "Policies & Procedures", title: "Documentation Gap Analysis",
      text: "Do you maintain a gap analysis of documented vs. missing product procedures?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q9", area: "Runbooks & SOPs", title: "SOPs/Runbooks Availability",
      text: "Are SOPs/runbooks available for recurring product activities (sprint review, release checklist)?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q10", area: "Runbooks & SOPs", title: "SOPs Review & Update",
      text: "Are runbooks tested and updated regularly?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q11", area: "Compliance & Policy Adoption", title: "Compliance Measurement",
      text: "Do you measure compliance with product management standards (e.g., ISO / Agile)?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q12", area: "Compliance & Policy Adoption", title: "Workflow Compliance",
      text: "What percentage of product activities (requirements, releases, testing) follow documented workflows?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q13", area: "Compliance & Policy Adoption", title: "Training & Certification",
      text: "Are team members trained and certified in Agile, Scrum, product governance, and client communication policies?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q14", area: "Knowledge Repository & Templates", title: "Knowledge Base Location",
      text: "Where is the product management knowledge base hosted, and what templates exist?",
      choices: window.STANDARD_CHOICES()
    },
    { id: "PM_Q15", area: "Knowledge Repository & Templates", title: "Knowledge Materials Update",
      text: "Are knowledge materials updated after project delivery, client meetings, or bid submissions?",
      choices: window.STANDARD_CHOICES()
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
