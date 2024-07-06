import express from 'express';

const app = express();

import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv'
dotenv.config({path:'.env'})


//building connection with mongodb
// mongoose.connect(process.env.URL).then(()=>{
//     console.log("connection built successfully")
// }).catch((err)=>{
//     console.log(`connection failed error occured ${err}`)
// })


//middleware 
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())
app.use(express.static('public'));


app.listen(8080,()=>{
    console.log("listening to port ")
})