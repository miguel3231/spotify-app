const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    numFollowers : {
        type: Number,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);