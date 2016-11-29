var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
      var colors = JSON.parse(body);
      for (var i = 0; i < colors.length; i++) {
        if (colors[i].name.toLowerCase() == process.argv[2].toLowerCase()) {
            console.log(colors[i].rgb.r + " " + colors[i].rgb.g + " " + colors[i].rgb.b)
        }
    }
      
  }
})



