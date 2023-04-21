const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String},
    status: { type: String },
    startAt: { type: Date, default: Date.now },
    endAt: {type: Date}
}, {
    collection: 'task'
})

const TaskModel = mongoose.model('Task', Task)