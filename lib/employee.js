const inquirer = require("inquirer")

class Employee {

  async getName() {
    const response = await inquirer
    .prompt(
      {
        type: 'input',
        name: 'name',
        message: "Employee's Name: "
      }
    )
    return response;
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

