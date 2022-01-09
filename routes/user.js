const express = require('express');
const router = express.Router();
const SpotifyApi = require('../services/SpotifyApi');

let spotifyApi = new SpotifyApi();

router.get('/', async (req,res)=>{
    try{
        res.send("Need to implement first OAUTH. will not work until.")
        await spotifyApi.setAccessToken();
        let user = await spotifyApi.getCurrentUser();
        res.json(user);
    }
    catch(ex)
    {
        res.json({message: ex.message});
    }
    
});

router.get('/update', async(req,res)=>{
    
})
module.exports = router;