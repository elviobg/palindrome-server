#  Palindrome-verifier

Hi! This project implements a server RESTful app to verify if a word is palindrome or not.  The server was developed in **Node.js** and the app UI in **React.js**


# Dependencies

Besides Node an React the following modules are required:

REST Framework: [node-restify](https://github.com/restify/node-restify)

Error handler plugin: [restify-errors](https://github.com/restify/errors)

Module to keep server runnig during development: [nodemon](https://github.com/remy/nodemon)

Module to run multiple commands concurrently during development(React App and Node server): [concurrently](https://www.npmjs.com/package/concurrently)

React components that implement Google's Material Design. [material-ui](https://github.com/mui-org/material-ui)

JavaScript test framework. [Mocha](https://mochajs.org/)

BDD/TDD assertion library. [Chai](http://chaijs.com/)

## How to use

You will need to have Node, React and all dependencies listed before previously instaled .

> **Note:** Dependencies can be installed with npm install command at terminal

After install all modules and dependencies dowload this project and go to project folder and at terminal enter`npm run dev` this will start the both: client and server.
Now navigate to http://localhost:3000 and you will hit the React app.
And if needed navigate to http://localhost:8080 to use Node server

To use palindrome unit test on command line use the command `npm test` on project root folder
