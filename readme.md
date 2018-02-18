# NAVOMI -- Interview Task #3

## Author

Luciano Buhler
February 17, 2018
lucianobuhler@gmail.com

## Description

This project was developed in NODE.JS using the EXPRESS framework, ANGULAR.JS using
Google's Natural Language API​ to analizing sentiments in a informed sentence.

## Configuration
This application was developed in Ubuntu 16.04.
The configuration below is for this.

 #Step-by-Step#

// In Terminal
// Update your package repository list
$ sudo apt-get update

// Install NODEJS
$ sudo apt-get install nodejs

// Install NPM, the package manager of NODEJS.
$ sudo apt-get install npm

// install EXPRESS framework in global and one generator to create structures and files
// of project
$ npm install -g express express-generator@4

// this command create the project with your structure and files. In place of <projectName>,
//enter with a name to them
$ express <projectName> -e ejs

// to install the EJS library
$ npm install EJS

// the last command created the package.json file with the pendences of the project.
//In folder created 'ProjectName' type
$ npm install

// and to run the server
$ npm start

// To install the Google library to connect with Cloud like a service in the current folder
$ npm install @google-cloud/language --save

// And set the variable GOOGLE_APPLICATION_CREDENTIALS with the absolut path of credentials
// JSON file generated in https://console.cloud.google.com/apis/credentials
$ export GOOGLE_APPLICATION_CREDENTIALS="<directory path>/Navomi_Task3-c2b8183b19e9.json"


## Files
// all the structure of this project was generated in EXPRESS framework in this way.
create : express_example
create : express_example/package.json
create : express_example/app.js
create : express_example/public
create : express_example/routes
create : express_example/routes/index.js
create : express_example/routes/users.js
create : express_example/views
create : express_example/views/index.jade
create : express_example/views/layout.jade
create : express_example/views/error.jade
create : express_example/bin
create : express_example/bin/www
create : express_example/public/javascripts
create : express_example/public/images
create : express_example/public/stylesheets
create : express_example/public/stylesheets/style.styl


//The following files must be replaced/copied:

// this JSON file was generated in Google Cloud. It have the credentials to access
// the Google Cloud to use Google Natural Language API.
<directory path>/Navomi Task3-c2b8183b19e9.json

// The file app.js, the main configuration file for your Express app
<directory path>/app.js

// index.js it's the backend. It connect with Google Natural Language API
<directory path>/routes/index.js

// index.ejs is a layout template file. It contain the HTML structure, calls to
// NODEJS script and Angular functions
<directory path>/views/index.ejs


## TO RUNNING

// In Terminal, in the folder of installation, runs the next command to start the NODEJS server
$ npm start

// In Browser, access the following address:
http://localhost:3000
