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
  script.src = `./quizzes/quiz_${deptCode}.js`;
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


    const rep = document.getElementById("reportSection");
    if (rep) rep.style.display = "none";
  };
  script.onerror = () => {
    alert(`⚠️ Could not load quiz file for department: ${deptCode}\nExpected: quizzes/quiz_${deptCode}.js`);
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
