// config.js
// Users (departments + admin)
const TASHER_USERS = [
  { username: "procurement", password: "1", role: "department", deptCode: "procurement", displayName: "Procurement Department" },
  { username: "product", password: "Prod@2025", role: "department", deptCode: "product", displayName: "Product & Business Team" },
  { username: "data_analytics", password: "Data@2025", role: "department", deptCode: "data_analytics", displayName: "Data Analytics Department" },
  { username: "admin", password: "Admin@2025", role: "admin", deptCode: "admin", displayName: "DMI Administrator" },


  { username: "finance", password: "1", role: "department", deptCode: "finance", displayName: "Finance Department" },
  { username: "tech_strategy", password: "1", role: "department", deptCode: "tech_strategy", displayName: "Tech Strategy & Enterprise Architecture" },
  { username: "solution_delivery", password: "1", role: "department", deptCode: "solution_delivery", displayName: "Solution Development & Delivery" },
  { username: "platforms_it", password: "1", role: "department", deptCode: "platforms_it", displayName: "Platforms & IT Solution Operations" },
  { username: "infrastructure", password: "1", role: "department", deptCode: "infrastructure", displayName: "Infrastructure and Network Operations" },
  { username: "corporate_it", password: "1", role: "department", deptCode: "corporate_it", displayName: "Corporate IT" },
  { username: "data_analytics", password: "1", role: "department", deptCode: "data_analytics", displayName: "Data Analytics Department" },
  { username: "business_excellence", password: "1", role: "department", deptCode: "business_excellence", displayName: "Business Excellence Department" },
  { username: "branches_ops", password: "1", role: "department", deptCode: "branches_ops", displayName: "Branches Operations" },
  { username: "human_capital", password: "1", role: "department", deptCode: "human_capital", displayName: "Human Capital Department" },
  { username: "grc", password: "1", role: "department", deptCode: "grc", displayName: "GRC Department" },
  { username: "legal_affairs", password: "1", role: "department", deptCode: "legal_affairs", displayName: "Legal & Regulatory Affairs Department" },
  { username: "internal_audit", password: "1", role: "department", deptCode: "internal_audit", displayName: "Internal Audit Department" },
  { username: "cybersecurity", password: "1", role: "department", deptCode: "cybersecurity", displayName: "Cybersecurity Department" },
  { username: "business_dev", password: "1", role: "department", deptCode: "business_dev", displayName: "Business Development" },
  { username: "product_mgmt", password: "1", role: "department", deptCode: "product_mgmt", displayName: "Product Management" },
  { username: "marketing", password: "1", role: "department", deptCode: "marketing", displayName: "Marketing & Communications" },
  { username: "pmo", password: "1", role: "department", deptCode: "pmo", displayName: "PMO" },
  { username: "admin", password: "Admin@2025", role: "admin", deptCode: "admin", displayName: "DMI Administrator" }
];

const EVIDENCE_SHARED_FOLDER = "https://tasheer.sharepoint.com/sites/DMI/Shared%20Documents";

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
