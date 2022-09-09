// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var chosenLicense = '';
  // if(license = ""){return "";}
  if (license === 'GNU AGPLv3') {
    chosenLicense = `![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPLv3-success.svg)`
  }
  if (license === 'GNU GPLv3') {
    chosenLicense = `![License: GPLv3](https://img.shields.io/badge/License-GPLv3-success.svg)`
  }
  if (license === 'GNU LGPLv3') {
    chosenLicense = `![License: LGPLv3](https://img.shields.io/badge/License-LGPLv3-success.svg)`
  }
  if (license === 'Mozilla Public License 2.0') {
    chosenLicense = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-success.svg)`
  }
  if (license === 'Apache 2.0') {
    chosenLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-success.svg)`
  }
  if (license === 'MIT') {
    chosenLicense = `![license: MIT](https://img.shields.io/badge/License-MIT-success.svg)`
  }
  if (license === 'Boost Software License 1.0') {
    chosenLicense = `![license: Boost Software License 1.0](https://img.shields.io/badge/License-BoostSoftware-success.svg)`
  }
  if (license === 'The Unlicense') {
    chosenLicense = `![License: The Unlicense](https://img.shields.io/badge/License-Unlicense-success.svg)`
  }
  return chosenLicense;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var chosenLicense = '';
  // if(license = ""){return "";}
  if (license === 'GNU AGPLv3') {
    chosenLicense = `https://choosealicense.com/licenses/agpl-3.0/`
  }
  if (license === 'GNU GPLv3') {
    chosenLicense = `https://choosealicense.com/licenses/gpl-3.0/`
  }
  if (license === 'GNU LGPLv3') {
    chosenLicense = `https://choosealicense.com/licenses/lgpl-3.0/`
  }
  if (license === 'Mozilla Public License 2.0') {
    chosenLicense = `https://choosealicense.com/licenses/mpl-2.0/`
  }
  if (license === 'Apache 2.0') {
    chosenLicense = `https://choosealicense.com/licenses/apache-2.0/`
  }
  if (license === 'MIT') {
    chosenLicense = `https://choosealicense.com/licenses/mit/`
  }
  if (license === 'Boost Software License 1.0') {
    chosenLicense = `https://choosealicense.com/licenses/bsl-1.0/`
  }
  if (license === 'The Unlicense') {
    chosenLicense = `https://choosealicense.com/licenses/unlicense/`
  }
  return chosenLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license = ""){return "";}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)

  ## Description
  ${renderLicenseBadge(data.license)}
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  This project is under the ${data.license} license. More information is available at this link: [here](${renderLicenseLink(data.license)})
  ## Questions
  Direct any questions to my GitHub account [https://GitHub.com/${data.githubName}](https://GitHub.com/${data.githubName}) or to the email ${data.email}. Thank you.
`;
}

module.exports = generateMarkdown;
