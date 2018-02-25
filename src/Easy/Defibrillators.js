function solve() {

    let current = {
        Long: parseFloat(readline().replace(',', '.')),
        Lat: parseFloat(readline().replace(',', '.'))
    };

    var defibCount = parseInt(readline());
    var closest = null;
    var closestDistance = Number.MAX_VALUE;

    for (var i = 0; i < defibCount; i++) {
        let data = readline();

        let parts = data.split(";");

        let defib = {
            Name: parts[1],
            Location: {
                Long: parseFloat(parts[4].replace(',', '.')),
                Lat: parseFloat(parts[5].replace(',', '.'))
            }
        };

        var x1 = (defib.Location.Long - current.Long) * Math.cos((current.Lat - defib.Location.Lat)/2);
        var y = defib.Location.Lat - current.Lat;
        var distance = Math.sqrt(Math.pow(x1, 2) + Math.pow(y, 2))*6371;

        if (distance < closestDistance)
        {
            closest = defib;
            closestDistance = distance;
        }        
    }

    print(closest.Name);
  }  
  
  module.exports = {
    solve: solve,
  }