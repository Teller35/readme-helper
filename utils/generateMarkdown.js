const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `[![License Badge](https://img.shields.io/badge/license-${license}-blue.svg)](#license)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return `There is no license to link!`
  }
  return `[License Link](https://choosealicense.com/licenses/-${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return `This project does not have any license!`
  }
  return `This project is covered under the ${license} license!`
}

// TODO: Create a function to generate markdown for README
const generateInstall = installText => {
  if (!installText) {
    return '#### *NONE*';
  }
  return `
  #### *${installText}*
  `
}
const generateCredit = creditText => {
  if (!creditText) {
    return '#### *NONE*';
  }
  return `
  #### *${creditText}*
  `
}
const generateCont = contText => {
  if (!contText) {
    return '#### *NONE*';
  }
  return `
  #### *${contText}*
  `
}
const generateTest = testText => {
  if (!testText) {
    return '#### *NONE*';
  }
  return `
  #### *${testText}*
  `
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  #### *${data.description}*
  *[View Project on GitHub](https://github.com/${data.link})*

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
  #### *${data.usage}*

  ## Credits
  ${generateCredit(data.credits)}

  ## License
  #### *${renderLicenseSection(data.license)}*
  #### *${renderLicenseLink(data.license)}*

  ## Contribute
  ${generateCont(data.contribute)}

  ## Test
  ${generateTest(data.test)}

  ## Questions
  * #### *If you have any questions please feel free to reach out to me at: <a href='mailto:${data.questions}'></i>My Email</a>*
  * #### *You can also find more of my work at my GitHub page: [My GitHub](https://github.com/${data.github})*
  * #### *Built with ❤️ by ${data.name}*
`;
}

module.exports = generateMarkdown;