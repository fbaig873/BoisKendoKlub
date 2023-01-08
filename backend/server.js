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

const mongodb = CONNECTION_TOKEN;
const PORT = 5000;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT,console.log(`Server running on ${PORT}`)))
.catch(err => console.log(err));