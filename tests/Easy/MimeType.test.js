require('../../src/CodingGame');
const sut = require('../../src/Easy/MimeType');

test("solve does example", function(){
    inputLines.push(2, 4, "html text/html", "png image/png", "test.html", "noextension", "portrait.png", "doc.TXT");

    sut.solve();

    expect(outputLines[0]).toBe("text/html");
    expect(outputLines[1]).toBe("UNKNOWN");
    expect(outputLines[2]).toBe("image/png");
    expect(outputLines[3]).toBe("UNKNOWN");
});