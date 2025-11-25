function initAdminPage() {
  if (typeof requireLogin === 'function' && !requireLogin()) return;
  // Admin dashboard bootstrap — safe no-op for now
}

function openEvidenceFolder() {
  const url = (window.EVIDENCE_SHARED_FOLDER || '').trim();
  if (url) window.open(url, '_blank');
  else alert('Evidence folder URL is not configured.');
}

/* ============================================================================
   logic.js — Frontend Digital Maturity Assessment Logic (Fully Documented)

   Author: Volkan
   Purpose:
   - Handles login logic, user role routing
   - Dynamically loads department-specific question sets
   - Builds assessment UI
   - Saves user selections locally
   - Updates live progress + real-time doughnut chart
   - Generates final assessment report (with 7+1 area breakdown)
   - Supports random fill + reset functions for testing/training usage

   Dependencies:
   - Chart.js must be included in the HTML pages before this script
   - Department question sets must be available in assets/quizzes/quiz_{dept}.js

   Storage:
   - Uses sessionStorage for login session
   - Uses localStorage for saved scores
   ============================================================================ */

/* -----------------------------------------------------------------------------
   Global Chart References (We store them so we can destroy/rebuild dynamically)
----------------------------------------------------------------------------- */
let liveChartInstance = null;
let areaBarInstance = null; // For 7+1 bar chart in final report


/* -----------------------------------------------------------------------------
   Ensure global containers exist for shared data structures
----------------------------------------------------------------------------- */
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {}; // Holds quizzes per department
window.TASHER_USERS = window.TASHER_USERS || [];            // Holds allowed login users


/* ============================================================================
   SESSION VALIDATION & AUTHENTICATION
   ============================================================================ */

/**
 * requireLogin()
 * Ensures the user has a valid, active session.
 * If not authenticated → clear session + redirect to login page.
 */
function requireLogin() {
  const loggedIn = sessionStorage.getItem("dmi_logged_in");
  const role = sessionStorage.getItem("dmi_role");

  // If either field is missing → session is invalid
  if (loggedIn !== "true" || !role) {
    sessionStorage.clear();              // Remove any stale data
    window.location.href = "login.html"; // Redirect to login UI
    return false;
  }
  return true; // The user is authenticated
}


/**
 * logout()
 * Completely ends the session and returns user to login page.
 */
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}


/**
 * handleLogin()
 * Validates username & password against TASHER_USERS.
 * If correct → saves user info in session and redirects based on role.
 */
function handleLogin() {
  // Read input fields from the login page
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  // Look for a matching user record (case sensitive)
  const user = TASHER_USERS.find(u => u.username === username && u.password === password);

  // If no match → show user-friendly error
  if (!user) {
    if (message) {
      message.style.display = "block";
      message.textContent = "❌ Invalid username or password";
    }
    return;
  }

  // Store login session for navigation
  sessionStorage.setItem("dmi_logged_in", "true");
  sessionStorage.setItem("dmi_username", user.username);
  sessionStorage.setItem("dmi_role", user.role);
  sessionStorage.setItem("dmi_deptCode", user.deptCode);
  sessionStorage.setItem("dmi_displayName", user.displayName);

  // Redirect based on role
  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html"; // Departments go to assessment page
  }
}


/* ============================================================================
   ASSESSMENT PAGE INITIALIZATION
   ============================================================================ */

/**
 * initAssessmentPage()
 * Runs automatically when the department page (index.html) loads.
 * 1. Verifies user role
 * 2. Dynamically loads quiz file: assets/quizzes/quiz_{deptCode}.js
 * 3. Builds UI form and restores saved answers
 * 4. Updates live progress chart
 */
