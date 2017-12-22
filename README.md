# Movie List App


## Level 1 - Front end

- [ ] Display a list of movies from data hardcoded in your index.jsx.
- [ ] Add a search bar so that a user may see if a movie is in the list. 
- [ ] After a user submits the search, display all matches (or partial matches) to that title.
- [ ] Bonus: Handle the case of no movie by that name found gracefully.
- [ ] Add an input field for users to add movies.
- [ ] Add a button to each list item that allows the user to toggle a 'watched' property.
- [ ] Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.
- [ ] Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)

You can use the following data: 

```javascript
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
```

![level 1](https://cloud.githubusercontent.com/assets/7968370/26704355/53960602-46e3-11e7-949f-d00018a10298.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704434/d3c14332-46e3-11e7-9051-1c2e79f9c172.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704460/0fb2e152-46e4-11e7-9873-8f88f94b1b75.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704486/48dd4b34-46e4-11e7-8c41-19ea1abc154f.png)
![level 1](https://cloud.githubusercontent.com/assets/7968370/26704478/3ddcc304-46e4-11e7-83c2-2c04de3baa5d.png)


## Level 2 - Express Server
- [ ] Move the hardcoded data from index.jsx to your Express Server js file
- [ ] In your Express Server code a GET route called /movies which will be used to get the hardcoded list of movies
- [ ] Modify your index.jsx to call this /movies GET route to do an initial load of your data
- [ ] In your Express Server code a POST route called /movie. This route will allow the user to create a new movie
- [ ] Modify your index.jsx use the /movie POST route


## Level 3 - API
- [ ] Go to https://www.themoviedb.org/documentation/api to learn more about the API you will be using. Sign-up for a new API Key. If you do not receive one within 15 minutes ask a proctor for assistance.
- [ ] Write code in movieAPI.js necessary to call the API (you may use the 'now_playing' endpoint) and retrieve movie results
- [ ] Create a new Express GET route called /load in which you make a call to the API. Put the retrieved data into the hardcoded movies array in Express index.js
- [ ] Modify your index.jsx file accordingly to handle the loaded API data. You should not longer have dummy data anywhere.


## Level 4 - Database
- [ ] Write code in schema.sql to setup your database structure to be able to store your API movie data
- [ ] Write code in database/index.js to insert and retrieve data from your database
- [ ] You will be inserting and retrieving the data retrieved from the API. You may pick and chose which specific fields your store
- [ ] A test file has been provided for you in database/tests/ which you may run indepdently of your application to test your queries.


## Level 5 - Integration
- [ ] Modify the 3 Express routes so that they are no longer using or accessing any hardcoded data. 
- [ ] The /load route should be retrieving from the API and inserting into the DB
- [ ] The get /movies route should be retrieving from the db
- [ ] The post /movie route should be inserting into the db
- [ ] Modify your front end code to only use these routes for both getting and sending data
- [ ] All other front end functionality (i.e. search, add movie, toggle watched) should still be fully functioning