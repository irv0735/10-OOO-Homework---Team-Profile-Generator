const inquirer = require("inquirer")
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let teamMembers = [];

function init () {
  const newEmployee = new Manager();
  teamMembers.push(newEmployee);
  console.log(teamMembers)
}

init()
