"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBTeacherManager = void 0;
class DBTeacherManager {
    constructor(prisma) {
        this.prisma = prisma;
        // :-)
    }
    get data() {
        return this.prisma.teacher;
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
    clean() {
        return new Promise((resolve, reject) => {
            this.data.deleteMany()
                .then(data => resolve())
                .catch(err => reject(err));
        });
    }
}
exports.DBTeacherManager = DBTeacherManager;
