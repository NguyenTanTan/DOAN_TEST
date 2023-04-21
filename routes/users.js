var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Users Route is active');
});

router.get('/login', function(req, res) {
  res.render('loginPage');
});

router.get('/signup', function(req, res) {
  res.render('signUpPage');
});

// router.get('/add', function(req, res) {
//   res.send('Bạn đang tạo task mới');
// });

// router.get('/:id', function(req, res) {
//   res.send('Thông tin task có id là: ' + req.params.id);
// });

// router.get('/update/:id', function(req, res) {
//   res.send('Bạn đang cập nhật task có id là: ' + req.params.id);
// });

// router.get('/delete/:id', function(req, res) {
//   res.send('Bạn đang xóa users có id là: ' + req.params.id);
// });


module.exports = router;
