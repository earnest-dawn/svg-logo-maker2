// const inquirer = require('inquirer');

import inquirer from 'inquirer';

const shapeQuestions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function (value) {
            var pass = value.match(/^[A-Za-z0-9]{0,3}$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid input (Up to three alphanumeric characters).';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose the shape for logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
    },
];

function prompt() {
    return inquirer.prompt(shapeQuestions);
}

module.exports = prompt;
