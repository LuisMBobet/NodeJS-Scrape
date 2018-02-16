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




//KnwlInstance.init("This is a string. This was written on the 2nd of June, of 2015.");
//var dates = KnwlInstance.get("dates");
//var $ = Cheerio.load(html);
//return $('li').hasClass('pear')


module.exports = Scrape;
