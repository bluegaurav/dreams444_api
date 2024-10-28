require('dotenv').config();
const mongoose = require('mongoose');

// connecting to MongoDB using the URL from the environment variable
const mongoDBUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDBUrl)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
const connection = mongoose.connection



const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins
app.use(cors());


app.use(express.json());

app.use(express.static('public'));

// Auth Routes

const authRoute = require('./routes/authRoute');
app.use('/api', authRoute);

// admin routes

const adminRoute = require('./routes/adminRoute');
app.use('/api/admin', adminRoute);

// common routes

const commonRoute = require('./routes/commonRoute');
app.use('/api', commonRoute);

const port = process.env.SERVER_PORT || 8000;

app.listen(port, ()=>{
    console.log("Server is running on port:- "+port);
});