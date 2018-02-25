require('../../src/CodingGame');
const sut = require('../../src/Easy/ChuckNorris');

test("solve returns correct value for sample", () => {
    inputLines.push("C");
    sut.solve();

    expect(outputLines[0]).toBe("0 0 00 0000 0 00");
});

test("solve returns correct value for sample2", () => {
    inputLines.push("CC");
    sut.solve();   

    expect(outputLines[0]).toBe("0 0 00 0000 0 000 00 0000 0 00");
});