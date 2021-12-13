// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions')



// runs inquirer, saves to file
function init() {
  inquirer.prompt(questions)
    .then(function (answers) {
      fs.writeFile('exampleREADME.md', generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!')
      );
    });
}

// Function call to initialize app
init();

