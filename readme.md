# NAVOMI -- Interview Task #3

## Author

Luciano Buhler
February 17, 2018
lucianobuhler@gmail.com

## Description

This project was developed in NODE.JS, EXPRESS framework, ANGULAR.JS using
Google's Natural Language API to analizing sentiments in a informed sentence.

## Configuration
This application was developed in Ubuntu 16.04.
The configuration below is for Linux Ubuntu.

  # Step-by-Step

// In Terminal
// Update your list in a package repository
<b>$ sudo apt-get update</b>

// Install NODEJS
<b>$ sudo apt-get install nodejs</b>

// Install NPM, the NODEJS package manager.
<b>$ sudo apt-get install npm</b>

// Install EXPRESS framework in global and one generator to create project structure and files.
<b> npm install -g express express-generator@4</b>

// This command create this project structure and files with name <projectName>. You need to change the name. This command create the package.json file with the project pendences in the project folder.
<b>$ express <projectName> -e ejs</b>

// To install the EJS library.
<b>$ npm install EJS</b>

// Write in Terminal, in created folder 'ProjectName' to install pendences of package.JSON
<b>$ npm install</b>

// To install the Google library to connect with Google's Natural Language API in the current folder, write:
<b>$ npm install @google-cloud/language --save</b>

// And set the variable GOOGLE_APPLICATION_CREDENTIALS with the absolut path of credentials JSON file generated in https://console.cloud.google.com/apis/credentials
<b>$ export GOOGLE_APPLICATION_CREDENTIALS="<directory path>/Navomi_Task3-c2b8183b19e9.json"</b>

// Start the server.
<b>$ npm start</b>




## Files
// All the structure of this project was generated in EXPRESS framework.
<b>create : express_example</b>
<b>create : express_example/package.json</b>
<b>create : express_example/app.js</b>
<b>create : express_example/public</b>
<b>create : express_example/routes</b>
<b>create : express_example/routes/index.js</b>
<b>create : express_example/routes/users.js</b>
<b>create : express_example/views</b>
<b>create : express_example/views/index.jade</b>
<b>create : express_example/views/layout.jade</b>
<b>create : express_example/views/error.jade</b>
<b>create : express_example/bin</b>
<b>create : express_example/bin/www</b>
<b>create : express_example/public/javascripts</b>
<b>create : express_example/public/images</b>
<b>create : express_example/public/stylesheets</b>
<b>create : express_example/public/stylesheets/style.styl</b>


// The following files must be replaced/copied:

<b><directory path>/Navomi_Task3-c2b8183b19e9.json  // this JSON file is the API key generated in Google Cloud Platform to use                                                    // Google Natural Language API.</b>
<b><directory path>/routes/index.js                 // This file receive the sentence of form and send to Google Natural
                                                 // Language API to sentiment analysis, test your response and return 
                                                 // the content to output.</b>
<b><directory path>/views/index.ejs                 // index.ejs is a layout template file and contain the HTML structure.</b>


## TO RUNNING

// In Terminal, in the installation folder, start the NODEJS server
<b>$ npm start</b>

// In Browser, access the following address:
<b>http://localhost:3000</b>
