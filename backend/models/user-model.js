const mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        minLength:3
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    company: String,
    address: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema)