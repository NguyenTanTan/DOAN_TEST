var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   // res.send('Tasks Route is active');
//   res.render('addTask');
// });

// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskcontroller.show);

// router.get('/:id', function(req, res) {
//   res.send('Thông tin task có id là: ' + req.params.id);
// });

router.get('/update', function(req, res) {
  res.render('updateTask');
  // res.send('Bạn đang cập nhật task có id là: ' + req.params.id);
});

router.get('/delete', function(req, res) {
  res.render('deleteTask');
  // res.send('Bạn đang cập nhật task có id là: ' + req.params.id);
});

router.get('/reportError', function(req, res) {
  res.render('reportError');
});

router.get('/delete/:id', function(req, res) {
  res.send('Bạn đang xóa task có id là: ' + req.params.id);
});


module.exports = router;
