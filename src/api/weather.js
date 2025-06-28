// converts City to coordenates
export const fetchCoords = async (cityName) => {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`);
    const data = await res.json();
    return data.results[0];
}

// gets weather data with coordenates
const fetchWeather = async (lat, lon) => {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    return await res.json();
}

// gets cityname ----> weather data
export const getWeatherByCity = async (cityName) => {
    try {
        const location = await fetchCoords(cityName);
        if (!location) throw new Error('City Not Found!');

        const { latitude, longitude } = location;

        const weatherData =  await fetchWeather(latitude, longitude);
        return weatherData;
    } catch (error) {
        console.error(error);
    }
}