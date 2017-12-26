var axios = require('axios');
var config = require('../config.js');

module.exports = () => {
  return new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.MOVIE_DB_API_KEY}`)
    .then(response => {
      resolve(response.data.results);
    })
    .catch(err => {
      reject(err);
    });
  })
}