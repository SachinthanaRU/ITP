const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    position: {
        type: String
    },
    passwordstatus: {
        type: String
    }
});

const user = mongoose.model('User', UserSchema);

module.exports = user;