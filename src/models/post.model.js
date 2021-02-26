const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
},{
  timestamps: true
})

const Post = model('Post', postSchema);
module.exports = Post;
