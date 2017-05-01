const mongoose = require('mongoose');

const Applicant = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false
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
        type: Object,
        required: false
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

module.exports = mongoose.model('applicants', Applicant);