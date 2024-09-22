"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_js_1 = require("../controllers/AuthController.js");
var router = (0, express_1.Router)();
router.post("/auth/login", AuthController_js_1.default.login);
exports.default = router;
