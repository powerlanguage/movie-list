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