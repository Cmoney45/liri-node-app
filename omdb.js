const request = require("request");

function omdbQuery (searchTerm) {
    const queryUrl = "https://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
        
            if (!JSON.parse(body).Title) {
                console.log(`Sorry, no movie by that title could be found.`)
            } else {
                console.log(`------------------------------\nMovie Title: ${JSON.parse(body).Title}`)
                console.log(`Release Year: ${JSON.parse(body).Year}`)
                console.log(`IMDB Rating: ${JSON.parse(body).imdbRating}`)
                console.log(`Rotten Tomatoes Freshness: ${JSON.parse(body).Ratings[1].Value}`)
                console.log(`Country Produced: ${JSON.parse(body).Country}`)
                console.log(`Language: ${JSON.parse(body).Language}`)
                console.log(`Plot Summary: ${JSON.parse(body).Plot}`)
                console.log(`Actors: ${JSON.parse(body).Actors}\n------------------------------`)
            }
        }
    })
}

module.exports = omdbQuery