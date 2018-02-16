//Basic test of inputProcess.js
//Run from command line with the email address as an argument


var InputProcess = require("inputProcess.js");
var OutputProcess = require("outputProcess.js");
var Scrape = require("scrape.js");


console.log(InputProcess(process.argv[2]));
