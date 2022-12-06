const inquirer = require('inquirer');
const fs = require('fs');
const genereateHTML = require('./src/generateHTML.js');

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