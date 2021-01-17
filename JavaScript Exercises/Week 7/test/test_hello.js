var expect = require("chai").expect;

var hello = require("../hello");

describe("hello()", function() {
  it("should return 'hello ' plus the name input it is given", function() {
    var test_string = "hello martin";
    var value = hello("martin");
    expect(value).to.be.equal(test_string);
  });
});
