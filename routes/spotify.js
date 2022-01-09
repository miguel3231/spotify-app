require('dotenv/config');
const express = require('express');
const User = require('../models/user');
const router = express.Router();

const SpotifyWebApi = require('spotify-web-api-node');

router.get('/', async (req, res) => {
    
    //TODO: this all goes in a service class
    let spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    })

    //Get access token
    let clientCredentialsResponse = await spotifyApi.clientCredentialsGrant();
    let accessToken = clientCredentialsResponse.body.access_token;
    console.log("Access token is: " + accessToken);
    spotifyApi.setAccessToken(accessToken);
    //Get response
    let response = await spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm');
    if(response.statusCode != 200)
    {
        res.json({message: 'Something went wrong.'})
    }
    res.json(response.body);
})

router.post('/user', (req,res) => {
    const user = new User({
        displayName: req.body.displayName,
        country: req.body.country,
        numFollowers: req.body.numFollowers,
        userType: req.body.userType
    });

    user.save()
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            res.json({
                message: err
            });
        })

    //res.send("all gucci");
});
function getAlbum(){
    
}
module.exports = router;