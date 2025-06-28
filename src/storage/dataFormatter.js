import { setToLocalStorage } from "./userDB.js";

export const formatUserData = (userData) => {
    const user = {
        email: userData.email,
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        country: userData.country,
        phone: userData.phone,
        password: userData.password
    }
    setToLocalStorage(user);
} 