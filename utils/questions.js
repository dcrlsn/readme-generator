//inquirer prompts
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your github username."
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is the project name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a brief description of the project."
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter any installation commands."
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter any test commands.",
  },
  {
    type: "checkbox",
    name: "licenses",
    message: "Please check any applicable licenses.",
    choices: [
      "Apache",
      "BSD",
      "GNU",
      "MIT",
      "Mozilla"
    ]
  },
  {
    type: "input",
    name: "usage",
    message: "How is this used?"
  },
  {
    type: "input",
    name: "contributors",
    message: "Add a contributor?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

module.exports = questions;