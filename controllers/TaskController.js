class TaskController {

  // [GET] /add
  add(req, res){
    res.render('addTask');

  }

}

module.exports = new TaskController;
