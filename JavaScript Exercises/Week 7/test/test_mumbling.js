var expect = require("chai").expect;

var mumble = require("../mumbling");

describe("mumble()", function () {
    var tests = [
        { arg: "abcd", expected: "A-Bb-Ccc-Dddd" },
        { arg: "loris", expected: "L-Oo-Rrr-Iiii-Sssss" }
    ]

    tests.forEach(function (test) {
        it("should return " + test.expected + " given input " + test.arg, function () {
            var result = mumble(test.arg);
            expect(result).to.be.equal(test.expected);
        })
    });
})