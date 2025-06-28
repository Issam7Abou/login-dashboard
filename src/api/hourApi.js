import { fetchCoords } from "./weather.js";

export const getCityHour = async (city) => {
    try {
        const cityInfo = await fetchCoords(city);
        const timezone = cityInfo.timezone;
        if (!cityInfo || !cityInfo.timezone) throw new Error('Timezone not Found.');

        const res = await fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=${encodeURIComponent(timezone)}`);
        if (!res.ok) throw new Error('Erro ao buscar hora.');
        const cityHour = await res.json();
        return cityHour;
    } catch (err) {
        console.error(err);
    }
}