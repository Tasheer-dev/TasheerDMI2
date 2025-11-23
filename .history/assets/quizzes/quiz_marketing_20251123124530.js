// quizzes/quiz_marketing.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["marketing"] = {
  title: "Marketing & Communications Digitalization & Technical Maturity Assessment",
  shortcode: "MARKETING",
  totalQuestions: 22,
  maxScore: 22 * 5,

  sections: [
    { name: "1) Service Automation", questions: ["Q1", "Q2", "Q3", "Q4"] },
    { name: "2) Workflow Integration", questions: ["Q5", "Q6", "Q7"] },
    { name: "3) Digital Channels & Content Operations", questions: ["Q8", "Q9", "Q10", "Q11"] },
    { name: "4) Data, Analytics & Reporting", questions: ["Q12", "Q13", "Q14"] },
    { name: "5) Governance, Policies & Documentation", questions: ["Q15", "Q16", "Q17"] },
    { name: "6) Innovation, MarTech & Knowledge Management", questions: ["Q18", "Q19", "Q20", "Q21", "Q22"] }
  ],

  questions: [
    // ---------------------- SECTION 1: SERVICE AUTOMATION ----------------------

    {
      id: "Q1", area: "Automation", title: "Automation of Recurring Marketing Tasks",
      text: "To what extent are recurring MarCom tasks (posting, scheduling, email sequences, campaign triggers) automated across channels?",
      evidence: ["Screenshots of automation workflows", "Automation platform configurations"],
      choices: [
        { value: 0, text: "0. Automation absent; recurring marketing tasks manually executed without structured workflows or supporting technologies." },
        { value: 1, text: "1. Limited automation covering few repetitive tasks using basic scheduling or single-channel tools only." },
        { value: 2, text: "2. Multiple repetitive marketing tasks automated but lacking full lifecycle coverage or cross-channel consistency." },
        { value: 3, text: "3. Consistent automation implemented across major channels supported by approved workflows and structured review stages." },
        { value: 4, text: "4. Mature automation ecosystem covering full marketing cycles including approvals, triggers, segmentation and reporting steps." },
        { value: 5, text: "5. Fully intelligent automation with adaptive workflows using AI optimization and predictive multi-channel orchestration features." }
      ]
    },

    {
      id: "Q2", area: "Automation", title: "Automated Reporting & Dashboards",
      text: "How automated are reporting processes for campaigns, performance metrics, social activity, and brand communication effectiveness?",
      evidence: ["Dashboard links", "Automated reporting samples"],
      choices: [
        { value: 0, text: "0. No automated reporting; insights manually collected with inconsistent data quality and limited defined measurement practices." },
        { value: 1, text: "1. Basic reporting exists using spreadsheets with inconsistent updates and limited data accuracy or standardization." },
        { value: 2, text: "2. Dashboards exist for selected channels though updates require manual steps restricting data timeliness and completeness." },
        { value: 3, text: "3. Automated dashboards cover primary channels providing reliable recurring performance insights with stable data feeds." },
        { value: 4, text: "4. Fully automated dashboards integrating multi-channel performance data refreshed frequently with dependable synchronization." },
        { value: 5, text: "5. Predictive analytics dashboards support forecasting, optimization recommendations and continuous improvement insights automatically." }
      ]
    },

    {
      id: "Q3", area: "Automation", title: "Automated Approval Workflows",
      text: "Are approvals for content, creative materials, campaigns, and budgets automated and tracked digitally?",
      evidence: ["Workflow screenshots", "Tool configuration"],
      choices: [
        { value: 0, text: "0. Approval processes occur manually without digital tracking, structured workflows or centralized documentation storage." },
        { value: 1, text: "1. Some approvals documented but occur informally with inconsistent digital tracking or tool-based recordkeeping." },
        { value: 2, text: "2. Digital approval workflows exist for selected tasks though lacking full lifecycle integration or transparency." },
        { value: 3, text: "3. Structured approval workflows consistently used with traceability and accountability across major content categories." },
        { value: 4, text: "4. Comprehensive automated approval workflows integrated with content systems enabling reliable traceability and full visibility." },
        { value: 5, text: "5. Intelligent approval workflows incorporating AI-based routing, prioritization recommendations and automated compliance checks." }
      ]
    },

    {
      id: "Q4", area: "Automation", title: "AI-Assisted Content Creation",
      text: "To what degree does the team use AI for content creation, optimization, insights, and efficiency?",
      evidence: ["Examples of AI-generated content", "Tool usage reports"],
      choices: [
        { value: 0, text: "0. AI not used; content entirely manually created without digital assistance or automated optimization techniques." },
        { value: 1, text: "1. Occasional AI experimentation occurs producing limited value due to inconsistent or unstructured adoption patterns." },
        { value: 2, text: "2. AI tools used periodically for editing, drafting or recommendations with moderate impact on consistency." },
        { value: 3, text: "3. AI used regularly for content creation and insights, improving efficiency and maintaining acceptable quality levels." },
        { value: 4, text: "4. AI integrated into workflows supporting multi-channel optimization, insights generation and structured content operations." },
        { value: 5, text: "5. Advanced AI embedded across content lifecycles providing predictive insights, automated optimization and adaptive generation capabilities." }
      ]
    },

    // ---------------------- SECTION 2: WORKFLOW INTEGRATION ----------------------

    {
      id: "Q5", area: "Integration", title: "CRM / CMS / Social / Analytics Integration",
      text: "How well-integrated are marketing platforms including CRM, CMS, social tools, automation platforms, and analytics systems?",
      evidence: ["Integration diagrams", "API configurations"],
      choices: [
        { value: 0, text: "0. Tools operate independently without integration causing inconsistent data flow and fragmented operational visibility." },
        { value: 1, text: "1. Limited integrations exist though data movement remains mostly manual and synchronization inconsistently applied." },
        { value: 2, text: "2. Partial integrations support some workflows though gaps remain restricting holistic customer visibility or performance insights." },
        { value: 3, text: "3. Key platforms integrated providing end-to-end visibility and reasonably consistent data exchange across major operations." },
        { value: 4, text: "4. Fully integrated marketing ecosystem enabling unified data models and reliable synchronized workflows across platforms." },
        { value: 5, text: "5. Dynamic bi-directional integrations enabling real-time data exchange, predictive insights and seamless system orchestration." }
      ]
    },

    {
      id: "Q6", area: "Integration", title: "Cross-Departmental System Integration",
      text: "How well does the MarCom function integrate with corporate systems such as ERP, HR, ITSM, and Finance?",
      evidence: ["Integration documentation", "API logs"],
      choices: [
        { value: 0, text: "0. No integrations with corporate systems causing siloed operations and absence of centralized information exchange." },
        { value: 1, text: "1. Basic manual data exchange happens occasionally without structured integration frameworks or supporting automation." },
        { value: 2, text: "2. Limited automated integrations implemented but lacking full reliability or comprehensive departmental coverage." },
        { value: 3, text: "3. Consistent system integrations support structured workflows enabling dependable cross-department collaboration processes." },
        { value: 4, text: "4. Fully embedded integrations connecting MarCom with key corporate platforms enabling unified performance visibility." },
        { value: 5, text: "5. Intelligent orchestration enables adaptive cross-platform interactions automatically optimizing workflows and data exchange." }
      ]
    },

    {
      id: "Q7", area: "Integration", title: "Workflow Orchestration Tools",
      text: "Does MarCom use workflow orchestration tools (e.g., Monday, Asana, Jira) for structured campaign execution?",
      evidence: ["Tool screenshots", "Workflow boards"],
      choices: [
        { value: 0, text: "0. No workflow platforms used; campaign execution managed informally without structured tasks or centralized tracking." },
        { value: 1, text: "1. Basic task boards used inconsistently offering limited visibility or workflow standardization across activities." },
        { value: 2, text: "2. Platforms adopted selectively though not fully integrated into comprehensive campaign lifecycle management practices." },
        { value: 3, text: "3. Workflow tools consistently used enabling structured execution, assigned tasks and standardized collaboration practices." },
        { value: 4, text: "4. Fully integrated orchestration systems automate multi-team tasks enabling predictable campaign execution and transparency." },
        { value: 5, text: "5. Intelligent workflow orchestration incorporating predictive routing, optimization insights and dynamic workload balancing." }
      ]
    },

    // ---------------------- SECTION 3: DIGITAL CHANNELS & CONTENT OPERATIONS ----------------------

    {
      id: "Q8", area: "Content", title: "Content Lifecycle Management",
      text: "How structured and digitalized is the management of content creation, review, publishing, and archival?",
      evidence: ["Content workflows", "CMS screenshots"],
      choices: [
        { value: 0, text: "0. Content lifecycle unmanaged with manual processes lacking structure, version control or centralized governance." },
        { value: 1, text: "1. Basic digital content practices present though lacking consistent workflows or defined lifecycle ownership roles." },
        { value: 2, text: "2. Structured content workflows cover major steps though missing complete lifecycle standardization or integration." },
        { value: 3, text: "3. Defined content operations ensure consistent lifecycle management supported by digital tools and shared standards." },
        { value: 4, text: "4. Mature content lifecycle management incorporating automation, structured metadata and cross-channel optimization processes." },
        { value: 5, text: "5. Fully intelligent content lifecycle platform enabling predictive optimization, automated tagging and adaptive publishing." }
      ]
    },

    {
      id: "Q9", area: "Channels", title: "Digital Channels & UX Optimization",
      text: "How effectively are digital channels (website, social, email, paid media) optimized for UX, content consistency, and engagement?",
      evidence: ["Analytics reports", "UX audits"],
      choices: [
        { value: 0, text: "0. Digital channels unmanaged lacking structured optimization, consistent updates or defined user experience standards." },
        { value: 1, text: "1. Channels updated occasionally though lacking systematic UX improvements or consistent content management practices." },
        { value: 2, text: "2. Structured updates applied periodically though not fully data-driven or governed by unified standards." },
        { value: 3, text: "3. Regular channel optimization guided by analytics improving user experience and engagement effectiveness consistently." },
        { value: 4, text: "4. Highly optimized channels supported by continuous data-driven insights and comprehensive UI/UX improvement practices." },
        { value: 5, text: "5. Fully adaptive digital channels leveraging AI-driven personalization, predictive engagement and automated optimization." }
      ]
    },

    {
      id: "Q10", area: "Channels", title: "Multichannel Consistency",
      text: "Is there consistency and alignment in messaging across social, web, email, paid media, and internal communications?",
      evidence: ["Brand guidelines", "Channel audits"],
      choices: [
        { value: 0, text: "0. Cross-channel messaging inconsistent lacking alignment, centralized oversight or structured coordination frameworks." },
        { value: 1, text: "1. Basic channel alignment exists but inconsistently applied without comprehensive messaging governance frameworks." },
        { value: 2, text: "2. Some channels synchronized though gaps persist leading to incomplete messaging oversight or misalignment issues." },
        { value: 3, text: "3. Clear multichannel alignment ensures consistent messaging with structured updates and coordinated communication practices." },
        { value: 4, text: "4. Fully integrated multichannel alignment supported by automated workflows enabling cohesive brand communication delivery." },
        { value: 5, text: "5. AI-driven multichannel orchestration delivering predictive message optimization and dynamic real-time consistency adjustments." }
      ]
    },

    {
      id: "Q11", area: "Content", title: "SEO, Metadata & Tagging Practices",
      text: "How well are SEO practices, tagging standards, and metadata governance implemented across digital channels?",
      evidence: ["SEO audit", "Metadata rules"],
      choices: [
        { value: 0, text: "0. SEO and metadata not implemented lacking structured tagging, optimization routines or performance tracking processes." },
        { value: 1, text: "1. Basic SEO applied irregularly without structured governance or consistent tagging and metadata practices." },
        { value: 2, text: "2. Defined SEO workflows cover selected channels though lacking comprehensive metadata and tagging governance." },
        { value: 3, text: "3. SEO and metadata consistently applied across major channels guided by analytics and standards." },
        { value: 4, text: "4. Comprehensive SEO governance ensures advanced optimization, structured metadata and reliable multi-channel visibility." },
        { value: 5, text: "5. Intelligent SEO ecosystem delivering predictive optimization, automated tagging and continuous adaptive performance improvements." }
      ]
    },

    // ---------------------- SECTION 4: ANALYTICS & REPORTING ----------------------

    {
      id: "Q12", area: "Analytics", title: "Data Integration & Accuracy",
      text: "How reliable, integrated, and accurate is data across analytics, CRM, campaigns, and channel performance systems?",
      evidence: ["Data flow documentation", "BI dashboards"],
      choices: [
        { value: 0, text: "0. Data inconsistent across systems lacking integration, accuracy checks or structured validation processes." },
        { value: 1, text: "1. Some data aligned though inconsistencies occur regularly due to partial integration or manual consolidation." },
        { value: 2, text: "2. Data quality improving though gaps remain requiring periodic manual cleaning or reconciliation steps." },
        { value: 3, text: "3. Reliable integrated data supports consistent analytics supported by structured validation and defined ownership." },
        { value: 4, text: "4. Highly accurate data ecosystem ensuring reliable insights through automated validation and unified governance." },
        { value: 5, text: "5. Predictive unified data infrastructure offering autonomous accuracy checks, anomaly detection and continuous optimization." }
      ]
    },

    {
      id: "Q13", area: "Analytics", title: "Reporting, KPIs & Insights",
      text: "How consistent and actionable are reporting practices, KPI dashboards, and insights produced by the department?",
      evidence: ["KPI list", "Sample reports"],
      choices: [
        { value: 0, text: "0. No structured reporting; KPIs undefined and insights rarely generated or communicated effectively." },
        { value: 1, text: "1. Basic reports produced inconsistently lacking actionable insights or alignment with strategic expectations." },
        { value: 2, text: "2. Regular reporting occurs though insights limited and KPI coverage not fully comprehensive or standardized." },
        { value: 3, text: "3. Actionable reporting framework supports decision-making through structured dashboards and reliable performance insights." },
        { value: 4, text: "4. Comprehensive insight ecosystem offers predictive dashboards supporting strategic planning and continuous optimization." },
        { value: 5, text: "5. Intelligent analytics delivering automated insights, advanced forecasting and optimization recommendations continuously." }
      ]
    },

    {
      id: "Q14", area: "Analytics", title: "A/B Testing & Optimization",
      text: "How systematically does the team run experiments, A/B tests, and optimization cycles?",
      evidence: ["Test logs", "Optimization reports"],
      choices: [
        { value: 0, text: "0. No structured testing; decisions based on intuition without defined optimization or experimentation processes." },
        { value: 1, text: "1. Occasional A/B testing conducted without structured documentation or consistent follow-up analysis routines." },
        { value: 2, text: "2. Some structured testing applied though limited in frequency or insufficiently integrated into decision-making." },
        { value: 3, text: "3. Regular A/B testing improving decisions supported by structured documentation and reliable analytics processes." },
        { value: 4, text: "4. Well-governed optimization program running experiments frequently using automated personalization and advanced targeting." },
        { value: 5, text: "5. Continuous experimentation ecosystem incorporating predictive optimization and autonomous improvement recommendations." }
      ]
    },

    // ---------------------- SECTION 5: GOVERNANCE & DOCUMENTATION ----------------------

    {
      id: "Q15", area: "Governance", title: "Digital Communication Policies",
      text: "How mature are documented digital communication policies including brand, publishing, approvals, and compliance?",
      evidence: ["Policy documents", "Version logs"],
      choices: [
        { value: 0, text: "0. Policies absent; communication activities executed without documented standards or governance structures." },
        { value: 1, text: "1. Basic guidelines exist though inconsistently applied and lacking structured governance or compliance tracking." },
        { value: 2, text: "2. Documented policies available though lacking fully enforced versioning, adherence or alignment across teams." },
        { value: 3, text: "3. Well-defined policies consistently used enabling structured communications aligned with standards and compliance." },
        { value: 4, text: "4. Comprehensive governed policy ecosystem ensures alignment, compliance and reliable communication traceability." },
        { value: 5, text: "5. Intelligent governance enabled by automated compliance checks, role-based control and AI-driven policy monitoring." }
      ]
    },

    {
      id: "Q16", area: "Governance", title: "Risk Management & Digital Crisis Readiness",
      text: "How prepared is the team for digital crises, incidents, brand threats, and social escalation events?",
      evidence: ["Crisis playbook", "Escalation maps"],
      choices: [
        { value: 0, text: "0. No crisis readiness; responses handled ad-hoc without structured planning or documented escalation pathways." },
        { value: 1, text: "1. Basic crisis guidelines exist though not consistently tested or fully adopted across communication teams." },
        { value: 2, text: "2. Crisis protocols documented though drills limited and operational readiness partially proven in practice." },
        { value: 3, text: "3. Structured crisis management frameworks enable consistent responses supported by trained teams and defined workflows." },
        { value: 4, text: "4. Mature crisis readiness includes automation, monitoring dashboards and well-tested escalation protocols organization-wide." },
        { value: 5, text: "5. Predictive crisis detection, AI-driven monitoring and automated mitigation contribute to highly resilient operations." }
      ]
    },

    {
      id: "Q17", area: "Governance", title: "Service Documentation Completeness",
      text: "How complete and up-to-date is documentation for campaigns, operations, processes, roles, and responsibilities?",
      evidence: ["Process maps", "Role matrices"],
      choices: [
        { value: 0, text: "0. No documentation maintained leading to inconsistent practices and unclear operational responsibilities." },
        { value: 1, text: "1. Some documentation exists though outdated or incomplete lacking structured governance or version control." },
        { value: 2, text: "2. Documented processes available though lacking comprehensive coverage or consistent refresh cycles across activities." },
        { value: 3, text: "3. Well-documented operations maintained with structured updates supporting clarity and consistent execution." },
        { value: 4, text: "4. Comprehensive documentation ecosystem ensures full coverage supported by version control and governance processes." },
        { value: 5, text: "5. Intelligent documentation system enabling automated updates, integrated governance and continuous operational optimization." }
      ]
    },

    // ---------------------- SECTION 6: INNOVATION & MARTECH ----------------------

    {
      id: "Q18", area: "MarTech", title: "MarTech Stack Maturity",
      text: "How mature, integrated, and fully utilized is the department’s MarTech stack?",
      evidence: ["Tool inventory", "Integration diagram"],
      choices: [
        { value: 0, text: "0. MarTech stack limited with tools uncoordinated lacking integration, utilization or structured operational value." },
        { value: 1, text: "1. Several tools used but without cohesive integration limiting functionality and operational effectiveness." },
        { value: 2, text: "2. Growing MarTech ecosystem with improving utilization though not fully integrated or standardized organization-wide." },
        { value: 3, text: "3. Mature MarTech stack integrated across key operations delivering consistent efficiency and reliable performance insights." },
        { value: 4, text: "4. Fully optimized MarTech ecosystem enabling advanced capabilities, automation and robust cross-platform integration." },
        { value: 5, text: "5. Next-generation MarTech stack with AI-driven orchestration, predictive insights and autonomous optimization features." }
      ]
    },

    {
      id: "Q19", area: "Innovation", title: "Innovation & Future Readiness",
      text: "How effectively does the department adopt emerging digital practices such as AI, AR/VR, automation, and new formats?",
      evidence: ["Pilot reports", "Innovation logs"],
      choices: [
        { value: 0, text: "0. Innovation absent; emerging technologies not considered or tested within communication activities organization-wide." },
        { value: 1, text: "1. Emerging tools occasionally explored without consistent follow-through, structured pilots or adoption frameworks." },
        { value: 2, text: "2. Periodic experiments conducted though lacking comprehensive assessment or long-term operational integration." },
        { value: 3, text: "3. Innovation initiatives executed consistently enabling structured testing, evaluation and incremental operational improvements." },
        { value: 4, text: "4. Strong innovation culture enabling rapid experimentation, adoption and scaling of impactful emerging technologies." },
        { value: 5, text: "5. Fully future-ready organization leveraging predictive technologies, intelligent automation and continuous innovation cycles." }
      ]
    },

    {
      id: "Q20", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "How organized, centralized, and well-governed is the department’s knowledge, templates, and best-practice repository?",
      evidence: ["Knowledge base structure", "Template library"],
      choices: [
        { value: 0, text: "0. Knowledge scattered lacking centralized storage, defined standards or structured access and search capabilities." },
        { value: 1, text: "1. Basic shared repositories exist though lacking governance, templates consistency or structured organization practices." },
        { value: 2, text: "2. Central repository available though suffering partial coverage or inconsistent content quality and ownership." },
        { value: 3, text: "3. Centralized governed knowledge base supporting standardized templates and consistent easy-to-search structures." },
        { value: 4, text: "4. Fully governed knowledge ecosystem offering reliable version control, structured organization and robust accessibility." },
        { value: 5, text: "5. Intelligent knowledge platform enabling automatic indexing, AI search and continuous auto-updating capabilities." }
      ]
    },

    {
      id: "Q21", area: "Innovation", title: "AI Adoption Across Marketing Processes",
      text: "How widely is AI used for segmentation, personalization, sentiment analysis, analytics, and smart automation?",
      evidence: ["AI usage reports", "AI tool configurations"],
      choices: [
        { value: 0, text: "0. AI not used; marketing processes manual lacking automated insights or advanced personalization approaches." },
        { value: 1, text: "1. Limited isolated AI usage producing inconsistent impact and lacking structured adoption or governance framework." },
        { value: 2, text: "2. Growing AI adoption applied selectively though not comprehensively integrated across marketing processes." },
        { value: 3, text: "3. Consistent AI usage enhances segmentation, content optimization and analytics providing measurable improvements." },
        { value: 4, text: "4. Advanced AI adoption drives personalization, sentiment insights and continuous optimization across channels." },
        { value: 5, text: "5. Fully integrated AI ecosystem delivering predictive automation, autonomous optimization and real-time dynamic personalization." }
      ]
    },

    {
      id: "Q22", area: "Innovation", title: "AI Knowledge & Skills Readiness",
      text: "To what extent does the MarCom team maintain skills and readiness for AI-driven operations?",
      evidence: ["Training logs", "Skills matrix"],
      choices: [
        { value: 0, text: "0. Team lacks AI knowledge with no training, awareness or capability-building initiatives available or planned." },
        { value: 1, text: "1. Basic awareness exists though training irregular and lacking structured capability development programs." },
        { value: 2, text: "2. Periodic training improves readiness though not yet sufficient for broader AI-driven operations adoption." },
        { value: 3, text: "3. Structured capability program developing strong AI readiness across team roles and operational functions." },
        { value: 4, text: "4. Team demonstrates advanced AI readiness enabling smooth adoption and operational integration of emerging tools." },
        { value: 5, text: "5. Fully AI-ready workforce capable of leveraging advanced technologies autonomously and scaling innovation organization-wide." }
      ]
    }
     ],
    maturityBands: [
    { name: "0–25% (Ad-hoc)", range: [0, 25], description: "Manual analytics, undocumented processes, reactive reporting." },
    { name: "26–50% (Basic)", range: [26, 50], description: "Basic documentation, partial automation, limited governance." },
    { name: "51–75% (Managed)", range: [51, 75], description: "Majority of services documented; automation in pipelines; proactive monitoring." },
    { name: "76–90% (Advanced)", range: [76, 90], description: "Fully documented; strong automation; integrated workflows; compliance tracked." },
    { name: "91–100% (Optimized)", range: [91, 100], description: "Predictive/self-healing pipelines, end-to-end automation, governed data ecosystem, continuous improvement with feedback loops." }
  ]
  
};

  ]
};
