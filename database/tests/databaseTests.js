/*
* This Test file is provided to you to be able to be able to test your database functions independently
* of the rest of your application. You will need to build out the db function inside of /database/index.js
* That file is required here below and you will use the exported functions here to test.
* You may run this file by simply going to a terminal window and typing 'node databaseTests.js'
*/

const movieDB = require('../index.js');

let newMovie = ['Test Movie', 'This is the best movie ever!', '2017-11-11', 0.0, 0, 0];
let movies = [/*Create an array of movies. Each movie must be an array (not an object) */];

movieDB.insertMany(movies, (err) => {
  if(err) {
    console.log('Error inserting to DB');
  } else {
    console.log('Successfully inserted data into DB: ');
  }
});


movieDB.selectAll( (err, movieDataFromDB) => {
  if(err) {
    console.log('Error selecting from DB');
  } else {
    console.log('Successfully retrieved data from DB: ', movieDataFromDB);
  }
});

movieDB.insertOne(newMovie, (err) => {
  if(err) {
    console.log('Error inserting to DB');    
  } else {
    console.log('Successfully inserted data into DB: ');
  }
});

