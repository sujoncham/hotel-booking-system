
import cors from 'cors';
import express from 'express';
import routerAuth from './routes/auth.route.js';
import routerHotels from './routes/hotels.route.js';
import routerUsers from './routes/users.route.js';

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routerRoom from './routes/rooms.route.js';
dotenv.config()
const port = process.env.PORT || 5000;
const app = express();

// https://www.youtube.com/watch?v=k3Vfj-e1Ma4

// hotelAdmin
// W2tEXbJI8DKExyuF

const connection = async () =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to Database")
    } catch (error) {
        console.log(error);
    }
}


app.use(cors())
app.use(express.json())




app.use('/api/auth', routerAuth);
app.use('/api/hotels', routerHotels);
app.use('/api/rooms', routerRoom);
app.use('/api/users', routerUsers);

app.listen(port, ()=>{
    connection()
    console.log('our server is', port);
})