const {prompt} = require('inquirer')
const {promisify} = require('util')
const writeToFile = promisify(writeFile)
const generateMarkdown = require('./utils/generateMarkdown.js')
const api = require('./utils/api.js')


const questions = [
'What is the name of your project?', 'How do you install your project?', 'How should your program be used?'
];

function init() {
  prompt ()
  function writeToFile('Generated_readMe.md', data) {
    generateMarkdown(data)
  }
}

init();
