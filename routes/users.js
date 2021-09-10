const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
  next()
});

// GET /user/cool listing
router.get('/cool', (req, res, next) => {
  res.render('cool', { message: 'You are so cool'})
})

module.exports = router;
