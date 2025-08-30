import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mern';

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfully.");

        // Escucha en el puerto
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

app.use("/api",route)