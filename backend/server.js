import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './methods/route.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json({limit: "4mb",extended:true}));
app.use(express.urlencoded({limit: "4mb",extended:true}));
app.use(cors())
app.use('/items',router)

const mongodb = process.env.CONNECTION_TOKEN;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT || 5000))
.catch(err => console.log(err));