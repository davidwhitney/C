function solve() {
    let strengths = getInput();
    
    var ordered = strengths.sort((a, b) => a - b);
    let smallestDiff = Number.MAX_SAFE_INTEGER;
    for(var index = 1; index <= ordered.length; index++) {
        var last = ordered[index-1];
        var item = ordered[index];
        var diff = item - last;
        smallestDiff = diff < smallestDiff ? diff : smallestDiff;
    }

    print(smallestDiff);
  }
  
  function getInput() {
    var input = [];
    var n = parseInt(readline());
    for (var i = 0; i < n; i++)
    {        
        input.push(parseInt(readline()));
    }
    return input;
  }
  
  module.exports = {
    solve: solve,
    getInput: getInput,
  }