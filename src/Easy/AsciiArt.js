function solve() {
    const letterLength = parseInt(readline());
    const letterHeight = parseInt(readline());
    const targetLetter = readline();

    const map = createMap(letterHeight, letterLength);
    getLetters(targetLetter, map).forEach(l => print(l));
}

function getLetters (targetLetters, map) {

    const lookup = function(m, letter) {
        return m.find(x => x.char === letter.toUpperCase()) || m.find(x => x.char === "[");
    };

    let selected = [];
    targetLetters.split("").forEach(letter => selected.push(lookup(map, letter)));

    const buffer = [];
    for (let idx in selected) {
        const letter = selected[idx];

        for (let rowIndex = 0; rowIndex < letter.contentsArray.length; rowIndex++) {
            const line = letter.contentsArray[rowIndex];
            if(buffer[rowIndex] == undefined) {
                buffer[rowIndex] = "";
            }
            buffer[rowIndex] += line;
        }
    }

    return buffer;
}

function createMap (letterHeight, characterWidth) {

    const readRawCharacters = function(height) {
        const buffer = [];
        for (let i = 0; i < height; i++) {
            buffer.push(readline());
        }
        return buffer;
    };

    const rawCharacters = readRawCharacters(letterHeight);

    const dictionary = [];
    var iteration = 0;
    for (let startPoint = 0; startPoint < rawCharacters[0].length; startPoint += characterWidth) {
        dictionary.push({
            char: String.fromCharCode(("A".charCodeAt(0) + iteration)),
            contentsArray: rawCharacters.map(l => l.substring(startPoint, startPoint + characterWidth))
        });
        iteration++;
    }
    return dictionary;
}

module.exports = {
    solve: solve
}