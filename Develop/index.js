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

inquirer
    .prompt(questions).then((questions) => {
        const userRepo = `

![GitHub License](${questions.userLicense})


### ${questions.userTitle}


## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributions](#contributions)

[Tests](#tests)

[Questions](#questions)


## Description 

${questions.userDescription}


## Installation

To install necessary dependencies , run the following command:

------
${questions.userInstall}
------


## Usage

${questions.userRepo}


## License 

This project is licensed under the ${questions.userLicense} license.


## Contributions

${questions.userContribute}


## Tests

To run test, run the following command:

-------
${questions.userTest}
-------

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${questions.userEmail}. 
You can find more of my work at ${questions.userGitHub}.




















`       
// TODO: Create a function to write README file

// created a function to make the README file
         fs.writeFile('README1.md', userRepo, (err) =>
         
         err ? console.log(err) : console.log('Success!')
         
         )



        })













    

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
