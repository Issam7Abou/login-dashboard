import { getWeatherByCity } from "../api/weather.js";
import { getCityHour } from "../api/hourApi.js";

export const mountWeatherUI = async (city) => {
    const weatherData = await getWeatherByCity(city);
    console.log('mountWeather.js', weatherData);

    if (weatherData) {
        const iconImg = document.getElementById('imgWeather');
        const tempTag = document.getElementById('temperature');
        const windTag = document.getElementById('wind');
        const timezoneTag = document.getElementById('timezone');

        tempTag.innerText = `${weatherData.current_weather.temperature}°C`;
        windTag.innerText = `${weatherData.current_weather.windspeed}km/h`;
        timezoneTag.innerHTML = weatherData.timezone_abbreviation;  
        
        //extract hour from date format
        const hour = await getCityHour(city);
        const hourDate = hour.time;
        const [hourStr, minuteStr] = hourDate.split(':');
        const hours = parseInt(hourStr, 10);

        //if city is night puts night.icon and returns
        if (hours >= 19 || hours < 6) {
            iconImg.src = './src/utils/night.png';
            return;
        }

        // Mapeamento de códigos de tempo para ícones
        const weatherIcons = {
            0: './src/utils/sunny.png',      
            1: './src/utils/sunny.png',      
            2: './src/utils/cloudy.png',     
            3: './src/utils/cloudy.png',     
            45: './src/utils/cloudy.png',    
            48: './src/utils/cloudy.png',    

            51: './src/utils/cloudyWithRain.png', 
            53: './src/utils/cloudyWithRain.png', 
            55: './src/utils/cloudyWithRain.png', 
            56: './src/utils/cloudyWithRain.png', 
            57: './src/utils/cloudyWithRain.png', 

            61: './src/utils/cloudyWithRain.png', 
            63: './src/utils/cloudyWithRain.png', 
            65: './src/utils/heavyRain.png',      
            66: './src/utils/cloudyWithRain.png', 
            67: './src/utils/heavyRain.png',      

            80: './src/utils/cloudyWithRain.png', 
            81: './src/utils/cloudyWithRain.png', 
            82: './src/utils/heavyRain.png',      

            95: './src/utils/storm.png',          
            96: './src/utils/storm.png',          
            99: './src/utils/storm.png'  
        }
        const weatherCode = weatherData.current_weather.weathercode;
        iconImg.src = weatherIcons[weatherCode];
    }
}