import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongodb )
        console.log(`MongoDB connected: ${conn.connection.host}`); 
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); 
    }
};
