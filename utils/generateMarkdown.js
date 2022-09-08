// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = ""){return "";}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = ""){return "";}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license = ""){return "";}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <br />
  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  2. [Usage](#usage)
  2. [Contributing](#contributing)
  2. [Tests](#tests)
  2. [License](#license)
  2. [Questions](#Questions)

  ## Description
  <br />
  ${data.description}
  <br />
  ## Installation
  <br />
  ${data.installation}
  <br />
  ## Usage
  <br />
  ${data.usage}
  <br />
  ## Contributing
  <br />
  ${data.contributing}
  <br />
  ## Tests
  <br />
  ${data.tests}
  <br />
  ## License
  <br />
  License stuff goes here
  ${renderLicenseSection(data.license)}
  [License information available here](${renderLicenseLink(data.license)})
  <br />
  ## Questions
  <br />
  Direct any questions to the github account of ${data.githubName} or to the email ${data.email}. Thank you.
  <br />
`;
}

module.exports = generateMarkdown;
