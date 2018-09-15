require("dotenv").config();
let request = require("request");

let apiKeys = require("./keys.js");

const selectedAction = process.argv[2];
let searchTerm = process.argv.slice(3).join(" ");

// console.log(searchTerm);

switch (selectedAction){
    case "movie-this":
        const omdbQuery = require(`./omdb`);
        searchTerm = (searchTerm || "Mr. Nobody")
        omdbQuery(searchTerm);
        break
    case "concert-this":
        const bandsInTownQuery = require(`./bandsInTown`)
        bandsInTownQuery(searchTerm);
        break
    case "spotify-this-song":
        spotifyTheSongQuery();

}
