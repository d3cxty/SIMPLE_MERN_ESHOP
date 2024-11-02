import express from 'express';
import {connectDB} from './config/db.js'
const app = express();


// Connect to MongoDB
const port = 5000;
app.listen(port , (err, res) => {
    connectDB();
    console.log(`Server running on port ${port}`);
});