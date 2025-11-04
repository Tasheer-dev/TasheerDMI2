// assets/js/dmi_form.js

// Retrieve department data from session
const deptCode = sessionStorage.getItem("dmi_dept");
const container = document.getElementById("questionsContainer");
const deptNameEl = document.getElementById("deptName");

let currentChart = null; 

// Retrieve question data and calculate max score
const DEPT_QUESTIONS = DMI_QUESTIONS[deptCode];
const TOTAL_QUESTIONS = DMI_MAX_SCORES[deptCode] ? DMI_MAX_SCORES[deptCode].totalQuestions : 0;
const MAX_POSSIBLE_SCORE = DMI_MAX_SCORES[deptCode] ? DMI_MAX_SCORES[deptCode].maxScore : 0;

if (deptCode && DMI_DEPARTMENTS[deptCode]) {
    deptNameEl.textContent = `${DMI_DEPARTMENTS[deptCode]} DMI Assessment`;
}

// Key for department-specific localStorage data (This ensures persistence!)
const STORAGE_KEY = STORAGE_KEY_PREFIX + deptCode;

// --- Helper Functions ---

function renderQuestions() {
    if (!DEPT_QUESTIONS) {
        container.innerHTML = `<div class="alert alert-danger">Error: Could not load questions for department code: ${deptCode}.</div>`;
        return;
    }
    
    container.innerHTML = ''; 

    DEPT_QUESTIONS.forEach((q, index) => {
        const qNumber = index + 1;
        
        const col = document.createElement("div");
        col.className = "col-12";
        col.innerHTML = `
            <div class="card shadow-sm mb-3">
              <div class="card-body">
                <h6 class="card-title text-primary">${q.group} – Q${qNumber}. ${q.title}</h6>
                <p class="text-muted small mb-2">${q.text}</p>
                <select class="form-select" data-qid="${q.id}" onchange="updateScore(true)">
                  <option value="0">-- Select Maturity Level (1-5) --</option>
                  ${q.choices.map(c => `<option value="${c.value}">${c.text}</option>`).join("")}
                </select>
              </div>
            </div>
        `;
        container.appendChild(col);
    });
    
    loadSavedSelections();
    updateScore(false); // Initial score update
}

/**
 * Loads saved selections from Local Storage and populates the form.
 */
function loadSavedSelections() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    document.querySelectorAll("[data-qid]").forEach(sel => {
        const qid = sel.getAttribute("data-qid");
        const savedValue = saved[qid];
        if (savedValue && savedValue !== 0) {
            sel.value = savedValue;
        } else {
            sel.value = "0";
        }
    });
}

/**
 * Saves the current form selections to Local Storage and updates the score.
 */
function saveDMI(showAlert = true) {
    const data = {};
    let total = 0;
    let answeredCount = 0;
    document.querySelectorAll("[data-qid]").forEach(sel => {
        const value = Number(sel.value);
        data[sel.getAttribute("data-qid")] = value;
        total += value;
        if (value > 0) answeredCount++;
    });

    // 1. Save department-specific answers (Persistence)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
    const percent = ((total / MAX_POSSIBLE_SCORE) * 100).toFixed(2);
    
    // 2. Store score for the Admin Dashboard
    const adminStore = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + "all") || "{}");
    adminStore[deptCode] = { 
        percent: parseFloat(percent), 
        total: total, 
        answered: answeredCount,
        maxScore: MAX_POSSIBLE_SCORE,
        updated: new Date().toISOString() 
    };
    localStorage.setItem(STORAGE_KEY_PREFIX + "all", JSON.stringify(adminStore));

    if (showAlert) {
        document.getElementById("saveStatus").textContent = "✅ Saved!";
        document.getElementById("saveStatus").classList.remove("d-none");
        setTimeout(() => {
             document.getElementById("saveStatus").classList.add("d-none");
        }, 1500);
    }
    
    return { total, percent, answeredCount };
}

function resetDMI() {
    if (!confirm(`Are you sure you want to reset all answers for the ${DMI_DEPARTMENTS[deptCode]}?`)) return;
    
    // 1. Remove department-specific data
    localStorage.removeItem(STORAGE_KEY);
    
    // 2. Update Admin Store (set score to 0/0)
    const adminStore = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + "all") || "{}");
    adminStore[deptCode] = { 
        percent: 0, 
        total: 0, 
        answered: 0,
        maxScore: MAX_POSSIBLE_SCORE,
        updated: new Date().toISOString() 
    };
    localStorage.setItem(STORAGE_KEY_PREFIX + "all", JSON.stringify(adminStore));

    // 3. Reload form and score
    renderQuestions(); 
}

