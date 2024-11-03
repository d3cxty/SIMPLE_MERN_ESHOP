import express from 'express';
import {connectDB} from './config/db.js'
import router from './routes/Product.router.js'
const app = express();
import cors from 'cors';
app.use(cors());


app.use('/', router);
// Connect to MongoDB
const port = 5000;
app.listen(port , (err, res) => {
    connectDB();
    console.log(`Server running on port ${port}`);
});