"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const client_1 = require("@prisma/client");
const db_1 = require("./db");
const prisma = new client_1.PrismaClient();
const createContext = async (ctx) => {
    // Skip if you are not using a serverless environment
    ctx.callbackWaitsForEmptyEventLoop = false;
    return { ...ctx, prisma, DBClientHandler: db_1.DBClientHandler };
};
exports.createContext = createContext;
