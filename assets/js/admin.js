// assets/js/admin.js

let overallDoughnut = null;
let overallBarChart = null; // Changed from overallChart to overallBarChart for clarity

/**
 * Collects all department scores from Local Storage.
 */
function getAllDepartmentScores() {
    const adminStore = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + "all") || "{}");
    const scores = [];
    let companyTotalPercentage = 0;
    let departmentsCounted = 0;

    for (const user of DMI_USERS_LIST) {
        if (user.role === 'dept') {
            const deptCode = user.deptCode;
            const maxQuestions = DMI_MAX_SCORES[deptCode] ? DMI_MAX_SCORES[deptCode].totalQuestions : 0;
            const scoreData = adminStore[deptCode] || { percent: 0, total: 0, answered: 0, maxScore: DMI_MAX_SCORES[deptCode] ? DMI_MAX_SCORES[deptCode].maxScore : 0 };
            const percentage = scoreData.percent || 0;
            
            if (scoreData.answered === maxQuestions && maxQuestions > 0) {
                 // Only count fully answered assessments towards the company average
                companyTotalPercentage += percentage;
                departmentsCounted++;
            }

            scores.push({
                deptCode: deptCode,
                department: DMI_DEPARTMENTS[deptCode],
                username: user.username,
                totalScore: scoreData.total,
                answered: scoreData.answered,
                percentage: percentage.toFixed(2)
            });
        }
    }
    
    const overallDMI = departmentsCounted > 0 ? companyTotalPercentage / departmentsCounted : 0;

    return { scores, overallDMI: overallDMI.toFixed(2), departmentsCounted };
}

/**
 * Determines the primary color of the score slice based on the percentage achieved.
 */
function getColorByScore(percentage) {
    if (percentage >= 91) return 'rgba(56, 142, 60, 1)'; // Optimized (Level 5)
    if (percentage >= 76) return 'rgba(0, 77, 156, 1)';  // Advanced (Level 4)
    if (percentage >= 51) return 'rgba(255, 165, 0, 1)'; // Managed (Level 3)
    return 'rgba(211, 47, 47, 1)'; // Basic (Level 2) or Ad-hoc (Level 1)
}


/**
 * Renders the Admin Dashboard elements.
 */
function loadAdminDashboard() {
    if (!requireLogin(true)) return; 

    document.getElementById('welcomeMessage').textContent = `Welcome, Admin User!`;
    
    const { scores, overallDMI, departmentsCounted } = getAllDepartmentScores();
    
    document.getElementById('overallDMIValue').textContent = `${overallDMI}%`;
    document.getElementById('deptCount').textContent = `Based on ${departmentsCounted} / ${Object.keys(DMI_DEPARTMENTS).length} completed assessments.`;

    // Render Department List
    const tableBody = document.getElementById('departmentTableBody');
    tableBody.innerHTML = '';
    
    scores.sort((a, b) => b.percentage - a.percentage).forEach(score => {
        const totalQuestions = DMI_MAX_SCORES[score.deptCode].totalQuestions;
        const row = tableBody.insertRow();
        row.insertCell().textContent = score.department;
        
        const percentCell = row.insertCell();
        percentCell.textContent = `${score.percentage}%`;
        percentCell.style.color = getColorByScore(parseFloat(score.percentage));
        percentCell.style.fontWeight = 'bold';
        
        row.insertCell().textContent = `${score.answered} / ${totalQuestions}`;
    });
    
    // Generate Overall Company Charts
    generateOverallDoughnutChart(parseFloat(overallDMI));
    generateOverallBarChart(scores);
}

/**
 * Generates the Overall Company Doughnut Chart (Tasheer Final DMI).
 */
function generateOverallDoughnutChart(overallPercentage) {
    if (overallDoughnut) {
        overallDoughnut.destroy();
    }
    
    const scoreColor = getColorByScore(overallPercentage);
    
    const data = {
        datasets: [{
            data: [overallPercentage, 100 - overallPercentage],
            backgroundColor: [scoreColor, 'rgba(224, 224, 224, 0.5)'],
            borderWidth: 0,
        }]
    };
    
    const ctx = document.getElementById('overallDoughnutChart').getContext('2d');
    overallDoughnut = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '70%', 
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
    });
}

/**
 * Generates the Admin Dashboard Bar Chart (Department Comparison).
 */
function generateOverallBarChart(scores) {
    if (overallBarChart) {
        overallBarChart.destroy();
    }
    
    const sortedScores = scores.sort((a, b) => b.percentage - a.percentage);
    const labels = sortedScores.map(s => DMI_DEPARTMENTS[s.deptCode]);
    const dataPoints = sortedScores.map(s => parseFloat(s.percentage));
    const colors = dataPoints.map(getColorByScore);

    const chartData = {
        labels: labels,
        datasets: [{
            label: 'DMI Score (%)',
            data: dataPoints,
            backgroundColor: colors,
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('adminDMIChart').getContext('2d');
    overallBarChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 100, title: { display: true, text: 'Digital Maturity Index (%)' } },
                x: { display: true }
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Department DMI Comparison' }
            }
        }
    });
}