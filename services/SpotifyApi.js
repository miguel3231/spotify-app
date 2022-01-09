const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv/config');

class SpotifyApi {
    constructor(){
        this.spotifyApi = new SpotifyWebApi({
            clientId: process.env.SPOTIFY_CLIENT_ID,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET
        })
        // let accessToken = await this.getAccessToken();
        // this.setAccessToken(accessToken);
    }
    async setAccessToken()
    {
        let accessToken = await this.getAccessToken();
        console.log("Access token is: " + accessToken);
        this.spotifyApi.setAccessToken(accessToken);
    }
    async getAccessToken(){
        let clientCredentialsResponse = await this.spotifyApi.clientCredentialsGrant();
        let accessToken = clientCredentialsResponse.body.access_token;
        return accessToken;
    }
    
    async searchArtist(name)
    {
        let spotifyResponse = await this.spotifyApi.search(name,['artist']);
        let artist = spotifyResponse.body.artists.items[0];
        let response = {
            name: artist.name,
            id: artist.id,
            uri: artist.uri,
            genres: artist.genres,
            followers: artist.followers.total
        };
        return response;
    }
    async getArtistAlbums(id)
    {
        let response = await this.spotifyApi.getArtistAlbums(id);
        return this.validatedResponseBody(response);
    }
    async getArtistTopTracks(id)
    {
        let response = await this.spotifyApi.getArtistTopTracks(id, 'ES');
        return this.validatedResponseBody(response);
    }

    async getCurrentUser()
    {
        let response = await this.spotifyApi.getMe();
        return this.validatedResponseBody(response);
    }

    async validatedResponseBody(response)
    {
        if(response.statusCode != 200)
        {
            return { message: "Something went wrong"};
        }
        return response.body;
    }
}

module.exports = SpotifyApi;