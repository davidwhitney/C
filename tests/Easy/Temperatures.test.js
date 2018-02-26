require('../../src/CodingGame');
const sut = require('../../src/Easy/Temperatures');

test("Solve solves example", function() {
    inputLines.push(5);
    inputLines.push("1 -2 -8 4 5");

    sut.solve();

    expect(outputLines[0]).toBe(1);
});