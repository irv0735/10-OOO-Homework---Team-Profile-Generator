const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(){
    super();
  }

  async getGithub() {
    const answer = await inquirer.prompt(
      {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub User Name: "
      }
    )
    this.role = 'Engineer';
    return answer.github;
  }
}

module.exports = Engineer;