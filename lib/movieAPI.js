var axios = require('axios');
var config = require('../config.js');

exports.nowPlaying = () => {
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

exports.search = (queryString) => {
  return new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${config.MOVIE_DB_API_KEY}&query=${queryString}`)
    .then(response => {
      resolve(response.data.results);
    })
    .catch(err => {
      reject(err);
    });
  })
}