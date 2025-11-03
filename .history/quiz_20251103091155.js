// quiz1.js
const DMI_QUESTION_SETS = {
  procurement: {
    title: "Procurement Digital Maturity Assessment (DMI)",
    shortcode: "PROC",
    totalQuestions: 14,
    maxScore: 14 * 5,
    sections: [
      { name: "1) Service Catalogue & Requests", questions: ["Q1", "Q2"] },
      { name: "2) Automation, Integration & Operations", questions: ["Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q10"] },
      { name: "3) GRC, Risk, Audit & Knowledge", questions: ["Q9", "Q11", "Q12", "Q13", "Q14"] }
    ],
    questions: [
      { id: "Q1", area: "Service Catalogue", title: "Service Catalogue & Offering Definition",
        text: "Does the Procurement Department have a clear, digital service catalogue (vendor registration, sourcing, tenders, contracts)?",
        choices: [
          { value: 1, text: "1. Working on a service catalogue." },
          { value: 2, text: "2. Services partially documented / informal." },
          { value: 3, text: "3. Basic catalogue exists but not published/updated." },
          { value: 4, text: "4. Formal, published catalogue used by departments." },
          { value: 5, text: "5. Digital, integrated with ERP/ticketing, reviewed regularly." }
        ]
      },
      { id: "Q2", area: "Service Catalogue", title: "Service Request & SLA Tracking",
        text: "How are procurement services requested, tracked, and reported by internal departments, and how are SLAs monitored?",
        choices: [
          { value: 1, text: "1. Manual email / no SLA tracking." },
          { value: 2, text: "2. Excel/manual logs." },
          { value: 3, text: "3. Via ERP / portal, limited SLA visibility." },
          { value: 4, text: "4. Digital workflow with SLA dashboards." },
          { value: 5, text: "5. AI-driven ticketing & SLA prediction." }
        ]
      },
      { id: "Q3", area: "Process Automation & System Integration", title: "Process Automation",
        text: "Which procurement processes (PR→PO→GR→Invoice) are automated, and what % is digital?",
        choices: [
          { value: 1, text: "1. Entirely manual." },
          { value: 2, text: "2. Some steps automated only." },
          { value: 3, text: "3. Most via ERP, few manual workarounds." },
          { value: 4, text: "4. Fully automated procurement cycle." },
          { value: 5, text: "5. End-to-end + AI validation / RPA." }
        ]
      },
      { id: "Q4", area: "Process Automation & System Integration", title: "System Integration",
        text: "Are procurement systems integrated with Finance, HR, GRC, or Asset Management?",
        choices: [
          { value: 1, text: "1. No integration." },
          { value: 2, text: "2. Manual data transfer." },
          { value: 3, text: "3. Basic one-way integration (Finance)." },
          { value: 4, text: "4. Bi-directional integration with key systems." },
          { value: 5, text: "5. Real-time integration across all core systems." }
        ]
      },
      { id: "Q5", area: "Data & Analytics", title: "Spend Analytics",
        text: "Is there an automated system for analyzing spend data?",
        choices: [
          { value: 1, text: "1. Manual Excel reporting." },
          { value: 2, text: "2. Basic ERP reports, manual cleanup." },
          { value: 3, text: "3. Dedicated spend cube, basic visibility." },
          { value: 4, text: "4. Advanced dashboards & opportunity identification." },
          { value: 5, text: "5. AI-driven predictive spend analysis." }
        ]
      },
      { id: "Q6", area: "Sourcing & Contract Management", title: "E-Sourcing & Tendering",
        text: "How are sourcing/tendering activities managed and tracked?",
        choices: [
          { value: 1, text: "1. Paper-based." },
          { value: 2, text: "2. Email/shared drive." },
          { value: 3, text: "3. E-sourcing tool, basic bid collection." },
          { value: 4, text: "4. Digital platform, automated bid analysis." },
          { value: 5, text: "5. Digital + AI-driven supplier selection / real-time negotiation." }
        ]
      },
      { id: "Q7", area: "Sourcing & Contract Management", title: "Contract Management",
        text: "How are contracts stored, versioned, and renewed?",
        choices: [
          { value: 1, text: "1. Shared folders, no tracking." },
          { value: 2, text: "2. Central repository, manual versioning." },
          { value: 3, text: "3. CLM used for basic storage & access control." },
          { value: 4, text: "4. Digital CLM with obligation alerts." },
          { value: 5, text: "5. CLM + AI risk scoring + automated renewals." }
        ]
      },
      { id: "Q8", area: "Supplier Management", title: "Supplier Relationship Management (SRM)",
        text: "How is supplier onboarding/performance/compliance managed?",
        choices: [
          { value: 1, text: "1. Manual in Excel." },
          { value: 2, text: "2. Vendor master in ERP, but no performance tracking." },
          { value: 3, text: "3. Digital portal, basic performance." },
          { value: 4, text: "4. SRM with real-time dashboards." },
          { value: 5, text: "5. SRM + AI-driven risk + automated onboarding/offboarding." }
        ]
      },
      { id: "Q9", area: "GRC & Risk", title: "Policy & Compliance Management",
        text: "Are procurement policies, ethics, anti-fraud digitally managed?",
        choices: [
          { value: 1, text: "1. Paper/shared drive only." },
          { value: 2, text: "2. Digital, but manual compliance checks." },
          { value: 3, text: "3. Compliance checks in workflows." },
          { value: 4, text: "4. Digital GRC with automated enforcement." },
          { value: 5, text: "5. Real-time, continuous monitoring + alerts." }
        ]
      },
      { id: "Q10", area: "Data & Analytics", title: "Data Quality & Governance",
        text: "How is supplier/material/contract data quality governed?",
        choices: [
          { value: 1, text: "1. No formal checks." },
          { value: 2, text: "2. Periodic manual cleanup." },
          { value: 3, text: "3. Basic validation rules in ERP." },
          { value: 4, text: "4. Automated validation in workflows + data governance." },
          { value: 5, text: "5. Continuous monitoring + predictive data quality alerts." }
        ]
      },
      { id: "Q11", area: "GRC & Risk", title: "Cybersecurity & Data Protection",
        text: "Are procurement systems protected per corporate standard?",
        choices: [
          { value: 1, text: "1. Basic / generic protection." },
          { value: 2, text: "2. Corporate standard, manual backup." },
          { value: 3, text: "3. Regular VA / hardening." },
          { value: 4, text: "4. Advanced monitoring, automated access controls." },
          { value: 5, text: "5. AI-enhanced security, behavioral analytics." }
        ]
      },
      { id: "Q12", area: "GRC & Risk", title: "Audit Management",
        text: "How are internal/external audits tracked and closed?",
        choices: [
          { value: 1, text: "1. Manual / Excel." },
          { value: 2, text: "2. Recorded digitally, follow-up manual." },
          { value: 3, text: "3. Tracked via simple system." },
          { value: 4, text: "4. Full digital CAPA with dashboards." },
          { value: 5, text: "5. AI-driven non-compliance detection." }
        ]
      },
      { id: "Q13", area: "GRC & Risk", title: "Risk Register",
        text: "Do you have digital risk register for supplier/procurement risks?",
        choices: [
          { value: 1, text: "1. None." },
          { value: 2, text: "2. Excel-based." },
          { value: 3, text: "3. Digital, but no alerts." },
          { value: 4, text: "4. Integrated with alerts & tracking." },
          { value: 5, text: "5. AI-enabled predictive risk scoring." }
        ]
      },
      { id: "Q14", area: "Tools & Training", title: "Knowledge Repository",
        text: "Is there a centralized digital repository for SOPs, templates, vendor forms?",
        choices: [
          { value: 1, text: "1. Scattered in local drives." },
          { value: 2, text: "2. Shared folder, no versioning." },
          { value: 3, text: "3. Central repository, limited access control." },
          { value: 4, text: "4. Version-controlled repository with access tracking." },
          { value: 5, text: "5. Intelligent knowledge portal with search and auto-update." }
        ]
      }
    ],
    maturityBands: COMMON_MATURITY_BANDS
  },







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
  }


  ,
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
}
}