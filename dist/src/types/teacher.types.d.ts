export type TeacherSelectableFields = {
    identifier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    courseId?: boolean;
    userId?: boolean;
};
export type TeacherCreateData = {
    courseId: bigint;
    userId: bigint;
};
export type TeacherIdentifierNotObligatory = {
    courseId?: bigint;
    userId?: bigint;
    identifier?: bigint;
    createdAt?: Date;
    updatedAt?: Date;
};
export type TeacherIdentifierObligatory = {
    identifier: bigint;
    courseId?: bigint;
    userId?: bigint;
    createdAt?: Date;
    updatedAt?: Date;
};
