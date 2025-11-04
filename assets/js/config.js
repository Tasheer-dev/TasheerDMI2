// assets/js/config.js

const MAX_SCORE_PER_QUESTION = 5;
const STORAGE_KEY_PREFIX = "tasheer_dmi_";

// Map for quick user lookup
const DMI_USERS_MAP = {}; 

// List of all user accounts and their roles/department codes
const DMI_USERS_LIST = [
  { username: "finance", password: "25", role: "dept", deptCode: "FIN" },
  { username: "ea", password: "EA@2025", role: "dept", deptCode: "EA" },
  { username: "solution", password: "SOL@2025", role: "dept", deptCode: "SOL" },
  { username: "platforms", password: "PLT@2025", role: "dept", deptCode: "PLT" },
  { username: "infra", password: "INFRA@2025", role: "dept", deptCode: "INFRA" },
  { username: "corp_it", password: "CIT@2025", role: "dept", deptCode: "CIT" },
  { username: "data_analytics", password: "DATA@2025", role: "dept", deptCode: "DATA" },
  { username: "biz_excellence", password: "BIZ@2025", role: "dept", deptCode: "BIZ" },
  { username: "product_bd", password: "PBD@2025", role: "dept", deptCode: "PBD" },
  { username: "branches", password: "BR@2025", role: "dept", deptCode: "BR" },
  { username: "hr", password: "HR@2025", role: "dept", deptCode: "HR" },
  { username: "grc", password: "GRC@2025", role: "dept", deptCode: "GRC" },
  { username: "legal", password: "LEG@2025", role: "dept", deptCode: "LEG" },
  { username: "audit", password: "AUD@2025", role: "dept", deptCode: "AUD" },
  { username: "cyber", password: "CYB@2025", role: "dept", deptCode: "CYB" },
  { username: "admin", password: "Admin@2025", role: "admin" } // admin user
];

// Map department codes to readable names
const DMI_DEPARTMENTS = {
  "FIN": "Finance Department",
  "EA": "Tech Strategy & Enterprise Architecture",
  "SOL": "Solution Development & Delivery",
  "PLT": "Platforms & IT Solution Operations",
  "INFRA": "Infrastructure and Network Operations",
  "CIT": "Corporate IT",
  "DATA": "Data Analytics",
  "BIZ": "Business Excellence Department",
  "PBD": "Product & Business Development",
  "BR": "Branches Operations",
  "HR": "Human Capital Department",
  "GRC": "GRC (Governance, Risk & Compliance) Department",
  "LEG": "Legal & Regulatory Affairs Department",
  "AUD": "Internal Audit Department",
  "CYB": "Cybersecurity Department"
};

// Populate the map for quick access
DMI_USERS_LIST.forEach(user => {
    DMI_USERS_MAP[user.username] = user;
});

// Maturity Bands (for reporting)
const MATURITY_BANDS = [
    { name: "Level 1: Ad-hoc", range: [0, 25], description: "Operations are manual and fragmented. No defined service catalogue or workflow automation." },
    { name: "Level 2: Basic", range: [26, 50], description: "Some processes are documented, and partial automation exists. Limited integration between systems." },
    { name: "Level 3: Managed", range: [51, 75], description: "Processes are standardized and digitally tracked. Policies and contracts are version-controlled." },
    { name: "Level 4: Advanced", range: [76, 90], description: "Workflows are automated and integrated across systems. Data is used for real-time tracking." },
    { name: "Level 5: Optimized", range: [91, 100], description: "Fully automated and AI-enhanced. Predictive analytics and continuous process improvement." }
];