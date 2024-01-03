import { DBInstitutionsManager, DBUsersManager, DBEvaluationManager, DBMetodologistManager, DBResourceTemplateManager, DBResourcesManager, DBStudentManager, DBSubjectManager, DBTeacherManager } from "./tables";
export declare class DBClientHandler {
    private _users;
    private _institutions;
    private _evaluations;
    private _metodologists;
    private _resourcesTemplates;
    private _resources;
    private _students;
    private _subjects;
    private _teachers;
    private client;
    constructor(dbUrl: string);
    get Users(): DBUsersManager;
    get Institutions(): DBInstitutionsManager;
    get Evaluations(): DBEvaluationManager;
    get Metodologists(): DBMetodologistManager;
    get ResourcesTemplates(): DBResourceTemplateManager;
    get Resources(): DBResourcesManager;
    get Students(): DBStudentManager;
    get Subjects(): DBSubjectManager;
    get Teachers(): DBTeacherManager;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}
