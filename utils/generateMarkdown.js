
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD':
      badge = `[![License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case 'GPL':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
  } return badge;
}

function generateTable(data) {
  let tableOfContents = `
## Table of Contents
  `;
  if (data.installation) {
    tableOfContents += `
* [Installation](#installation)`
  };
  if (data.description) {
    tableOfContents += `
* [Description](#description)`
  };
  if (data.usage) {
    tableOfContents += `
* [Usage](#usage)`
  };
  if (data.contributors) {
    tableOfContents += `
* [Contributors](#contributors)`
  };
  if (data.licenses) {
    tableOfContents += `
* [Licenses](#licenses)`
  };
  tableOfContents += `
* [Questions](#questions)`
  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = ``;
  readme += `
# ${data.projectTitle}`;
  readme += `${generateTable(data)}
  `;
  if (data.installation) readme += `
## Installation
\`\`\`${data.installation}\`\`\`
  `
  readme += `
## Description
${data.description}
  `;
  if (data.usage) readme += `
## Usage
${data.usage}
`
  if (data.tests) readme += `
## Tests
\`\`\`${data.tests}\`\`\`
  `
  if (data.contributors) readme += `
## Contributors
${data.contributors}
  `
  if (data.licenses.length > 0) {
    readme += `
## Licenses
  `
    data.licenses.forEach(element => readme += `
${renderLicenseBadge(element)}
  `)
  }
  readme += `
## Questions

Find me on Github at https://github.com/${data.username}/

Any Questions please contact me at
${data.email}`
  return readme;
}
module.exports = generateMarkdown;


