const gradient = require('gradient-string');
const { execSync } = require('child_process');
const { default: inquirer } = require('inquirer');
const createSpinner  = require('nanospinner').createSpinner
console.log(gradient('grey', 'white')('---------------------------------------------------------\n'));
const welcomeMessage = gradient('cyan', 'pink')('           Wᴇʟᴄᴏᴍᴇ Dᴇᴠᴇʟᴏᴘᴇʀ')
console.log(gradient('grey', 'white')('---------------------------------------------------------'));
console.log(welcomeMessage);
console.log(`---------------------------------------------------------`);
console.log(`
    
    `);

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

const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: 'MyApp',
    }
  ];

inquirer.prompt(questions).then((answers)=>{
 const { projectName } = answers;
 const spinner = createSpinner(`Creating project "${projectName}"...`, {
    color: 'green',
    frames: true,
 }).start()
 execSync(
    `npx react-native init ${projectName} --template my-react-native-cli`,
    { stdio: 'inherit' }
  );
  spinner.success({
    text: `Project "${projectName}" created successfully!`,
  })
});