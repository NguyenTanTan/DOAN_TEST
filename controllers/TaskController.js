const Task = require('../models/Task')
const mongoose = require('mongoose')

class TaskController2 {

    // [GET] /task/add
    showAdd(req, res){
        res.render('addTask');
    }

    store(req,res){
        const task = new Task(req.body);
        task.save()
          .then(() => {
            res.redirect('/tasks/')
          })
          .catch(err => {
             res.json("Lỗi j đó")
          })
      }
    
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

    // [PUT] /tasks/update/:id/edit
    update(req, res){
        Task.updateOne({_id: req.params.id}, req.body)
          .then( () => {
              res.redirect('/tasks')
          })
          .catch(err => {
              res.status(500).json('Lỗi server')
          })
      }

    // [GET] /tasks/delete/:id
    delete(req, res) {
        Task.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('/tasks')
        })
        .catch(err => {
            res.status(500).json('Lỗi server')
        })
    }
  }
  
  module.exports = new TaskController2;