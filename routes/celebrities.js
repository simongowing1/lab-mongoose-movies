const router = require("express").Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
  Celebrity.find().then(celebritiesDB => {
    console.log(celebritiesDB);
    res.render('celebrities', { celebs: celebritiesDB });
    //next('error');
  })
})

/*
router.post('/books', (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const rating = req.body.rating;
  // const { title, author, decription, rating } = req.body; 
  console.log(title, author, description, rating);
  Book.create({
    title: title,
    author: author,
    description: description,
    rating: rating
  })
    .then(book => {
      console.log('this book was just created: ', book);
      res.redirect(`/books/${book._id}`)
      // res.render('bookDetails', { bookDetails: book });
    })
})
*/

router.get('/celebrities/:id', (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celebritiesDB => {
      console.log(celebritiesDB);
      res.render('celebrities/show', { celeb: celebritiesDB});
    })
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')
})

module.exports = router;