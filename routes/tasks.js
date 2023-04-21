var express = require('express');
var router = express.Router();
const taskController = require('../controllers/TaskController')


// router.get('/add', function(req, res) {
//   res.render('addTask');
//   // res.send('Bạn đang tạo task mới');
// });
router.get('/add', taskController.showAdd);

router.get('/update/:id/', taskController.showUpdate)

router.put('/update/:id/edit', taskController.update)

router.get('/delete/:id', taskController.delete)

router.get('/', taskController.show)


//Post task
router.post('/store', taskController.store);

module.exports = router;
