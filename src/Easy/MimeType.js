function solve() {

    var N = parseInt(readline()); // Number of elements which make up the association table.
    var Q = parseInt(readline()); // Number Q of file names to be analyzed.
    
    var types = [];
    for (var i = 0; i < N; i++) {
        var inputs = readline().split(' ');
        types.push({k: inputs[0].toUpperCase(), v: inputs[1]});
    }

    for (var i = 0; i < Q; i++) {
        var filename = readline();
        if (filename.indexOf(".") == -1){
            print("UNKNOWN");
            continue;
        }

        var parts = filename.split(".");
        var ext = parts[parts.length-1].toUpperCase();
        var map = types.find(x => x.k == ext) || { k: "UNKNOWN", v: "UNKNOWN" }
        print(map.v);
    }
}

module.exports = {
    solve : solve
}