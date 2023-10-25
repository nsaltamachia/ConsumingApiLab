var express = require('express');
var router = express.Router();

const ROOT_URL = "https://catfact.ninja/fact"

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express API Cat Facts' });
});

module.exports = router;
