var expect = require("chai").expect;

var smush = require("../smush");

describe("smush()", function() {
  var tests = [
    { args: [[1, 2, 3], ["a", "b", "c"]], expected: [1, "a", 2, "b", 3, "c"] }
  ];

  tests.forEach(function(test) {
    it(
      "should merge " +
        test.args[0] +
        " and " +
        test.args[1] +
        " to give " +
        test.expected,
      function() {
        expect(smush.apply(null, test.args)).to.be.deep.equal(test.expected);
      }
    );
  });
});
