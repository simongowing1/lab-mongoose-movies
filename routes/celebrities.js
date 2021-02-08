const router = require("express").Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then(celebritiesDB => {
    console.log(celebritiesDB);
    res.render('celebrities/index', { celebs: celebritiesDB });
    next(error);
  })
})

module.exports = router;