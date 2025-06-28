export const passwordGenerator = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '|!"#$%&/()=?»`*ª^_:;';

    let password = '';
    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 3) + 1;
        randomNum === 1 && (password += letters[Math.floor(Math.random() * letters.length)]);
        randomNum === 2 && (password += numbers[Math.floor(Math.random() * numbers.length)]);
        randomNum === 3 && (password += symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return password;
}

export const passGenRender = () => {
    const pass = passwordGenerator();

    const inputPassword = document.getElementById('inputPassword');
    inputPassword.innerText = pass;
}