"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/api/test', function (request, response) {
    response.send({
        a: 1,
        b: 3
    });
});
app.listen(port, function () {
    console.log("Service started at http://localhost:" + port);
});
