export type MetodologistSelectionableFields = {
    identifier?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    courseId?: boolean;
};
export type MetodologistCreate = {
    userId: number;
    courseId: number;
};
export type MetodologistNotObligatoryIdentifier = {
    userId?: number;
    courseId?: number;
    identifier?: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export type MetodologistObligatoryIdentifier = {
    userId: number;
    courseId: number;
    identifier: number;
    createdAt?: Date;
    updatedAt?: Date;
};
export type MetodologistUniquefields = {
    userId?: number;
    courseId?: number;
    identifier: number;
};
