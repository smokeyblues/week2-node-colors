
module.exports = {
    luminosity : function(red, green, blue) { 
        return 0.2126 * red + 0.7152 * green + 0.0722 * blue 
    },
    islight : function() {
        var lumins = this.luminosity(process.argv[2],process.argv[3],process.argv[4]);
        var light;
        if (lumins > 155) {
            light = 'dark';
        } else {
            light = 'light';
        }
    return light
    }, 
    darken : function(red, green, blue) {
        return [
            red * 0.80, 
            green * 0.80, 
            blue *0.80
        ].join(' ')
    }
};

