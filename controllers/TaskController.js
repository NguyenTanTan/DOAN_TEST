const modeltask = require('../models/Task')
class TaskController {

  // [GET] /task/add
  show(req, res){
    res.render('addTask');
  }
  // [GET] /task/update
  update(req,res){
    req.body
  }
  store(req,res){
    const task = new modeltask(req.body);
    task.save()
      .then(() => {
        res.redirect('/tasks/tasks')
      })
      .catch(err => {
         res.json("Lỗi j đó")
      })
  }
}

module.exports = new TaskController;
