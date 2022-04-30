"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const user_repositories_1 = require("../repositories/user.repositories");
const bcrypt_1 = __importDefault(require("bcrypt"));
const CreateUserService = (body) => {
    try {
        const hashedPassword = bcrypt_1.default.hashSync(body.password, 10);
        body.password = hashedPassword;
        return (0, user_repositories_1.create)(body);
    }
    catch (e) {
        throw new Error("Error ao criar a conta");
    }
};
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=user.service.js.map