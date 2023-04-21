class TaskController {

  // [GET] /task/add
  show(req, res){
    res.render('addTask');
    res.json({
      name:'Nguyễn Tấn Tân'
    })

  }
  // [GET] /task/update
  update(req,res){
    res.render('updateTask');
  }
}

module.exports = new TaskController;
