
const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },

}, {
    timestamps: true,
    versionKey: false

})


const User = mongoose.model('user', UserSchema)

module.exports = User;




















