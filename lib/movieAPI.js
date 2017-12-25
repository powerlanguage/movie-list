var axios = require('axios');
var config = require('../config.js');

module.exports = function(callback){
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.MOVIE_DB_API_KEY}`)
    .then(response => {
      callback(response.data.results);
    })
    .catch(err => {
      console.log(err);
    });
}

/*

Write code in movieAPI.js necessary to call the API (you may use the 'now_playing' endpoint) and retrieve movie results
 Create a new Express GET route called /load in which you make a call to the API. Put the retrieved data into the hardcoded movies array in Express index.js
 Modify your index.jsx file accordingly to handle the loaded API data. You should no longer have dummy data anywhere.

*/