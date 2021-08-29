const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')


function init () {
  const newEmployee = new Manager();
  let newName = newEmployee.getName();
  let newID = newEmployee.getID();
  let newEmail = newEmployee.getEmail();
}

init()
