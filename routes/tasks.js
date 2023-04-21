var express = require('express');
var router = express.Router();
const taskController2 = require('../controllers/TaskController2')


// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskController2.showAdd);

router.get('/update/:id/', taskController2.showUpdate)

router.get('/update/:id/edit', taskController2.update)

router.get('/delete/:id', taskController2.delete)

router.get('/tasks', taskController2.show)


//Post task
router.post('/store', taskController2.store);

module.exports = router;
