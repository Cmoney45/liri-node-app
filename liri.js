require("dotenv").config();

var apiKeys = require("./keys.js");

const process = process.argv[2];
let searchTerm = process.argv.slice(3).join(" ");

console.log(searchTerm);