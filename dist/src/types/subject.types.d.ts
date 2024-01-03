export type SubjectSelectionableFields = {
    identifier?: boolean;
    name?: boolean;
    year?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    institutionId?: boolean;
};
export type SubjectCreateData = {
    name: string;
    year?: number;
    description?: string;
    institutionId: number;
};
export type SubjectNotObligatoryIdentifier = {
    identifier?: number;
    name?: string;
    year?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    institutionId?: number;
};
export type SubjectObligatoryIdentifier = {
    identifier: number;
    name?: string;
    year?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    institutionId?: number;
};
