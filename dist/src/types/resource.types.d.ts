export type ResourceSelectionableFields = {
    identifier?: boolean;
    name?: boolean;
    description?: boolean;
    photo?: boolean;
    requiresOnline?: boolean;
    evaluation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    resourceTemplateId?: boolean;
    templateCustomValues?: boolean;
};
export type ResourceCreateData = {
    name?: string;
    description?: string;
    photo?: string;
    requiresOnline?: boolean;
    evaluation?: number;
    resourceTemplateId: number;
    templateCustomValues: any;
};
export type ResourceIdentifierNotObligatory = {
    identifier?: bigint;
    name?: string;
    description?: string;
    photo?: string;
    requiresOnline?: boolean;
    evaluation?: number;
    resourceTemplateId?: bigint;
    templateCustomValues?: any;
};
export type ResourceIdentifierObligatory = {
    identifier: bigint;
    name?: string;
    description?: string;
    photo?: string;
    requiresOnline?: boolean;
    evaluation?: number;
    resourceTemplateId?: bigint;
    templateCustomValues?: any;
};
