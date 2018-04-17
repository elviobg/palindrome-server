var chai = require('chai');
var assert = chai.assert;
//var palindromeHelper = require('../../backend/palindrome.js');
var palindromeHelper = require('../app/palindrome');

describe('Basic palindromes', function() {
  it('Easy path', function() {
    assert.equal(palindromeHelper.isPalindrome("ana"), true);
    assert.equal(palindromeHelper.isPalindrome("aba"), true);

    assert.equal(palindromeHelper.isPalindrome("abc"), false);
    assert.equal(palindromeHelper.isPalindrome("nope"), false);
    assert.equal(palindromeHelper.isPalindrome("“almostomla”"), false);
  });
});

describe('Palindromes with UPPER and lowercase', function() {
  it('Upper and lowercase differences must be disregarded', function() {
    assert.equal(palindromeHelper.isPalindrome("aNa"), true);
    assert.equal(palindromeHelper.isPalindrome("abA"), true);    
    assert.equal(palindromeHelper.isPalindrome("nOOn"), true);
    assert.equal(palindromeHelper.isPalindrome("“ALMOsomla”"), true);
  });
});

describe('Palindromes with space', function() {
  it('Spaces must be disregarded', function() {
    assert.equal(palindromeHelper.isPalindrome("race car"), true);
    assert.equal(palindromeHelper.isPalindrome("never odd or even"), true);
    assert.equal(palindromeHelper.isPalindrome("not a palindrome"), false);
  });
});

describe('Palindromes with punctuation', function() {
  it('All punctuation must be disregarded', function() {
    assert.equal(palindromeHelper.isPalindrome("race car..."), true);
    assert.equal(palindromeHelper.isPalindrome("n.e.v.e.r odd or even"), true);
    assert.equal(palindromeHelper.isPalindrome("A man, a plan, a canal. Panama"), true);
  });
});

describe('Palindromes with accentuation', function() {
  it('All accentuation must be disregarded', function() {
    assert.equal(palindromeHelper.isPalindrome("rácè car"), true);
    assert.equal(palindromeHelper.isPalindrome("néver õdd or evên"), true);
  });
});

describe('Palindromes with numbers', function() {
  it('Numbers must be analised', function() {
    assert.equal(palindromeHelper.isPalindrome("My age is 0, 0 si ega ym."), true);
    assert.equal(palindromeHelper.isPalindrome("1 eye for of 1 eye."), false);    
  });
});

describe('Palindromes with different characters', function() {
  it('Characters unusual must be analised', function() {
    assert.equal(palindromeHelper.isPalindrome("0_0 (: /-\ :) 0–0"), true);    
  });
});

