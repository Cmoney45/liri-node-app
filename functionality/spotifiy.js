let apiKeys = require("./keys.js");
const Spotify = require('node-spotify-api');
const moment = require("moment")
const seperator = "\n\n----------------------------------------------------------\n\n"

const spotifyOption = new Spotify({
    id: apiKeys.spotify.id,
    secret: apiKeys.spotify.secret
});

function spotifyQuery(searchTerm) {
    spotifyOption.search({ type: `track`, query: searchTerm, limit: 1 }, function (err, data) {
        if (err) { throw err }
        const main = data.tracks.items[0];

        songData = [
            `Artist: ${main.artists[0].name}`,
            `Song Name: ${main.name}`,
            `Preview Link: ${(main.preview_url || "N/A")}`,
            `Album: ${main.album.name} (${moment(main.album.release_date).format("YYYY")})`].join("\n\n")

        console.log(`${seperator}${songData}${seperator}`);
    })
};

module.exports = spotifyQuery;