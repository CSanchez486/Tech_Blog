// const's connects models to index
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

// Need to create tables and link with Foreign Keys

// allows each model files to be exported
module.exports = { Comment, Post, User };