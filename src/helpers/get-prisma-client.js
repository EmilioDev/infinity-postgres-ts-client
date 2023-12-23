"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClient = void 0;
const client_1 = require("@prisma/client");
function getPrismaClient(dbUrl, disconnectCallback) {
    if (!dbUrl) {
        dbUrl = 'default';
    }
    if (process.env.NODE_ENV === 'production') {
        return getPrismaClientForProduction(dbUrl);
    }
    else {
        return getPrismaClientForDevelopment(dbUrl);
    }
}
exports.getPrismaClient = getPrismaClient;
const getPrismaClientForProduction = (dbUrl) => {
    let prisma;
    if (dbUrl === 'default') {
        return new client_1.PrismaClient({
            log: [
                {
                    emit: 'stdout',
                    level: 'info'
                },
                {
                    emit: 'stdout',
                    level: 'warn'
                }
            ]
        });
    }
    else {
        return new client_1.PrismaClient({
            log: [
                {
                    emit: 'stdout',
                    level: 'info'
                },
                {
                    emit: 'stdout',
                    level: 'warn'
                }
            ],
            datasources: {
                db: {
                    url: dbUrl
                }
            }
        });
    } // end if
};
const getPrismaClientForDevelopment = (dbUrl) => {
    let prisma;
    if (dbUrl === 'default') {
        prisma = new client_1.PrismaClient({
            log: [
                {
                    emit: 'stdout',
                    level: 'info'
                },
                {
                    emit: 'stdout',
                    level: 'warn'
                },
                {
                    emit: 'event',
                    level: 'query'
                }
            ]
        });
    }
    else {
        prisma = new client_1.PrismaClient({
            log: [
                {
                    emit: 'stdout',
                    level: 'info'
                },
                {
                    emit: 'stdout',
                    level: 'warn'
                },
                {
                    emit: 'event',
                    level: 'query'
                }
            ],
            datasources: {
                db: {
                    url: dbUrl
                }
            }
        });
    } // end if
    // define prisma event handlers
    prisma.$on('query', (e) => __awaiter(void 0, void 0, void 0, function* () {
        //await fs.promises.appendFile(`generated.sql`, `${e.query} ${e.params} \n`)
    }));
    return prisma;
};
