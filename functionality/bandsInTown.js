const request = require("request");
const moment = require("moment")
const fs = require("fs");

const seperator = "\n----------------------------------------------------------\n"


function bandsInTownQuery(searchTerm) {
    const queryUrl = `https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`;

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            const jsonData = JSON.parse(body);

            if (!jsonData[0].description) {

                console.log(`Sorry, no band by that name could be found.`)

            } else {

                const maxVenueDisplayed = Math.min(jsonData.length, 10);
                console.log(`${seperator}Artist You Searched: ${jsonData[0].lineup[0]}\nWe will now show their next venues. (Up to 10)`)
                for (let i = 0; i < maxVenueDisplayed; i++) {
                    const venueData = [
                        `Venue: ${i + 1}`,
                        `Venue Name: ${jsonData[i].venue.name}`,
                        `Venue Location: ${jsonData[i].venue.city}, ${jsonData[i].venue.region} ${jsonData[i].venue.country}`,
                        `Date of Event: ${moment(jsonData[i].datetime).format("MMMM Do, YYYY")}`
                    ].join(`\n\n`);

                    fs.appendFile('./functionality/log.txt', venueData + seperator, function(err) {
                        if (err) {throw err}
                        
                        console.log(`${seperator}${venueData}${seperator}`)
                    })
                }
            }
        }
    })
}

module.exports = bandsInTownQuery;