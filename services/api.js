import { state } from "./state.js";

export async function fetchRates(cr = "USD")  {
    let urlAPI = `https://v6.exchangerate-api.com/v6/03764fa9e8713039aea82bd3/latest/${cr}`;
    try {
        const res = await fetch(urlAPI);
        if(!res.ok) {
            throw new Error("Failed to fetch exchange rate");
            return;
        }
        const data = await res.json();
        state.base  = data.base_code;
        state.rates = data.conversion_rates;
        state.lastUpdate = data.time_last_update_utc;
        return data;
    }catch(err){
        console.log(`Error fetching rates : ${err}`);
        throw err;
    }
}