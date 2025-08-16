import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    enrollmentNo: {
        type: String,
        default: '',
        unique: true
    },

    resetOtp: {
        type: String,
        default: '',
    },

    resetOtpExpires: {
        type: Number,
        default: 0,    
    },
    enrollCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
}, {timestamps: true})

const userModel = mongoose.models.user || mongoose.model('User', userSchema)

export default userModel;