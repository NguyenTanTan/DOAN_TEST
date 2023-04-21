var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')


router.get('/add', taskcontroller.show);
router.get('/update', taskcontroller.update);




module.exports = router;
