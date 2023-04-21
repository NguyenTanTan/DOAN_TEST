const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./db')

const TaskSchema = new Schema({
    // owner: {type: mongoose.Types.ObjectId, ref: 'User'},
    name: { type: String, maxLength: 255 },
    description: { type: String},
    status: { type: String },
    startAt: { type: String, default:String },
    endAt: {type: String},
    done: {type:String}
}, {
    collection: 'task'
})

module.exports =  mongoose.model('Task', TaskSchema)