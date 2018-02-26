function solve() {

    let n = parseInt(readline());
    var temps = readline().split(' ').map(val => parseInt(val)).slice(0, n);
       
    if(temps.length == 0) {
        print(0);
        return;
    }
   
    let lowest = Number.MAX_SAFE_INTEGER;
    let lowestFull = Number.MAX_SAFE_INTEGER;
    for(var idx in temps) {
        let t = temps[idx];
        var absolute = Math.abs(t);

        if(absolute < lowest) {
            lowest = absolute;
            lowestFull = t;
        }
        
        if(absolute == lowest && t > lowestFull) {
            lowest = absolute;
            lowestFull = t;
        }
    }        

    print(lowestFull);
}

module.exports = {
    solve: solve
};