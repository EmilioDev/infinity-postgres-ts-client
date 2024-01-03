"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClientHandler = void 0;
const client_1 = require("@prisma/client");
const tables_1 = require("./tables");
class DBClientHandler {
    constructor(dbUrl) {
        this.client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: dbUrl
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
    async connect() {
        await this.client.$connect();
    }
    async disconnect() {
        await this.client.$disconnect();
    }
}
exports.DBClientHandler = DBClientHandler;
