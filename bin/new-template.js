#!/usr/bin/env node
const fs = require('fs');
const gradient = require('gradient-string');
const { execSync } = require('child_process');
const { default: inquirer } = require('inquirer');
const createSpinner = require('nanospinner').createSpinner;

console.log(gradient('grey', 'white')('---------------------------------------------------------\n'));
const welcomeMessage = gradient('cyan', 'pink')('           Welcome Developer');
console.log(gradient('grey', 'white')('---------------------------------------------------------'));
console.log(welcomeMessage);
console.log(`---------------------------------------------------------`);

let reactNativeArt = [
  `
  ██████╗░███████╗░█████╗░░█████╗░████████╗  ███╗░░██╗░█████╗░████████╗██╗██╗░░░██╗███████╗
  ██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝  ████╗░██║██╔══██╗╚══██╔══╝██║██║░░░██║██╔════╝
  ██████╔╝█████╗░░███████║██║░░╚═╝░░░██║░░░  ██╔██╗██║███████║░░░██║░░░██║╚██╗░██╔╝█████╗░░
  ██╔══██╗██╔══╝░░██╔══██║██║░░██╗░░░██║░░░  ██║╚████║██╔══██║░░░██║░░░██║░╚████╔╝░██╔══╝░░
  ██║░░██║███████╗██║░░██║╚█████╔╝░░░██║░░░  ██║░╚███║██║░░██║░░░██║░░░██║░░╚██╔╝░░███████╗
  ╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░  ╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░╚═╝░░░╚══════╝
  
  ░█████╗░░░░███████╗███████╗
  ██╔══██╗░░░╚════██║██╔════╝
  ██║░░██║░░░░░░░██╔╝██████╗░
  ██║░░██║░░░░░░██╔╝░╚════██╗
  ╚█████╔╝██╗░░██╔╝░░██████╔╝
  ░╚════╝░╚═╝░░╚═╝░░░╚═════╝░  New Template By Karthi Keyan
  `
];

let reactNativeStyled = reactNativeArt.map(line => gradient('green', 'green')(line)).join('\n');
console.log(reactNativeStyled);

const getDirectoryName = async () => {
    const { projectName } = await inquirer.prompt({
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        default: 'MyApp',
    });
    return projectName;
};

const checkDirectory = async () => {
    let projectDirectory;
    do {
        projectDirectory = await getDirectoryName();
        if (fs.existsSync(projectDirectory)) {
            const { replace } = await inquirer.prompt({
                type: 'confirm',
                name: 'replace',
                message: `The directory "${projectDirectory}" already exists. Do you want to replace it?`,
                default: false,
            });
            if (replace) {
                fs.rmSync(projectDirectory, { recursive: true, force: true }); // Remove the existing directory
            } else {
                console.log('Please choose a different directory name.');
                projectDirectory = null; // Reset to prompt again
            }
        }
    } while (!projectDirectory);
    return projectDirectory;
};

const questions = [
    {
        type: 'list',
        name: 'packageManager',
        message: 'Which package manager would you like to use?',
        choices: ['yarn', 'npm', 'bun', 'pnpm'],
        default: 'yarn',
    },
    {
        type: 'confirm',
        name: 'skipGitInit',
        message: 'Would you like to skip Git initialization?',
        default: false,
    }
];

const initProject = async () => {
    const projectDirectory = await checkDirectory();
    const { packageName, skipGitInit, packageManager } = await inquirer.prompt(questions);
    const spinner = createSpinner(`Creating project ${projectDirectory}...`, {
        color: 'green',
        frames: true,
    }).start();
    const APP_VERSION = "0.75.2"
    const gitInitOption = skipGitInit ? '--skip-git-init' : '';
    const query = `npx @react-native-community/cli@latest init ${projectDirectory} --template rn-template-by-karthi --version ${APP_VERSION} --pm ${packageManager} ${gitInitOption}`;
    
    try {
        execSync(query, { stdio: 'inherit' });
        spinner.success({
            text: `Project "${projectDirectory}" created successfully in ${process.cwd()}/${projectDirectory}!`,
        });
    } catch (error) {
        spinner.error({
            text: 'Project Creation Failed',
        });
    }
};

initProject();
