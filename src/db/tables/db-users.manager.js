"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBUsersManager = void 0;
class DBUsersManager {
    constructor(usr) {
        this.usr = usr;
        //
    }
    get data() {
        return this.usr.user;
    }
    //common users
    create(user) {
        return new Promise((resolve, reject) => {
            const result = this.data.create({
                data: Object.assign({}, user),
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    createdAt: true
                }
            })
                .then(result => resolve(result))
                .catch(err => reject(err));
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
        return this.data.findMany({
            where
        });
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
    //superusers
    setAsSuperUser(identifier) {
        return this.data.update({
            where: {
                identifier
            },
            data: {
                isSuperUser: true
            },
            select: {
                identifier: true,
                email: true,
                phone: true,
                isSuperUser: true
            }
        });
    }
    removeSuperUserPrivilegies(identifier) {
        return this.data.update({
            where: {
                identifier
            },
            data: {
                isSuperUser: false
            },
            select: {
                identifier: true,
                email: true,
                phone: true,
                isSuperUser: true
            }
        });
    }
}
exports.DBUsersManager = DBUsersManager;
