// quizzes/quiz_legal Affairs.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["legal_affairs"] = {
  title: "legal Affairs (Legal & Regulatory) Department Digital Maturity Assessment (DMI)",
  shortcode: "LEGAL_EXT",
  totalQuestions: 20,
  maxScore: 20 * 5,

  sections: [
    { name: "1) Service Catalogue & Request Management", questions: ["Q1", "Q2"] },
    { name: "2) Contract Lifecycle & Compliance Monitoring", questions: ["Q3", "Q4"] },
    { name: "3) Licensing & Regulatory Tracking", questions: ["Q5", "Q6"] },
    { name: "4) Policy Governance & Communication", questions: ["Q7", "Q8"] },
    { name: "5) Workflow Integration & Performance Dashboards", questions: ["Q9", "Q10"] },
    { name: "6) Dispute, Risk, & Awareness Management", questions: ["Q11", "Q12", "Q13"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q14"] },

    { name: "8) Advanced Digital Legal Intelligence & Automation", questions: ["Q15", "Q16", "Q17", "Q18", "Q19", "Q20"] }
  ],

  questions: [

    // Existing Q1–Q14 retained (placeholder comment)
    // ... (You will insert your original 14 questions here)

    // NEW AREA 8 – 6 New Questions
    {
      id: "Q15", area: "LegalAI",
      title: "AI-Assisted Contract Review & Risk Scoring",
      text: "Does the Legal Department use AI tools for contract scanning, clause extraction, risk scoring, or automated recommendations?",
      choices: [
        { value: 1, text: "1. No AI usage; contract review fully manual." },
        { value: 2, text: "2. Basic OCR or keyword search tools used." },
        { value: 3, text: "3. AI-assisted clause extraction for selected contract types." },
        { value: 4, text: "4. AI risk scoring used for all contract reviews with approval workflows." },
        { value: 5, text: "5. Fully intelligent contract analytics with automated redlines and negotiation suggestions." }
      ]
    },

    {
      id: "Q16", area: "LegalAnalytics",
      title: "Legal Analytics & Decision Support",
      text: "How well does the Legal Department use analytics to predict workload, case outcomes, turnaround times, and department performance?",
      choices: [
        { value: 1, text: "1. No analytics used; decisions are intuition-based." },
        { value: 2, text: "2. Basic manual reports created occasionally." },
        { value: 3, text: "3. Standard dashboards for tracking caseloads and performance." },
        { value: 4, text: "4. Automated analytics for forecasting and risk scoring." },
        { value: 5, text: "5. Advanced predictive analytics and legal intelligence used for strategic decisions." }
      ]
    },

    {
      id: "Q17", area: "Ediscovery",
      title: "Digital Evidence & E‑Discovery Tools",
      text: "Does the Legal Department use digital tools for e‑discovery, evidence management, and investigation documentation?",
      choices: [
        { value: 1, text: "1. Manual evidence management." },
        { value: 2, text: "2. Basic digital storage (folders, drives)." },
        { value: 3, text: "3. Structured e‑discovery tool with tagging and indexing." },
        { value: 4, text: "4. Automated evidence processing and secure chain-of-custody logs." },
        { value: 5, text: "5. Fully integrated e‑discovery platform with AI search and fraud-detection analytics." }
      ]
    },

    {
      id: "Q18", area: "DigitalSignatures",
      title: "Digital Signatures & Secure Authorization",
      text: "How widely are digital signatures and secure approval workflows used for contracts, policies, and legal documents?",
      choices: [
        { value: 1, text: "1. Manual signatures dominate." },
        { value: 2, text: "2. Some documents use digital signatures." },
        { value: 3, text: "3. Standard digital signature solution used across most legal processes." },
        { value: 4, text: "4. Fully automated signature workflows with audit trails." },
        { value: 5, text: "5. End-to-end digital authorization ecosystem integrated with CLM and ERP." }
      ]
    },

    {
      id: "Q19", area: "LegalIntegration",
      title: "Integration with Corporate Systems (ERP, HR, Finance, GRC)",
      text: "Are legal systems integrated with other core business systems for seamless data sharing, compliance validation, and workflow automation?",
      choices: [
        { value: 1, text: "1. No integration; systems operate in silos." },
        { value: 2, text: "2. Limited manual file exchanges." },
        { value: 3, text: "3. Standard API integration with key systems." },
        { value: 4, text: "4. Automated two‑way integrations with data validation." },
        { value: 5, text: "5. Full enterprise-wide integration enabling proactive risk mapping and automated compliance checks." }
      ]
    },

    {
      id: "Q20", area: "LegalInnovation",
      title: "Digital Innovation & Continuous Improvement in Legal Operations",
      text: "How actively does the Legal Department promote digital innovation, new legal technologies, and continuous improvement?",
      choices: [
        { value: 1, text: "1. No innovation activities." },
        { value: 2, text: "2. Occasional pilots without scaling." },
        { value: 3, text: "3. Regular evaluation of new legal tools." },
        { value: 4, text: "4. Formal innovation roadmap and improvement tracking." },
        { value: 5, text: "5. Continuous legal innovation culture with measurable digital transformation impact." }
      ]
    }
  ]
};






    {
      id: "Q14", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Is there a centralized digital knowledge repository containing legal templates, regulatory guidelines, policy drafts, and contract samples with access controls and version management?",
      choices: [
        { value: 1, text: "1. Ad-hoc activity; documents scattered across systems." },
        { value: 2, text: "2. Shared drive repository with basic structure." },
        { value: 3, text: "3. Centralized repository with limited access control." },
        { value: 4, text: "4. Fully digital knowledge base with version tracking and access logs." },
        { value: 5, text: "5. Intelligent legal knowledge hub with AI search, metadata tagging, and update automation." }
      ]
    }
  ],
  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Legal processes are manual and reactive. No digital systems for case, contract, or compliance tracking. Documentation is scattered and non-standardized." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Some digital documentation and contract tracking exist. Compliance logs and policies are partially automated. Limited integration with business systems." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Legal processes are standardized and supported by digital tools (e.g., CLM, case tracker). Policies and compliance registers are version-controlled and routinely reviewed." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Legal workflows are integrated with ERP and business systems. Dashboards track KPIs, risks, and renewals. Automated alerts ensure proactive compliance and reporting." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Legal & Regulatory ecosystem is fully digital, intelligent, and predictive. AI-driven contract analytics, compliance forecasting, and automatic policy updates. Cross-functional integration ensures continuous improvement and proactive risk mitigation." }
  ]
};
