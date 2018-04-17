#  Palindrome-verifier

Hi! 
This project implements a RESTful app to verify if a word is palindrome or not.  
The server was developed in **Node.js** and the app UI in **React.js** with Docker.


# Dependencies

> **Note:** All dependencies will be instaled with docker.

REST Framework: [node-restify](https://github.com/restify/node-restify)
Error handler plugin: [restify-errors](https://github.com/restify/errors)
Module to keep server runnig during development: [nodemon](https://github.com/remy/nodemon)
React components that implement Google's Material Design. [material-ui](https://github.com/mui-org/material-ui)
JavaScript test framework. [Mocha](https://mochajs.org/)
BDD/TDD assertion library. [Chai](http://chaijs.com/)

## How to use:

#### Docker && docker-compose installation instructions:

Install docker and docker-compose in your host machine:
* Follow Docker installation guide: https://docs.docker.com/engine/installation
* Follow Docker-compose installation guide: https://github.com/docker/compose/releases


#### Build and start your app

At first time run:
* $ docker-compose build

After that just run:
* $ docker-compose up   

This will start the both, client and server in developer mode, using nodemon to keep tracking server-side changes and updates.

> **Note:** Unit tests are implemented like a service, so they will run when starting the project.

To run tests individually run:
* $ docker-compose run tests

With server running it will be disponible at http://localhost:3000
And full app will be disponible at http://localhost:8080

Feel free to send issues or pull requests 