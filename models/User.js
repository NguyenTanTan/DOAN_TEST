const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 }
},{
    collection: 'user'
})

module.exports = mongoose.model('User', UserSchema)