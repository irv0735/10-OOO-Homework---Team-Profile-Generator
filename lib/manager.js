const inquirer = require('inquirer');
const Employee = require('./employee');

class Manager extends Employee {
  constructor(){
    super();
    this.officeNumber;
  }

  getOfficeNumber() {
    return {
        type: 'number',
        name: 'officeNumber',
        message: "Manager's Office Number: "
      }
  };

  getRole() {
    this.role = 'Manager';
  }
}

module.exports = Manager;