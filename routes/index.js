const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Local Library' });
  res.redirect('/catalog');
});

module.exports = router;