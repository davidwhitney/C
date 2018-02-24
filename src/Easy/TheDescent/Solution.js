function solve() {
  for (var i = 0; i < 8; i++) {        
    var mountains = getInput();      
    print(findLargest(mountains).k);
  }
}

function findLargest(mountains) {
  var largest = mountains[0];
  mountains.forEach(element => {
    if(element.v > largest.v){
      largest = element;
    }
  });  
  return largest;  
}

function getInput() {
  var mountains = [];
  for (var i = 0; i < 8; i++)
  {        
      mountains.push({ k: i, v: parseInt(readline())});
  }
  return mountains;
}

module.exports = {
  solve: solve,
  getInput: getInput,
  findLargest: findLargest,
}