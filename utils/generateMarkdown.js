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
function generateMarkdown(data) {
  return `
  # ${data.title}
  --------------------------------------------------------------------------------------------------------
  Description:
  --------------------------------------------------------------------------------------------------------
  ${data.description}
  <a href='https://github.com/${data.link}' target='_blank'></i>View Project on GitHub</a>
  --------------------------------------------------------------------------------------------------------
  Table of Contents:
  --------------------------------------------------------------------------------------------------------
  <a href='#installation'>* Installation</a>
  <a href='#usage'>* Usage</a>
  <a href='#credits'>* Credits</a>
  <a href='#license'>* License</a>
  <a href='#contribute'>* Contribute</a>
  <a href='#test'>* Test</a>
  <a href='#questions'>* Questions</a>
  --------------------------------------------------------------------------------------------------------
  <id='installation>Installation
  --------------------------------------------------------------------------------------------------------
  ${data.installation}
  --------------------------------------------------------------------------------------------------------
  <id='usage'>Usage
  --------------------------------------------------------------------------------------------------------
  ${data.usage}
  --------------------------------------------------------------------------------------------------------
  <id='credits'>Credits
  --------------------------------------------------------------------------------------------------------
  ${data.credits}
  --------------------------------------------------------------------------------------------------------
  <id='license'>License
  --------------------------------------------------------------------------------------------------------
  ${data.license}
  --------------------------------------------------------------------------------------------------------
  <id='contribute>Contribute
  --------------------------------------------------------------------------------------------------------
  ${data.contribute}
  --------------------------------------------------------------------------------------------------------
  <id='test'>Test
  --------------------------------------------------------------------------------------------------------
  ${data.test}
  --------------------------------------------------------------------------------------------------------
  <id='questions>Questions
  --------------------------------------------------------------------------------------------------------
  If you have any questions please feel free to reach out to me at: <a href='mailto:${data.questions}'></i>Email</a>
  You can also find more of my work at my GitHub page: <a href='https://github.com/${data.github}' target='_blank'></i>GitHub</a>
  Built with ❤️ by ${data.name}
`;
}

module.exports = generateMarkdown;
