var request = require ('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        console.log("Something went wrong.")
       })
       .on('repsonse', function (response) {
        console.log("Response Code: " + response.statusMessage);
        console.log("Content Type: " + response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));