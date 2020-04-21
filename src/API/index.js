import axios from 'axios';

const URL = "https://covid19.mathdro.id/api";

export const getCardsData = async (country) => {
    let cardsDataUrl = URL;
    if (country) {
        cardsDataUrl = `${URL}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(cardsDataUrl)
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        return error;
    }
}

export const getChartData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
}

export const getCountriesData = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`)
        return countries;
    } catch (error) {
        return error;
    }
}
