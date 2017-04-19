const mongoose = require('mongoose');

const Position = mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    primarySkill: {
        type: String,
        required: true
    },
    positionStatus: {
        type: String,
        required: true
    },
    candidates: {
        type: Array,
        required: false,
    },
    plannedStartDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('positions', Position);