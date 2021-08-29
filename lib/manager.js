const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(){
    super();
  }
  
  getOfficeNumber() {
    inquirer
    .prompt(
      {
        type: 'number',
        name: 'officeNumber',
        message: "Manager's Office Number: "
      }
    )
    .then((answer) => {
      this.officeNumber = answer.officeNumber;
      this.role = 'Manager';
    });
  }
}

module.exports = Manager;