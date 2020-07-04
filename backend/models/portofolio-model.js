const mongoose = require('mongoose')

var portoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    dateSubmision: {
        type: Date,
        default: Date.now
    },
    client: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Portofolio', portoSchema)