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

  ## Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#Questions)

  ## Description
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
  License stuff goes here
  ${renderLicenseSection(data.license)}
  [License information available here](${renderLicenseLink(data.license)})
  ## Questions
  Direct any questions to the github account of ${data.githubName} or to the email ${data.email}. Thank you.
`;
}

module.exports = generateMarkdown;
