import { PrismaClient } from "@prisma/client";
import { 
    DBInstitutionsManager, 
    DBUsersManager,
    DBEvaluationManager,
    DBMetodologistManager,
    DBResourceTemplateManager,
    DBResourcesManager,
    DBStudentManager,
    DBSubjectManager,
    DBTeacherManager 
} from "./tables";


export class DBClientHandler
{
    private _users:DBUsersManager;
    private _institutions:DBInstitutionsManager;
    private _evaluations: DBEvaluationManager;
    private _metodologists:DBMetodologistManager;
    private _resourcesTemplates:DBResourceTemplateManager;
    private _resources:DBResourcesManager;
    private _students:DBStudentManager;
    private _subjects:DBSubjectManager;
    private _teachers:DBTeacherManager;

    private client:PrismaClient;

    constructor(dbUrl:string) {
        this.client = new PrismaClient({
            datasources: {
                db: {
                    url: dbUrl
                }
            }
        });

        this._users = new DBUsersManager(this.client);
        this._institutions = new DBInstitutionsManager(this.client);
        this._evaluations = new DBEvaluationManager(this.client);
        this._metodologists = new DBMetodologistManager(this.client);
        this._resourcesTemplates = new DBResourceTemplateManager(this.client);
        this._resources = new DBResourcesManager(this.client);
        this._students = new DBStudentManager(this.client);
        this._subjects = new DBSubjectManager(this.client);
        this._teachers = new DBTeacherManager(this.client);
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