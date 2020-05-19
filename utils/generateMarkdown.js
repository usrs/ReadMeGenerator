function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}
### Table of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)
- [Github Profile] (#github-profile)

## Install Notes
${data.install}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contribute}
## Tests
${data.tests}
## Questions
${data.questions}
## Github Profile
*GITHUB API INFO GOES HERE*

`;
}

module.exports = generateMarkdown;
