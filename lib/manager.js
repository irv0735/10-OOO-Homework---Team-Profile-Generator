const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(){
    super();
    this.officeNumber;
  }

  getOfficeNumber() {
    // inquirer
    // .prompt(
    //   {
    //     type: 'number',
    //     name: 'officeNumber',
    //     message: "Manager's Office Number: "
    //   }
    // )
    // .then((answer) => {
    //   this.role = 'Manager';
    //   return answer.officeNumber;
    // });
  }

  getRole() {
    this.role = 'Manager';
  }
}

module.exports = Manager;