# Unit 09 Node.js and ES6+ Homework: Good README Generator

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

Your task is to create a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md) as a reminder of everything that a quality, professional README contains. The application will be invoked with the following command:

```
node index.js
```

Because this is a command-line application that won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates the functionality of your application. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer.

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Minimum Application Requirements

* Meets [Submission Requirements](#submission-requirements) in the following section.

* Functional application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

## The Process of development

* The program has 2 different javascripts set up. One for user data input, the other is for the display of the markdowns the users have entered. The user will hbe prompted 8 different questions that they will need to enter to continue forth. After submitted they are all processed and layed out into a READEME.md layout. 