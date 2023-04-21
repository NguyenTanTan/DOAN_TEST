var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')


// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskcontroller.show);

router.get('/update', taskcontroller.update);



module.exports = router;
