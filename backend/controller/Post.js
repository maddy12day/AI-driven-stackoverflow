import User from '../models/User.js'
import Post from '../models/Post.js'

//get all posts
export const getAllPost = async(req,res)=>{
    try {
        const posts = await Post.find();
        res.status(200).json({posts:posts,status:true,message:"fetched successfully"});
    } catch (error) {
        res.send(500).json({message:`error occoured while fetching data ${error}`,status:false});
    }
}

//get all post of a user
export const getAllPostOfUser = async(req,res)=>{
    try {
        const user = await User.findOne({username: req.params.username}) 
        const userId = user._id
        const userPost = await Post.find({author:userId});
        res.status(200).json({userPost, message:"all post are fetched", status:true})
    } catch (error) {
        res.status(500).json({message:`error occured ${error}`,status:false})
    }
}

//get detail of a specific post 
export const getDetailOfaPost = async(req,res)=>{
    try {
        const postDetail = await Post.findOne({_id:req.params.id});
        const Author = await User.findOne({_id:postDetail.author});
        res.status(200).json({postDetail:postDetail,author:Author,status:true});
    } catch (error) {
        res.status(500).json({message:`error occoured ${error}`, status:false})
    }
}


//