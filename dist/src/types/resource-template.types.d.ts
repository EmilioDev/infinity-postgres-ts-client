export type ResourceTemplateSeleccionableFields = {
    identifier?: boolean;
    content?: boolean;
    templateName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ResourceTemplateCreateData = {
    identifier: number;
    content: any;
    templateName?: string;
};
export type ResourceTemplateNotObligatoryIdentifier = {
    identifier?: number;
    content?: any;
    templateName?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
export type ResourceTemplateObligatoryIdentifier = {
    identifier: number;
    content?: any;
    templateName?: string;
    createdAt?: Date;
    updatedAt?: Date;
};
