var chai = require('chai');
var assert = chai.assert;
var palindromeHelper = require("../palindrome");


describe('Basic palindromes test', function() {
  it('Easy path', function() {
    assert.equal(palindromeHelper.isPalindrome("ana"), true);
    assert.equal(palindromeHelper.isPalindrome("abc"), false);
  });
});

