const mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true

    },
    documentation:{
        type: String,
        required:true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', taskSchema)