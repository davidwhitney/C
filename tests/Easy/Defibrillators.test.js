require('../../src/CodingGame');
const sut = require('../../src/Easy/Defibrillators');

test("solve selects two horses with closest strength", () => {
    inputLines.push("3,879483");
    inputLines.push("43,608177");
    inputLines.push("1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217");
    inputLines.push("2;Hotel de Ville;1 place Georges Freche 34267 Montpellier;;3,89652239197876;43,5987299452849");
    inputLines.push("3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854");

    sut.solve();

    expect(outputLines[0]).toBe("Hotel de Ville");
});