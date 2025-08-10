import express from 'express'
import { isAuthenticated, resetPassword, sendResetOTP, userLogin, userLogout, userRegister } from '../Controllers/authController.js';


const authRouter = express.Router();

authRouter.post('/register',userRegister)
authRouter.post('/login',userLogin)
authRouter.post('/logout',userLogout)
authRouter.get('/is-auth',isAuthenticated)
authRouter.post('/send-reset-otp',sendResetOTP)
authRouter.post('/reset-password',resetPassword)


export default authRouter;