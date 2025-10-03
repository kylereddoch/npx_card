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
                    open("mailto:kylereddoch@proton.me");
                    console.log("\n Done! See you soon in the inbox. \n");
                }
            },
            {
                name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
                value: () => {
                    open('https://calendly.com/cybersec/30min');
                    console.log("\n See you at the meeting \n");
                }
            },
            {
                name: `View my ${chalk.hex('#a132f0').bold("Blog")}?`,
                value: () => {
                    open('https://kylereddoch.me');
                    console.log("\n Browsing Blog... \n");
                }
            },
            {
                name: `View my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open('https://cv.kylereddoch.me');
                    console.log("\n Browsing Resume... \n");
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
    name: purple("                           Kyle Reddoch"),
    handle: chalk.white("@cyberseckyle"),
    headline: chalk.black.bgCyan("Cybersecurity & IT Solutions Leader"),
    work: `${chalk.white("Head of MSP Solutions at")} ${chalk
        .hex("#2b82b2")
        .bold("Panhandle Computer Services")}`,
    mastodon: chalk.gray("https://infosec.exchange/") + chalk.cyan("@cyberseckyle"),
    github: chalk.gray("https://github.com/") + chalk.green("kylereddoch"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("kylereddoch"),
    web: chalk.yellow("https://profile.kylereddoch.me"),
    npx: chalk.red("npx") + " " + chalk.white("kylereddoch"),

    labelWork: chalk.white.bold("       Work:"),
    labelHeadline: chalk.white.bold("   Headline:"),
    labelMastodon: chalk.white.bold("   Mastodon:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:"),
    bio: chalk.italic("I am currently looking for new opportunities and to connect with\nlike-minded individuals. My inbox is always open; whether you have\na question, a collaboration idea, or just want to chat, I'll be\nhappy to talk to you!")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelHeadline}  ${data.headline}`,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelMastodon}  ${data.mastodon}`,
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
