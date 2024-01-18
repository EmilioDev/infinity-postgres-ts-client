export type ResourceTemplateSeleccionableFields = {
    identifier?: boolean,
    content?: boolean,
    templateName?: boolean,
    createdAt?: boolean,
    updatedAt?: boolean
}

export type ResourceTemplateCreateData = {
    identifier: bigint,
    content: any,
    templateName?: string
}

export type ResourceTemplateNotObligatoryIdentifier = {
    identifier?: bigint,
    content?: any,
    templateName?: string,
    createdAt?: Date,
    updatedAt?: Date
}

export type ResourceTemplateObligatoryIdentifier = {
    identifier: bigint,
    content?: any,
    templateName?: string,
    createdAt?: Date,
    updatedAt?: Date
}