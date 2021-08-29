const inquirer = require("inquirer")

class Employee {
  constructor() {
    this.name = this.getName();
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
      this.getID();
    })
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
      this.getEmail();
    })
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
      this.getRole();
    })
  }

  getRole() {
    this.role = 'Employee';
  }
}

module.exports = Employee;

