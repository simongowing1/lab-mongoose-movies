const router = require("express").Router();
const Celebrity = require('../models/Celebrity');

router.get('/', (req, res) => {
  Celebrity.find().then(celebritiesDB => {
    console.log(celebritiesDB);
    res.render('celebrities', { celebs: celebritiesDB });
    //next('error');
  })
})

router.get('/new', (req, res) => {
  res.render('celebrities/new')
})

router.get('/:id', (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celebritiesDB => {
      console.log(celebritiesDB);
      res.render('celebrities/show', { celeb: celebritiesDB});
    })
})

router.post('/', (req, res) => {
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

router.post('/:id', (req, res) => {
  const celebId = req.params.id;
  const {name, occupation, catchPhrase} = req.body
  Celebrity.findByIdAndUpdate(celebId, {
    name,
    occupation,
    catchPhrase
  })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch(err => {
      next(err);
    })
})

router.post('/:id/delete', (req, res) => {
  const celebId = req.params.id;
  console.log(req.params.id)
  Celebrity.findByIdAndDelete(celebId)
    .then(celebrity => {
      res.redirect('/celebrities')
   }).catch(err => {
    next(err)
  })
  })

router.get('/:id/edit', (req, res) => {
  const celebId = req.params.id;
  Celebrity.findById(celebId)
    .then(celebritiesDB => {
      //console.log(celebritiesDB);
     res.render('celebrities/edit', { celebrity: celebritiesDB });
    }).catch(err => {
      next(err)
    })
})

module.exports = router;