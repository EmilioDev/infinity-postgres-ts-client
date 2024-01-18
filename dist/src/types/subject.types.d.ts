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
    institutionId: bigint;
};
export type SubjectNotObligatoryIdentifier = {
    identifier?: bigint;
    name?: string;
    year?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    institutionId?: bigint;
};
export type SubjectObligatoryIdentifier = {
    identifier: bigint;
    name?: string;
    year?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    institutionId?: bigint;
};
