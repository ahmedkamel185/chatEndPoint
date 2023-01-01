const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({

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
        required: false


    },
    classNo: {
        type: String,
        required: false
    },
    emailAddress: {
        type: String,
        required: false


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


module.exports = mongoose.model('Chat', chatSchema)