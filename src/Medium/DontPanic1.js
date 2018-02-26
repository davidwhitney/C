function solve() {
    let map = getMap();

    while (true) {
        var remote = getRemote();

        if (remote.invalidLocation) {
            remote.Wait();
            continue;
        }

        if (remote.ExitIsOnthisFloor(map)
            && remote.TargetIsOtherWay(map, 'x')
            && !remote.IsGoingToTurnAround(map)) {
            remote.Block();
            continue;
        }

        if (!remote.ExitIsOnthisFloor(map)
            && remote.TargetIsOtherWay(map, 'e')
            && !remote.IsGoingToTurnAround(map)) {
            remote.Block();
            continue;
        }

        remote.Wait();
        
        if(typeof inputLines != 'undefined' && inputLines.length == 0){
            return;
        }
    }
}

function getMap() {
    var inputs = readline().split(' ');

    var nbFloors = parseInt(inputs[0]); // number of floors
    var width = parseInt(inputs[1]); // width of the area
    var nbRounds = parseInt(inputs[2]); // maximum number of rounds
    var exitFloor = parseInt(inputs[3]); // floor on which the exit is found
    var exitPos = parseInt(inputs[4]); // position of the exit on its floor
    var nbTotalClones = parseInt(inputs[5]); // number of generated clones
    var nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
    var nbElevators = parseInt(inputs[7]); // number of elevators

    var map = [];
    for (var i = 0; i < nbFloors; i++) {
        map.push((".".repeat(width - 1) + "L"))
    }

    set(map, exitPos, exitFloor, 'x');

    for (var ii = 0; ii < nbElevators; ii++) {
        var inputs1 = readline().split(' ');
        var elevatorFloor = parseInt(inputs1[0]); // floor on which this elevator is found
        var elevatorPos = parseInt(inputs1[1]); // position of the elevator on its floor

        set(map, elevatorPos, elevatorFloor, 'e');
    }

    return map;
}

function getRemote() {
    var clone = readline().split(' ');
    return new LeadingClone(parseInt(clone[0]), parseInt(clone[1]), clone[2]);
}

function set (map, x, y, char) {
    var row = map[y];
    var replacedAt = row.substr(0, x) + char + row.substr(x + char.length);
    map[y] = replacedAt;
}

function LeadingClone (cloneFloor, clonePos, direction) {
    
    if (cloneFloor < 0 || clonePos < 0) {
        this.invalidLocation = true;
    } else {
        this.invalidLocation = false;
    }

    this.location = new Coord(cloneFloor, clonePos);
    this.direction = direction;

    this.Wait = function () { print("WAIT"); }
    this.Block = function () { print("BLOCK"); }

    this.IsGoingToTurnAround = function (map) {
        return map[this.location.floor].indexOf('b', this.location.position) > -1;
    }
    this.ExitIsOnthisFloor = function (map) {
        return map[this.location.floor].indexOf('x', 0) > -1;        
    }
    this.TargetIsLeft = function (map, c) {
        return map[this.location.floor].indexOf(c, 0) < this.location.position;
    }
    this.TargetIsRight = function (map, c) {
        return map[this.location.floor].indexOf(c, 0) > this.location.position;
    }
    this.TargetIsOtherWay = function (map, c) {
        return this.direction == "LEFT" ? this.TargetIsRight(map, c) : this.TargetIsLeft(map, c);
    }
}

function Coord (floor, position) {
    this.floor = floor;
    this.position = position;
}

module.exports = {
    solve: solve
};