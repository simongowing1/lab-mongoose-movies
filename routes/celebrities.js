const router = require("express").Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
  Celebrity.find().then(celebritiesDB => {
    console.log(celebritiesDB);
    res.render('celebrities', { celebs: celebritiesDB });
    //next('error');
  })
})

router.post('/celebrities', (req, res) => {
  console.log(req.body); 
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .then(celebrity => {
      console.log('this celebrity was just created: ', celebrity);
      res.redirect(`/celebrities/${celebrity._id}`)
    })
})

router.get('/celebrities/new', (req, res) => {
  res.render('celebrities/new')
})

router.get('/celebrities/:id', (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celebritiesDB => {
      console.log(celebritiesDB);
      res.render('celebrities/show', { celeb: celebritiesDB});
    })
})




module.exports = router;