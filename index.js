const inquirer = require('inquirer');
const fs = require('fs');
const genereateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const managerQuestions = [
  {
    name: 'managerName',
    message: 'Please enter the team manager\'s name.',
    type: 'input',
  },
  {
    name: 'managerID',
    message: 'Please enter the team manager\'s employee ID.',
    type: 'input',
  },
  {
    name: 'managerEmail',
    message: 'Please enter the team manager\'s email address.',
    type: 'input',
  },
  {
    name: 'officeNumber',
    message: 'Please enter the team manager\'s office number.',
    type: 'input',
  },
]

const addMemberMenu = [
  {
    name: 'addMember',
    message: 'Add a new team member or exit the application',
    type: 'list',
    choices: ['Engineer', 'Intern', 'Exit'],
  }
]

const engineerQuestions = [
  {
    name: 'engineerName',
    message: 'Please enter the engineer\'s name.',
    type: 'input',
  },
  {
    name: 'engineerID',
    message: 'Please enter the engineer\'s employee ID.',
    type: 'input',
  },
  {
    name: 'engineerEmail',
    message: 'Please enter the engineer\'s email address.',
    type: 'input',
  },
  {
    name: 'github',
    message: 'Please enter the engineer\'s github username.',
    type: 'input',
  },
]

const internQuestions = [
  {
    name: 'internName',
    message: 'Please enter the intern\'s name.',
    type: 'input',
  },
  {
    name: 'internID',
    message: 'Please enter the intern\'s employee ID.',
    type: 'input',
  },
  {
    name: 'internEmail',
    message: 'Please enter the intern\'s email address.',
    type: 'input',
  },
  {
    name: 'school',
    message: 'Please enter the intern\'s school.',
    type: 'input',
  },
]

function addMember() {
  inquirer
    .prompt(addMemberMenu)
    .then(answers => {
      if (answers.addMember === 'Engineer') {
        addEngineer();
      } else if (answers.addMember === 'Intern') {
        addIntern();
      } else {
        //generate the HTML
      }
    })
}

function addEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then(answers => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.github,
      )
    })
    .then(answers => {
      addMember();
    })
}

function addIntern() {
  inquirer
  .prompt(internQuestions)
  .then(answers => {
    const intern = new Intern(
      answers.internName,
      answers.internID,
      answers.internEmail,
      answers.school,
    )
  })
  .then(answers => {
    addMember();
  })
}

function init() {
  inquirer
    .prompt(managerQuestions)
    .then(answers => {
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.officeNumber,
      );
    })
    .then(answers => {
      addMember();
    })
}

init();