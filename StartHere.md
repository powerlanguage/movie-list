# Movie List App - Getting Started

## Information about how to work this repo

This repository is broken up into 5 Sections which can be worked on independently. You will not need to build out the whole application all at once but instead you will build it out in layers starting with a basic front-end.

### Initial Setup
1. Go through and look over the scaffolding of the repo provided to you. Look at each file.
2. Open a terminal window and run the script command (listed in package.json) which starts webpack
3. Open a terminal window and run the script commend (listed in package.json) which starts your web server
4. Open a browser window and enter the url and port of the the web server as lised in the server/index.js file and you will see the words "Welcome to Move List"


### Level 1 - Front end
In this section you will build out a React front-end. You will build this front-end without the Express server, without the API calls and without setting up the database. You will simply take the movies array and hard code it into the index.jsx component and attempt to build out as much of the front-end as you can with the data stored in a local component variable.

### Level 2 Express Server
In this section you will need to move the data fron the front-end component into the express server js file. You will build out some routes and then use those routes (and only those routes) to get the movie data. From this point on you will use Express routes to do data manipulation. After completing this step you will no longer have the initial movie data hard coded in your React component.

### Level 3 - API
In this step you will need to get setup to access The Movie DB API. You will create a new Express route which will be used to get the data from the movie db api. You will remove the hard coded movie data from your express index.js file. 

### Level 4 Database
In this step you will create a schema file that will create your database, create the table(s) and perhaps seed with initial data if need be. You will also then code your database layer with CRUD functions which will be used to manipulate your data as and when needed by the other layers of your application.Because your application is not fully wired together to function with all of the layers integrated you will need to test your database layer independently of the app. We have provided a generic test file for you in the database/tests folder. It does not use a full testing framework. You may execute the file and test your db code simply by executing 'node databaseTests.js' from the terminal prompt from within the tests folder.

### Leve 5 Integration
At this stage you will integrate all of the layers whch your previously built into a unified application with all of the layers communicating with each other. You will start by adjusting your express routes so that they interact with your database for access to the data. You will also modify your front-end so that it uses the modified express routes to load and render the data from the db and also to add new data to the db directly.