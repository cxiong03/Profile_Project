const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlenght: 15
    },

    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },

    graduationDate: {
        date: Date,
        type: String
    },

    jobTitle: {
        type: String
    },

    companyName: {
        type: String
    },

    keySkills: {
        type: String,
        required: true
    },

    gitHub: {
        type: String
    },

    linkedIn: {
        type: String
    },

    twitter: {
        type: String
    },

    photo: {
        type: String
    }
})

module.exports = mongoose.model('Profile', profileSchema)