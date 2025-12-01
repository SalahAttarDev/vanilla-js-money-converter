import { state } from '../services/state.js';
import { fetchRates  } from '../services/api.js';
export const elems = {
    inputs: {
        amount: document.getElementById("amount"),
    },
    selects: {
        from: document.getElementById("from"),
        to: document.getElementById("to"),
        selects: document.querySelectorAll(".currency-select")
    },
    buttons: {
        convert: document.getElementById("convert-btn"),
    },
    containers: {
        result: document.getElementById("result"),
        wrapper: document.querySelector(".converter-box"),
    }
};



export  function renderCurrencyOptions() {
    const options = Object.keys(state.rates)
                    .map(code  => `<option value="${code}">${code}</option>`).join("");
    elems.selects.selects.forEach(sel => sel.innerHTML = options);
}

export async function renderConversion() {
    const from = elems.selects.from.value;
    const to = elems.selects.to.value;
    const resultBox = elems.containers.result;
    const amount = elems.inputs.amount.value ;
    if(!state.rates[from] || !state.rates[to]) {
        resultBox.textContent = "Invalid currency selection";
        return;
    }
    const rate = state.rates[to] / state.rates[from];
    const converted = (amount * rate).toFixed(2);
    resultBox.textContent = `${amount} ${from} = ${converted} ${to}`;
}