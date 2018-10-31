let apiKeys = require("./keys.js");
const Spotify = require('node-spotify-api');
const moment = require("moment")
const fs = require("fs");

const seperator = "\n----------------------------------------------------------\n"

const spotifyOption = new Spotify({
    id: apiKeys.spotify.id,
    secret: apiKeys.spotify.secret
});

const spotifyQuery = searchTerm => {
    spotifyOption.search({ type: `track`, query: searchTerm, limit: 1 }, (err, data) => {
        if (err) { throw err }

        // console.log(data.tracks.items);
        const main = data.tracks.items[0];

        songData = [
            `Artist: ${main.artists[0].name}`,
            `Song Name: ${main.name}`,
            `Preview Link: ${(main.preview_url || "N/A")}`,
            `Album: ${main.album.name} (${moment(main.album.release_date, "YYYY-MM-DD").format("YYYY")})`
        ].join("\n\n")

        fs.appendFile('./functionality/log.txt', songData + seperator, err => {
            if (err) { throw err }

            console.log(`${seperator}${songData}${seperator}`);
        })
    })
};

module.exports = spotifyQuery;