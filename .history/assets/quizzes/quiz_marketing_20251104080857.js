// quizzes/quiz_marketing_communications.js
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
DMI_QUESTION_SETS["marketing"] = {
  title: "Marketing & Communications Digital Maturity Assessment (DMI)",
  shortcode: "MKT",
  totalQuestions: 12,
  maxScore: 12 * 5,
  sections: [
    { name: "1) Service Catalogue & Offering Definition", questions: ["Q1", "Q2"] },
    { name: "2) Service Automation Coverage", questions: ["Q3", "Q4"] },
    { name: "3) Workflow, Monitoring & Integration", questions: ["Q5", "Q6"] },
    { name: "4) Policies & Procedures Documentation Completeness", questions: ["Q7", "Q8", "Q9"] },
    { name: "5) Runbooks & SOPs", questions: ["Q10"] },
    { name: "6) Compliance & Workflow Adherence", questions: ["Q11"] },
    { name: "7) Knowledge Repository & Templates", questions: ["Q12"] }
  ],
  questions: [
    {
      id: "Q1", area: "Service Catalogue", title: "Service Catalogue Definition",
      text: "Do you maintain a Marketing & Communications Service Catalogue describing all available services (campaign planning, brand management, digital marketing, content creation, internal communications, public relations, event management, etc.), along with SLAs and responsible owners?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no formal catalogue or defined service listing." },
        { value: 2, text: "2. Partial service list maintained manually in spreadsheets." },
        { value: 3, text: "3. Digital list exists but incomplete or not regularly updated." },
        { value: 4, text: "4. Comprehensive catalogue published internally with SLAs and owners." },
        { value: 5, text: "5. Fully integrated service catalogue linked with CRM/ERP and real-time reporting." }
      ]
    },
    {
      id: "Q2", area: "Documentation", title: "Service Documentation Completeness",
      text: "What percentage of marketing and communication services (campaigns, media releases, newsletters, digital analytics, etc.) are fully documented with scope, workflows, owners, KPIs, and SLAs?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; documentation inconsistent or missing." },
        { value: 2, text: "2. Basic documentation for select campaigns only." },
        { value: 3, text: "3. Standardized documentation exists but not regularly reviewed." },
        { value: 4, text: "4. Fully digital workflows documented with KPIs and ownership." },
        { value: 5, text: "5. AI-enabled documentation system with automated updates and KPI tracking." }
      ]
    },
    {
      id: "Q3", area: "Automation", title: "Service Automation Coverage",
      text: "What percentage of marketing operations are automated (e.g., email campaigns, social media scheduling, performance tracking, lead nurturing)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; processes are manual and time-consuming." },
        { value: 2, text: "2. Some automation through isolated tools (e.g., Mailchimp, Buffer)." },
        { value: 3, text: "3. 50–70% automation using CRM or marketing automation platforms." },
        { value: 4, text: "4. End-to-end automation with campaign tracking and workflow integration." },
        { value: 5, text: "5. AI-driven marketing automation with predictive engagement analytics." }
      ]
    },
    {
      id: "Q4", area: "Integration", title: "Workflow Integration",
      text: "Are marketing and communications workflows integrated across systems (e.g., CRM, ERP, CMS, and analytics platforms such as Power BI or Google Analytics)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; systems work independently with no integration." },
        { value: 2, text: "2. Partial integration via manual uploads or connectors." },
        { value: 3, text: "3. Data synchronized between limited systems only." },
        { value: 4, text: "4. Fully automated data flow across CRM, ERP, CMS, and BI tools." },
        { value: 5, text: "5. Unified integration hub with real-time synchronization and performance monitoring." }
      ]
    },
    {
      id: "Q5", area: "Monitoring", title: "Performance Monitoring",
      text: "Are monitoring mechanisms in place for campaign performance, engagement rates, and communication responsiveness?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no defined performance tracking." },
        { value: 2, text: "2. Manual performance reports generated occasionally." },
        { value: 3, text: "3. KPI dashboards exist but updated infrequently." },
        { value: 4, text: "4. Real-time digital dashboards tracking all key engagement metrics." },
        { value: 5, text: "5. Predictive analytics and sentiment dashboards with automated alerts." }
      ]
    },
    {
      id: "Q6", area: "Feedback", title: "Feedback & Sentiment Insights",
      text: "Do you have feedback loops (e.g., automated sentiment analysis, social listening dashboards, post-campaign surveys)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; feedback gathered informally without documentation." },
        { value: 2, text: "2. Feedback collected manually via surveys or emails." },
        { value: 3, text: "3. Feedback monitored through social media tools but not linked to campaigns." },
        { value: 4, text: "4. Automated sentiment dashboards analyzing campaign feedback and trends." },
        { value: 5, text: "5. AI-enabled sentiment analysis integrating insights directly into campaign optimization." }
      ]
    },
    {
      id: "Q7", area: "Policies", title: "Policy & Governance Documentation",
      text: "Are there documented policies for marketing governance, brand identity, communication tone, social media usage, and compliance (NCA, data privacy, public image)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no formal governance or compliance policies." },
        { value: 2, text: "2. Draft policies exist but not approved or followed consistently." },
        { value: 3, text: "3. Approved policies exist but lack version control or visibility." },
        { value: 4, text: "4. Centralized digital repository with version-controlled policy documents." },
        { value: 5, text: "5. Automated policy management with real-time updates, compliance alerts, and audit tracking." }
      ]
    },
    {
      id: "Q8", area: "Policies", title: "Policy Gap Analysis",
      text: "Do you maintain a gap analysis of documented vs. missing marketing and communication procedures?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no gap analysis conducted." },
        { value: 2, text: "2. Informal policy review conducted periodically." },
        { value: 3, text: "3. Structured manual review process performed annually." },
        { value: 4, text: "4. Digital dashboard displaying coverage and gap reports." },
        { value: 5, text: "5. Continuous compliance audit using automated gap detection and alerts." }
      ]
    },
    {
      id: "Q9", area: "Policies", title: "Policy Communication & Accessibility",
      text: "Are all marketing and communication policies accessible through a shared knowledge base (e.g., intranet, Confluence, or SharePoint)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; policies shared via emails or personal folders." },
        { value: 2, text: "2. Uploaded to shared drives but not consistently managed." },
        { value: 3, text: "3. Available digitally but without version tracking or acknowledgment." },
        { value: 4, text: "4. Access-controlled portal with acknowledgment tracking and usage analytics." },
        { value: 5, text: "5. Integrated policy hub with dashboards showing access metrics and awareness campaigns." }
      ]
    },
    {
      id: "Q10", area: "SOPs", title: "SOP & Runbook Availability",
      text: "Are SOPs/runbooks available for recurring marketing and communication activities (e.g., campaign setup, media release, content approval, crisis communication, event management)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; no standard SOPs or templates available." },
        { value: 2, text: "2. SOPs exist informally but not approved or updated." },
        { value: 3, text: "3. Centralized SOP folder exists but lacks regular review." },
        { value: 4, text: "4. Version-controlled SOP repository reviewed periodically." },
        { value: 5, text: "5. Digital SOP management system integrated with workflow automation and reminders." }
      ]
    },
    {
      id: "Q11", area: "Compliance", title: "Workflow Compliance",
      text: "What percentage of marketing and communication activities follow documented workflows (e.g., campaign approval, content review, media releases)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; less than 25% follow defined workflows." },
        { value: 2, text: "2. 25–50% follow standardized processes inconsistently." },
        { value: 3, text: "3. 50–75% tracked through manual reporting." },
        { value: 4, text: "4. 75–90% tracked digitally with compliance dashboards." },
        { value: 5, text: "5. 100% compliance automatically monitored via integrated workflow tools." }
      ]
    },
    {
      id: "Q12", area: "Knowledge", title: "Knowledge Repository & Templates",
      text: "Where is the Marketing & Communications knowledge base hosted, and what templates exist (campaign briefs, content calendars, brand decks, media kits, press release formats)?",
      choices: [
        { value: 1, text: "1. Ad-hoc effort; files stored locally across individual systems." },
        { value: 2, text: "2. Shared folder available but without version control." },
        { value: 3, text: "3. Central repository maintained with limited access." },
        { value: 4, text: "4. Version-controlled knowledge repository with activity tracking." },
        { value: 5, text: "5. Intelligent knowledge management portal with tagging, search, and auto-updates." }
      ]
    }
  ],
  maturityBands: window.COMMON_MATURITY_BANDS
};
