var expect = require("chai").expect;

var highestlowest = require("../highestlowest");

describe("highestlowest()", function() {
  var tests = [
    { arg: "1 2 3 4 5", expected: "5 1" },
    { arg: "1 2 -3 4 5", expected: "5 -3" },
    { arg: "1 9 3 4 -5", expected: "9 -5" }
  ];

  tests.forEach(function(test) {
    it(
      "should return " + test.expected + " given input " + test.arg,
      function() {
        var result = highestlowest(test.arg);
        expect(result).to.be.equal(test.expected);
      }
    );
  });
});
