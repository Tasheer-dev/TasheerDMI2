// assets/js/auth.js

/**
 * Handles user login attempt.
 */
function login(event) {
    event.preventDefault();
    const u = document.getElementById("username").value.trim().toLowerCase();
    const p = document.getElementById("password").value;
    const msg = document.getElementById("loginMessage");

    const user = DMI_USERS_MAP[u];

    if (!user || user.password !== p) {
        msg.textContent = "Invalid username or password.";
        msg.classList.remove("d-none");
        return;
    }

    // store session in sessionStorage
    sessionStorage.setItem("dmi_logged_in", "true");
    sessionStorage.setItem("dmi_username", user.username);
    sessionStorage.setItem("dmi_role", user.role);
    if (user.deptCode) sessionStorage.setItem("dmi_dept", user.deptCode);
    
    // route
    if (user.role === "admin") {
        window.location.href = "dashboard.html";
    } else {
        window.location.href = "dmi_form.html";
    }
}

/**
 * Checks session and redirects if not logged in.
 * @param {boolean} adminRequired If true, redirects if the user is not an Admin.
 */
function requireLogin(adminRequired = false) {
    const isLogged = sessionStorage.getItem("dmi_logged_in") === "true";
    const userRole = sessionStorage.getItem("dmi_role");

    if (!isLogged) {
        window.location.href = "index.html"; // Redirect to login page
        return false;
    }

    if (adminRequired && userRole !== "admin") {
        alert("Access Denied: Only administrators can view this page.");
        window.location.href = "dmi_form.html"; // Redirect to department page
        return false;
    }
    
    // If logged in and on the login page (index.html), redirect to the dashboard
    if (window.location.pathname.endsWith('index.html') && isLogged) {
        window.location.href = userRole === 'admin' ? 'dashboard.html' : 'dmi_form.html';
        return false;
    }

    return true;
}

/**
 * Logs out the current user and redirects to the login page.
 */
function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}