function initAssessmentPage() {
  if (!requireLogin()) return; // Stop if not logged in



  const role = sessionStorage.getItem("dmi_role");
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const displayName = sessionStorage.getItem("dmi_displayName");

  // Prevent admin from accessing department UI
  if (role === "admin") {
    window.location.href = "admin.html";
    return;
  }

// 2. CRITICAL STEP: Load previously saved comments from persistence layer
    loadReportComments();


  // Prevent any unexpected role from using the tool
  if (role !== "department") {
    sessionStorage.clear();
    window.location.href = "login.html";
    return;
  }

  // Create script tag to load the quiz file dynamically
  const script = document.createElement("script");
  script.src = `./assets/quizzes/quiz_${deptCode}.js`;

  script.onload = () => {
    // Retrieve department's quiz data structure
    const deptData = DMI_QUESTION_SETS[deptCode];
    if (!deptData) {
      alert("⚠️ No question set found for: " + deptCode);
      return;
    }

    // Update UI header text
    document.getElementById("assessmentTitle").textContent = deptData.title;
    document.getElementById("assessmentSubTitle").textContent = displayName + " Report.";

    // Build the full assessment form
    buildAssessmentForm(deptCode, deptData);

    // Restore values if user previously filled the form
    loadSelections(deptCode, deptData);

    // Calculate and update live score chart immediately
    updateLiveScore(deptCode, deptData);

    // Hide final report section by default (it is only shown after finalization)
    document.getElementById("reportSection").style.display = "none";
  
  if (typeof window.hideLoader === 'function') window.hideLoader();
};

  script.onerror = () => {
    alert(`⚠️ Could not load department quiz file: quiz_${deptCode}.js`);
  };

  // Append script to load quiz
  document.body.appendChild(script);

setTimeout(loadReportComments, 500);

}


/**
 * Returns a unique localStorage key for the department.
 */
function getStorageKeyFor(deptCode) {
  return "tasheer_dmi_" + deptCode;

  
}


/**
 * buildAssessmentForm(deptCode, deptData)
 * Dynamically builds the question UI blocks inside #assessmentForm
 */
function buildAssessmentForm(deptCode, deptData) {
  const form = document.getElementById("assessmentForm");
  form.innerHTML = ""; // Clear any previous content

  // Loop through each Section (e.g., Governance, Data Mgmt, etc.)
  deptData.sections.forEach(section => {
    // Section title
    const h = document.createElement("h2");
    h.className = "area-header";
    h.textContent = section.name;
    form.appendChild(h);

    // Loop through question IDs assigned to this section
    section.questions.forEach(qId => {
      const q = deptData.questions.find(item => item.id === qId);
      if (!q) return;

      // Build the question UI block (title + description + dropdown)
      const block = document.createElement("div");
      block.className = "question-block";
      block.innerHTML = `
        <h3>${q.id}. ${q.title}</h3>
        <p>${q.text}</p>
        <select class="level-select" name="${q.id}"
          onchange="saveSelection('${deptCode}', '${q.id}', this.value)">
          <option value="">-- Select Level (1 to 5) --</option>
          ${q.choices.map(c => `<option value="${c.value}">${c.text}</option>`).join("")}
        </select>
      `;
      form.appendChild(block);
    });
  });
}


/**
 * loadSelections()
 * Reads saved answers from localStorage and applies them to dropdowns.
 */
function loadSelections(deptCode, deptData) {
  const saved = JSON.parse(localStorage.getItem(getStorageKeyFor(deptCode)) || "{}");

  document.querySelectorAll(".level-select").forEach(select => {
    const qId = select.getAttribute("name");
    if (saved[qId]) select.value = saved[qId];
  });
}


/**
 * saveSelection()
 * Called whenever user changes a dropdown level.
 * Updates LocalStorage and refreshes live score display.
 */
function saveSelection(deptCode, qId, value) {
  const key = getStorageKeyFor(deptCode);
  const saved = JSON.parse(localStorage.getItem(key) || "{}");

  if (value) saved[qId] = Number(value);
  else delete saved[qId];

  // Save back to storage
  localStorage.setItem(key, JSON.stringify(saved));

  // Refresh live score UI
  updateLiveScore(deptCode, DMI_QUESTION_SETS[deptCode]);
}


/**
 * updateLiveScore()
 * Recalculates:
 * - Number of answered questions
 * - Total maturity percentage
 * - Updates doughnut progress chart
 */
function updateLiveScore(deptCode, deptData) {
  const saved = JSON.parse(localStorage.getItem(getStorageKeyFor(deptCode)) || "{}");

  let total = 0;
  let answered = 0;

  // Count values
  deptData.questions.forEach(q => {
    if (saved[q.id]) {
      total += Number(saved[q.id]);
      answered++;
    }
  });

  // Convert to percentage
  const percent = Math.round((total / deptData.maxScore) * 100);

  // Update numeric UI text
  document.getElementById("liveScorePercentage").textContent = percent + "%";
  document.getElementById("liveScoreStatus").textContent = `${answered} / ${deptData.totalQuestions} completed`;

  // Update doughnut chart
  const ctx = document.getElementById("liveMaturityChart");
  if (ctx) {
    if (liveChartInstance) liveChartInstance.destroy(); // Remove old chart first

    liveChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Remaining"],
        datasets: [
          {
            data: [percent, 100 - percent],
            backgroundColor: [getColorByScore(percent), "rgba(200,200,200,0.3)"],
            borderWidth: 0
          }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false, cutout: "78%", plugins: { legend: { display: false } } }
    });
  }
}


