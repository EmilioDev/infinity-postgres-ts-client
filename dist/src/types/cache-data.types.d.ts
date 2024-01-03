import { UserObligatoryIdentifierNoPassword } from "./user.types";
export declare class CacheData {
    user: UserObligatoryIdentifierNoPassword;
    institutionsManaged: IdentifierOnlyType[];
    metodologistIn: IdentifierOnlyType[];
    teacherIn: IdentifierOnlyType[];
    studentIn: IdentifierOnlyType[];
    constructor();
    setUserData(usr: UserObligatoryIdentifierNoPassword): this;
    addInstitution(institution: IdentifierOnlyType): this;
    addInstitutions(institutions: IdentifierOnlyType[]): this;
    addMetodologist(metodologist: IdentifierOnlyType): this;
    addMetodologists(metodologists: IdentifierOnlyType[]): this;
    addTeacher(teacher: IdentifierOnlyType): this;
    addTeachers(teachers: IdentifierOnlyType[]): this;
    addStudent(student: IdentifierOnlyType): this;
    addStudents(students: IdentifierOnlyType[]): this;
}
export type IdentifierOnlyType = {
    identifier: number;
};
