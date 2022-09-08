// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'repoTitle',
        message: 'Enter a title for your GitHub repository',
        default: 'README-PROJECT',
    },
    {
        name: 'repoDescription',
        message: 'Enter a description for your README',
        default: 'Default Description',
    },
    {
        name: 'repoInstallation',
        message: 'Enter the instructions for the installation of your project',
        default: 'Default instrucitons',
    },
    {
        name: 'repoUsage',
        message: 'Enter the usage information for your project',
        default: 'Default usage',
    },
    {
        name: 'repoContributing',
        message: 'Enter information on how to contribute to this project',
        default: 'Default contributers',
    },
    {
        name: 'repoTests',
        message: 'Enter the information on tests for your project',
        default: 'Default tests',
    },
    {
        name: "repoLicense",
        type: 'list',
        message: 'Select a license for your project',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT Liecense', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        name: 'repoGitHubName',
        message: 'Enter your GitHub username to direct questions about your project',
    },
    {
        name: 'repoEmail',
        message: 'Enter your email to direct questions about your project',
    },
    ];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        const newTitle = data.repoTitle;
        const newDescription = data.repoDescription;
        const newInstallation = data.repoInstallation;
        const newUsage = data.repoUsage;
        const newContributing = data.repoContributing;
        const newTests = data.repoTests;
        
        console.log(data);
    });
}

// Function call to initialize app
init();

// Description, Installation, Usage, Contributing, and Tests
