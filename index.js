const Markdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
{
    type: "input",
    message: "What is the name of the program?",
    name: "Title"
},
{
    type: "input",
    message: "Describe your program.",
    name: "Description"
},
{
    type: "input",
    message: "Steps to install your program?",
    name: "Install"
},
{
    type:'input',
    message: "How to use your program?.",
    name: 'Usage'
},
{
    type: "input",
    message: "Enter license for your program.",
    name: "License",
    choices: ["Open Source", "MIT License", "Apache License", "GPL License", "Public Domain"]
},
{
    type: "input",
    message: "Did anyone else contribute to your program?",
    name: "Contributors"
},
{
    type:'input',
    message: "Enter contact info.",
    name: 'Contact'
},
{
    type: "input",
    message: "Enter your Github username.",
    name: "Username"
}
]

function init() {
inquirer.prompt(questions).then(function(answers){
    const response = Markdown(answers);
    console.log(response);
    fs.writeFile("ReadMe.md", response, (err) => {
        if (err) {
            throw err;
        
        };
    });
});
}

init();