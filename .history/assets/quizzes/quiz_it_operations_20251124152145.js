// Generated IT Operations Digital Maturity Assessment (8 Areas, 32 Questions)
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["it_operations_new"] = {
  title: "Platforms & IT Solution Operations Digital Maturity Assessment (DMI)",
  shortcode: "PLATOPS_NEW",
  totalQuestions: 32,
  maxScore: 32 * 5,
  sections: [
    { name: "1) DevOps & Release Management", questions: ["Q1","Q2","Q3","Q4"] },
    { name: "2) Infrastructure, Configuration & Environment Management", questions: ["Q5","Q6","Q7","Q8"] },
    { name: "3) Monitoring, Observability & Reliability", questions: ["Q9","Q10","Q11","Q12","Q13"] },
    { name: "4) Incident, Problem & Support Operations", questions: ["Q14","Q15","Q16","Q17","Q18"] },
    { name: "5) Security, Compliance & Governance", questions: ["Q19","Q20","Q21"] },
    { name: "6) Continuous Improvement, Culture & Data-Driven Decision Making", questions: ["Q22","Q23","Q24"] },
    { name: "7) Automation, Tools & Operational Efficiency", questions: ["Q25","Q26","Q27","Q28"] },
    { name: "8) Service Delivery, Customer Experience & Vendor Coordination", questions: ["Q29","Q30","Q31","Q32"] }
  ],

  questions: [
    // AREA 1
    { id:"Q1", title:"Release & Deployment Automation", text:"How standardized and automated are release and deployment processes?", choices:[
      {value:1,text:"1. Manual deployments"},
      {value:2,text:"2. Basic automation"},
      {value:3,text:"3. Standard pipelines"},
      {value:4,text:"4. Fully automated CI/CD"},
      {value:5,text:"5. End-to-end automation with governance"}
    ]},
    { id:"Q2", title:"Azure DevOps Usage", text:"How effectively is Azure DevOps used for pipelines and traceability?", choices:[
      {value:1,text:"1. Minimal usage"},
      {value:2,text:"2. Basic boards/pipelines"},
      {value:3,text:"3. Standardized usage"},
      {value:4,text:"4. Integrated workflows"},
      {value:5,text:"5. Fully optimized DevOps model"}
    ]},
    { id:"Q3", title:"Handover Maturity", text:"How mature is handover between Solution Teams and Operations?", choices:[
      {value:1,text:"1. Informal handover"},
      {value:2,text:"2. Partial documentation"},
      {value:3,text:"3. Standard process"},
      {value:4,text:"4. Full documentation & reviews"},
      {value:5,text:"5. Automated structured handover"}
    ]},
    { id:"Q4", title:"Deployment Validation", text:"How well are deployments validated and tested?", choices:[
      {value:1,text:"1. No validation"},
      {value:2,text:"2. Manual basic checks"},
      {value:3,text:"3. Standard smoke tests"},
      {value:4,text:"4. Automated checks"},
      {value:5,text:"5. Automated validation + rollback"}
    ]},

    // AREA 2
    { id:"Q5", title:"Environment Provisioning", text:"How mature is provisioning (servers/configurations/IaC)?", choices:[
      {value:1,text:"1. Manual"},
      {value:2,text:"2. Partially automated"},
      {value:3,text:"3. Standard IaC"},
      {value:4,text:"4. Fully automated provisioning"},
      {value:5,text:"5. Self-service IaC"}
    ]},
    { id:"Q6", title:"Configuration Standards", text:"How consistent are configuration standards across environments?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Partial"},
      {value:3,text:"3. Standard enforced"},
      {value:4,text:"4. Automated compliance"},
      {value:5,text:"5. Continuous configuration governance"}
    ]},
    { id:"Q7", title:"Capacity & Performance Management", text:"How are capacity and performance handled?", choices:[
      {value:1,text:"1. Reactive"},
      {value:2,text:"2. Manual"},
      {value:3,text:"3. Structured planning"},
      {value:4,text:"4. Automated scaling"},
      {value:5,text:"5. Predictive modeling"}
    ]},
    { id:"Q8", title:"Backup & Continuity", text:"How mature are backup and continuity processes?", choices:[
      {value:1,text:"1. Undefined"},
      {value:2,text:"2. Basic backups"},
      {value:3,text:"3. Standard processes"},
      {value:4,text:"4. Automated monitoring"},
      {value:5,text:"5. Full DR automation & testing"}
    ]},

    // AREA 3
    { id:"Q9", title:"Monitoring Coverage", text:"How complete is monitoring coverage?", choices:[
      {value:1,text:"1. Minimal"},
      {value:2,text:"2. Basic monitoring"},
      {value:3,text:"3. Unified dashboards"},
      {value:4,text:"4. Full observability"},
      {value:5,text:"5. Predictive monitoring"}
    ]},
    { id:"Q10", title:"Alerting & Actions", text:"How mature is alerting and automated remediation?", choices:[
      {value:1,text:"1. Noisy alerts"},
      {value:2,text:"2. Basic thresholds"},
      {value:3,text:"3. Tuned alerts"},
      {value:4,text:"4. Automated runbooks"},
      {value:5,text:"5. Self-healing"}
    ]},
    { id:"Q11", title:"Diagnostic Usage", text:"How effectively are logs/metrics/traces used for diagnostics?", choices:[
      {value:1,text:"1. Minimal usage"},
      {value:2,text:"2. Partial logs"},
      {value:3,text:"3. Centralized logging"},
      {value:4,text:"4. Correlation analysis"},
      {value:5,text:"5. Automated insights"}
    ]},
    { id:"Q12", title:"Platform Reliability", text:"How reliable is the platform (uptime/SLA/SRE)?", choices:[
      {value:1,text:"1. Unpredictable"},
      {value:2,text:"2. Basic uptime tracking"},
      {value:3,text:"3. SLA-based operations"},
      {value:4,text:"4. Automated SLO dashboards"},
      {value:5,text:"5. Proactive reliability management"}
    ]},
    { id:"Q13", title:"ELK Stack Usage", text:"How effectively is ELK used?", choices:[
      {value:1,text:"1. Minimal"},
      {value:2,text:"2. Partial ingestion"},
      {value:3,text:"3. Dashboards in place"},
      {value:4,text:"4. Full analytics"},
      {value:5,text:"5. Automated anomaly detection"}
    ]},

    // AREA 4
    { id:"Q14", title:"Support Workflow", text:"How structured is L1–L2–L3 support workflow?", choices:[
      {value:1,text:"1. Unstructured"},
      {value:2,text:"2. Partially defined"},
      {value:3,text:"3. Defined SLAs"},
      {value:4,text:"4. Tool-based workflows"},
      {value:5,text:"5. Fully optimized"}
    ]},
    { id:"Q15", title:"Incident Management", text:"How mature is incident management?", choices:[
      {value:1,text:"1. Reactive"},
      {value:2,text:"2. Basic process"},
      {value:3,text:"3. Standard workflows"},
      {value:4,text:"4. Automated routing"},
      {value:5,text:"5. Predictive incident prevention"}
    ]},
    { id:"Q16", title:"Problem Management", text:"How effectively are root causes identified?", choices:[
      {value:1,text:"1. No RCA"},
      {value:2,text:"2. Basic RCA"},
      {value:3,text:"3. Structured RCA"},
      {value:4,text:"4. Trend analysis"},
      {value:5,text:"5. Predictive prevention"}
    ]},
    { id:"Q17", title:"Knowledge Base", text:"How well documented are KB articles and SOPs?", choices:[
      {value:1,text:"1. No KB"},
      {value:2,text:"2. Limited content"},
      {value:3,text:"3. Standard KB"},
      {value:4,text:"4. Updated structured KB"},
      {value:5,text:"5. Integrated KB with automation"}
    ]},
    { id:"Q18", title:"Runbooks", text:"How complete and mature are operational runbooks?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Partial basic runbooks"},
      {value:3,text:"3. Standard runbooks"},
      {value:4,text:"4. Automated runbooks"},
      {value:5,text:"5. Intelligent automated workflows"}
    ]},

    // AREA 5
    { id:"Q19", title:"Security Controls", text:"How mature are security controls in operations?", choices:[
      {value:1,text:"1. Basic"},
      {value:2,text:"2. Partial"},
      {value:3,text:"3. Standard"},
      {value:4,text:"4. Automated security"},
      {value:5,text:"5. Fully embedded DevSecOps"}
    ]},
    { id:"Q20", title:"Compliance Enforcement", text:"How well is compliance enforced?", choices:[
      {value:1,text:"1. Manual"},
      {value:2,text:"2. Basic enforcement"},
      {value:3,text:"3. Standard dashboards"},
      {value:4,text:"4. Automated validation"},
      {value:5,text:"5. Continuous compliance"}
    ]},
    { id:"Q21", title:"Access Governance", text:"How effective is access/privilege governance?", choices:[
      {value:1,text:"1. Weak"},
      {value:2,text:"2. Basic reviews"},
      {value:3,text:"3. Standard IAM"},
      {value:4,text:"4. Automated IAM"},
      {value:5,text:"5. Just-in-time privileged access"}
    ]},

    // AREA 6
    { id:"Q22", title:"Collaboration Culture", text:"How mature is cross-team collaboration?", choices:[
      {value:1,text:"1. Siloed"},
      {value:2,text:"2. Occasionally coordinated"},
      {value:3,text:"3. Regular communication"},
      {value:4,text:"4. DevSecOps model"},
      {value:5,text:"5. Fully unified collaboration"}
    ]},
    { id:"Q23", title:"Data-Driven Decisions", text:"How effectively are KPIs used?", choices:[
      {value:1,text:"1. Not used"},
      {value:2,text:"2. Basic metrics"},
      {value:3,text:"3. Dashboards"},
      {value:4,text:"4. KPI-driven decisions"},
      {value:5,text:"5. Predictive analytics"}
    ]},
    { id:"Q24", title:"Training & Development", text:"How structured is skill development?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Occasional"},
      {value:3,text:"3. Standard training"},
      {value:4,text:"4. Skill roadmap"},
      {value:5,text:"5. Continuous certified development"}
    ]},

    // AREA 7
    { id:"Q25", title:"Operational Automation", text:"How effectively is automation reducing manual work?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Limited scripting"},
      {value:3,text:"3. Standard automation"},
      {value:4,text:"4. Advanced automation"},
      {value:5,text:"5. Fully autonomous operations"}
    ]},
    { id:"Q26", title:"Scripting Maturity", text:"How mature is scripting for repetitive tasks?", choices:[
      {value:1,text:"1. Manual tasks"},
      {value:2,text:"2. Basic scripts"},
      {value:3,text:"3. Standardized scripts"},
      {value:4,text:"4. Automated workflows"},
      {value:5,text:"5. Full script libraries with version control"}
    ]},
    { id:"Q27", title:"Tool Integration", text:"How well integrated are ITSM, monitoring, and DevOps tools?", choices:[
      {value:1,text:"1. Isolated tools"},
      {value:2,text:"2. Partial integration"},
      {value:3,text:"3. Standard integration"},
      {value:4,text:"4. Unified workflows"},
      {value:5,text:"5. Fully orchestrated toolchain"}
    ]},
    { id:"Q28", title:"Issue Prevention Automation", text:"How effectively does automation prevent issues?", choices:[
      {value:1,text:"1. Reactive"},
      {value:2,text:"2. Basic"},
      {value:3,text:"3. Standard alert-based prevention"},
      {value:4,text:"4. Automated scripts"},
      {value:5,text:"5. AI-based predictive prevention"}
    ]},

    // AREA 8
    { id:"Q29", title:"Stakeholder Updates", text:"How effectively are stakeholders updated on service health?", choices:[
      {value:1,text:"1. No updates"},
      {value:2,text:"2. Basic manual updates"},
      {value:3,text:"3. Regular communications"},
      {value:4,text:"4. Automated updates"},
      {value:5,text:"5. Real-time dashboards for stakeholders"}
    ]},
    { id:"Q30", title:"End-User Experience", text:"How mature is end-user experience management?", choices:[
      {value:1,text:"1. Not measured"},
      {value:2,text:"2. Manual feedback"},
      {value:3,text:"3. Performance dashboards"},
      {value:4,text:"4. Automated monitoring"},
      {value:5,text:"5. Continuous experience optimization"}
    ]},
    { id:"Q31", title:"Vendor Coordination", text:"How structured is vendor management?", choices:[
      {value:1,text:"1. Ad-hoc"},
      {value:2,text:"2. Basic communication"},
      {value:3,text:"3. Structured SLAs"},
      {value:4,text:"4. Performance reviews"},
      {value:5,text:"5. Joint optimization planning"}
    ]},
    { id:"Q32", title:"Seasonal Readiness", text:"How well does IT Ops prepare for high-load seasons?", choices:[
      {value:1,text:"1. Unprepared"},
      {value:2,text:"2. Basic preparation"},
      {value:3,text:"3. Standard readiness plans"},
      {value:4,text:"4. Automated scaling & testing"},
      {value:5,text:"5. Full seasonal load simulation & automation"}
    ]}
  ],

  maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Reactive, manual operations, limited documentation." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation; limited automation; reactive monitoring." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Documented services, growing automation, proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Strong automation, documentation, and integrated workflows." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive, self-healing, fully optimized digital operations." }
  ]
};
