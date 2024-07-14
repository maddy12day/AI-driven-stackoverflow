import express from 'express';

const app = express();

import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config({path:'.env'})


//building connection with mongodb
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yrnvjs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URL).then(()=>{
    console.log("connection built successfully")
}).catch((err)=>{
    console.log(`connection failed error occured ${err}`)
})

import UserAuth from './routes/Auth.js'

import bodyParser from 'body-parser';
// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.static('public'));

// Routes
app.use('/api/auth', UserAuth);
app.listen(8080,()=>{
    console.log("listening to port ")
})