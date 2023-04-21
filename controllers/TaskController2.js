const Task = require('../models/Task')

class TaskController2 {
    // [GET] /task/update/:id
    update(req, res){
      Task.updateOne({_id: req.params.id}, req.body)
        .then( () => {
            res.send(`Sửa thành công task có id ${req.params.id}`)
        })
        .catch(err => {
            res.status(500).json('Lỗi server')
        })
    }

    // [GET] /task/delete/:id
    delete(req, res) {
        Task.deleteOne({ _id: req.params.id })
        .then(() => {
            res.send(`Xóa thành công task có id: ${req.params.id}`)
        })
        .catch(err => {
            res.status(500).json('Lỗi server')
        })
    }
  }
  
  module.exports = new TaskController2;