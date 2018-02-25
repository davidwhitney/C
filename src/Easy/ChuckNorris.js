function solve() {
    var message = readline();
    let encoded = translate(message);
    print(encoded);
  }  

  function translate(message)
  {
    let result = [];
    for (var i = 0; i < message.length; i++) {
        result.push(message.charCodeAt(i).toString(2).padStart(7, '0'));
    }

    let asString = result.join("");
    var parts = createParts(asString);

    var output = "";
    for (idx in parts)
    {
        var part = parts[idx];
        output += output != "" ? " " : "";
        var encoded = (part.includes("1") ? "0" : "00") + " " + "0".repeat(part.length);
        output += encoded;
    }
    return output;
  }

  function createParts(binaryString)
  {
      var blocks = [];
      var lastValue = '';
      var currentBlock = "";
      for (var i = 0; i < binaryString.length; i++)
      {
          let ch = binaryString.charAt(i);
          if (ch == lastValue)
          {   
            currentBlock += ch;                      
          }
          else {
            blocks.push(currentBlock);
            currentBlock = ch;
            lastValue = ch; 
          }
      }

      if (!isNullOrWhiteSpace(currentBlock))
      {
          blocks.push(currentBlock);
      }
      blocks.splice(0, 1);
      return blocks;
  }

  function isNullOrWhiteSpace(input) {
    return !input || !input.trim();
  }

  module.exports = {
    solve: solve,
  }