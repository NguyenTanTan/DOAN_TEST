var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')
const TaskController2 = require('../controllers/TaskController2')


// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskcontroller.show);

router.get('/update', taskcontroller.update);

router.get('/update/:id', TaskController2.update)

router.get('/delete/:id', TaskController2.delete)



module.exports = router;
