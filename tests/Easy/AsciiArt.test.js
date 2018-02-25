require('../../src/CodingGame');
const sut = require('../../src/Easy/AsciiArt');

test("solve runs solution to sample", function () {
    inputLines.push(4, 5, "E");
    inputLines.push(" #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ###");
    inputLines.push("# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   #");
    inputLines.push("### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ##");
    inputLines.push("# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #      ");
    inputLines.push("# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  # ");

    sut.solve();

    expect(outputLines[0]).toBe("### ");
    expect(outputLines[1]).toBe("#   ");
    expect(outputLines[2]).toBe("##  ");
    expect(outputLines[3]).toBe("#   ");
    expect(outputLines[4]).toBe("### ");
});