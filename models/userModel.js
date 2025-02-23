const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog');

const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String,
    posts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    dislikedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
