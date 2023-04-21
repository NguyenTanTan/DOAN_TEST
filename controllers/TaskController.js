class TaskController {

  // [GET] /add
  show(req, res){
    res.render('addTask');

  }

}

module.exports = new TaskController;
