require("dotenv").config();

const selectedAction = process.argv[2];
let searchTerm = process.argv.slice(3).join(" ");

// console.log(searchTerm);

switch (selectedAction) {
    case "movie-this":
        const omdbQuery = require(`./functionality/omdb`);
        searchTerm = (searchTerm || "Mr. Nobody");
        omdbQuery(searchTerm);
        break
    case "concert-this":
        const bandsInTownQuery = require(`./functionality/bandsInTown`);
        searchTerm = (searchTerm || "Mr. Nobody");
        bandsInTownQuery(searchTerm);
        break;
    case "spotify-this-song":
        const spotifyTheSongQuery = require(`./functionality/spotifiy`);
        searchTerm = (searchTerm || "The Sign Ace of Base");
        spotifyTheSongQuery(searchTerm);
        break;
    default:
        console.log(`Action not recognized, please use an approved action.`)

}
