import { getUserData } from "../storage/userDB.js";
import { userLoggedIn } from "../storage/userDB.js";

export const loginAuthentication = async (loginData) => {
    const loginEmail = loginData.email;
    const loginPassword = loginData.password;

    const databaseUser = getUserData(loginEmail);
    const userEmail = databaseUser.email;
    const userPassword = databaseUser.password;

    if (loginEmail === userEmail && loginPassword === userPassword) {
        userLoggedIn(databaseUser);
        return {success: true};
    } else {
        return { success: false, message: 'Email or Password incorrect' };
    }
}