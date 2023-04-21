const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./db')
const User = require('./User')

db.connect()

const TaskSchema = new Schema({
    owner: {type: mongoose.Types.ObjectId, ref: 'User'},
    name: { type: String, maxLength: 255 },
    description: { type: String},
    status: { type: String },
    startAt: { type: Date, default: Date.now },
    endAt: {type: Date}
}, {
    collection: 'task'
})

model = mongoose.model('Task', TaskSchema)

model.find({owner: '6442037c3bc402fbc00ec360'})
    .then(data => {
        console.log(data)
    })