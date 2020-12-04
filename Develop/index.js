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
      type: 'input',
      name: 'license',
      message: 'What kind of license should your project have?',
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

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Your username is ${answers.username}</h1>
    <p class="lead"> Your email is ${answers.email}.</p>
      <p class="list-group-item">Your Project Name is ${answers.projectName}</p>
      <p class="list-group-item">Description: ${answers.description}</p>
      <p class="list-group-item">License: ${answers.license}</p>
      <p class="list-group-item">DependencyCommands: ${answers.dependencyCommands}</p>
      <p class="list-group-item">Test Commands: ${answers.testCommands}</p>
      <p class="list-group-item">Repo Use: ${answers.repoUse}</p>
      <p class="list-group-item">Repo Contributing: ${answers.repoContributing}</p>
    
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));

  // function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
