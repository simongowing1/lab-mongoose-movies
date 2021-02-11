const router = require("express").Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

router.get('/new', (req, res) => {
    console.log('movie')
    Celebrity.find().then(celebritiesDB => {
    res.render('movies/new', {celebrity: celebritiesDB});
  })
})

router.post('/', (req, res) => {
  console.log(req.body); 
  Movie.create({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.celebrity
  })
    .then(movie => {
      console.log('this movie was just created: ', movie);
    })
})

/*
Movie.create(movies)
  .then(movies => {
    console.log(`Success! Added ${movies.length} movies to the database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
  */

module.exports = router;