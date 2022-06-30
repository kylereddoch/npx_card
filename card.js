#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const purple = chalk.hex('#a132f0'); // Purple (blue-magenta) color
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:kylereddoch@me.com");
                    console.log("\n Done! See you soon in the inbox. \n");
                }
            },
            {
                name: `View my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open('https://kylereddoch.me/online-cv/');
                    console.log("\n Browsing Resume... \n");
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/kyle_reddoch/30min');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("\n See you next time! \n");
                }
            }
        ]
    }
];

const data = {
    name: purple("                    Kyle Reddoch"),
    handle: chalk.white("@kylereddoch"),
    work: chalk.black.bgCyan("Software Engineer // Developer"),
    /*work: `${chalk.white("Lead Software Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("FootLoose Labs")}`,*/
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("winphankyle"),
    github: chalk.gray("https://github.com/") + chalk.green("kylereddoch"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("kylereddoch"),
    web: chalk.yellow("https://direct.me/kylereddoch"),
    npx: chalk.red("npx") + " " + chalk.white("kyle"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
    bio: chalk.italic("I am currently looking for new opportunities to\nconnect with fellow programmers. My inbox is always\nopen; whether you have a question, a collaboration\nidea, or just want to chat, I'll be happy to talk\nto you!")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${data.bio}`
        /*``,
        `${chalk.italic(
            "I am currently looking for new opportunities,"
        )}`,
        `${chalk.italic("my inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`*/
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "#a132f0"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
