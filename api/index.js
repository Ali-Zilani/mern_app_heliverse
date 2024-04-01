import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js';
import bodyParser from 'body-parser'
const app = express();
const PORT = 3000 ;

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{console.log(`MongoDB is connected successfully`)})
.catch((err)=>{console.log(`Error in connecting to MongoDB: ${err}`)})


app.use(bodyParser.json())
app.use('/api/users', userRoute );

app.get('/',(req,res)=>{
    res.send({message: 'This is a Home Page'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
});