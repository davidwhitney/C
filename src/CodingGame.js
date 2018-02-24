global.inputLines = [];
global.readline = function() {
    return inputLines.shift();
}
global.print = function(str) {
    console.log(str);
}