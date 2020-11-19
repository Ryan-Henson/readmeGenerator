const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "Project Title:",
      name: "titleBoi",
    },
    {
      type: "input",
      message: "Project Description:",
      name: "definiBoi",
    },
    {
      type: "input",
      message: "Installation Instructions:",
      name: "installiBoi",
    },
    {
      type: "input",
      message: "Usage Information:",
      name: "usageBoi",
    },
    {
      type: "input",
      message: "Controbutions:",
      name: "otherBois",
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "testBois",
    },
    {
      type: "input",
      message: "Enter your GitHub",
      name: "githubBois",
    },
    {
      type: "input",
      message: "What is your e-mail?",
      name: "eMailBois",
    },
    {
      type: "checkbox",
      message: "Check all that was used",
      choices: ["HTML", "CSS", "Javascript"],
      name: "techyBois",
    },
    {
      type: "input",
      message: "Name of screenshot or giphy",
      name: "jifys",
    },
  ]);

const generateHTML = (answers) =>
  `
# ${answers.titleBoi}

## Description 
*${answers.definiBoi}

---

# Table of Content:
* [Technologies Used](#technologies-used)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidlines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)
* [Additional Resources](#additional-resources)
* [Screenshots & Gifs](#screenshots-&-gifs)

---

## Technologies Used
${answers.techyBois}

## Installation Instructions
${answers.installiBoi}

## Usage Infomration
${answers.usageBoi}

## Contribution Guidlines
${answers.otherBoi}

## Test Instructions
${answers.testBois}

## Questions
GitHub: [${answers.githubBois}](https://github.com/${answers.githubBois})
Email: ${answers.eMailBois}

---

##Screenshots & Gifs

<img src="${answers.jifys}">


`;

promptUser()
  .then((answers) => writeFileAsync("README.md", generateHTML(answers)))
  .then(() => console.log("Successfully wrote to README.MD"))
  .catch((err) => console.error(err));
