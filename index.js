const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')


const newManager = new Promise((resolve, reject) => {
  const John = new Manager()
  if (!John.officeNumber) {
    reject("entry not complete")
  } else {
    resolve("good to go, data is here!")
  }
});

newManager
  .then((data) => console.log(data))
  .catch(err => console.log(`Promise rejected: Error: Coding stopped - ${err.message}`));

