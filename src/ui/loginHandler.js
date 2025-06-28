import { loginAuthentication } from "../auth/loginAuth.js";

export const initLoginPage = () => {
    console.log('estamos no login');

    const formLogin = document.getElementById('login-form');
    if(!formLogin) return;

    formLogin.addEventListener('submit', async (e)=> {
        e.preventDefault();
        console.log('form submitted');
        
        const formData = new FormData(formLogin);
        const loginData = Object.fromEntries(formData.entries());
        const result = await loginAuthentication(loginData);

        if (result.success) {
            alert('Login was Successful');
            window.location.href = 'dashboard.html';
        } else {
            alert(result.message);
        }
    })
}