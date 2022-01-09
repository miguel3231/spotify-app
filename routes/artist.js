const express = require('express');
const router = express.Router();
const SpotifyApi = require('../services/SpotifyApi');

let spotifyApi = new SpotifyApi();

router.get('/', async (req,res)=>{
    await spotifyApi.setAccessToken();
    let artist = await spotifyApi.searchArtist(req.query.name);
    res.json(artist);
});
router.get('/albums', async(req,res) => {
    await spotifyApi.setAccessToken();
    let artist = await spotifyApi.searchArtist(req.query.name);
    let albums = await spotifyApi.getArtistAlbums(artist.id);
    let response = albums.items.map((item)=>{
        return item.name;
    })
    res.json(response);
});
router.get('/topTracks', async (req,res) =>{
    await spotifyApi.setAccessToken();
    let artist = await spotifyApi.searchArtist(req.query.name);
    let topTracks = await spotifyApi.getArtistTopTracks(artist.id);
    let response = topTracks.tracks.map((item)=>{
        return {
            name: item.name,
            album: item.album.name,
            releaseDate: item.album.release_date,
            totalTracks: item.album.total_tracks
        };
    })
    res.json(response);
});
module.exports = router;