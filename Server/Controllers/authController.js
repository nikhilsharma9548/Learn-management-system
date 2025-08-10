import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from "../Models/userModel.model.js";
import { PASSWORD_RESET_TEMPLATE } from '../Configs/emailTemplate.js';
import transporter from '../Configs/nodeMailer.js';

// For Registering a new user

export const userRegister = async(req, res) => {

    const {name, email, password} = req.body;

        if(!name || !email || !password){

            return res.json({success: false, message: "Missing details"});
        }

    try {

        const existUser = await userModel.findOne({email});

        if(existUser){
            return res.json({success: false, message: "User Already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
        }); await user.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{
            expiresIn: '7d'
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000  
        });

        return res.json({success: true, message: "User Registered.."});
        
    } catch (error) {
          res.json({success :false, message:error.message})
    }
}


export const userLogin = async(req, res) => {

    const {email, password} = req.body;

    if(!email || !password){

        return res.json({
            success: false,
            message: "Email and Password are required"
        })
    }

    try {

        const user = await userModel.findOne({email});

        if(!user){

            return res.json({success:false, message: "Invalid Email address !"})
        }

        const IsMatch = await bcrypt.compare(password, user.password)

        if(!IsMatch) {
            return res.json({success: false, message: "Invalid Password !"})
        }
        
        const token = jwt.sign({id: user._id },process.env.JWT_SECRET,{
            expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000  
        });

        return res.json({success: true, message: 'Login Successful'})

    } catch (error) {
          return res.json({success:false , message: error.message});
    }
}

export const userLogout = async (req, res) => {

    try {
        res.clearCookie('token',{
             httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',    
        })
        
        return res.json({success:true, message: 'logged Out'})
        
    } catch (error) {
        return res.json({success: false, message: error.message} );
    }
}

export const isAuthenticated = async(req, res) =>{
        
    try {
        
        return res.json({success: true});

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const sendResetOTP = async(req, res) =>{

        const {email} = req.body;

        if(!email){
            return res.json({success: false, message: "Email is required"});
        }
        

        try {
            const user = await userModel.findOne({email});

            if(!user){
            res.json({success: false, message: 'User not found'});
        }

            const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpires = Date.now() + 15 * 60 * 1000

        await user.save();

        const mailOption = {
            from:process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            html:PASSWORD_RESET_TEMPLATE.replace("{{otp}}",otp).replace("{{email}}",email)
        }
        await transporter.sendMail(mailOption);

        return res.json({success: true, message: "OTP send to your Email"})
            
        } catch (error) {

            return res.json({success: false, message: "User is not found"})
        }
}

export const resetPassword = async(req, res) =>{

    const {email, otp, newPassword} = req.body;
    if(!email || !otp || !newPassword){

        return res.json({success: false, message: "Email, Otp, and new Password are required"})
    }

    try {

        const user = await userModel.findOne({email});

        if(!user){

            return res.json({success: false, message: "User not found"})

        }

        if(user.resetOtp === "" || user.resetOtp !== otp){
            return res.json({success: false, message: "Invalid OTP"});
        }

        if(user.resetOtpExpires < Date.now()){
            return res.json({success: false, message: "OTP Expired"});
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password =hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpires = 0;

        await user.save();

        return res.json({success: true, message:'password reset successfully'});
        
    } catch (error) {
        return res.json({success: false, message: error.message})
    }

}