/**
 * getColorByScore()
 * Returns a color classifying the maturity band visually.
 */
function getColorByScore(p) {
  if (p >= 65) return "rgba(56,142,60,1)";   // Green
  if (p >= 50) return "rgba(0,77,156,1)";    // Blue
  if (p >= 25) return "rgba(255,165,0,1)";   // Orange
  return "rgba(211,47,47,1)";                // Red
}


/* ============================================================================
   RANDOMIZE + RESET FUNCTIONS (Training / Demo Mode)
   ============================================================================ */

/**
 * resetAllSelections()
 * Clears all answers → resets the UI → updates live score to zero.
 */
function resetAllSelections() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  localStorage.removeItem(getStorageKeyFor(deptCode));

  document.querySelectorAll(".level-select").forEach(select => (select.value = ""));
  updateLiveScore(deptCode, DMI_QUESTION_SETS[deptCode]);
}


/**
 * randomizeSelections()
 * Fills every question with a random value from 1 to 5.
 * Useful for demo/testing.
 */
function randomizeSelections() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const deptData = DMI_QUESTION_SETS[deptCode];
  const saved = {};

  // Assign random levels
  deptData.questions.forEach(q => {
    saved[q.id] = Math.floor(Math.random() * 5) + 1;
  });

  localStorage.setItem(getStorageKeyFor(deptCode), JSON.stringify(saved));
  loadSelections(deptCode, deptData);
  updateLiveScore(deptCode, deptData);
}


/* ============================================================================
   FINAL REPORT GENERATION (Advanced)
   ============================================================================ */

/**
 * computeDynamicAreaScores()
 * Groups questions into logical areas (based on q.area or q.group) 
 * and calculates a % score for each area + final average.
 */
function computeDynamicAreaScores(deptData, savedMap) {
  const areas = {};
  const order = [];

  deptData.questions.forEach(q => {
    const group = q.area || q.group || "Uncategorized";
    if (!areas[group]) {
      areas[group] = { total: 0, max: 0 };
      order.push(group);
    }
    areas[group].total += Number(savedMap[q.id] || 0);
    areas[group].max += 5;
  });

  const results = order.map(group => {
    const obj = areas[group];
    const pct = obj.max ? Math.round((obj.total / obj.max) * 100) : 0;
    return { area: group, percent: pct };
  });

  const overall = Math.round(results.reduce((sum, r) => sum + r.percent, 0) / results.length);
  return { areas: results, overall };
}

function computeDynamicAreaScores(deptData, savedMap) {
  const sections = deptData.sections.map(sec => {
    let total = 0;
    let max = sec.questions.length * 5;

    sec.questions.forEach(qid => {
      total += Number(savedMap[qid] || 0);
    });

    const percent = Math.round((total / max) * 100);

    return {
      area: sec.name,   // use section name
      percent: percent
    };
  });

  // Compute overall average
  const overall = Math.round(
    sections.reduce((sum, s) => sum + s.percent, 0) / sections.length
  );

  return { areas: sections, overall };
}

/**
 * renderAreaBars()
 * Draws horizontal 7+1 maturity breakdown bar chart on final report.
 */
function renderAreaBars(summary) {
  const ctx = document.getElementById("areaBarChart");
  if (!ctx) return;

  const labels = summary.areas.map(r => r.area).concat(["Overall Score"]);
  const data = summary.areas.map(r => r.percent).concat([summary.overall]);
  const colors = data.map(p => getColorByScore(p));

  if (areaBarInstance) areaBarInstance.destroy();

  areaBarInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Maturity Percentage",
        data,
        backgroundColor: colors,
        borderColor: colors.map(c => c.replace(/,1\)/, ', 0.8)')), // Slightly darker border
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 0, max: 100, ticks: { stepSize: 10 } },
        x: { grid: { display: false } }
      }
    }
  });
}

