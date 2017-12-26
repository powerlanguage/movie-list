// import db connection?

var mysql = require('mysql');
var config = require('../config.js');

var conn = mysql.createConnection({
  user: 'root',
  database: 'movielist',
  dateStrings: true,
});

module.exports = {
  selectAll: function(callback){
    let queryString = 'select * from movies';
    conn.query(queryString, (err, results, fields) => {
      if(err) { console.log(err); }
      callback(results);
    });
  },
  insertOne: function(movie, callback){
    let {title, release_date, overview, poster_path} = movie;
    poster_path = config.BASE_IMG_URL + poster_path;
    let queryString = `insert into movies VALUES (NULL, "${title}", "${release_date}", "${overview}", "${poster_path}", FALSE)`
    conn.query(queryString, (err, results, fields) => {
      if(err) { console.log(err); }
      console.log('Inserted', title);
      if(callback) {
        callback();
      }
    });
  },
  insertMany: function(movies, callback){
    movies.forEach(movie => {
      insertOne(movie, callback);
    })
  }
}
