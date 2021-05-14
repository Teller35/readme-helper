const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateInstall = installText => {
  if (!installText) {
    return '### NONE';
  }
  return `
  ### ${installText}
  `
}
const generateCredit = creditText => {
  if (!creditText) {
    return '### NONE';
  }
  return `
  ### ${creditText}
  `
}
const generateCont = contText => {
  if (!contText) {
    return '### NONE';
  }
  return `
  ### ${contText}
  `
}
const generateTest = testText => {
  if (!testText) {
    return '### NONE';
  }
  return `
  ### ${testText}
  `
}

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}
  <a href='https://github.com/${data.link}' target='_blank'></i>View Project on GitHub</a>

  ## Table of Contents:
  * [**Installation**](#installation)
  * [**Usage**](#usage)
  * [**Credits**](#credits)
  * [**License**](#license)
  * [**Contribute**](#contribute)
  * [**Test**](#test)
  * [**Questions**](#questions)

  ## Installation
  ${generateInstall(data.installation)}

  ## Usage
  ### ${data.usage}

  ## Credits
  ${generateCredit(data.credits)}

  ## License
  ### ${data.license}

  ## Contribute
  ${generateCont(data.contribute)}

  ## Test
  ${generateTest(data.test)}

  ## Questions
  * ### If you have any questions please feel free to reach out to me at: <a href='mailto:${data.questions}'></i>My Email</a>
  * ### You can also find more of my work at my GitHub page: <a href='https://github.com/${data.github}' target='_blank'></i>My GitHub</a>
  * ### Built with ❤️ by ${data.name}
`;
}

module.exports = generateMarkdown;