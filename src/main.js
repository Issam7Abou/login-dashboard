import { initLandingPage } from './ui/landingPage.js';
import { initRegistrationPage } from './ui/formHandler.js';
import { initLoginPage } from './ui/loginHandler.js';
import { getUserLoggedIn } from './storage/userDB.js';
import { setInitialPermissions } from './auth/userPermissions.js';
import { renderAdminUI } from './auth/userPermissions.js';

const path = window.location.pathname;
const userLoggedIn = getUserLoggedIn();

//redirect to correct page && handle login/registration
switch (true) {
    case path === '/' || path.includes('index.html'):
        initLandingPage();
        break;

    case path.includes('register.html'):
        initRegistrationPage();
        break;

    case path.includes('login.html'):
        initLoginPage();
        break;

    default:
        break;
}

// open dashboard initially if user is Logged in
if (userLoggedIn && !path.includes('dashboard.html')) {
    window.location.href = 'dashboard.html';
} else if (!userLoggedIn && path.includes('dashboard.html')) {
    window.location.href = 'index.html';
}

// set user permissions && render dashboard UI for admin/owner
setInitialPermissions();
renderAdminUI();