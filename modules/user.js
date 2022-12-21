const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true


    },
    lastName: {
        type: String,
        required: true


    },
    rollNo: {
        type: String,
        required: true


    },
    classNo: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true


    },
    chatId: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: false
    },

    recentMessage: {
        type: String,
        required: false
    },


    enabled: {
        type: String,
        required: false
    },

    profileImage: {
        type: String,
        required: true
    }



})


module.exports = mongoose.model('User', userSchema)