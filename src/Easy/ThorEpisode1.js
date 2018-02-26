function solve() {
    let inputs = readline().split(' ');
    let lightX = parseInt(inputs[0]); // the X position of the light of power
    let lightY = parseInt(inputs[1]); // the Y position of the light of power
    let initialTX = parseInt(inputs[2]); // Thor's starting X position
    let initialTY = parseInt(inputs[3]); // Thor's starting Y position


    var x = initialTX;
    var y = initialTY;
    
    while (true)
    {
        let remainingTurns = parseInt(readline());        
                    
        var deltaX = x < lightX ? 1 : -1;
        deltaX = x == lightX ? 0 : deltaX;
        var dirX = deltaX == 1 ? "E" : "W";
        dirX = x == lightX ? "" : dirX;
                    
        var deltaY = y < lightY ? 1 : -1;
        deltaY = y == lightY ? 0 : deltaY;
        var dirY = deltaY == 1 ? "S" : "N";
        dirY = y == lightY ? "" : dirY;
        
        var travel = dirY + dirX;
        
        print(travel);
        
        x += deltaX;
        y += deltaY;
    }
}

module.exports = {
    solve: solve
};