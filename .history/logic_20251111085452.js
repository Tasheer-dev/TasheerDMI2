// ===========================================================================
// logic.js - Frontend Digital Maturity Assessment Logic (Fully Documented)
//
// Purpose:
// - Handles application initialization and UI state.
// - Manages user interactions (e.g., saving, randomization).
// - Implements critical fixes for Print/PDF generation (comments, multi-page).
// - Controls the flow between the Assessment form and the Final Report.
// ===========================================================================

// --- Global Chart References ---
// These variables store the live Chart.js objects so they can be manipulated 
// (updated or destroyed/rebuilt) dynamically.
let liveMaturityChartInstance;
let areaBarChartInstance;


// --- 1. Initialization and Loaders ---

/**
 * Entry point: Called by <body onload>. Initializes all data structures and UI components.
 */
function initAssessmentPage() {
    // 1. [TO DO] Load/fetch initial assessment data (e.g., questions, user session)
    // 2. [TO DO] Dynamically render the full question set into #assessmentForm
    // 3. [TO DO] Initialize the live score Chart.js instance (liveMaturityChartInstance)
    
    // Once loading is logically complete, hide the page overlay.
    hideLoader();
    
    // FIX: Removes the unwanted static prompt from the subtitle if it exists.
    const subTitleEl = document.getElementById('assessmentSubTitle');
    if (subTitleEl && subTitleEl.textContent) {
        // This targets and removes any extraneous text that was hardcoded or previously added.
        subTitleEl.textContent = subTitleEl.textContent.replace('— Please answer all questions.', '').trim();
    }
}

/**
 * Hides the fixed page loader element by fading it out.
 */
function hideLoader() {
    const el = document.getElementById('pageLoader');
    if (!el) return;
    el.classList.add('fade-out'); // Assuming CSS handles the smooth transition
    // Set a timeout to remove the element entirely from flow after transition
    setTimeout(() => { el.style.display = 'none'; }, 450); 
}


// --- 2. Assessment & Report Flow ---

/**
 * Called when the user clicks the "Finalize Assessment" button.
 * Triggers score calculation and transitions the view to the final report.
 */
function finalizeAssessment() {
    // 1. [TO DO] Perform final score calculations (total, domain scores, classification)
    
    // 2. CRITICAL STEP: Prepare comments for print/PDF BEFORE any UI changes or report generation
    copyCommentsToPrintMirror();
    
    // 3. Toggle UI: Hide the form and show the report section
    // [TO DO] Logic to hide the assessment form wrapper (e.g., using display:none or a class)
    document.getElementById('reportSection').style.display = 'block';

    // 4. [TO DO] Populate report fields (e.g., #maturityScoreDisplay, #maturityLevelText, #detailedScoreBody)

    // 5. [TO DO] Update the Chart.js instances with final calculated data
}

/**
 * Toggles the UI back from the report view to the assessment form view.
 */
function backToAssessment() {
    document.getElementById('reportSection').style.display = 'none';
    // [TO DO] Logic to show the assessment form wrapper again
}


// --- 3. Print and PDF Fixes ---

/**
 * [CRITICAL PRINT FIX] Copies the text from the editable #finalReportComments textarea
 * to the hidden #finalReportCommentsPrint div. 
 * This is essential for printing/PDF to capture ALL of the user's input, 
 * overcoming browser limitations with form element printing.
 */
function copyCommentsToPrintMirror() {
    const commentsTextarea = document.getElementById('finalReportComments');
    const commentsPrintDiv = document.getElementById('finalReportCommentsPrint');
    
    if (commentsTextarea && commentsPrintDiv) {
        // Use textContent to preserve line breaks and spacing within the static print div
        commentsPrintDiv.textContent = commentsTextarea.value;
    }
}

/**
 * [ADVANCED PDF FIX] Generates a multi-page PDF report.
 * Uses html2canvas to render the entire report section into a single image, 
 * and jsPDF to slice that image across multiple pages if the content overflows A4 height.
 */
function generatePDF() {
    // 1. Prepare Content and Redraw Charts
    copyCommentsToPrintMirror(); 
    if (areaBarChartInstance) {
        // Ensure the chart is rendered with the final data before html2canvas captures it
        areaBarChartInstance.update(); 
    }

    const element = document.getElementById('reportSection');
    
    // Use html2canvas to convert the report section into an image canvas
    html2canvas(element, { 
        scale: 2, // Use scale 2 for high resolution and clear text/graphics
        logging: false,
    }).then(canvas => {
        const { jsPDF } = window.jspdf;
        const imgData = canvas.toDataURL('image/jpeg', 0.95); // Convert canvas to JPEG data URL
        
        // Initialize jsPDF: 'l' (landscape), 'mm' (units), 'a4' (size)
        const pdf = new jsPDF('l', 'mm', 'a4'); 
        const pdfWidth = 297; // A4 landscape width in mm
        const pdfHeight = 210; // A4 landscape height in mm
        
        // Calculate image dimensions scaled to fit the PDF width
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0; // Top position of the image on the PDF page

        // Add the first page
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Loop to add remaining pages by slicing the large image
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight; // Calculate the new position (negative offset)
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save('DMI_Assessment_Report.pdf');
    });
}


// --- 4. Utility Functions (Stubbed for completeness) ---

function openEvidenceFolder() {
    // [TO DO] Logic for accessing the evidence upload folder/system
    console.log("Evidence folder functionality called.");
}

function randomizeSelections() {
    // [TO DO] Function for testing/training: Fills form with random, valid selections
    console.log("Randomizing selections for testing...");
}

function resetAllSelections() {
    // [TO DO] Clears all selected options and resets scores to zero
    console.log("Resetting all selections...");
}

function logout() {
    // [TO DO] Clears user session data and redirects to login page
    console.log("Logging out user...");
}