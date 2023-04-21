var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'HomePage' });
});

router.get('/report', function(req, res) {
  res.render('reportError');
});

module.exports = router;