/**
 * Calculates and updates the score summary and chart.
 * @param {boolean} isInteractive If true, automatically saves the selection.
 */
function updateScore(isInteractive) {
    let scoreData;
    if(isInteractive) {
        scoreData = saveDMI(false); // Interactive save
    } else {
        // Initial load/manual save update
        scoreData = saveDMI(false); // Recalculate and update persistence store
    }
    
    const { total, percent, answeredCount } = scoreData;
    const percentage = parseFloat(percent);

    document.getElementById("totalScoreText").textContent = total;
    document.getElementById("maxScoreText").textContent = MAX_POSSIBLE_SCORE;
    document.getElementById("answeredCount").textContent = answeredCount;
    document.getElementById("totalQuestions").textContent = TOTAL_QUESTIONS;
    
    const scoreText = percentage.toFixed(0) + "%";
    document.getElementById("scorePercentageCenter").textContent = scoreText;

    const level = MATURITY_BANDS.find(band => percentage >= band.range[0] && percentage <= band.range[1]);
    const levelName = level ? level.name : 'Unclassified';
    document.getElementById("maturityLevelText").innerHTML = `Maturity: <strong>${levelName}</strong>`;
    
    // Chart color logic
    let scoreColor;
    if (percentage >= 91) scoreColor = 'rgba(56, 142, 60, 1)'; // Optimized
    else if (percentage >= 76) scoreColor = 'rgba(0, 77, 156, 1)';  // Advanced
    else if (percentage >= 51) scoreColor = 'rgba(255, 165, 0, 1)'; // Managed
    else scoreColor = 'rgba(211, 47, 47, 1)'; // Basic/Ad-hoc

    // Draw chart
    const ctx = document.getElementById("deptChart").getContext('2d');
    if (currentChart) currentChart.destroy();
    
    currentChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: [scoreColor, 'rgba(224, 224, 224, 0.5)'],
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '80%', 
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
    });

    // Update the final report section content (for printing)
    generateFinalReportContent(percentage, total);
}

/**
 * Generates the full detailed report content for printing.
 */
function generateFinalReportContent(maturityPercentage, totalScore) {
    const detailedScoreBody = document.getElementById('detailedScoreBody');
    detailedScoreBody.innerHTML = ''; 

    const selections = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    
    let currentGroup = null;
    DEPT_QUESTIONS.forEach((qData, index) => {
        const score = parseInt(selections[qData.id] || 0);
        const qNumber = index + 1;

        if (qData.group !== currentGroup) {
            currentGroup = qData.group;
            const areaRow = detailedScoreBody.insertRow();
            areaRow.classList.add('area-row');
            const areaCell = areaRow.insertCell();
            areaCell.colSpan = 4; 
            areaCell.textContent = currentGroup;
            areaCell.classList.add('area-cell');
        }

        const row = detailedScoreBody.insertRow();
        row.insertCell().textContent = `Q${qNumber}`;
        
        const questionCell = row.insertCell();
        questionCell.textContent = qData.text;
        questionCell.classList.add('full-question');

        const scoreCell = row.insertCell();
        scoreCell.textContent = score > 0 ? score : 'N/A';
        scoreCell.classList.add('score-value');

        const selectedChoice = qData.choices.find(c => c.value === score);
        const answerCell = row.insertCell();
        answerCell.textContent = selectedChoice ? selectedChoice.text : 'No Answer';
    });
    
    const percentageText = maturityPercentage.toFixed(2) + "%";
    const level = MATURITY_BANDS.find(band => maturityPercentage >= band.range[0] && maturityPercentage <= band.range[1]);

    document.getElementById('reportDeptName').textContent = DMI_DEPARTMENTS[deptCode];
    document.getElementById('reportMaturityScore').textContent = percentageText;
    document.getElementById('reportTotalScore').textContent = totalScore;
    document.getElementById('reportMaxScore').textContent = MAX_POSSIBLE_SCORE;
    
    const levelTextElement = document.getElementById('reportMaturityLevel');
    levelTextElement.innerHTML = `<strong>${level ? level.name : 'Unclassified'}</strong><p>${level ? level.description : 'Please complete the assessment.'}</p>`;
}

// Initial call to render the page content
document.addEventListener('DOMContentLoaded', () => {
    if(requireLogin()) {
        renderQuestions();
    }
});