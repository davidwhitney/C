global.inputLines = [];
global.outputLines = [];
global.readline = function() {
    return inputLines.shift();
}
global.print = function(str) {
    global.outputLines.push(str);
    console.log(str);
}