// adding the packages needed for this application to run 
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('util')
const writeFileSync = utils.promisify(fs.writeFile)
const generateMarkdown = require('./utils/generateMarkdown');


// an array that will store all the questions for the user 
const questions = [
    {
        type:'input',
        message:'What is your GitHub username?',
        name:'userGitHub'
    },
    {
        type:'input',
        message:'What is your email address?',
        name:'userEmail'
    },
    {
        type:'input',
        message:'What is the title of the project/application?',
        name:'userTitle'
    },
    {
        type:'input',
        message: 'Please give a short description about your project/application?',
        name:'userDescription'
    },
    {
        type:'list',
        message:'What Licenses should your project/application have?',
        choices:['MIT', 'Apache 2.0', 'EPL 1.0', 'BSD 3', 'None'],
        name:'userLicense'
    },
    {
        type:'input',
        message:'What command should be used to install your dependencies?',
        default: 'npm i',
        name:'userInstall'
    },
    {
        type:'input',
        message:'What command should be used to run test?',
        default: 'npm run test',
        name:'userTest'
    },
    {
        type:'input',
        message:'What does the user need to know about using your repo?',
        name:'userRepo'
    },
    {
        type:'input',
        message:'What does the user need to know about contributing to your repo?',
        name:'userContribute'
    }
];

// function created to initialize the readme generator
const init = () => {

// calls the inquirer package 
inquirer

// prompts the questions for the user
    .prompt(questions)

// after creates a new file named "README.md" and creates a layout based off the generateMarkdown function 
    .then((response) => writeFileSync('README.md', generateMarkdown(response)))

// if everything is ok console log "file was created"   
    .then (() => console.log('file was created!'))

// if not console log the error
    .catch((err) => console.log(err)) 



}


// Function call to initialize app
init();
