// import db connection?

var mysql = require('mysql');
var config = require('../config.js');

var conn = mysql.createConnection({
  user: 'root',
  database: 'movielist',
  dateStrings: true,
});

function queryPromise(queryString){
  return new Promise((resolve, reject) => {
    conn.query(queryString, (err, results) => {
      if(err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  selectAll: function(){
    let queryString = 'select * from movies';
    return queryPromise(queryString);
  },
  insertOne: function(movie, callback){
    let {id, title, release_date, overview, poster_path, vote_average} = movie;
    poster_path = config.BASE_IMG_URL + poster_path;
    let queryString = `INSERT IGNORE INTO movies VALUES (NULL, "${id}", "${title}", "${overview}", "${release_date}", "${poster_path}", "${vote_average}", FALSE)`

    return queryPromise(queryString);
  },
  insertMany: function(movies, callback){
    // promise all?
    movies.forEach(movie => {
      module.exports.insertOne(movie, callback);
    });
  },
  updateWatched: function(id, watched){
    let queryString = `UPDATE movies SET watched=${watched} WHERE id=${id}`;
    return queryPromise(queryString);
  }
}