/**
 * getNextLevelRecommendation(q, selectedValue)
 * Finds the text for the next maturity level (selectedValue + 1).
 */
function getNextLevelRecommendation(q, selectedValue) {
  const nextValue = Number(selectedValue) + 1;
  if (nextValue > 5) return "Optimized (Level 5) achieved. Focus on continuous improvement and innovation.";

  const nextChoice = q.choices.find(c => Number(c.value) === nextValue);
  return nextChoice ? nextChoice.text : "N/A";
}



function backToAssessment() {
  document.querySelector(".assessment-layout").style.display = "block";
  document.querySelector(".assessment-form-wrapper").style.display = "block";
  document.getElementById("reportSection").style.display = "none";
}

/**
 * finalizeAssessment()
 * Validates all questions are answered, then:
 * - Calculates final maturity percent
 * - Hides input UI and shows final report
 * - Builds final charts and recommendations
 */
function finalizeAssessment() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const deptData = DMI_QUESTION_SETS[deptCode];
  const saved = JSON.parse(localStorage.getItem(getStorageKeyFor(deptCode)) || "{}");
  // STEP 1: Copy comments to the print mirror
    copyCommentsToPrintMirror();
    
    
    // ... [Your existing logic to show the report section] ...
    document.getElementById('reportSection').style.display = 'block';
    loadReportComments();

    // Scroll page to top smoothly after showing report
    window.scrollTo({ top: 0, behavior: "smooth" });

// Also move keyboard focus to the report header for accessibility
const headerTitle = document.getElementById("reportHeaderTitle");
if (headerTitle) headerTitle.focus();



  // Check for missing answers
  const unanswered = deptData.questions.filter(q => !saved[q.id]).length;
  if (unanswered > 0) {
    alert(`⚠️ You still have ${unanswered} unanswered questions.`);
    return;

  }
// Auto-expand Final Report Comments textarea
const commentsBoxAuto = document.getElementById("finalReportComments");
if (commentsBoxAuto) {
  commentsBoxAuto.addEventListener("input", () => {
    commentsBoxAuto.style.height = "auto";
    commentsBoxAuto.style.height = commentsBoxAuto.scrollHeight + "px";
  });
}

  // Score calculations
  const totalPoints = Object.values(saved).reduce((sum, v) => sum + Number(v), 0);
  const percent = Math.round((totalPoints / deptData.maxScore) * 100);

  // Switch UI View → Hide assessment form, show final report
  document.querySelector(".assessment-layout").style.display = "none";
  document.querySelector(".assessment-form-wrapper").style.display = "none";
  document.getElementById("reportSection").style.display = "block";

  // Update text fields
  document.getElementById("maturityScoreDisplay").textContent = percent + "%";
  document.getElementById("totalScoreText").textContent = totalPoints;
  document.getElementById("maxScoreText").textContent = deptData.maxScore;

  // Generate area breakdown
  const summary = computeDynamicAreaScores(deptData, saved);
  renderAreaBars(summary);

  // Populate detailed table breakdown
  const tbody = document.getElementById("detailedScoreBody");
  tbody.innerHTML = deptData.questions.map(q => {
    const val = saved[q.id];
    const choice = q.choices.find(c => String(c.value) === String(val));
    const label = choice ? choice.text : "-";
    const nextRec = getNextLevelRecommendation(q, val);
    const color = getColorByScore(val * 20); // Scale 1-5 to 20-100 for color function

    return `<tr>
      <td>${q.id}</td>
      <td><strong>${q.title}</strong><br><small style="color:#555;">${q.text}</small></td>
      <td style="text-align: center; background-color: ${color.replace(/,1\)/, ', 0.2)')};">${val}</td>
      <td>${label}</td>
      <td>${nextRec}</td>
    </tr>`;
  }).join("");

  // Build recommendations list simply by listing selected choice text
  const rec = document.getElementById("finalRecommendations");
  rec.innerHTML = "<ul>" + deptData.questions.map(q => {
    const val = saved[q.id];
    const choice = q.choices.find(c => String(c.value) === String(val));
    return `<li>${choice ? choice.text : "-"}</li>`;
  }).join("") + "</ul>";

  // Save comments to localStorage (or load if already present)
  const commentsKey = getStorageKeyFor(deptCode) + "_comments";
  const savedComments = localStorage.getItem(commentsKey) || "";


