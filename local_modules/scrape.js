var Knwl = require("knwl.js");
var KnwlInstance = new Knwl("english");

var Cheerio = require("cheerio");

var Request = require("request");

var Scrape = function(domain){
  var url = "http://"+domain;
  var $;

  Request(url, function(error,response,html){
    $ = Cheerio.load(html);
  });
  return "Unfinished";
}

module.exports = Scrape;
