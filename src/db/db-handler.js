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
exports.DBClientHandler = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const helpers_1 = require("../helpers");
const tables_1 = require("./tables");
class DBClientHandler {
    constructor(config, salt = 4) {
        //super('');
        this.salt = salt;
        this.client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: config.get("DATABASE_URL")
                }
            }
        });
        this._users = new tables_1.DBUsersManager(this.client);
        this._institutions = new tables_1.DBInstitutionsManager(this.client);
        this._evaluations = new tables_1.DBEvaluationManager(this.client);
        this._metodologists = new tables_1.DBMetodologistManager(this.client);
        this._resourcesTemplates = new tables_1.DBResourceTemplateManager(this.client);
        this._resources = new tables_1.DBResourcesManager(this.client);
        this._students = new tables_1.DBStudentManager(this.client);
        this._subjects = new tables_1.DBSubjectManager(this.client);
        this._teachers = new tables_1.DBTeacherManager(this.client);
    }
    //gets
    get Users() {
        return this._users;
    }
    get Institutions() {
        return this._institutions;
    }
    get Evaluations() {
        return this._evaluations;
    }
    get Metodologists() {
        return this._metodologists;
    }
    get ResourcesTemplates() {
        return this._resourcesTemplates;
    }
    get Resources() {
        return this._resources;
    }
    get Students() {
        return this._students;
    }
    get Subjects() {
        return this._subjects;
    }
    get Teachers() {
        return this._teachers;
    }
    //methods
    addUser(user) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if ((0, helpers_1.IsNullEmptyOrWhitespaces)(user.name)) {
                reject({
                    code: 1,
                    data: { message: 'the user name is invalid' }
                });
            }
            else if ((0, helpers_1.IsNullEmptyOrWhitespaces)(user.password)) {
                reject({
                    code: 2,
                    data: { message: 'the password cannot be empty' }
                });
            }
            else if ((0, helpers_1.IsNullEmptyOrWhitespaces)(user.email) && (0, helpers_1.IsNullEmptyOrWhitespaces)(user.phone)) {
                reject({
                    code: 3,
                    data: { message: 'you must provide a valid email or a valid phone' }
                });
            }
            else {
                if (!(0, helpers_1.IsNullEmptyOrWhitespaces)(user.email)) {
                    if (!(0, helpers_1.IsValidEmail)(user.email)) {
                        reject({
                            code: 4,
                            data: { message: `the email ${user.email} is invalid` }
                        });
                        return;
                    }
                    var userByMail = yield this._users.findFirst({
                        where: {
                            email: user.email
                        }
                    });
                    if (userByMail != null) {
                        reject({
                            code: 5,
                            data: { message: `there is an user registered with the email ${user.email}` }
                        });
                        return;
                    }
                }
                if (!(0, helpers_1.IsNullEmptyOrWhitespaces)(user.phone)) {
                    if (!(0, helpers_1.IsValidPhoneNumber)(user.phone)) {
                        reject({
                            code: 6,
                            data: { message: `the phone ${user.phone} is invalid` }
                        });
                        return;
                    }
                    var userByPhone = yield this._users.findFirst({
                        where: {
                            phone: user.phone
                        }
                    });
                    if (userByPhone != null) {
                        reject({
                            code: 7,
                            data: { message: `there is an user registered with the phone ${user.phone}` }
                        });
                        return;
                    }
                }
                try {
                    const salt = (0, bcrypt_1.genSaltSync)(this.salt);
                    const password_hash = (0, bcrypt_1.hashSync)(user.password, salt);
                    const result = yield this._users.create(Object.assign(Object.assign({}, user), { password_hash }));
                    resolve({
                        code: 0,
                        data: result
                    });
                }
                catch (err) {
                    reject({
                        code: 999,
                        data: err
                    });
                }
            }
        }));
    }
    isValidPassword(user) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            if (!(0, helpers_1.IsNullEmptyOrWhitespaces)(user.email)) {
                var userByMail = yield this._users.findFirst({
                    where: {
                        email: user.email
                    },
                    select: {
                        password_hash: true
                    }
                });
                if (userByMail) {
                    var areSame = (0, bcrypt_1.compareSync)(user.password, userByMail.password_hash);
                    resolve(areSame);
                }
            }
            if (!(0, helpers_1.IsNullEmptyOrWhitespaces)(user.phone)) {
                var userByPhone = yield this._users.findFirst({
                    where: {
                        phone: user.phone
                    },
                    select: {
                        password_hash: true
                    }
                });
                if (userByPhone) {
                    var areSame = (0, bcrypt_1.compareSync)(user.password, userByPhone.password_hash);
                    resolve(areSame);
                }
            }
            reject({
                code: 1,
                data: { message: 'user not found' }
            });
        }));
    }
    getUserById(identifier) {
        return new Promise((resolve, reject) => {
            this._users.findUnique({
                where: {
                    identifier
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
                .then(result => resolve({
                code: 0,
                data: result
            }))
                .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }
    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            this._users.findFirst({
                where: {
                    email
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
                .then(result => resolve({
                code: 0,
                data: result
            }))
                .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }
    getUserByPhone(phone) {
        return new Promise((resolve, reject) => {
            this._users.findFirst({
                where: {
                    phone
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
                .then(result => resolve({
                code: 0,
                data: result
            }))
                .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }
    updateUser(user) {
        return new Promise((resolve, reject) => {
            //
        });
    }
    deleteUser(identifier) {
        return new Promise((resolve, reject) => {
            //
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.$connect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.$disconnect();
        });
    }
}
exports.DBClientHandler = DBClientHandler;
