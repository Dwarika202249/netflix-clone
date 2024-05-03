import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config()

const mongodbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("database connected successfully.");
    }).catch((error) => {
        console.log(error);
    })
}

export default mongodbConnection;