const commentsBox = document.getElementById("finalReportComments");
loadReportComments(); // Load any previous comments for this dept
commentsBox.addEventListener("input", saveReportComments);


  // Determine maturity band
const band = getMaturityBand(percent, deptData);
let bandColor = "#004D9C"; // default blue
if (percent <= 25) bandColor = "#d32f2f";      // red
else if (percent <= 50) bandColor = "#f57c00"; // orange
else if (percent <= 75) bandColor = "#1976d2"; // blue
else if (percent <= 90) bandColor = "#388e3c"; // green
else bandColor = "#2e7d32";                    // dark green

const bandEl = document.getElementById("maturityBandDisplay");
bandEl.textContent = band.name;
bandEl.style.color = bandColor;
document.getElementById("maturityBandDesc").textContent = band.description;



}



// ----- Final Report Comments: auto-grow + print mirroring -----
(function () {
  const commentsEl = document.getElementById('finalReportComments');
  const commentsPrintEl = document.getElementById('finalReportCommentsPrint');

  if (!commentsEl || !commentsPrintEl) return;

  // Auto-grow as user types (no scrollbar on screen)
  const autogrow = () => {
    commentsEl.style.height = 'auto';
    commentsEl.style.height = commentsEl.scrollHeight + 'px';
  };
  // Initial grow (in case content is prefilled)
  autogrow();
  commentsEl.addEventListener('input', autogrow);

  // Keep print mirror in sync
  const syncMirror = () => {
    commentsPrintEl.textContent = commentsEl.value || '';
  };
  // Sync whenever user types
  commentsEl.addEventListener('input', syncMirror);
  // Initial sync
  syncMirror();

  // Ensure the latest text is used right before printing
  if (window.matchMedia) {
    const mediaQueryList = window.matchMedia('print');
    // Modern browsers may call this before print
    mediaQueryList.addEventListener?.('change', e => { if (e.matches) syncMirror(); });
    mediaQueryList.addListener?.(mql => { if (mql.matches) syncMirror(); }); // older
  }
  window.addEventListener('beforeprint', syncMirror);
})();




async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const report = document.getElementById("reportSection");

  if (!report) {
    alert("Report section not found!");
    return;
  }

  // Hide UI buttons during capture
  const buttons = report.querySelectorAll("button, .btn, .nav, .navbar");
  buttons.forEach(btn => (btn.style.display = "none"));

  // Capture the entire report at high resolution
  const canvas = await html2canvas(report, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    windowWidth: report.scrollWidth,
    windowHeight: report.scrollHeight
  });

  // Restore buttons after capture
  buttons.forEach(btn => (btn.style.display = ""));

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("l", "mm", "a4");

  // A4 landscape dimensions in mm
  const pdfWidth = 297;
  const pdfHeight = 210;

  // Convert pixel dimensions to mm (1 px ≈ 0.264583 mm)
  const imgWidth = pdfWidth;
  const imgHeight = (canvas.height * pdfWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  // Add pages for full height
  pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  heightLeft -= pdfHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save("DMI_Report_Full.pdf");
}




  // Export as PDF function (simple single-page version)


async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const report = document.getElementById("reportSection");

  if (!report) {
    alert("Report section not found!");
    return;
  }

  // Temporarily hide buttons
  const buttons = report.querySelectorAll("button");
  buttons.forEach(btn => (btn.style.display = "none"));

  // Use html2canvas to capture the report section
  const canvas = await html2canvas(report, {
    scale: 2,                // High resolution
    useCORS: true,           // Allow logo and chart capture
    backgroundColor: "#ffffff"
  });

  // Show buttons again
  buttons.forEach(btn => (btn.style.display = ""));

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("l", "mm", "a4");

  // Calculate image dimensions to fit landscape A4
  const pdfWidth = 297;
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  pdf.save("DMI_Report.pdf");
}





// Inside logic.js or related file

/**
 * Copies the text from the editable textarea to the print-only mirror div.
 * This ensures full text and line breaks are captured in the PDF/print output.
 */
function copyCommentsToPrintMirror() {
    const commentsTextarea = document.getElementById('finalReportComments');
    const commentsPrintDiv = document.getElementById('finalReportCommentsPrint');
    
    if (commentsTextarea && commentsPrintDiv) {
        // Copy the value (which is plain text)
        commentsPrintDiv.textContent = commentsTextarea.value;
    }
}



// Inside logic.js or related file

