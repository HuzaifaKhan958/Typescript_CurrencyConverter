import inquirer from "inquirer";
const USDtoPKR = 228.43;
const PKRtoUSD = 0.0044;
const EUROtoPKR = 239.85;
const PKRtoEURO = 0.0042;
const EUROtoUSD = 1.05;
const USDtoEURO = 0.95;
let repeat = false;
async function converter() {
    do {
        let answer = await inquirer.prompt([
            {
                name: "CurrencyFrom",
                type: "list",
                choices: ["USD", "PKR", "EURO"],
                message: "Select from which currency you want to convert: ",
            },
            {
                name: "CurrencyTo",
                type: "list",
                choices: ["USD", "PKR", "EURO"],
                message: "Select to which currency you want to convert: ",
            },
            {
                name: "Ammount",
                type: "number",
                message: "Select your ammount: ",
            },
        ]);
        switch (answer.CurrencyFrom) {
            case "USD":
                if (answer.CurrencyTo === "PKR") {
                    let ammount = answer.Ammount * USDtoPKR;
                    console.log(ammount);
                }
                else if (answer.CurrencyTo === "EURO") {
                    let ammount = answer.Ammount * USDtoEURO;
                    console.log(ammount);
                }
                else {
                    console.log(answer.Ammount);
                }
                break;
            case "PKR":
                if (answer.CurrencyTo === "USD") {
                    let ammount = answer.Ammount * PKRtoUSD;
                    console.log(ammount);
                }
                else if (answer.CurrencyTo === "EURO") {
                    let ammount = answer.Ammount * PKRtoEURO;
                    console.log(ammount);
                }
                else {
                    console.log(answer.Ammount);
                }
                break;
            case "EURO":
                if (answer.CurrencyTo === "PKR") {
                    let ammount = answer.Ammount * EUROtoPKR;
                    console.log(ammount);
                }
                else if (answer.CurrencyTo === "USD") {
                    let ammount = answer.Ammount * EUROtoUSD;
                    console.log(ammount);
                }
                else {
                    console.log(answer.Ammount);
                }
                break;
        }
        repeat = await Repeat();
    } while (repeat == true);
}
async function Repeat() {
    let again = await inquirer.prompt([
        {
            name: "repeat",
            type: "list",
            choices: ["y", "n"],
            message: "Do you want to repeat: ",
        }
    ]);
    return again.repeat === "y" ? true : false;
}
converter();
