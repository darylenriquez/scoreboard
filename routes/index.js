var express = require('express');
var router = express.Router();

// Score Viewer Page
router.get('/', function(req, res) {
  res.render('index');
});

// Update Score Page
router.get('/scorer', function(req, res) {
  res.render('scorer');
});

module.exports = router;
