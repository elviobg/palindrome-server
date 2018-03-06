const restify = require('restify');
const errs = require('restify-errors');
const palindromeHelper = require('./palindrome.js');

const wordNotFoundErrorMessage = "none word found"
const notPalindromeErrorMessage = "is not palindrome"
const successMessage = "is palindrome"

const encapsulatedSuccessMessage = {
    "code": "Success", 
    "message": successMessage
 }

const server = restify.createServer({
  name: 'palindromeverfierapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

//REST routes
server.get('/palindrome/:word', function (req, res, next) {
    
    const { word } = req.params;
    if(!word) 
        return res.send(new errs.BadRequestError(wordNotFoundErrorMessage))
    
    var isPalindrome = palindromeHelper.isPalindrome(word)
    if(!isPalindrome)
        return res.send(new errs.BadRequestError(notPalindromeErrorMessage))

    return res.send(encapsulatedSuccessMessage).status(200)
  });
  