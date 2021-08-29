const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(){
    super();
    // If I don't include, the employee prompts are all completed
    // if including this to call the getOfficNumber, it immediately calls
    // need to find a way to wait for all of the responses.
    // this.officeNumber = this.getOfficeNumber();
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
