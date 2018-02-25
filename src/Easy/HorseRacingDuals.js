function solve() {
    let input = getInput();
    let maxValue = Math.max(input);
    let smallestDiff = Number.MAX_SAFE_INTEGER;

    var ordered = input.sort((a, b) => a - b);
    for(var index = 1; index < input.length; index++) {
        var last = ordered[index-1];
        var item = ordered[index];
        var diff = item - last;
        smallestDiff = diff < smallestDiff ? diff : smallestDiff;
    }

    print(smallestDiff);
  }
  
  function getInput() {
    var input = [];
    for (var i = 0; i < 8; i++)
    {        
        input.push(parseInt(readline()));
    }
    return input;
  }
  
  module.exports = {
    solve: solve,
    getInput: getInput,
  }