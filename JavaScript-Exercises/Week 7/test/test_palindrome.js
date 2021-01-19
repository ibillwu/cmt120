var expect = require("chai").expect;

var is_palindrome = require("../palindrome");

describe("is_palindrome()", function() {
  it("should return true when a palindrome like 'hannah' is supplied as input", function() {
    expect(is_palindrome("hannah")).to.be.true;
  });
  it("should return false when a non-palindrome like 'martin' is supplied as input", function() {
    expect(is_palindrome("martin")).to.be.false;
  });
});
