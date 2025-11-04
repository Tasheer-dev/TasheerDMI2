// logic.js - pure frontend DMI (refactored for dynamic quiz loading)
let liveChartInstance = null;
let finalChartInstance = null;

// Ensure global containers exist
window.DMI_QUESTION_SETS = window.DMI_QUESTION_SETS || {};
window.TASHER_USERS = window.TASHER_USERS || [];

// === SESSION HELPERS ===
function requireLogin() {
  const loggedIn = sessionStorage.getItem("dmi_logged_in");
  const role = sessionStorage.getItem("dmi_role");
  if (loggedIn !== "true" || !role) {
    sessionStorage.clear();
    window.location.href = "login.html";
    return false;
  }
  return true;
}

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

// === LOGIN ===
function handleLogin() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMessage");

  const user = TASHER_USERS.find(x => x.username === u && x.password === p);
  if (!user) {
    if (msg) {
      msg.style.display = "block";
      msg.textContent = "❌ Invalid username or password";
    }
    return;
  }

  sessionStorage.setItem("dmi_logged_in", "true");
  sessionStorage.setItem("dmi_username", user.username);
  sessionStorage.setItem("dmi_role", user.role);
  sessionStorage.setItem("dmi_deptCode", user.deptCode);
  sessionStorage.setItem("dmi_displayName", user.displayName);

  if (user.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
  }
}

// === ASSESSMENT PAGE ===
function initAssessmentPage() {
  if (!requireLogin()) return;

  const role = sessionStorage.getItem("dmi_role");
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const displayName = sessionStorage.getItem("dmi_displayName");

  if (role === "admin") {
    window.location.href = "admin.html";
    return;
  }
  if (role !== "department") {
    sessionStorage.clear();
    window.location.href = "login.html";
    return;
  }

  // Dynamically load quiz file for this department
  const script = document.createElement("script");
  script.src = `./assets/quizzes/quiz_${deptCode}.js`;
  script.onload = () => {
    const deptData = window.DMI_QUESTION_SETS[deptCode];
    if (!deptData) {
      alert("No question set found for: " + deptCode);
      return;
    }

    document.getElementById("assessmentTitle").textContent = deptData.title;
    document.getElementById("assessmentSubTitle").textContent = displayName + " – please answer all questions.";
    document.getElementById("reportHeaderTitle").textContent = deptData.title + " – Final Report";

    buildAssessmentForm(deptCode, deptData);
    loadSelections(deptCode, deptData);
    updateLiveScore(deptCode, deptData);
    if (window.hideLoader) window.hideLoader();

// logic.js (Inside updateLiveScore)
// ...
  // Dynamic area 7+1
  const areaSummary = computeDynamicAreaScores(deptData, saved);
  renderAreaBars(areaSummary); // <--- ENSURE THIS CALL IS HERE
// ...
    const rep = document.getElementById("reportSection");
    if (rep) rep.style.display = "none";
  };
  script.onerror = () => {
    alert(`⚠️ Could not load quiz file for department: ${deptCode}\nExpected: assets/quizzes/quiz_${deptCode}.js`);
  };
  document.body.appendChild(script);
}

function getStorageKeyFor(deptCode) {
  return "tasheer_dmi_" + deptCode;
}

function buildAssessmentForm(deptCode, deptData) {
  const form = document.getElementById("assessmentForm");
  form.innerHTML = "";

  deptData.sections.forEach(sec => {
    const h = document.createElement("h2");
    h.className = "area-header";
    h.textContent = sec.name;
    form.appendChild(h);

    sec.questions.forEach(qId => {
      const q = deptData.questions.find(qq => qq.id === qId);
      if (!q) return;
      const block = document.createElement("div");
      block.className = "question-block";
      block.innerHTML = `
        <h3>${q.id}. ${q.title}</h3>
        <p>${q.text}</p>
        <select class="level-select" name="${q.id}"
          onchange="saveSelection('${deptCode}', '${q.id}', this.value)">
          <option value="">-- Select a Maturity Level (1-5) --</option>
          ${q.choices.map(c => `<option value="${c.value}">${c.text}</option>`).join("")}
        </select>
      `;
      form.appendChild(block);
    });
  });
}

function loadSelections(deptCode, deptData) {
  const saved = JSON.parse(localStorage.getItem(getStorageKeyFor(deptCode)) || "{}");
  document.querySelectorAll(".level-select").forEach(sel => {
    const qId = sel.getAttribute("name");
    if (saved[qId]) sel.value = saved[qId];
  });
}

