"use strict";
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
    prisma.$on('query', async (e) => {
        //await fs.promises.appendFile(`generated.sql`, `${e.query} ${e.params} \n`)
    });
    return prisma;
};
