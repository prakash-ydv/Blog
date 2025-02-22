const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog');

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
