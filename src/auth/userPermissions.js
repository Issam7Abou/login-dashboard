import { getUserData } from "../storage/userDB.js";
import { deleteUser } from "../storage/userDB.js";
import { getUserLoggedIn } from "../storage/userDB.js";
import { usersInitialPermissions } from "../storage/userDB.js";
import { setUserPermission } from "../storage/userDB.js";
import { getUserPermissions } from "../storage/userDB.js";
import { deleteUserPermission } from "../storage/userDB.js";
import { adminUI } from "../ui/adminDashboard.js";

const userLoggedIn = getUserLoggedIn();
const usersData = getUserData();

export const setInitialPermissions = () => {
    if (usersInitialPermissions()) return;

    const OWNER_EMAIL = 'issamstt@gmail.com';
    const ADMIN_EMAIL = 'admin99@gmail.com';
    let userPermissions = {};

    if (usersData) {
        for (const email in usersData) {
            if (email === OWNER_EMAIL) {
            userPermissions[email] = 'owner';
            } else if (email === ADMIN_EMAIL) {
                userPermissions[email] = 'admin';
            } else {
                userPermissions[email] = 'user';
            }
        }     
        usersInitialPermissions(userPermissions);
    }
}

export const renderAdminUI = () => {
    const isLoggedIn = getUserLoggedIn();
    if (!isLoggedIn) return;

    const userLoggedEmail = isLoggedIn.email;
    const userLoggedPermission = getUserPermissions(userLoggedEmail);
    if (userLoggedPermission === 'admin' || userLoggedPermission === 'owner') {
        adminUI(usersData);
    }
}

export const initDeleteUser = (userEmail) => {
    if (userLoggedIn.email === userEmail) return;
    deleteUser(userEmail);
    deleteUserPermission(userEmail);
    adminUI(usersData);
    location.reload();
}

export const updateUserAccess = (userEmail, permission) => {
    setUserPermission(userEmail, permission);
    adminUI(usersData);
    if (userLoggedIn.email === userEmail && getUserPermissions(userEmail) === 'user') location.reload();
}