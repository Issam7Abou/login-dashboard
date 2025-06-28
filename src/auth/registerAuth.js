import { emailChecker } from "./authService.js";
import { nameChecker } from "./authService.js";
import { ageChecker } from "./authService.js";
import { phoneChecker } from "./authService.js";
import { passwordChecker } from "./authService.js";
import { countryChecker } from "../api/countriesApi.js";

export const formAuthentication = async (userData) => {
    
    if (!emailChecker(userData.email)) {
        return {success: false, message: 'The Email provided is invalid'}
    }
    if (!nameChecker(userData.name)) {
        return {success: false, message: 'The name provided is invalid'}
    }    
    if (!ageChecker(userData.age)) {
        return {success: false, message: 'The age provided is invalid'}
    }
    if (!(await countryChecker(userData.country))) {
        return {success: false, message: 'The country provided is invalid'}
    }
    if (!phoneChecker(userData.phone)) {
        return {success: false, message: 'The phone provided is invalid'}
    }
    if (!passwordChecker(userData.password, userData.confirmPassword)) {
        return {success: false, message: 'The password provided is invalid'}
    }
    
    return {success: true};
}