"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("dotenv/config");
var cors = require("cors");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 7000;
var index_js_1 = require("./routes/index.js");
// * Middleware
app.use(cors.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    return res.send("It's working 🙌");
});
app.use("/api", index_js_1.default);
app.listen(PORT, function () { return console.log("Server is running on PORT ".concat(PORT)); });
