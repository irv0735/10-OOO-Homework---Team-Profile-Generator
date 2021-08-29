const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(){
    super();
  }

  getGithub() {
    inquirer.prompt(
      {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub User Name: "
      }
    )
    .then((answer) => {
      this.github = answer.github;
      this.role = 'Engineer';
    });   
  }
}

module.exports = Engineer;