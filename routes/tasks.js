var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')


router.get('/add', taskcontroller.show);
router.get('/update', taskcontroller.update);


router.get('/reportError', function(req, res) {
  res.render('reportError');
});


module.exports = router;
