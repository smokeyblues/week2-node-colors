var luminosity = require("./luminosity.js")

var lumins = luminosity(process.argv[2], process.argv[3], process.argv[4]);

function islight (lumins) {
    var light;
    if (lumins > 155) {
        light = 'dark';
    } else {
        light = 'light';
    }
return light
}

console.log(islight(process.argv[2], process.argv[3], process.argv[4]));

