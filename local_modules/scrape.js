var Knwl = require("knwl.js");
var KnwlInstance = new Knwl("english");
var Cheerio = require("cheerio");
var Request = require("request");



//Scrape :
//Input : string domain
//Output : bool true | bool false
//Description : Takes domain as string and forms into URL. The URL is used to request HTML data using Request. If no error calls Author, Urls, EmailAddresses, PhoneNumbers then returns true. Else returns false.

var Scrape = function(domain){
  var url = "http://"+domain;
  var $;

  Request(url, function(error,response,html){
    if (!error){

      $ = Cheerio.load(html,{
        ignoreWhitespace: true
      });

        console.log("\n\n Author \n\n");
        Author($);
        console.log("\n\n URLs \n\n");
        Urls($,url);
        console.log("\n\n Email Addresses \n\n");
        EmailAddresses($);
        console.log("\n\n Phone Numbers \n\n");
        PhoneNumbers($);
        return true;
    }
    else{
      console.log("Error during request");
      return false;
    };
  });
}

module.exports = Scrape;


//Author :
//Input : function $
//Output : void
//Description : Extracts author from html as given by Cheerio and logs to console

var Author = function($){
    var endVar = $("meta[name='author']").attr("content");

    if (endVar) console.log("Author : " + endVar);
}

//InputProcess :
//Input : function $ & string url
//Output : void
//Description : Extracts every anchor link from Cheerio. If they're an internal link the original url is inserted at the beginning. All unique links are printed to console.

var Urls = function($,url){
  var seenLinks = [];
  var links;

  links = $("a");
  links.each(function(i,element){
    hrefLink = $(element).attr("href");
    if (hrefLink){
      if (hrefLink.indexOf("http") === -1) hrefLink = url + hrefLink;
      if (seenLinks.indexOf(hrefLink) === -1){
        seenLinks.push(hrefLink);
        console.log($(element).text().trim() + " : " + hrefLink);
      };
    };
  });

}

//EmailAddresses:
//Input : function $
//Output : void
//Description : Email addresses are extracted from Cheerio by use of Knwl. All unique email addresses are printed to console.

var EmailAddresses = function($){
  var endLinks = [];
  var emailArray = [];
  var emailAddress;

  KnwlInstance.init($.text());
  emailArray = KnwlInstance.get('emails');
  emailArray.forEach(function(element){
    emailAddress = element['address'];
    if (endLinks.indexOf(emailAddress)===-1){
      endLinks.push(emailAddress);
      console.log("Email address "+ endLinks.length + " : " + emailAddress);
    }
  });
}

//PhoneNumbers :
//Input : function $
//Output : void
//Description : All phone numbers are extracted from Cheerio by use of Knwl. All unique phone numbers are printed to console.

var PhoneNumbers = function($){
  var seenNumbers = [];
  var numberArray = [];
  var number;

  KnwlInstance.init($.text());
  numberArray = KnwlInstance.get('phones');
  numberArray.forEach(function(element){
    number = element['phone'];
    if (seenNumbers.indexOf(number)===-1){
      seenNumbers.push(number);
      console.log("Phone number " + seenNumbers.length + " : " + number);
    }
  });
}
