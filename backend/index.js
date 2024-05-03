import express from "express";
import dotenv from "dotenv";
import mongodbConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config()

mongodbConnection();

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

app.use(cors(corsOptions))

// api
app.use("/api/v1/user", userRoute)


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})