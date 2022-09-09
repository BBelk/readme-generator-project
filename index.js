// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'Enter a title for your GitHub repository: ',
        default: 'README-PROJECT',
    },
    {
        name: 'description',
        message: 'Enter a description for your README: ',
        default: 'Default Description',
    },
    {
        name: 'installation',
        message: 'Enter the instructions for the installation of your project: ',
        default: 'Default instrucitons',
    },
    {
        name: 'usage',
        message: 'Enter the usage information for your project: ',
        default: 'Default usage',
    },
    {
        name: 'contributing',
        message: 'Enter information on how to contribute to this project: ',
        default: 'Default contributers',
    },
    {
        name: 'tests',
        message: 'Enter the information on tests for your project: ',
        default: 'Default tests',
    },
    {
        name: "license",
        type: 'list',
        message: 'Select a license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT Liecense', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        name: 'githubName',
        message: 'Enter your GitHub username to direct questions about your project: ',
        default:'BBelk'
    },
    {
        name: 'email',
        message: 'Enter your email to direct questions about your project: ',
        default:'belkbh@gmail.com'
    },
    ];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
var getMarkdown = generateMarkdown(data);
fs.writeFileSync(`output/${fileName}`, getMarkdown);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();

// Description, Installation, Usage, Contributing, and Tests
