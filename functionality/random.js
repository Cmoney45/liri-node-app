const fs = require("fs");
const liri = require(`../liri`);

const randomQuery = () => {
    fs.readFile(`./functionality/random.txt`, `utf8`, (err, data) => {
        if (err) throw { err };

        const dataArr = data.split(",");

        randAction = dataArr[0];
        randTerm = dataArr[1];
        
        liri(randAction, randTerm);

    })

}

module.exports = randomQuery;