const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
  constructor() {
    super();
    this.school;
  }

  getSchool() {
    // inquirer.prompt(
    //   {
    //     type: 'input',
    //     name: 'school',
    //     message: "Student's School: "
    //   }
    // )
    // .then((answer) => {
    //   this.school = answer.school;
    //   this.role = 'Student';
    // });
  }

  getRole() {
    this.role = 'Intern'
  }
}

module.exports = Intern;