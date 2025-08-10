import express from 'express'
import  cors from 'cors'

import connectDB from './Configs/mongoDB.js';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import authRouter from './Routes/authRouter.js';
import userRouter from './Routes/userRouter.js';

connectDB();
//i


const app = express()
const PORT = process.env.PORT || 8000

const allowAll =["http://https://learn-management-system-frontend.vercel.app"]

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowAll, credentials: true}))



app.get('/', (req, res) =>{res.send("Api Working")})


app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);



app.listen(PORT, () =>{
    console.log(`server is rounning on port ${PORT}`)
})