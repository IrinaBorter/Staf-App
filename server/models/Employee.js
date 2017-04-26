const mongoose = require('mongoose');

const Employee = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    type: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    primarySkill: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: false,
    },
    language: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('employees', Employee);