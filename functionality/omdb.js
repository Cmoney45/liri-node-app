const request = require("request");
const fs = require("fs");

function omdbQuery(searchTerm) {

    const queryUrl = `https://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`;
    const seperator = "\n\n----------------------------------------------------------\n\n"

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            if (!JSON.parse(body).Title) {
                console.log(`Sorry, no movie by that title could be found.`)
            } else {
                const jsonData = JSON.parse(body);

                // console.log(jsonData.Ratings[1]);
                let rottenTomatoesScore = "N/A"
                if (jsonData.Ratings.length > 1) {
                    rottenTomatoesScore = jsonData.Ratings[1].Value
                }
                const movieData = [
                    `Movie: ${jsonData.Title}`,
                    `Release Year: ${jsonData.Year}`,
                    `IMDB Rating: ${jsonData.imdbRating}`,
                    `Rotten Tomatoes Freshness: ${rottenTomatoesScore}`,
                    `Country Produced: ${jsonData.Country}`,
                    `Language: ${jsonData.Language}`,
                    `Plot Summary: ${jsonData.Plot}`,
                    `Actors: ${jsonData.Actors}`,
                ].join("\n\n")
                fs.appendFile('./functionality/log.txt', movieData + seperator, function (err) {
                    if (err) { throw err }
                    console.log(`${seperator}${movieData}${seperator}`)

                })
            }
        }
    })
}

module.exports = omdbQuery