// Ensure the window.jsPDF is available from the script tag
const { jsPDF } = window.jspdf;

function generatePDF() {
    // 1. Prepare data before capture (Crucial for multi-page export)
    copyCommentsToPrintMirror(); 
    // This function must also run right before PDF generation!

    const element = document.getElementById('reportSection');
    
    // Use the maximum width of the report section for better capture
    const captureWidth = element.offsetWidth;
    const captureHeight = element.offsetHeight;

    // Use a high-quality capture setting
    html2canvas(element, { 
        scale: 2, // Use a higher scale for better resolution
        width: captureWidth,
        height: captureHeight,
        scrollY: -window.scrollY // Capture elements from the top of the page
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        const pdf = new jsPDF('l', 'mm', 'a4'); // 'l' for Landscape, 'mm' unit, 'a4'
        
        // Define A4 dimensions in mm (Landscape: 297mm x 210mm)
        const pdfWidth = 297;
        const pdfHeight = 210;
        
        // Calculate the ratio of the captured image to the PDF width
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;

        // Add the first page
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Loop to add remaining pages
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save('DMI_Assessment_Report.pdf');
    });
}




/**
 * Copies the text from the editable textarea to the print-only mirror div.
 * This must be called immediately before window.print() or PDF generation.
 */
function copyCommentsToPrintMirror() {
    const commentsTextarea = document.getElementById('finalReportComments');
    const commentsPrintDiv = document.getElementById('finalReportCommentsPrint');
    
    if (commentsTextarea && commentsPrintDiv) {
        // Use textContent to preserve line breaks and spacing within the div
        commentsPrintDiv.textContent = commentsTextarea.value;
    }
}

// NOTE: Ensure your existing generatePDF() also calls this function at the very start.
function generatePDF() {
    copyCommentsToPrintMirror(); // <-- MUST be the first line
    
    // ... rest of your html2canvas/jsPDF logic ...
}






/* ----------------------------------------------------------------------------- 
   Save and Load Final Report Comments per Department (Timing-Safe Version)
----------------------------------------------------------------------------- */
function saveReportComments() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const textarea = document.getElementById("finalReportComments");
  if (!textarea || !deptCode) return;

  const key = getStorageKeyFor(deptCode) + "_comments";
  localStorage.setItem(key, textarea.value);

  // Keep height synced as user types
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}



/* -----------------------------------------------------------------------------
   Load Final Report Comments (auto-grow + department specific)
----------------------------------------------------------------------------- */
function loadReportComments() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  if (!deptCode) return;

  const key = getStorageKeyFor(deptCode) + "_comments";

  // Wait until textarea exists in the DOM
  const interval = setInterval(() => {
    const textarea = document.getElementById("finalReportComments");
    if (textarea) {
      const saved = localStorage.getItem(key);
      if (saved) {
        textarea.value = saved;
      }

      // --- Auto-grow to fit content ---
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";

      // --- Save automatically on typing ---
      textarea.removeEventListener("input", saveReportComments);
      textarea.addEventListener("input", saveReportComments);

      clearInterval(interval);
    }
  }, 300);
}

