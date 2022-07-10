import mongoose from "mongoose";

(async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(" == CONNECTED TO MONGO DB ==",conn.connection.host);
    } catch (error) {
        console.log("Error in Db ", error);
    }
})()