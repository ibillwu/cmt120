var expect = require("chai").expect;

var make_negative = require("../makenegative");

describe("makenegative()", function() {
  var tests = [
    { arg: 1, expected: -1 },
    { arg: -1, expected: -1 },
    { arg: 0, expected: 0 }
  ];
  tests.forEach(function(test) {
    it(
      "should return " + test.expected + " when run with the input " + test.arg,
      function() {
        expect(make_negative(test.arg)).to.be.equal(test.expected);
      }
    );
  });
});
