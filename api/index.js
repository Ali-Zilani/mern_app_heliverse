import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
const app = express();
const PORT = 3000 ;

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{console.log(`MongoDB is connected successfully`)})
.catch((err)=>{console.log(`Error in connecting to MongoDB: ${err}`)})


app.get('/',(req,res)=>{
    res.send(`This is a Home Page.`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
});