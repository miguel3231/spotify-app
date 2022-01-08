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
    await spotifyApi.clientCredentialsGrant().then(
        function(data) {
          console.log('The access token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
      
          // Save the access token so that it's used in future calls
          spotifyApi.setAccessToken(data.body['access_token']);
          
        //   spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
        //     .then(function(data) {
        //         res.json(data);
        //     }, function(err) {
        //         res.json({message: err})
        //     });
        },
        function(err) {
          console.log('Something went wrong when retrieving an access token', err);
          res.json({message: err})
        }
      );
      spotifyApi.getAlbum('5U4W9E5WsYb2jUQWePT8Xm')
        .then(function(data) {
            res.json(data);
        }, function(err) {
            res.json({message: err})
        });

    //res.send("I guess I'll do something here");
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