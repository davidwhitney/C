function solve() {
    let surfaceN = parseInt(readline());

    for (var i = 0; i < surfaceN; i++) {
        var inputs = readline().split(' ');
        var landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
        var landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
    }

    let loops = Number.MAX_SAFE_INTEGER;
    while (loops) {
        var inputs = readline().split(' ');
        var X = parseInt(inputs[0]);
        var Y = parseInt(inputs[1]);
        var hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
        var vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
        var fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
        var rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
        var power = parseInt(inputs[6]); // the thrust power (0 to 4).


        var absVspeed = Math.abs(vSpeed);

        var speedMap = [        
            {k:20, v:4},
            {k:15, v:3},
            {k:10, v:2},
            {k:0, v:1}
        ];

        var p = speedMap.find(x => absVspeed >= x.k).v;
        print(0 + " " + p);
      
        loops--;
    }
}


module.exports = {
    solve: solve,
}