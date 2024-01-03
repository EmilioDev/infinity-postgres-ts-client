import { PrismaClient } from "@prisma/client";
export declare function getPrismaClient(dbUrl: string, disconnectCallback?: Function): PrismaClient;
