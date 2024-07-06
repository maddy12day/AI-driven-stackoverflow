import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required: true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    following:{
        type:Array,
        default:[]
    },
    follower:{
        type:Array,
        default:[]
    },
    post:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Post
    }],
    answeredPost:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Answers
    }],
    city:{
        type:String,
        max:50
    },
    firstName:{
        type: String,
        max:50,
        required:true
    },
    lastName:{
        type:String,
        max:50,
        required:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:String,
        default:false
    },
    desc:{
        type:String,
        max:150
    }
},
{Timestamps:true}
)

const User = mongoose.model("User", userSchema);

export default User;