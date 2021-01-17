var expect = require("chai").expect;

var sumall35 = require("../sumall35");

describe("sumall35()", function () {
  it("should return the sum of all numbers divisible by 3 or 5 below the input value", function () {
    var value = sumall35(10);
    expect(value).to.be.equal(23);
  });
  it("should return -1 if the input is not a number", function () {
    var value = sumall35("test");
    expect(value).to.be.equal(-1);
  });
});
