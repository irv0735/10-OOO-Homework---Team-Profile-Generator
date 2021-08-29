const headContent = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Development Team</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>Development Team</h1>
  <section>`;
const footContent = 
`  </section>
</body>
</html>`;

let teamContent = ``;

function renderManager (person) {
  let newContent = ``;

  teamContent += newContent;
}

function renderIntern (person) {
  let newContent = ``;

  teamContent += newContent;
}

function renderEngineer (person) {
  let newContent = ``;

  teamContent += newContent;
}

function generateHTML(arr) {
  arr.forEach(element => {
    switch (element.role) {
      case "Manager": renderManager(element); break;
      case "Engineer": renderEngineer(element); break;
      case "Intern": renderIntern(element); break;
      }
  });
  
  const fullContent = 
    `${headContent}
    ${teamContent}
    ${footContent}`;
  return fullContent;
}


module.exports = { generateHTML };