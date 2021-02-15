const index = require('../index')



// If there is no license, return an empty string
function renderLicenseBadge (userLicense) {


if (userLicense === 'MIT') {

  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
}
  else if (userLicense === 'Apache 2.0') {

  return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
  }
    else if (userLicense === 'EPL 1.0') {

  return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`
    }
      else if (userLicense === 'BSD') {

  return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
      }
      else (userLicense === 'None'); {

        return ''
      }


}

// If there is no license, return an empty string
function renderLicenseLink(userLicense) {

if (userLicense === 'MIT') {

  return `[MIT License.](https://opensource.org/licenses/MIT)`
}
  else if (userLicense === 'Apache 2.0') {

  return `[Apache License.](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (userLicense === 'EPL 1.0') {

  return `[EPL.](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (userLicense === 'BSD 3') {

  return `[BSD License.](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else (userLicense === 'None'); {

    return ''
  }


  



}

// If there is no license, return an empty string
function renderLicenseSection(userLicense) {

if (userLicense === 'MIT' || 'Apache 2.0' || 'EPL 1.0' || 'BSD 3') {

  return `This project is licensed under the `
}
  else (userLicense === 'None'); {

    return ''
  }


}

const generateMarkdown = (response) => 

  `# ${renderLicenseBadge(response.userLicense)}


### ${response.userTitle}


## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributions](#contributions)

[Tests](#tests)

[Questions](#questions)


## Description 

${response.userDescription}


## Installation

To install necessary dependencies , run the following command:

------
${response.userInstall}
------


## Usage

${response.userRepo}


## License 

${renderLicenseSection(response.userLicense)} 
${renderLicenseLink(response.userLicense)}


## Contributions

${response.userContribute}


## Tests

To run test, run the following command:

-------
${response.userTest}
-------

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${response.userEmail}. 
You can find more of my work at (https://github.com${response.userGitHub}/).`











module.exports = generateMarkdown;

// MIT - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// Apache 2.0 - [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

//Eclipse Public License 1.0 - [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

//BSD 3 - [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
