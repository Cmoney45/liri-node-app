const fs = require("fs");
const liri = require(`../liri`);

function randomQuery() {
    fs.readFile(`./functionality/random.txt`, `utf8`, function (err, data) {
        if (err) throw { err };

        const dataArr = data.split(",");

        randAction = dataArr[0];
        randTerm = dataArr[1];
        
        liri(randAction, randTerm);

    })

}

module.exports = randomQuery;