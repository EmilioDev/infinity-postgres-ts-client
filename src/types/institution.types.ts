export type InstitutionSelectionableFields = {
    identifier?: boolean,
    name?: boolean,
    NIT?: boolean,
    REEUP?: boolean,
    website?: boolean,
    address?: boolean,
    createdAt?: boolean,
    updatedAt?: boolean,
    rector?:boolean,
    evaluativeSchemeUsed?: boolean
    description?: boolean,
    logo?: boolean
}

export type CreateInstitutionType = {
    name: string,
    NIT: string,
    REEUP: string,
    website?: string,
    address?: string,
    rector: number,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierNotObligatory = {
    identifier?: number,
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?:number,
    evaluativeSchemeUsed?: number,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierObligatory = {
    identifier: number,
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?:number,
    evaluativeSchemeUsed?: number,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierFields = {
    identifier: number
}

export type InstitutionNoIdentifier = {
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?:number,
    evaluativeSchemeUsed?: number,
    description?: string,
    logo?: string
}
