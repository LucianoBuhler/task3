# NAVOMI -- Interview Task #3

## Author

Luciano Buhler  
February 17, 2018  
lucianobuhler@gmail.com  

## Description

This project is implemented in NODE.JS (EXPRESS framework) and ANGULAR.JS. It uses
Google's Natural Language API to analyze sentiment from sentences typed by the user.  

## Configuration
This project has been deployed in Ubuntu 16.04, and the configuration below applies to this specific plataform. The same configuration is however valid for MAC OS.  
  
  ### Step-by-Step
  
#### In Terminal  

Update your apt-get repository  
<b>$ sudo apt-get update</b>  
  
Install NODEJS  
<b>$ sudo apt-get install nodejs</b>  
  
Install NPM, the NODEJS package manager.  
<b>$ sudo apt-get install npm</b>  
  
Install EXPRESS framework in global mode, and the generator to create project structure and files.  
<b>$ npm install -g express express-generator@4</b>  
    
Create the project structure and files with name \<projectName\> and generate the package.JSON file with the project pendences.  
<b>$ express \<projectName\> -e ejs</b>  
  
Install the EJS library.  
<b>$ npm install EJS</b>  
  
Within the project folder (that was created by EXPRESS), type the following commands to install pendencies of package.JSON  
<b>$ npm install</b>  
  
Also in the project folder, install the Google library to connect with Google's Natural Language API.  
<b>$ npm install @google-cloud/language --save</b>  
  
And set the variable GOOGLE_APPLICATION_CREDENTIALS with the absolut path of credentials JSON file generated in https://console.cloud.google.com/apis/credentials  
<b>$ export GOOGLE_APPLICATION_CREDENTIALS="<directory path>/Navomi_Task3-c2b8183b19e9.json"</b>  
  
Start the server.  
<b>$ npm start</b>  
  
  
  
## Files  
All the structure of this project was generated in EXPRESS framework.  
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
  
  
### The following files must be replaced/copied:  
This JSON file is the API key generated in Google Cloud Platform to use Google Natural Language API.  
<b>* __directory path__/Navomi_Task3-c2b8183b19e9.json</b>  
This file receive the sentence of form and send to Google Natural Language API to sentiment analysis, test your response and return the content to output.  
<b>* __directory path__/routes/index.js</b>  
index.ejs is a layout template file and contain the HTML structure.  
<b>* __directory path__>/views/index.ejs</b>  
  
  
## TO RUNNING  
  
In Terminal, in the installation folder, start the NODEJS server  
<b>$ npm start</b>  
  
In Browser, access the following address:  
<b>http://localhost:3000</b>  
  
