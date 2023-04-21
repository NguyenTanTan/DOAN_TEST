const Task = require('../models/Task')
const mongoose = require('mongoose')

class TaskController2 {

    // [GET] /tasks/
    show(req, res) {
        Task.find({})
            .then(tasks => {
                // res.json(tasks.map(task => task.toObject()))
                    
                res.render('index', {
                    tasks: tasks.map(task => task.toObject())
                })
            })
    }

    // [GET] /tasks/update/:id
    showUpdate(req, res){
        Task.findOne({_id: req.params.id})
            .then(task => {
                res.render('updateTask', {
                    task: task.toObject()
                })
            })
    //   res.render('updateTask', )
    }

    // [GET] /tasks/update/:id/edit
    update(req, res){
        Task.updateOne({_id: req.params.id}, req.body)
          .then( () => {
              res.send(`Sửa thành công task có id ${req.params.id}`)
          })
          .catch(err => {
              res.status(500).json('Lỗi server')
          })
      }

    // [GET] /tasks/delete/:id
    delete(req, res) {
        Task.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('/tasks/tasks')
        })
        .catch(err => {
            res.status(500).json('Lỗi server')
        })
    }
  }
  
  module.exports = new TaskController2;