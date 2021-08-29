const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
  constructor() {
    super();
  }

  getSchool() {
    inquirer.prompt(
      {
        type: 'input',
        name: 'school',
        message: "Student's School: "
      }
    )
    .then((answer) => {
      this.school = answer.school;
      this.role = 'Student';
    });
  }
}

module.exports = Intern;