/* -----------------------------------------------------------------------------
   Optionally, you can export all comments in one CSV for review.
----------------------------------------------------------------------------- */
function exportAllCommentsToCSV() {
  const keys = Object.keys(localStorage).filter(k => k.endsWith("_comments"));
  let csv = "Department,Comments\n";
  keys.forEach(k => {
    const dept = k.replace("tasheer_dmi_", "").replace("_comments", "").toUpperCase();
    const comments = (localStorage.getItem(k) || "").replace(/\n/g, " ");
    csv += `"${dept}","${comments}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "DMI_FinalReportComments.csv";
  link.click();
}


/* =============================================================================
   EXPORT ALL DEPARTMENT REPORTS TO EXCEL (.xlsx) — Polished & Branded Version
   ============================================================================= */
/* =============================================================================
   EXPORT ALL DEPARTMENT REPORTS TO EXCEL (.xlsx) — Styled and Professional
   ============================================================================= */
function exportAllReportsToExcel() {
  const wb = XLSX.utils.book_new();

  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith("tasheer_dmi_") || key.endsWith("_comments")) return;

    const deptCode = key.replace("tasheer_dmi_", "");
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    const deptData = window.DMI_QUESTION_SETS[deptCode];
    if (!deptData) return;

    // Compute overall score
    const total = Object.values(saved).reduce((sum, v) => sum + Number(v), 0);
    const percent = Math.round((total / deptData.maxScore) * 100);
    const commentsKey = key + "_comments";
    const comments = (localStorage.getItem(commentsKey) || "").replace(/\r?\n/g, " ");

    // Data for sheet
    const rows = [
      ["Department", deptCode.toUpperCase()],
      ["Overall Maturity %", percent + "%"],
      ["Final Report Comments", comments],
      [],
      ["QID", "Question Title", "Selected Level", "Selected Text", "Next Recommendation"]
    ];

    deptData.questions.forEach(q => {
      const val = saved[q.id];
      const choice = q.choices.find(c => String(c.value) === String(val));
      const text = choice ? choice.text : "";
      const nextRec = getNextLevelRecommendation(q, val);
      rows.push([q.id, q.title, val || "", text, nextRec]);
    });

    const ws = XLSX.utils.aoa_to_sheet(rows);

    // ===== Formatting Section =====
    const range = XLSX.utils.decode_range(ws["!ref"]);

    // Set column widths
    ws["!cols"] = [
      { wch: 6 },  // QID
      { wch: 50 }, // Question Title
      { wch: 10 }, // Level
      { wch: 60 }, // Selected Text
      { wch: 60 }  // Recommendation
    ];

    // Basic styling through XLSX cell objects
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = ws[cellRef];
        if (!cell) continue;

        // Header row (row 5)
        if (R === 4) {
          cell.s = {
            fill: { fgColor: { rgb: "004D9C" } },
            font: { color: { rgb: "FFFFFF" }, bold: true },
            alignment: { horizontal: "center", vertical: "center", wrapText: true }
          };
        }
        // Title rows (first 3)
        else if (R < 3) {
          cell.s = {
            font: { bold: true, color: { rgb: "004D9C" } },
            alignment: { horizontal: "left", vertical: "center" }
          };
        }
        // Data rows
        else if (R > 4) {
          cell.s = {
            alignment: { vertical: "top", wrapText: true },
            fill: (R % 2 === 0) ? { fgColor: { rgb: "F2F6FB" } } : {},
            font: { color: { rgb: "000000" } }
          };
        }
      }
    }

    XLSX.utils.book_append_sheet(wb, ws, deptCode.toUpperCase().substring(0, 31));
  });

  // ===== Save file properly with MIME type =====
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array", cellStyles: true });
  const blob = new Blob([wbout], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

  const link = document.createElement("a");
  const date = new Date().toISOString().split("T")[0];
  link.href = URL.createObjectURL(blob);
  link.download = `Tasheer_DMI_Reports_${date}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


/* -----------------------------------------------------------------------------
   he maturity band (like “Managed (Level 3)” or “Advanced (Level 4)”) to the final report
----------------------------------------------------------------------------- */



function getMaturityBand(percent, deptData) {
  const bands = deptData.maturityBands || window.COMMON_MATURITY_BANDS || [];
  for (const b of bands) {
    const [min, max] = b.range;
    if (percent >= min && percent <= max) return b;
  }
  // Fallback if out of range
  return { name: "Unclassified", description: "No maturity band matched this score." };
}
  
   
/* -----------------------------------------------------------------------------
   End of logic.js
----------------------------------------------------------------------------- */


function initAdminPage() {
  if (typeof requireLogin === "function" && !requireLogin()) return;

  const deptButtons = document.querySelectorAll("#adminDeptList .nav-link");

  deptButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const deptCode = btn.dataset.code;

      // Highlight active button
      deptButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Load department dashboard
      handleAdminDeptClick(deptCode);
    });
  });

  // Auto-select FIRST department
  if (deptButtons.length > 0) {
    deptButtons[0].classList.add("active");
    handleAdminDeptClick(deptButtons[0].dataset.code);
  }
}

function initAdminPage() {
  if (typeof requireLogin === 'function' && !requireLogin()) return;

  const deptButtons = document.querySelectorAll("#adminDeptList .nav-link");

  deptButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const deptCode = btn.dataset.code;

      deptButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      handleAdminDeptClick(deptCode);
    });
  });

  // Auto-load first department
  if (deptButtons.length > 0) {
    deptButtons[0].classList.add("active");
    handleAdminDeptClick(deptButtons[0].dataset.code);
  }
}
