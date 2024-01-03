export type TeacherSelectableFields = {
    identifier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    courseId?: boolean;
    userId?: boolean;
};
export type TeacherCreateData = {
    courseId: number;
    userId: number;
};
export type TeacherIdentifierNotObligatory = {
    courseId?: number;
    userId?: number;
    identifier?: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export type TeacherIdentifierObligatory = {
    identifier: number;
    courseId?: number;
    userId?: number;
    createdAt?: Date;
    updatedAt?: Date;
};
