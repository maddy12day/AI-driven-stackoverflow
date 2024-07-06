import mongoose from "mongoose";


const answers = mongoose.Schema({
    body: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
      },
},{Timestamps:true}
)


const Answers = mongoose.model("Answers",answers)

export default Answers;