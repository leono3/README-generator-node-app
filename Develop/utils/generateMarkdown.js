function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  if (license !== "No License") {
    return `- [License](#license)\n`;
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `## License\n
The license used is MIT found here:\n
${renderLicenseBadge(license)}`;
    case "GPLv3":
      return `## License\n
The license used is GPL v3 found here:\n
${renderLicenseBadge(license)}`;
    case "Apache 2.0":
      return `##License\n
The license used is Apache 2.0 found here:\n
${renderLicenseBadge(license)}`;
    case "BSD 3":
      return `## License\n
The license used is BSD 3 found here:\n
${renderLicenseBadge(license)}`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badgeLic = renderLicenseBadge(data.License);
  let sectionLic = renderLicenseSection(data.License);
  let linkLic = renderLicenseLink(data.License);
  return `# ${data.Title}\n
${badgeLic}\n
## Description\n
${data.Description}
## Table of Contents\n
- [Installation](#installation)\n
- [Usage](#usage)\n
${linkLic}
- [Contributing](#contributing)\n
- [Tests](#tests)\n
- [Questions](#questions)\n
## Installation\n
${data.Installation}\n
## Usage\n
${data.Usage}\n
${sectionLic}\n
## Contributing\n
${data.Guideline}\n
## Tests\n
${data.Test}\n
## Contact Information
- Github [${data.username}](github.com/${data.username})\n
- Email ${data.email}\n
`;
}

module.exports = generateMarkdown;
