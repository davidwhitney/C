require('../../src/CodingGame');
const sut = require('../../src/Medium/DontPanic1');

test("Solve solves example", function() {
    inputLines.push("1 13 100 0 2 10 0 0");
    inputLines.push("0 9 RIGHT");
    sut.solve();
});