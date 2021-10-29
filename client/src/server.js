var express = require('express');
var app = express();

console.log('Serving static assets on port 80')
app.use(express.static('/app/public'));
app.use('/css', express.static('/app/dist/css'));
app.use('/scripts', express.static('/app/dist/src'));

var server = app.listen(80);