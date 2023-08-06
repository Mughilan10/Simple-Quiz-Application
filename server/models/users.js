const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (value.length < 3) {
                throw new Error('Name must be at least 3 characters long')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!value.includes('@')) {
                throw new Error('Email must contain @')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    }
})

module.exports = mongoose.model('User', userSchema)
