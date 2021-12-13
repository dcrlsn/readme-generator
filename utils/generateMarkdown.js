// switch for license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'BSD':
      badge = `[![License](https://img.shields.io/badge/License-BSD-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'GPL':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Mozilla':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
  } return badge;
}

function generateTable(data) {
  let tableOfContents = `
## Table of Contents
  `;
  //generates table of contents if key has a value
  for (const property in data) {
    if (property === "username" || property === "projectTitle" || property === "email") { }
    else if (data[property] != '') {
      tableOfContents += `
* [${capitalFirstLetter(property)}](#${property})`;
    }
  }
  return tableOfContents;
};

// capitalizes first letters for titles and links
function capitalFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readme = ``;
  readme += `
# ${data.projectTitle}`;
  // adds table of contents
  readme += `${generateTable(data)}
  `;
  // iterates over object and populates data depending on the key if it has a value
  for (const property in data) {
    if (property === "username" || property === "projectTitle" || property === "email") { }
    // else for code blocks
    else if (property === "installation" || property === "tests" && data[property] != '') {
      readme += `
## ${capitalFirstLetter(property)}
  
\`\`\`${data[property]}\`\`\``
    }
    // else if for licenses to hit switch statement
    else if (property === "licenses" && data[property].length > 0) {
      readme += `
## ${capitalFirstLetter(property)}
      `;
      data[property].forEach(element => readme += `
${renderLicenseBadge(element)}
      `);
      ;
    }
    // all other properties are just normal paragraphs
    else if (data[property] != '') {
      readme += `
## ${capitalFirstLetter(property)}
  
${data[property]}
      `
    }
  }
  readme += `
## Questions

Find me on Github at https://github.com/${data.username}/

Any Questions please contact me at
${data.email}`;
  return readme;
};

module.exports = generateMarkdown;


