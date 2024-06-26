#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bgBlack.bold("welcome to currency exchange office"))


const currency: any = {
    USD: 1,
    EUR: 0.91,
    GBR: 0.79,
    INR: 74.57,
    PKR: 280
};

 let user_answer = await inquirer.prompt(
    [
    {
    name: "from",
    message: chalk.green.bold("Enter from currency"),
    type: 'list',
    choices: ["USD", "EUR", "GBR","INR","PKR"]
    },

    {
    name: "to",
    message:chalk.green.bold("Enter to currency"),
    type: 'list',
    choices: ["USD", "EUR", "GBR","INR","PKR"]
    },

    {
        name: "amount",
        message:chalk .green.bold ("Enter your amount"),
        type: "number",
    },
    

    ]

)


let fromamount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let amount = user_answer.amount
let baseamount = amount / fromamount
let convertedamount = baseamount * toamount
console.log(convertedamount);
