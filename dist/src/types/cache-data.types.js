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
    setUserData(usr) {
        this.user = usr;
        return this;
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
    addMetodologists(metodologists) {
        this.metodologistIn.push(...metodologists);
        return this;
    }
    addTeacher(teacher) {
        this.teacherIn.push(teacher);
        return this;
    }
    addTeachers(teachers) {
        this.teacherIn.push(...teachers);
        return this;
    }
    addStudent(student) {
        this.studentIn.push(student);
        return this;
    }
    addStudents(students) {
        this.studentIn.push(...students);
        return this;
    }
}
exports.CacheData = CacheData;
