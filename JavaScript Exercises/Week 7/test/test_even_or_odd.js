var expect = require("chai").expect;

var even_or_odd = require("../evenorodd");

describe("even_or_odd()", function() {
  it("should return 'even' when given the number 64", function() {
    expect(even_or_odd(64)).to.be.equal("even");
  });
  it("should return 'odd' when called with the input 77", function() {
    expect(even_or_odd(77)).to.be.equal("odd");
  });
});
