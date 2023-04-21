class TaskController2 {

    // [GET] /task/add
    show(req, res){
      res.render('addTask');
  
    }
    // [GET] /task/update
    update(req,res){
      res.render('updateTask');
    }
  }
  
  module.exports = new TaskController2;