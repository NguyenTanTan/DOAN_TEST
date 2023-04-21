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
    res.send('Successfully!')
    const task = new modeltask(req.body);
    task.save(function(err) {
      if (err) return handleError(err);
      // saved!
    });
  }
}

module.exports = new TaskController;
