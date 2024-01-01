import { UserObligatoryIdentifierNoPassword } from "./user.types";

export class CacheData {
    public user: UserObligatoryIdentifierNoPassword;
    public institutionsManaged: IdentifierOnlyType[];
    public metodologistIn: IdentifierOnlyType[];
    public teacherIn: IdentifierOnlyType[];
    public studentIn: IdentifierOnlyType[];

    constructor() {
        this.institutionsManaged = [];
        this.metodologistIn = [];
        this.teacherIn = [];
        this.studentIn = [];
    }

    addInstitution(institution:IdentifierOnlyType) {
        this.institutionsManaged.push(institution);
        return this;
    }

    addInstitutions(institutions:IdentifierOnlyType[]) {
        this.institutionsManaged.push(...institutions);
        return this;
    }

    addMetodologist(metodologist: IdentifierOnlyType) {
        this.metodologistIn.push(metodologist);
        return this;
    }

    addMetodologists(metodologists: IdentifierOnlyType[]) {
        this.metodologistIn.push(...metodologists);
        return this;
    }

    addTeacher(teacher: IdentifierOnlyType) {
        this.teacherIn.push(teacher);
        return this;
    }

    addTeachers(teachers: IdentifierOnlyType[]) {
        this.teacherIn.push(...teachers);
        return this;
    }

    addStudent(student:IdentifierOnlyType) {
        this.studentIn.push(student);
        return this;
    }

    addStudents(students:IdentifierOnlyType[]) {
        this.studentIn.push(...students);
        return this;
    }
}

export type IdentifierOnlyType = {
    identifier: number
}