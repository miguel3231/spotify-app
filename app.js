const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//Middleware
app.use(bodyParser.json())
const spotifyRoute = require('./routes/spotify')
const artistRoute = require('./routes/artist');
const userRoute = require('./routes/user')
app.use('/spotify', spotifyRoute);
app.use('/artist', artistRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hola, bienvenido a mi app.");
});

//Connection to mongodb
mongoose.connect(
    process.env.DB_CONNECTION,
    () =>{
        console.log("Connected to db!");
    }
);

app.listen(3000);