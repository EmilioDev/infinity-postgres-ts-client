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
