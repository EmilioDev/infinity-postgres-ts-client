"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBResourcesManager = void 0;
class DBResourcesManager {
    constructor(prisma) {
        this.prisma = prisma;
        // :-)
    }
    get data() {
        return this.prisma.resource;
    }
    create(data) {
        return this.data.create({ data });
    }
    findFirst({ where, select }) {
        return this.data.findFirst({
            where,
            select
        });
    }
    findUnique({ where, select }) {
        return this.data.findUnique({
            where,
            select
        });
    }
    findAll(where) {
        return this.data.findMany({
            where
        });
    }
    delete({ where, select }) {
        return this.data.delete({
            where,
            select
        });
    }
}
exports.DBResourcesManager = DBResourcesManager;
