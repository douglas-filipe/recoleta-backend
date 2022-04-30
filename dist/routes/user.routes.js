"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const route = (0, express_1.Router)();
route.post("/register", user_controller_1.CreateUserController);
exports.default = route;
//# sourceMappingURL=user.routes.js.map