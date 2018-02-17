var InputProcess = require("./local_modules/inputProcess.js");
var Scrape = require("./local_modules/scrape.js");


//Call from command line using 1 argument. For best results use a valid email address.

if (process.argv.length === 3){
  var domain = InputProcess(process.argv[2]);
  if(domain) Scrape(domain);
}else{
  console.log("Error : Incorrect number of arguments");
}
