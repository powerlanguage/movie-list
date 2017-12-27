const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const movieAPI = require('../lib/movieAPI.js')
const axios = require('axios');
const db = require('../database/index.js');

const port = '3000'

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(port, function () { console.log(`MovieList app listening on port ${port}!`) });


var movieData = [];

app.get('/movies', (req, res) => {
  db.selectAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    });
});

app.post('/watched', (req, res) => {
  db.updateWatched(req.body.id, req.body.watched)
    .then(() => {
      res.status(201).end();
    })
    .catch(err => {
      console.log(err);
    })
});

app.post('/movie', (req, res) => {
  movieAPI.search(req.body.title)
    .then(results => {
      if(results.length) {
        db.insertOne(results[0])
          .then(() => {
            // nested promises like this does not seem good
            console.log('Added', results[0].title);
            res.status(201).end();
          })
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err))
})

app.get('/load', (req, res) => {
  movieAPI.nowPlaying()
    .then(movies => {
      db.insertMany(movies);
    })
    .then(() => {
      res.send('data loaded');
    })
    .catch(err => {
      console.log(err);
    });
});