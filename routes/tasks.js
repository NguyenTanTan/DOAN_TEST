var express = require('express');
var router = express.Router();
const taskcontroller = require('../controllers/TaskController')


// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskcontroller.add);

// router.get('/:id', function(req, res) {
//   res.send('Thông tin task có id là: ' + req.params.id);
// });

router.get('/update', function(req, res) {
  res.render('updateTask');
  // res.send('Bạn đang cập nhật task có id là: ' + req.params.id);
});




module.exports = router;
