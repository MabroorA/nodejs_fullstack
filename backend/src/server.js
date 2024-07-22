"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res) {
    res.send("Hello, world!");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Server started on port ".concat(PORT)); });
