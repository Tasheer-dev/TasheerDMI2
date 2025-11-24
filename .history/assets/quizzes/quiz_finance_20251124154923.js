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

  questions: [
    { id:"Q1", title:"Digital Finance Roadmap", text:"Is there a documented digital finance strategy aligned with organizational goals?", choices:[
      {value:1,text:"1. No digital strategy"},
      {value:2,text:"2. Basic roadmap"},
      {value:3,text:"3. Documented digital plan"},
      {value:4,text:"4. Fully governed roadmap"},
      {value:5,text:"5. Continually updated with KPIs"}
    ]},
    { id:"Q2", title:"Leadership Support", text:"How strong is leadership support for digital finance initiatives?", choices:[
      {value:1,text:"1. Minimal"},
      {value:2,text:"2. Some support"},
      {value:3,text:"3. Structured sponsorship"},
      {value:4,text:"4. Strong support with funding"},
      {value:5,text:"5. Fully proactive leadership"}
    ]},
    { id:"Q3", title:"Digital Governance", text:"How structured is governance for finance systems and digital initiatives?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Partial governance"},
      {value:3,text:"3. Standard committees"},
      {value:4,text:"4. Integrated governance"},
      {value:5,text:"5. Data-driven governance decisions"}
    ]},
    { id:"Q4", title:"Risk & Controls Integration", text:"How well are financial risks and controls digitized into workflows?", choices:[
      {value:1,text:"1. Manual controls"},
      {value:2,text:"2. Basic checks"},
      {value:3,text:"3. Standard digital controls"},
      {value:4,text:"4. Automated controls"},
      {value:5,text:"5. Predictive control automation"}
    ]},

    { id:"Q5", title:"ERP Usage", text:"How effectively is the ERP used for finance operations?", choices:[
      {value:1,text:"1. Mostly manual work"},
      {value:2,text:"2. Basic ERP features"},
      {value:3,text:"3. Standard ERP utilization"},
      {value:4,text:"4. Advanced automation"},
      {value:5,text:"5. Fully optimized ERP usage"}
    ]},
    { id:"Q6", title:"System Integration", text:"Are financial systems integrated with other departments (HR, procurement, sales)?", choices:[
      {value:1,text:"1. No integration"},
      {value:2,text:"2. Limited integration"},
      {value:3,text:"3. Standard integration"},
      {value:4,text:"4. Automated data flows"},
      {value:5,text:"5. Fully unified finance ecosystem"}
    ]},
    { id:"Q7", title:"Process Automation", text:"How automated are key finance processes?", choices:[
      {value:1,text:"1. Fully manual"},
      {value:2,text:"2. Partially automated"},
      {value:3,text:"3. Standard automation"},
      {value:4,text:"4. Advanced automation (RPA)"},
      {value:5,text:"5. Fully automated digital workflows"}
    ]},
    { id:"Q8", title:"Digital Document Management", text:"How mature is the digitization of finance-related documents?", choices:[
      {value:1,text:"1. Paper-based"},
      {value:2,text:"2. Basic digital files"},
      {value:3,text:"3. Structured digital archive"},
      {value:4,text:"4. Automated document flows"},
      {value:5,text:"5. Full document intelligence"}
    ]},

    { id:"Q9", title:"Financial Data Quality", text:"How reliable and consistent is financial data?", choices:[
      {value:1,text:"1. Poor quality"},
      {value:2,text:"2. Some validation"},
      {value:3,text:"3. Standard quality controls"},
      {value:4,text:"4. Automated cleansing"},
      {value:5,text:"5. High-quality governed data"}
    ]},
    { id:"Q10", title:"Reporting Automation", text:"How automated are recurring financial reports?", choices:[
      {value:1,text:"1. Manual reports"},
      {value:2,text:"2. Semi-manual Excel"},
      {value:3,text:"3. Standard reporting tools"},
      {value:4,text:"4. Automated reporting pipelines"},
      {value:5,text:"5. Real-time financial dashboards"}
    ]},
    { id:"Q11", title:"Analytics Capability", text:"How effectively is analytics used for financial decision-making?", choices:[
      {value:1,text:"1. Minimal analytics"},
      {value:2,text:"2. Basic analysis"},
      {value:3,text:"3. Standard BI dashboards"},
      {value:4,text:"4. Predictive analytics"},
      {value:5,text:"5. Full financial data science usage"}
    ]},
    { id:"Q12", title:"Data Integration", text:"How well integrated are financial data sources?", choices:[
      {value:1,text:"1. Siloed"},
      {value:2,text:"2. Partial integration"},
      {value:3,text:"3. Standard ETL"},
      {value:4,text:"4. Enterprise data layer"},
      {value:5,text:"5. Real-time unified data fabric"}
    ]},

    { id:"Q13", title:"Regulatory Compliance", text:"How digitized are compliance reporting and validation processes?", choices:[
      {value:1,text:"1. Manual"},
      {value:2,text:"2. Basic"},
      {value:3,text:"3. Structured digital compliance"},
      {value:4,text:"4. Automated compliance systems"},
      {value:5,text:"5. Predictive regulatory intelligence"}
    ]},
    { id:"Q14", title:"Internal Controls", text:"How automated are key financial controls?", choices:[
      {value:1,text:"1. Manual checks"},
      {value:2,text:"2. Basic digital logs"},
      {value:3,text:"3. Standard digital controls"},
      {value:4,text:"4. Automated control workflows"},
      {value:5,text:"5. Continuous control monitoring"}
    ]},
    { id:"Q15", title:"Audit Readiness", text:"How easy is it to retrieve finance data for audits?", choices:[
      {value:1,text:"1. Manual retrieval"},
      {value:2,text:"2. Basic preparation"},
      {value:3,text:"3. Centralized audit repository"},
      {value:4,text:"4. Automated audit logs"},
      {value:5,text:"5. Continuous audit readiness"}
    ]},
    { id:"Q16", title:"Fraud Prevention", text:"How mature are digital fraud detection mechanisms?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Manual checks"},
      {value:3,text:"3. Basic analytics"},
      {value:4,text:"4. Automated detection"},
      {value:5,text:"5. Predictive fraud intelligence"}
    ]},

    { id:"Q17", title:"Procure-to-Pay Automation", text:"How automated is the procure-to-pay cycle?", choices:[
      {value:1,text:"1. Manual"},
      {value:2,text:"2. Basic"},
      {value:3,text:"3. Standard digital P2P"},
      {value:4,text:"4. Fully automated P2P"},
      {value:5,text:"5. Intelligent procurement automation"}
    ]},
    { id:"Q18", title:"Accounts Payable Automation", text:"How automated is invoice processing and AP workflow?", choices:[
      {value:1,text:"1. Manual processing"},
      {value:2,text:"2. Basic scanning"},
      {value:3,text:"3. Workflow automation"},
      {value:4,text:"4. OCR & RPA automation"},
      {value:5,text:"5. Intelligent AP automation"}
    ]},
    { id:"Q19", title:"Accounts Receivable Automation", text:"How automated is AR invoicing, reminders, and collections?", choices:[
      {value:1,text:"1. Manual"},
      {value:2,text:"2. Basic digital"},
      {value:3,text:"3. Standard AR systems"},
      {value:4,text:"4. Automated reminders & tracking"},
      {value:5,text:"5. AI-driven collections optimization"}
    ]},
    { id:"Q20", title:"Payment Systems Maturity", text:"How digitized and automated are payment processes?", choices:[
      {value:1,text:"1. Manual payments"},
      {value:2,text:"2. Some automation"},
      {value:3,text:"3. Standard online payments"},
      {value:4,text:"4. Fully automated"},
      {value:5,text:"5. Intelligent multi-channel payments"}
    ]},

    { id:"Q21", title:"Budgeting Automation", text:"How automated is the budgeting process?", choices:[
      {value:1,text:"1. Manual Excel"},
      {value:2,text:"2. Semi-manual"},
      {value:3,text:"3. Standard budgeting tool"},
      {value:4,text:"4. Automated planning platform"},
      {value:5,text:"5. Real-time rolling budget"}
    ]},
    { id:"Q22", title:"Forecasting Accuracy", text:"How advanced are forecasting models?", choices:[
      {value:1,text:"1. Manual estimates"},
      {value:2,text:"2. Historical trends"},
      {value:3,text:"3. Standard forecasting"},
      {value:4,text:"4. Predictive modeling"},
      {value:5,text:"5. AI-driven forecasting"}
    ]},
    { id:"Q23", title:"Performance Dashboards", text:"How mature are financial performance dashboards?", choices:[
      {value:1,text:"1. No dashboards"},
      {value:2,text:"2. Basic static dashboards"},
      {value:3,text:"3. Interactive dashboards"},
      {value:4,text:"4. Automated KPI tracking"},
      {value:5,text:"5. Real-time performance intelligence"}
    ]},
    { id:"Q24", text:"Scenario Planning", title:"Scenario Planning Maturity", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Basic scenarios"},
      {value:3,text:"3. Standard scenario planning"},
      {value:4,text:"4. Automated scenario modeling"},
      {value:5,text:"5. AI-driven what-if simulations"}
    ]},

    { id:"Q25", title:"Workflow Automation", text:"How automated are financial approval workflows?", choices:[
      {value:1,text:"1. Manual workflows"},
      {value:2,text:"2. Some automation"},
      {value:3,text:"3. Standard workflow platform"},
      {value:4,text:"4. Fully automated workflows"},
      {value:5,text:"5. Intelligent workflow orchestration"}
    ]},
    { id:"Q26", title:"RPA Adoption", text:"How effectively is RPA used in finance operations?", choices:[
      {value:1,text:"1. None"},
      {value:2,text:"2. Basic"},
      {value:3,text:"3. Standard RPA usage"},
      {value:4,text:"4. Extensive RPA coverage"},
      {value:5,text:"5. Fully intelligent automation estate"}
    ]},
    { id:"Q27", title:"Process Standardization", text:"How standardized are finance processes across the department?", choices:[
      {value:1,text:"1. Not standardized"},
      {value:2,text:"2. Basic documentation"},
      {value:3,text:"3. Standard processes"},
      {value:4,text:"4. Automated enforcement"},
      {value:5,text:"5. Continually improved & optimized"}
    ]},
    { id:"Q28", title:"Cycle Time Efficiency", text:"How optimized are financial cycle times?", choices:[
      {value:1,text:"1. Slow & manual"},
      {value:2,text:"2. Faster but manual"},
      {value:3,text:"3. Standard efficiency"},
      {value:4,text:"4. Automated efficiency"},
      {value:5,text:"5. High-performing optimized cycles"}
    ]},

    { id:"Q29", title:"Digital Skills", text:"How strong are digital skills in finance?", choices:[
      {value:1,text:"1. Low digital literacy"},
      {value:2,text:"2. Some skills"},
      {value:3,text:"3. Standard digital competency"},
      {value:4,text:"4. Strong digital skills"},
      {value:5,text:"5. Advanced digital finance expertise"}
    ]},
    { id:"Q30", title:"Training & Knowledge", text:"How structured is digital training?", choices:[
      {value:1,text:"1. No formal training"},
      {value:2,text:"2. Occasional workshops"},
      {value:3,text:"3. Structured annual training"},
      {value:4,text:"4. Competency-based training roadmap"},
      {value:5,text:"5. Continuous learning culture"}
    ]},
    { id:"Q31", title:"Innovation Culture", text:"How well does finance adopt new digital tools?", choices:[
      {value:1,text:"1. Resistant"},
      {value:2,text:"2. Limited adoption"},
      {value:3,text:"3. Regular adoption"},
      {value:4,text:"4. Encouraged innovation"},
      {value:5,text:"5. Continuous innovation pipeline"}
    ]},
    { id:"Q32", title:"Finance–IT Collaboration", text:"How mature is collaboration between Finance and IT?", choices:[
      {value:1,text:"1. Weak"},
      {value:2,text:"2. Occasional"},
      {value:3,text:"3. Regular collaboration"},
      {value:4,text:"4. Integrated workflows"},
      {value:5,text:"5. Fully unified digital partnership"}
    ]}
  ]
  
};
