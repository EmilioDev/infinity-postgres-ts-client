"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheData = void 0;
class CacheData {
    constructor() {
        this.institutionsManaged = [];
        this.metodologistIn = [];
        this.teacherIn = [];
        this.studentIn = [];
    }
    addInstitution(institution) {
        this.institutionsManaged.push(institution);
        return this;
    }
    addInstitutions(institutions) {
        this.institutionsManaged.push(...institutions);
        return this;
    }
    addMetodologist(metodologist) {
        this.metodologistIn.push(metodologist);
        return this;
    }
    addMetodologists(metodologist) {
        this.metodologistIn.push(...metodologist);
        return this;
    }
    addTeacher(teacher) {
        this.teacherIn.push(teacher);
        return this;
    }
    addTeachers(teacher) {
        this.teacherIn.push(...teacher);
        return this;
    }
    addStudent(student) {
        this.studentIn.push(student);
        return this;
    }
    addStudents(student) {
        this.studentIn.push(...student);
        return this;
    }
}
exports.CacheData = CacheData;
