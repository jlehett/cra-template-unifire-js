var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
});

var port = process.env.PORT || 8000;
var server = app.listen(port, function() {
    console.log('listening on port: %s', port);
});

module.exports = app;