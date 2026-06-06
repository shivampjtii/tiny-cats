import mongoose from "mongoose";
import config from "./config.ts";

const connecToDB = async ()=>{
    try {
        await mongoose.connect(config.MONGO_URI!);
        console.log("DataBase is connected");
    } catch (error) {
        console.log(`Error while connecting ${error}`);
    }
}

export default connecToDB;