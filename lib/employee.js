const inquirer = require("inquirer")

class Employee {
  constructor() {
    this.name;
    this.id;
    this.email;
    this.role;
  }

  async getName() {
    const answer = await inquirer
    .prompt(
      {
        type: 'input',
        name: 'name',
        message: "Employee's Name: "
      }
    )
    return answer.name
  };

  async getID() {
    const answer = await inquirer
    .prompt(
      {
        type: 'input',
        name: 'id',
        message: "Employee's ID: "
      }
    )
    return answer.id
  };

  async getEmail() {
    const answer = await inquirer
    .prompt(
      {
        type: 'input',
        name: 'email',
        message: "Employee's Email Address: "
      }
    )
    return answer.email
  }

  getRole() {
    this.role = 'Employee';
  }
}

module.exports = Employee;

