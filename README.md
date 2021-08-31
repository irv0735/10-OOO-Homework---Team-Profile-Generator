# Project Team Profile Generator
  
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  Terminal application that allows a user to enter a team manager's information followed by info for interns and engineers on the team. An HTML file is generated with cards for each team member presenting their information. The application can be run using "node index.js" from the terminal. 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  Clone the repo and then install the npm dependencies. "npm i" should catch the dependency listed in the package.json file, but if not "inquirer" is the only npm package necessary to run the server application.

  ## Usage
  When launched with "node index.js" from the terminal, the user will be prompted to enter name, id, email and office number for the manager and then presented with an option to add an engineer or intern. The user can add as many engineers and interns as they would like until they select that they are finished. Once finished, an HTML page will be generated, presenting all of the information entered in a clean manner. The github profiles will be linked for the engineers and if any email addresses are clicked, the default mail application will load and populate the to line with the address.

  ## Contributing
  No contributions at this time.

  ## Tests
  If you install the "jest" npm package, you can run the test suites using "npm run test" from the terminal. The jest package will then verify all tests located in the "__tests__" folder are passing. Testing is not necessary to use the application. 

  ## License
  MIT License
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions
  If you have questions, you can reach me via Github:
  [irv0735](https://github.com/irv0735)

  Or contact via email:
  irv0735@gmail.com

