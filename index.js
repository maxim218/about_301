"use strict";

const express = require("express");
const app = express();
const port = 5000;
app.listen(port);
console.log("Port: " + port);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    next();
});

app.get("/act/first", function (request, response) {
    console.log("First");
    response.end("First");
});

app.get("/act/second", function (request, response) {
    console.log("Second");
    response.end("Second");
});

app.get("/act/zero", function (request, response) {
    console.log("Zero");
    response.header("Location", "/act/first");
    response.status(301);
    response.end("");
});
