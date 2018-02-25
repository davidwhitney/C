require('../../src/CodingGame');
const sut = require('../../src/Easy/HorseRacingDuals');

test("solve selects two horses with closest strength", () => {
    inputLines.push(3,4,8,9);

    sut.solve();

    expect(outputLines[0]).toBe("1");
});
