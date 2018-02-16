//InputProcess :
//Input : string emailAddress
//Output : string domain | bool false
//Description : Takes string input and checks if string is a valid email. Tests format with regex, tests company domain by slicing domain and checking against array of public email domains. Returns false and logs error if tests fail.

var InputProcess = function(emailAddress){
  var emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const invalidEmail = ['gmail.com','googlemail.com'];


  try {
    if (!emailExpression.test(emailAddress)) throw "Invalid email format";
    domain = emailAddress.slice(emailAddress.indexOf("@") + 1);
    if (invalidEmail.includes(domain)) throw "Non-company email domain";
  }

  catch (error){
    console.log("Error : " + error);
    return false;
  }

  return domain;
}

module.exports = InputProcess;
