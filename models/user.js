const mongoose = require('mongoose'),
    { Schema } = mongoose;

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
});

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
})

module.exports = mongoose.model("User", userSchema);
