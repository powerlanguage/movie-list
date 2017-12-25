const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const getNowPlaying = require('../lib/movieAPI.js')
const axios = require('axios');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });



var movieData = [];

app.get('/movies', (req, res) => {
  if(movieData.length === 0) {
    // TODO: find something less brittle than hardcoding this URL
    axios.get('http://localhost:3000/load')
      .then(() => res.send(movieData))
      .catch(err => console.log(err));
  } else {
    res.send(movieData);
  }
});

app.post('/movie', (req, res) => {
  console.log(req.body);
  // TODO: Update saved info
    // watched, etc
  movieData.push(req.body);
  res.status(201).end()
})

app.get('/load', (req, res) => {
  getNowPlaying(data => {
    movieData = data;
    res.send(movieData);
  })
});