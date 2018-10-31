require("dotenv").config();

let selectedAction = process.argv[2];
let searchTerm = process.argv.slice(3).join(" ");

const actionSelect = (action, term) => {
    switch (action) {
        case "movie-this":
            const omdb = require(`./functionality/omdb`);
            term = (term || "Mr. Nobody");
            omdb(term);
            break;
        case "concert-this":
            const bandsInTown = require(`./functionality/bandsInTown`);
            term = (term || "Mr. Nobody");
            bandsInTown(term);
            break;
        case "spotify-this-song":
            const spotify = require(`./functionality/spotify`);
            term = (term || "The Sign Ace of Base");
            spotify(term);
            break;
        case "do-what-it-says":
            const random = require(`./functionality/random`);
            random();
            break;
        default:
            console.log(`Action not recognized, please use an approved action.`)
    }
}

module.exports = actionSelect;

actionSelect(selectedAction, searchTerm)

