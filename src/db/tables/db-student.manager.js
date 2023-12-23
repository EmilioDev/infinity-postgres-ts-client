"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBStudentManager = void 0;
class DBStudentManager {
    constructor(prisma) {
        this.prisma = prisma;
        // :-)
    }
    get data() {
        return this.prisma.student;
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
    findAll(where, select) {
        return this.data.findMany({
            where,
            select
        });
    }
    delete({ where, select }) {
        return this.data.delete({
            where,
            select
        });
    }
}
exports.DBStudentManager = DBStudentManager;
