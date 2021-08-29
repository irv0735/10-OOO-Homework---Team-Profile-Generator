const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')


// const promptInitial = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "Team Manager's Name: ",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Employee ID: ",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Email Address: ",
//     },
//     {
//       type: 'input',
//       name: 'office',
//       message: "Office Number: ",
//     },
//     {
//       type: 'list', 
//       name: 'nextSelection',
//       message: "Would you like to add another employee or are you finished?",
//       choices: ['Add Engineer', 'Add Intern', 'Finished Building Team'],
//     }
//   ]);
// };

// const promptEngineer = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "Engineer's Name: ",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Employee ID: ",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Email Address: ",
//     },
//     {
//       type: 'input',
//       name: 'gitHub',
//       message: "GitHub Username: ",
//     },
//     {
//       type: 'list', 
//       name: 'nextSelection',
//       message: "Would you like to add another employee or are you finished?",
//       choices: ['Add Engineer', 'Add Intern', 'Finished Building Team'],
//     }
//   ]);
// };

// const promptIntern = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: "Engineer's Name: ",
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "Employee ID: ",
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "Email Address: ",
//     },
//     {
//       type: 'input',
//       name: 'school',
//       message: "School: ",
//     },
//     {
//       type: 'list', 
//       name: 'nextSelection',
//       message: "Would you like to add another employee or are you finished?",
//       choices: ['Add Engineer', 'Add Intern', 'Finished Building Team'],
//     }
//   ]);
// };

