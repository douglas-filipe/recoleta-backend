"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const user_service_1 = require("../services/user.service");
const CreateUserController = async (req, res) => {
    try {
        const user = await (0, user_service_1.CreateUserService)(req.body);
        res.status(201).json(user);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
};
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=user.controller.js.map