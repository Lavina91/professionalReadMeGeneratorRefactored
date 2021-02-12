// TODO: Include packages needed for this application

// adding the packages needed for this application to run // CONNECTED
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// an array that will store all the questions for the user // WORKS
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
        type:'checkbox',
        message:'What Licenses should your project/application have?',
        choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'none'],
        name:'userLicense'
    },
    {
        type:'input',
        message:'What command should be used to install your dependencies?',
        name:'userInstall'
    },
    {
        type:'input',
        message:'What command should be used to run test?',
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


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
