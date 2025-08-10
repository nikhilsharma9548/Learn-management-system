import mongoose from "mongoose";


const connectDB = async () => {

    mongoose.connection.on("connected",() =>{
        console.log("MongoDB connection successful");
    })
    
    await mongoose.connect(`${process.env.MongoDB_URI}/LMS-DataBase`)
}


export default connectDB;