import { InstitutionIdentifierObligatory } from "./institution.types";
import { MetodologistObligatoryIdentifier } from "./metodologist.types";
import { StudentIdentifierObligatory } from "./student.types";
import { TeacherIdentifierObligatory } from "./teacher.types";
import { UserObligatoryIdentifierNoPassword } from "./user.types";

export class CacheData {
    public user: UserObligatoryIdentifierNoPassword;
    public institutionsManaged: InstitutionIdentifierObligatory[];
    public metodologistIn: MetodologistObligatoryIdentifier[];
    public teacherIn: TeacherIdentifierObligatory[];
    public studentIn: StudentIdentifierObligatory[];

    constructor() {
        this.institutionsManaged = [];
        this.metodologistIn = [];
        this.teacherIn = [];
        this.studentIn = [];
    }

    addInstitution(institution:InstitutionIdentifierObligatory) {
        this.institutionsManaged.push(institution);
        return this;
    }

    addInstitutions(institutions:InstitutionIdentifierObligatory[]) {
        this.institutionsManaged.push(...institutions);
        return this;
    }

    addMetodologist(metodologist: MetodologistObligatoryIdentifier) {
        this.metodologistIn.push(metodologist);
        return this;
    }

    addMetodologists(metodologist: MetodologistObligatoryIdentifier[]) {
        this.metodologistIn.push(...metodologist);
        return this;
    }

    addTeacher(teacher: TeacherIdentifierObligatory) {
        this.teacherIn.push(teacher);
        return this;
    }

    addTeachers(teacher: TeacherIdentifierObligatory[]) {
        this.teacherIn.push(...teacher);
        return this;
    }

    addStudent(student:StudentIdentifierObligatory) {
        this.studentIn.push(student);
        return this;
    }

    addStudents(student:StudentIdentifierObligatory[]) {
        this.studentIn.push(...student);
        return this;
    }
}