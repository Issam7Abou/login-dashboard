import { getUserLoggedIn } from "../storage/userDB.js";

//gets flagLink of currentUser logged in
export const getCountryFlag = async () => {
    const userData = getUserLoggedIn();
    const userCountry = userData.country;

    const response = await fetch(`https://restcountries.com/v3.1/name/${userCountry}`);
    const data = await response.json();
    return data[0].flags.png;
}

export const countryChecker = async (userCountry) => {
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=name`);
    const data = await response.json();
    const countryNames = data.map(country => country.name.common);

    return countryNames.some(
        country => country.toLowerCase() === userCountry.toLowerCase()
    );
}