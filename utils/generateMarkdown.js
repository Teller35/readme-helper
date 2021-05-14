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
  return `# ${data.title}

  ## Description:
  ${data.description}
  <a href='https://github.com/${data.link}' target='_blank'></i>View Project on GitHub</a>

  ## Table of Contents:
  * (#installation)**Installation**
  * (#usage)**Usage**
  * (#credits)**Credits**
  * (#license)**License**
  * (#contribute)**Contribute**
  * (#test)**Test**
  * (#questions)**Questions**

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Credits
  ### ${data.credits}

  ## License
  ### ${data.license}

  ## Contribute
  ### ${data.contribute}

  ## Test
  ### ${data.test}

  ## Questions
  * ### If you have any questions please feel free to reach out to me at: <a href='mailto:${data.questions}'></i>My Email</a>
  * ### You can also find more of my work at my GitHub page: <a href='https://github.com/${data.github}' target='_blank'></i>My GitHub</a>
  * ### Built with ❤️ by ${data.name}
`;
}

module.exports = generateMarkdown;
