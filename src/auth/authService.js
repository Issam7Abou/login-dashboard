export const emailChecker = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(email.trim());
}

export const nameChecker = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name.trim());
}

export const ageChecker = (age) => {
    return age < 120 && age > 15;
}

export const countryChecker = (country) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(country.trim());
}

export const phoneChecker = (phone) => {
    const regex = /^9\d{8}$/;
    return regex.test(phone.trim());
}

export const passwordChecker = (password, confirmPassword) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s])\S{8,}$/;
    return regex.test(password) && regex.test(confirmPassword) && password === confirmPassword;
}