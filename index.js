const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { promisify } = require('util')

const writeFileSync = promisify(writeFile)

const generateMarkdown = require('./utils/generateMarkdown.js')
const api = require('./utils/api.js')

const answers = []
const keys = ['title', 'description', 'install', 'usage', 'tests', 'questions']
const questions = [
'What is the name of your project?', 'How do you install your project?', 'How should your program be used?', 'How have you tested your project?','what are some unanswered questions you need to solve?']

for (let i = 0; i < questions.length; i++) {
  answers.push({
    type: 'input',
    name: keys[i],
    message: `${questions[i]}`
  })
}


function init() {
  prompt (answers)
  .then (data => writeFileSync
  ('new_readMe.md', generateMarkdown(data)))
  .then(() => {
    console.log('success!')
  })
  .catch(err => console.log(err))
}

init();
