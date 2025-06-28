import { formAuthentication } from "../auth/registerAuth.js";
import { formatUserData } from "../storage/dataFormatter.js";
import { setUserPermission } from "../storage/userDB.js";

export const initRegistrationPage = () => {
    const form = document.getElementById('register-form');
    if(!form) return;

    form.addEventListener('submit', async (e)=> {
        e.preventDefault();

        const formData = new FormData(form);
        const userData = Object.fromEntries(formData.entries());
        const result = await formAuthentication(userData);

        if (result.success) {
            alert('Registration was Successful');
            formatUserData(userData);
            setUserPermission(userData.email, 'user');
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message);
        }
    })
}