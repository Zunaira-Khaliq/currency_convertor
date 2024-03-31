#! /usr/bin/env node
import inquirer from "inquirer";
const currency_rates = {
    PKR: 0.0029,
    USD: 1,
    EUR: 0.84,
    GBP: 0.72,
    TL: 9.25,
};
export default async function Home() {
    const convertCurrency = async () => {
        let answers = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to convert:"
            },
            {
                name: "myCurrency",
                type: "list",
                message: "Choose the source currency:",
                choices: Object.keys(currency_rates)
            },
            {
                name: "conCurrency",
                type: "list",
                message: "Choose the target currency:",
                choices: Object.keys(currency_rates)
            },
        ]);
        const { amount, myCurrency, conCurrency } = answers;
        const convertedAmount = parseFloat(amount) * currency_rates[myCurrency] / currency_rates[conCurrency];
        console.log(`${amount} ${myCurrency} is equal to ${convertedAmount.toFixed(2)} ${conCurrency}`);
        return `${amount} ${myCurrency} is equal to ${convertedAmount.toFixed(2)} ${conCurrency}`;
    };
    const result = await convertCurrency();
    return result;
}
;
console.log(Home());