function saveSelection(deptCode, qId, value) {
  const key = getStorageKeyFor(deptCode);
  const saved = JSON.parse(localStorage.getItem(key) || "{}");
  if (value) {
    saved[qId] = Number(value);
  } else {
    delete saved[qId];
  }
  localStorage.setItem(key, JSON.stringify(saved));

  const ss = document.getElementById("saveStatus");
  if (ss) {
    ss.style.display = "block";
    setTimeout(() => ss.style.display = "none", 1000);
  }

  const deptData = DMI_QUESTION_SETS[deptCode];
  updateLiveScore(deptCode, deptData);
}

function updateLiveScore(deptCode, deptData) {
  const key = getStorageKeyFor(deptCode);
  const saved = JSON.parse(localStorage.getItem(key) || "{}");

  let total = 0;
  let answered = 0;
  deptData.questions.forEach(q => {
    const v = saved[q.id];
    if (v) {
      total += Number(v);
      answered++;
    }
  });

  const percent = Math.round((total / deptData.maxScore) * 100);

  const pEl = document.getElementById("liveScorePercentage");
  const sEl = document.getElementById("liveScoreStatus");
  if (pEl) pEl.textContent = percent + "%";
  if (sEl) sEl.textContent = `${answered} / ${deptData.totalQuestions} Questions Answered`;

  const ctx = document.getElementById("liveMaturityChart");
  if (ctx) {
    if (liveChartInstance) liveChartInstance.destroy();
    // Chart.js is loaded from index.html
    liveChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Achieved", "Remaining"],
        datasets: [
          {
            data: [percent, 100 - percent],
            backgroundColor: [getColorByScore(percent), "rgba(224,224,224,0.4)"],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "80%",
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
  }

  // push to global for admin
  const allKey = "tasheer_dmi_all";
  const all = JSON.parse(localStorage.getItem(allKey) || "{}");
  all[deptCode] = {
    percent,
    total,
    max: deptData.maxScore,
    deptName: deptData.title,
    who: sessionStorage.getItem("dmi_displayName"),
    updated: new Date().toISOString()
  };
  localStorage.setItem(allKey, JSON.stringify(all));
}

function getColorByScore(p) {
  if (p >= 65) return "rgba(56,142,60,1)";
  if (p >= 60) return "rgba(0,77,156,1)";
  if (p >= 21) return "rgba(255,165,0,1)";
  return "rgba(211,47,47,1)";
}

function openEvidenceFolder() {
  window.open(window.EVIDENCE_SHARED_FOLDER, "_blank");
}

// === FINALIZE (generate report) ===
function finalizeAssessment() {
  const deptCode = sessionStorage.getItem("dmi_deptCode");
  const deptData = DMI_QUESTION_SETS[deptCode];
  if (!deptData) return;

  const key = getStorageKeyFor(deptCode);
  const saved = JSON.parse(localStorage.getItem(key) || "{}");

  let total = 0;
  deptData.questions.forEach(q => {
    if (saved[q.id]) total += Number(saved[q.id]);
  });
  const percent = Math.round((total / deptData.maxScore) * 100);

  const rep = document.getElementById("reportSection");
  if (rep) rep.style.display = "block";

  document.getElementById("maturityScoreDisplay").textContent = percent.toFixed(2) + "%";
  document.getElementById("totalScoreText").textContent = total;
  document.getElementById("maxScoreText").textContent = deptData.maxScore;

  const band = (deptData.maturityBands || window.COMMON_MATURITY_BANDS)
    .find(b => percent >= b.range[0] && percent <= b.range[1]);
  document.getElementById("maturityLevelText").textContent =
    band ? `${band.name} – ${band.description}` : "No band matched.";

  const tbody = document.getElementById("detailedScoreBody");
  tbody.innerHTML = "";
  deptData.questions.forEach(q => {
    const val = saved[q.id] || 0;
    const txt = (q.choices.find(c => c.value == val) || {}).text || "Not answered";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${q.id}</td>
      <td>${q.title}</td>
      <td class="score-value">${val}</td>
      <td>${txt}</td>
    `;
    tbody.appendChild(tr);
  });

  const ctx = document.getElementById("finalMaturityChart");
  if (ctx) {
    if (finalChartInstance) finalChartInstance.destroy();
    finalChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Achieved", "Remaining"],
        datasets: [
          {
            data: [percent, 100 - percent],
            backgroundColor: [getColorByScore(percent), "rgba(224,224,224,0.4)"],
            borderWidth: 0
          }
        ]
      },
      options: { plugins: { legend: { display: false } }, cutout: "75%" }
    });
  }
}

// === ADMIN PAGE ===
function initAdminPage() {
  if (!requireLogin()) return;

  const role = sessionStorage.getItem("dmi_role");
  if (role === "department") {
    window.location.href = "index.html";
    return;
  }
  if (role !== "admin") {
    sessionStorage.clear();
    window.location.href = "login.html";
    return;
  }

  const tbody = document.querySelector("#adminDeptTable tbody");
  tbody.innerHTML = "";

  const all = JSON.parse(localStorage.getItem("tasheer_dmi_all") || "{}");

  // Build dept list from users (all departments)
  const depts = TASHER_USERS.filter(u => u.role === "department");

  let sum = 0, count = 0;

  depts.forEach(user => {
    const code = user.deptCode;
    const rec = all[code];
    const deptName = user.displayName || code;
    const tr = document.createElement("tr");

    let percent = "-", updated = "-", who = "-";
    if (rec) {
      percent = (rec.percent ?? 0) + "%";
      updated = new Date(rec.updated).toLocaleString();
      who = rec.who || code;
      sum += (rec.percent ?? 0);
      count++;
    }

    tr.innerHTML = `
      <td>${deptName}</td>
      <td>${who}</td>
      <td style="text-align:center;">${percent}</td>
      <td style="text-align:center;">${updated}</td>
    `;
    tbody.appendChild(tr);

    if (rec) {
      const box = document.createElement("div");
      box.className = "mini-chart-card";
      box.innerHTML = `
        <h4>${deptName}</h4>
        <canvas id="chart_${code}" height="120"></canvas>
        <p class="small">DMI: ${rec.percent}%</p>
      `;
      document.getElementById("adminDeptCharts").appendChild(box);

      const ctx = box.querySelector("canvas");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Achieved", "Remaining"],
          datasets: [
            {
              data: [rec.percent, 100 - rec.percent],
              backgroundColor: [getColorByScore(rec.percent), "rgba(224,224,224,0.4)"],
              borderWidth: 0
            }
          ]
        },
        options: { plugins: { legend: { display: false } }, cutout: "70%" }
      });
    }
  });

  const finalPercent = count > 0 ? Math.round(sum / count) : 0;
  document.getElementById("adminCompanyPercent").textContent =
    `Tasheer Final DMI: ${finalPercent}%`;

  const ctx = document.getElementById("adminCompanyChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Achieved", "Remaining"],
      datasets: [
        {
          data: [finalPercent, 100 - finalPercent],
          backgroundColor: [getColorByScore(finalPercent), "rgba(224,224,224,0.4)"],
          borderWidth: 0
        }
      ]
    },
    options: { plugins: { legend: { display: false } }, cutout: "75%" }
  });
}


// === Overlay helpers ===
function showCenterError(msg) {
  const o = document.getElementById('centerErrorOverlay');
  const t = document.getElementById('centerErrorText');
  if (o && t) { t.textContent = msg; o.style.display = 'flex'; }
  else { alert(msg); }
}
function hideCenterError(){ const o = document.getElementById('centerErrorOverlay'); if (o) o.style.display='none'; }


// logic.js (Simplified randomization for button click)
function randomizeSelections() { // Removed minPercent argument for simple button
  const deptCode = sessionStorage.getItem('dmi_deptCode');
  const deptData = DMI_QUESTION_SETS[deptCode];
  if(!deptData) return;
  const key = getStorageKeyFor(deptCode);
  const saved = {};

  deptData.questions.forEach(q=>{
    // Random value between 1 and 5
    const v = Math.floor(Math.random()*5)+1;
    saved[q.id] = v;
  });

  localStorage.setItem(key, JSON.stringify(saved));

  // Reload the selections in the form
  loadSelections(deptCode, deptData);
  
  // Update the live score and global storage
  updateLiveScore(deptCode, deptData);
  
  // Notify user
  const ss = document.getElementById("saveStatus");
  if (ss) {
    ss.textContent = "✨ All questions randomized!";
    ss.style.display = "block";
    setTimeout(() => ss.style.display = "none", 1500);
  }
}
// === Reset & Random ===
function resetAllSelections(){
  const deptCode = sessionStorage.getItem('dmi_deptCode');
  const key = getStorageKeyFor(deptCode);
  localStorage.removeItem(key);
  const form = document.getElementById('assessmentForm');
  if (form){ form.querySelectorAll('select').forEach(s=>s.value=""); }
  const deptData = DMI_QUESTION_SETS[deptCode];
  updateLiveScore(deptCode, deptData);
}

function randomizeSelections(minPercent){
  const deptCode = sessionStorage.getItem('dmi_deptCode');
  const deptData = DMI_QUESTION_SETS[deptCode];
  if(!deptData) return;
  const key = getStorageKeyFor(deptCode);
  const saved = {};
  let total=0;
  const max = (deptData.questions.length*5);
  deptData.questions.forEach(q=>{ const v = Math.floor(Math.random()*5)+1; saved[q.id]=v; total+=v; });
  const desired = Math.ceil((minPercent/100)*max);
  let i=0;
  while(total<desired && i<10000){
    const q = deptData.questions[Math.floor(Math.random()*deptData.questions.length)];
    if(saved[q.id]<5){ saved[q.id]++; total++; }
    i++;
  }
  localStorage.setItem(key, JSON.stringify(saved));
  const form = document.getElementById('assessmentForm');
  if (form){ deptData.questions.forEach(q=>{ const sel=form.querySelector(`select[data-qid="${q.id}"]`); if(sel) sel.value=String(saved[q.id]); }); }
  updateLiveScore(deptCode, deptData);
}



// === Dynamic 7+1 area computation ===
function computeDynamicAreaScores(deptData, savedMap){
  const questions = deptData.questions||[];
  const areas={}, order=[];
  questions.forEach((q,idx)=>{
    const a = q.area || q.group || `Area ${((idx%7)+1)}`;
    if(!areas[a]){ areas[a]={total:0,max:0}; order.push(a); }
    const v = Number(savedMap[q.id]||0);
    areas[a].total += v;
    areas[a].max += 5;
  });
  const limited = order.slice(0,7);
  const results = limited.map(a=>{
    const obj=areas[a]; const pct = obj.max? Math.round((obj.total/obj.max)*100):0;
    return { area:a, percent:pct };
  });
  const overall = Math.round(results.reduce((s,r)=>s+r.percent,0)/(results.length||1));
  return { areas: results, overall };
}



// === Render horizontal 7+1 bar chart ===
let areaBarInstance=null;
function renderAreaBars(summary){
  const ctx = document.getElementById('areaBarChart');
  if(!ctx) return;
  const labels = summary.areas.map(r=>r.area).concat(['Overall Progress']);
  const data = summary.areas.map(r=>r.percent).concat([summary.overall]);
  if(areaBarInstance){ areaBarInstance.destroy(); }
  areaBarInstance = new Chart(ctx, {
    type:'bar',
    data:{ labels, datasets:[{ data, borderWidth:1 }]},
    options:{
      indexAxis:'y',
      responsive:true,
      plugins:{ legend:{ display:false }},
      scales:{ x:{ min:0, max:100, ticks:{ stepSize:10 } } }
    }
  });
}



function backToAnswers(){
  const report = document.getElementById('reportSection'); if(report) report.style.display='none';
  const layout = document.querySelector('.assessment-layout'); if(layout) layout.style.display='flex';
  const formWrap = document.querySelector('.assessment-form-wrapper'); if(formWrap) formWrap.style.display='block';
  const deptCode = sessionStorage.getItem('dmi_deptCode');
  const deptData = DMI_QUESTION_SETS[deptCode];
  if (deptCode && deptData) updateLiveScore(deptCode, deptData);
}


// === Unified Finalize Assessment ===
async function finalizeAssessment(){
  const deptCode = sessionStorage.getItem('dmi_deptCode');
  const deptData = DMI_QUESTION_SETS[deptCode];
  if(!deptData) return;
  const key = getStorageKeyFor(deptCode);
  const saved = JSON.parse(localStorage.getItem(key)||"{}");

  // Validate unanswered
  let unanswered=0;
  deptData.questions.forEach(q=>{ if(!saved[q.id]) unanswered++; });
  if(unanswered>0){
    const totalQ = deptData.questions.length;
    showCenterError(`There are still ${unanswered} out of ${totalQ} questions not evaluated. Please return to the assessment and complete your selections.`);
    return;
  }

  // Totals
  const totalPoints = Object.values(saved).reduce((s,v)=>s+Number(v),0);
  const maxPoints = deptData.maxScore || (deptData.questions.length*5);
  const percent = Math.round((totalPoints/maxPoints)*100);

  // Swap views
  const report = document.getElementById('reportSection'); if(report) report.style.display='block';
  const layout = document.querySelector('.assessment-layout'); if(layout) layout.style.display='none';
  const formWrap = document.querySelector('.assessment-form-wrapper'); if(formWrap) formWrap.style.display='none';

  // Update overall display
  const pctEl = document.getElementById('maturityScoreDisplay'); if(pctEl) pctEl.textContent = percent + '%';
  const tEl = document.getElementById('totalScoreText'); if(tEl) tEl.textContent = totalPoints;
  const mEl = document.getElementById('maxScoreText'); if(mEl) mEl.textContent = maxPoints;

  // Build final doughnut if helper exists
  if(typeof buildFinalReportChart === 'function'){ try{ buildFinalReportChart(percent); }catch(e){} }

  // Dynamic area 7+1
  const areaSummary = computeDynamicAreaScores(deptData, saved);
  renderAreaBars(areaSummary);

  // Populate breakdown table body
  const tbody = document.getElementById('detailedScoreBody');
  if (tbody){
    let rows='';
    deptData.questions.forEach((q,i)=>{
      const val = saved[q.id];
      const choice = (q.choices||[]).find(c=>String(c.value)===String(val));
      const ans = choice ? (choice.text || choice.label || ('Level '+val)) : '-';
      rows += `<tr><td>${i+1}</td><td>${q.title || q.question}</td><td style="text-align:center;">${val||'-'}</td><td>${ans}</td></tr>`;
    });
    tbody.innerHTML = rows;
  }

  // Recommendations list if exists
  const recEl = document.getElementById('finalRecommendations');
  if (recEl){
    let html = '<ul>';
    deptData.questions.forEach(q=>{
      const val = saved[q.id];
      const choice = (q.choices||[]).find(c=>String(c.value)===String(val));
      const rec = choice ? (choice.text || choice.label || ('Level '+val)) : ('Level '+val);
      html += `<li>${rec}</li>`;
    });
    html += '</ul>';
    recEl.innerHTML = html;
  }
}

// logic.js (Add this new function)
function returnToQuestions() {
    // 1. Hide the final report area
    const report = document.getElementById('report-wrapper');
    if (report) report.style.display = 'none';

    // 2. Show the question form area
    const form = document.getElementById('quiz-form-wrapper');
    if (form) form.style.display = 'block';

    // 3. Update the button bar state (if applicable, or just ensure quiz button is visible)
    const viewReportBtn = document.getElementById('viewReportBtn');
    if (viewReportBtn) viewReportBtn.style.display = 'block';
    
    // 4. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// logic.js (Add/Update functions)

// Helper function to calculate scores for each section/area
function computeDynamicAreaScores(deptData, savedSelections) {
    const areaSummary = {}; // { areaName: { totalPoints: N, maxPoints: M } }

    deptData.questions.forEach(q => {
        // Use the defined 'area' property in quiz_procurement.js (e.g., 'Service Catalogue')
        const areaName = q.area || 'General';
        const value = savedSelections[q.id] || 0;
        const maxVal = 5; // Assuming max score per question is 5

        if (!areaSummary[areaName]) {
            areaSummary[areaName] = { totalPoints: 0, maxPoints: 0, questions: [] };
        }

        areaSummary[areaName].totalPoints += value;
        areaSummary[areaName].maxPoints += maxVal;
        areaSummary[areaName].questions.push(q.id);
    });

    return areaSummary;
}

// Function to draw the Section Progress Bar Chart
let sectionChartInstance = null; // To hold the chart instance

function renderAreaBars(areaSummary) {
    const ctx = document.getElementById('sectionScoreChart');
    if (!ctx) return;

    // Destroy existing chart instance if it exists
    if (sectionChartInstance) {
        sectionChartInstance.destroy();
    }

    const labels = [];
    const percentages = [];
    const backgroundColors = [];
    const borderColors = [];

    // Process the summary data
    for (const area in areaSummary) {
        labels.push(area);
        const { totalPoints, maxPoints } = areaSummary[area];
        const percent = maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;
        percentages.push(percent);

        // Simple color logic based on maturity bands (Level 3 is 51-75)
        if (percent > 75) {
            backgroundColors.push('rgba(40, 167, 69, 0.7)'); // Green (Advanced/Optimized)
            borderColors.push('rgba(40, 167, 69, 1)');
        } else if (percent > 50) {
            backgroundColors.push('rgba(255, 193, 7, 0.7)'); // Yellow (Managed)
            borderColors.push('rgba(255, 193, 7, 1)');
        } else {
            backgroundColors.push('rgba(220, 53, 69, 0.7)'); // Red (Basic/Ad-hoc)
            borderColors.push('rgba(220, 53, 69, 1)');
        }
    }

    // Render the chart
    sectionChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Maturity Percentage',
                data: percentages,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y', // Horizontal bars
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Percentage (%)' },
                    ticks: {
                        callback: function(value) { return value + "%" }
                    }
                },
                y: {
                    grid: { display: false }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.x + '%';
                        }
                    }
                }
            }
        }
    });
}