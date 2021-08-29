const inquirer = require("inquirer")
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let teamMembers = [];

function newEngineer() {
  const newEng = new Engineer();
  inquirer.prompt(
    [
      newEng.getName(),
      newEng.getID(),
      newEng.getEmail(),
      newEng.getGithub(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone else?"
      }
    ]
  )
  .then((answers) => {
    newEng.getRole();
    newEng.name = answers.name
    newEng.id = answers.id;
    newEng.email = answers.email;
    newEng.github = answers.github;
    teamMembers.push(newEng);
    if (answers.nextMove == 'Add Engineer') {
      newEngineer();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } 
    // block of code to pass the teamMembers to render/generate
  })
}

function newIntern() {
  const newIntern = new Intern();
  inquirer.prompt(
    [
      newIntern.getName(),
      newIntern.getID(),
      newIntern.getEmail(),
      newIntern.getSchool(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone else?"
      }
    ]
  )
  .then((answers) => {
    newIntern.getRole();
    newIntern.name = answers.name
    newIntern.id = answers.id;
    newIntern.email = answers.email;
    newIntern.school = answers.school;
    teamMembers.push(newIntern);
    if (answers.nextMove == 'Add Engineer') {
      newEngineer();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } 
    // block of code to pass the teamMembers to render/generate
  })
}


function init () {

  const newManager = new Manager()

  inquirer.prompt(
    [
      newManager.getName(),
      newManager.getID(),
      newManager.getEmail(),
      newManager.getOfficeNumber(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone else?"
      }
    ]
  )
  .then((answers) => {
    newManager.getRole();
    newManager.name = answers.name;
    newManager.id = answers.id;
    newManager.email = answers.email;
    newManager.officeNumber = answers.officeNumber;
    teamMembers.push(newManager);
    if (answers.nextMove == 'Add Engineer') {
      newEngineer();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } 
    // block of code to pass the teamMembers to render/generate
  });
 
}

init()
