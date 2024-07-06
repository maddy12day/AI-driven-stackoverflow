import mongoose from "mongoose";

const post = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      tags: [{
        type: String,
      }],
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answers',
      }],
      upVotes: {
        type: Number,
        default: 0,
      },
      downVotes:{
        type:Number,
        default:0
      }
},{Timestamps:true})

const Post = mongoose.model("Post",post);

export default Post