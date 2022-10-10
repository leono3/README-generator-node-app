// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "PLease enter your project title?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "Description",
  },
  {
    type: "input",
    message: "Please provide installation instructions for your project:",
    name: "Instruction",
  },
  {
    type: "input",
    message: "Please provide usage information of your project:",
    name: "Usage",
  },
  {
    type: "input",
    message: "Please provide the contribution guidelines for your project:",
    name: "Guideline",
  },
  {
    type: "input",
    message: "Please provide the test instructions for your project:",
    name: "Test",
  },
  {
    type: "list",
    message: "Please select license used: ",
    name: "License",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3", "No License"],
  },
  {
    type: "input",
    message: "Please input your GitHub username:",
    name: "github",
  },
  {
    type: "input",
    message: "Please input your email:",
    name: "email",
  },
];



function writeToFile(data) {
  fs.writeFile(`README.md`, generateMarkdown(data), (error, data) =>
    error ? console.error(error) : console.log(data)
  );
  
}



function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile(answers);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
