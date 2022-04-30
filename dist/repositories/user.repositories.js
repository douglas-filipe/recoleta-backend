"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const prisma_service_1 = require("../services/prisma.service");
const create = (body) => {
    return prisma_service_1.prisma.user.create({
        data: body,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    });
};
exports.create = create;
//# sourceMappingURL=user.repositories.js.map