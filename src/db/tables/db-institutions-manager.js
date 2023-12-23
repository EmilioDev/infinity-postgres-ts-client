"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstitutionsManager = void 0;
class DBInstitutionsManager {
    constructor(inst) {
        this.inst = inst;
        //
    }
    get data() {
        return this.inst.institution;
    }
    create(institution, select) {
        return this.data.create({
            data: institution,
            select
        });
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
        return this.data.findMany({ where });
    }
    update({ where, data, select }) {
        return this.data.update({
            where,
            data,
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
exports.DBInstitutionsManager = DBInstitutionsManager;
