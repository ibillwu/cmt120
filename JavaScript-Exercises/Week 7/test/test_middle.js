var expect = require("chai").expect;

var middle = require("../middle");

describe("middle()", function() {
  var tests = [
    { arg: "hello", expected: "l" },
    { arg: "test", expected: "es" },
    { arg: "A", expected: "A" }
  ];

  tests.forEach(function(test) {
    it(
      "should return " + test.expected + " given input " + test.arg,
      function() {
        var result = middle(test.arg);
        expect(result).to.be.equal(test.expected);
      }
    );
  });
});
