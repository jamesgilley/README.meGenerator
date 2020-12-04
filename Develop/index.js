// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ["Proprietary", "GNU", "MIT"],
    },
    {
      type: 'input',
      name: 'dependencyCommands',
      message: 'What commands should be run to install dependencies?',
    },
    {
      type: 'input',
      name: 'testCommands',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'repoUse',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'repoContributing',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ]);

const generateMD = (answers) =>
  `
## Table of contents
* [Username](#username)
* [Email](#email)
* [Project Name](#project-name)
* [Description](#license)
* [Dependency Commands](#dependency-commands)
* [Test Commands](#test-commands)
* [Repo Use](#repo-use)
* [Contributing](#contributing)


## Username
${answers.username}

## Email
${answers.email}

## Project Name
${answers.projectName}

## Description
${answers.description}

## License
${answers.license}

## Dependency Commands
${answers.dependencyCommands}
    
## Test Commands
${answers.testCommands}
    
## Repo Use
${answers.repoUse}

## Contributing
${answers.repoContributing}
    
  `;

promptUser()
  .then((answers) => writeFileAsync('readme.md', generateMD(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
  // function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
