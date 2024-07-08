import mongoose from "mongoose";

const savedOTPSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        expires: '5m',
        default: Date.now
    }
}, { timestamps: true });

const SavedOTP = mongoose.model("SavedOTP", savedOTPSchema);

export default SavedOTP;
