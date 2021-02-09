const router = require("express").Router();
const Celebrity = require('../models/Movie');

router.get('/', (req, res) => {
  Movies.find().then(celebritiesDB => {
    console.log(celebritiesDB);
    res.render('celebrities', { celebs: celebritiesDB });
    //next('error');
  })
})

module.exports = router;