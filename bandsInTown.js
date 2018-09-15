const request = require("request");

function bandsInTownQuery (searchTerm) {
    const queryUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
        
            if (!JSON.parse(body)[0].description) {
                console.log(`Sorry, no band by that name could be found.`)
            } else {
                console.log(`------------------------------\nArtist You Searched: ${JSON.parse(body)[0].description}\nWe Will now show their next ten venues.`)
                    for(let i = 0; i < 10; i++){
                    console.log(`\nVenue ${i+1}\nVenue Name: ${JSON.parse(body)[i].venue.name}`)
                    console.log(`Venue Location: ${JSON.parse(body)[i].venue.city}, ${JSON.parse(body)[i].venue.region} ${JSON.parse(body)[i].venue.country}`)
                    console.log(`Date of Event: ${JSON.parse(body)[i].datetime}`)
                    // console.log(`Country Produced: ${JSON.parse(body).Country}`)
                    // console.log(`Language: ${JSON.parse(body).Language}`)
                    // console.log(`Plot Summary: ${JSON.parse(body).Plot}`)
                    // console.log(`Actors: ${JSON.parse(body).Actors}\n------------------------------`)
                }
            }
        }
    })
}

module.exports = bandsInTownQuery;