// Create web server with Node.js
// 1. Create a new folder
// 2. Create a new file with the name server.js
// 3. Install express module
// 4. Create a new file with the name comments.js
// 5. Create a new file with the name comments.html
// 6. Create a new file with the name comments.json
// 7. Start the server
// 8. Open the browser

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
    fs.readFile('comments.json', function (err, data) {
        res.end(data);
    });
});

app.listen(8080, function () {
    console.log('Server is running on port 8080');
});