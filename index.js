// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          }
          else {
            console.log("Please enter your name!");
          }
        }
    },
    {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: linkInput => {
          if (linkInput) {
            return true;
          }
          else {
            console.log("Please enter your GitHub link!");
          }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("Please enter a Title!");
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project? (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log("Need a description!");
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use! (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log("Need Usage info!");
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please provide a license! (Required)",
        choices: ["MIT", "ISC", "Apache", "GNU GPLv3", "GNU GPLv@"],
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide contact info for questions! (Required)",
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            }
            else {
                console.log("Need info for questions!");
            }
        }
    },
    {
        type: "confirm",
        name: "confirmInstallation",
        message: "Would you like to add Installation section? (Optional)",
        default: false
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmCredits",
        message: "Do you have any credits to apply? (Optional)",
        default: false
    },
    {
        type: "input",
        name: "credits",
        message: "List all credits and collaborators?",
        when: ({ confirmCredits }) => {
            if (confirmCredits) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContribute",
        message: "Do you want to add contributing section? (Optional)",
        default: false
    },
    {
        type: "input",
        name: "contribute",
        message: "Please list guidelines on how to contribute!",
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmTest",
        message: "Do you want to add test section? (Optional)",
        default: false
    },
    {
        type: "input",
        name: "test",
        message: "Go the extra mile and write tests for your application!",
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            }
            else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
