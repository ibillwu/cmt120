var expect = require("chai").expect;

var population = require("../population");

describe("population()", function () {
    var tests = [
        { arg: [1000, 2, 50, 1200], expected: 3 },
        { arg: [1500, 5, 100, 5000], expected: 15 },
        { arg: [1500000, 2.5, 10000, 2000000], expected: 10 }
    ]

    tests.forEach(function (test) {
        it("should return " + test.expected + " when given input of " + test.arg, function () {
            var result = population.apply(null, test.arg);
            expect(result).to.be.equal(test.expected);
        });
    });

});