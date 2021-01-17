var expect = require("chai").expect;

var sumall = require("../sumall");

describe("sumall()", function() {
  var tests = [{ arg: 4, expected: 10 }, { arg: 6, expected: 21 }];

  tests.forEach(function(test) {
    it(
      "correctly sums all numbers less than or equal to " + test.arg,
      function() {
        var result = sumall(test.arg);
        expect(result).to.be.equal(test.expected);
      }
    );
  });
});
