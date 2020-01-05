const mongoose = require('mongoose')
const Schema = mongoose.Schema


const groupsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    groupId: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: false,
        default: ''
    },
    screenName: {
        type: String,
        default: ''

    },

    description: {
        type: String,
        required: false,
        default: ''
    },
    countMembers: {
        type: Number,
        default: 0

    },
})

module.exports = mongoose.model('groups', groupsSchema)
