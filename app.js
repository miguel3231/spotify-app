const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//import routes
const spotifyRoute = require('./routes/spotify')
app.use('/spotify', spotifyRoute);

//routes
app.get('/', (req, res) => {
    res.send("hello");
});

//Connection to mongodb
mongoose.connect(
    process.env.DB_CONNECTION,
    () =>{
        console.log("Connected to db!");
    }
);

app.listen(3000);