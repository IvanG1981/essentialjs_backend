const { update } = require("../models/post.model");
const Post = require("../models/post.model");



module.exports = {
  async list(req, res) {
    try {
      const posts = await Post.find()
      if(posts.length === 0 ){
        throw new Error('Could not find any posts')
      }
      res.status(200).json( { message: 'Post Found', data: posts } )
    }
    catch (err) {
      res.status(400).json( { message: err.message } )
    }
  },
  async create(req, res) {
    try{
      const post = await Post.create( {...req.body} )
      res.status(200).json( { message: 'Post Created', data: post } )
    }
    catch(err) {
      res.status(400).json( { message: err.message } )
    }
  },
  async update(req, res){
    try {
      const { postId } = req.params;
      const post = await Post.findByIdAndUpdate(postId, req.body, { new: true } );

      res.status(200).json( { message: 'Post Updated', data: post } );
    }
    catch(err){
      res.status(400).json( { message: err.message } );
    }
  },
  async destroy(req, res){
    try {
      const { postId } = req.params;
      const post = await Post.findById(postId);
      if(!post){
        throw new Error('Post does not exist')
      }
      await Post.deleteOne( { _id: post._id })
      res.status(200).json( { message: 'Post Deleted' })
    }
    catch(err) {
      res.status(400).json( { message: err.message } )
    }
  },
  async show(req, res){
    try {
      const { postId } = req.params;
      const post = await Post.findById(postId);
      if(!post){
        throw new Error('Post Not Found')
      }
      res.status(200).json( { message: 'Post Found' , data: post } )
    }
    catch(err) {
      res.status(400).json( { message: err.message } )
    }
  }
}
