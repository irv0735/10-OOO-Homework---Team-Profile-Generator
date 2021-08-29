const inquirer = require("inquirer")

class Employee {
  constructor() {
    this.name;
    this.id;
    this.email;
    this.role;
  }

  getName() {
    inquirer
    .prompt(
      {
        type: 'input',
        name: 'name',
        message: "Employee's Name: "
      }
    )
    .then((answer) => {
      this.name = answer.name;
    });
  };

  getID() {
    inquirer
    .prompt(
      {
        type: 'input',
        name: 'id',
        message: "Employee's ID: "
      }
    )
    .then((answer) => {
      this.id = answer.id;
    });
  };

  getEmail() {
    inquirer
    .prompt(
      {
        type: 'input',
        name: 'email',
        message: "Employee's Email Address: "
      }
    )
    .then((answer) => {
      this.email = answer.email;
    });
  }

  getRole() {
    this.role = 'Employee';
  }
}

module.exports = Employee;

