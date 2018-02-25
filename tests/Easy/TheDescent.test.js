require('../../src/CodingGame');
const sut = require('../../src/Easy/TheDescent');

test("solve grabs input and outputs the largest mountain", () => {
  inputLines.push(9,8,7,6,5,4,3,2);

  sut.solve();

  expect(outputLines[0]).toBe(0);
});

test('findLargest finds the largest', () => {
  var input = [
    { k: 0, v: 1},
    { k: 1, v: 2},
    { k: 2, v: 3},
  ]
  var largest = sut.findLargest(input);

  expect(largest.v).toBe(3);
});

test("getInput converts commandline inputs to object array", () => {
  inputLines.push("0", "1", "2");

  var parsed = sut.getInput();

  expect(parsed[0].v).toBe(0);
  expect(parsed[1].v).toBe(1);
  expect(parsed[2].v).toBe(2);
});
