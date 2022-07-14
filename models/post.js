const mongoose = require('mongoose'),
    { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    text: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'user'
    }
});

module.exports = mongoose.model('post', postSchema);