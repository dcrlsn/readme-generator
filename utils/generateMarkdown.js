
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
  let tableOfContents = `\n## Table of Contents\n`;
  if (data.installation) {
    tableOfContents += `\n*[Installation](#installation)`
  };
  if (data.description) {
    tableOfContents += `\n*[Description](#description)`
  };
  if (data.usage) {
    tableOfContents += `\n*[Usage](#usage)`
  };
  if (data.contributors) {
    tableOfContents += `\n*[Contributors](#contributors)`
  };
  if (data.licenses) {
    tableOfContents += `\n*[Licenses](#licenses)`
  };
  tableOfContents += `\n[Questions](#questions)`
  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = ``;
  readme += `#${data.projectTitle}\n`;
  readme += `${generateTable(data)}\n`;
  if (data.installation) readme += `##Installation\n\`\`\`${data.installation}\`\`\`\n`
  readme += `\n##Description\n${data.description}\n`;
  if (data.usage) readme += `##Usage\n${data.usage}\n`
  if (data.tests) readme += `##Tests\n\`\`\`${data.tests}\`\`\`\n`
  if (data.contributors) readme += `##Contributors\n${data.contributors}\n`
  if (data.licenses) {
    readme += `##Licenses\n`
    data.licenses.forEach(element => readme += `${renderLicenseBadge(element)}\n`)
  }
  readme += `##Questions\nFind me on Github at https://github.com/${data.username}/\nAny Questions please contact me at ${data.email}`
  return readme;
}
module.exports = generateMarkdown;
