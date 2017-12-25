const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });

var movieData = [
  {
    title: 'Mean Girls',
    watched: false,
  },
  {
    title: 'Hackers',
    watched: false,
  },
  {
    title: 'The Grey',
    watched: false,
  },
  {
    title: 'Sunshine',
    watched: false,
  },
  {
    title: 'Ex Machina',
    watched: false,
  },
];

app.get('/movies', (req, res) => {
  res.send(movieData);
});

app.post('/movie', (req, res) => {
  console.log(req.body);
  // TODO: Update saved info
    // watched, etc
  movieData.push(req.body);
  res.status(201).end()
})