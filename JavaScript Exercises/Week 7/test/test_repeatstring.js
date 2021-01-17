var expect = require("chai").expect;

var repeat_string = require("../repeatstring");

describe("repeat_string()", function() {
  var tests = [
    { args: ["hello", 5], expected: "hellohellohellohellohello" },
    { args: ["hi", 3], expected: "hihihi" },
    { args: ["howdy", 0], expected: "" }
  ];

  tests.forEach(function(test) {
    it(
      "should return " +
        test.expected +
        " when given input " +
        test.args[0] +
        " and " +
        test.args[1],
      function() {
        expect(repeat_string.apply(null, test.args)).to.be.equal(test.expected);
      }
    );
  });
});
