var expect = require("chai").expect;

var largest_in_list = require("../largest");

describe("largest_in_list()", function() {
  var tests = [
    { arg: [2, 4, 6], expected: 6 },
    { arg: [2, 2, 2], expected: 2 },
    { arg: [1], expected: 1 },
    { arg: [100, 4, 2], expected: 100 },
    { arg: [-1, 0, 1000], expected: 1000 }
  ];

  tests.forEach(function(test) {
    it(
      "finds " + test.expected + "as the largest value in " + test.arg,
      function() {
        expect(largest_in_list(test.arg)).to.be.equal(test.expected);
      }
    );
  });
});
