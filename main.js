import { renderConversion, renderCurrencyOptions , elems } from './components/render.js';
import { fetchRates } from './services/api.js';
import { showNotification } from './other/notification.js';
async function init() {    
    try {
        await fetchRates();
        renderCurrencyOptions();
        await renderConversion();
    }catch(err) {
        elems.containers.result.textContent = "Failed to load data";
    }
}
elems.selects.from.addEventListener("change" , renderConversion);
elems.selects.to.addEventListener("change" , renderConversion);
elems.buttons.convert.addEventListener("click" , ()=> { 
const amount = elems.inputs.amount.value.trim();
   if (amount === "") {
        showNotification("error", "Input cannot be empty");
        return;
    }
    if (isNaN(amount)) {
        showNotification("error", "Input must be a number");
        return;
    }
    renderConversion();
    showNotification("success" , "Conversion successfully" )
});


init();