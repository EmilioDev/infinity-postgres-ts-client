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
    description?: boolean,
    logo?: boolean
}

export type CreateInstitutionType = {
    name: string,
    NIT: string,
    REEUP: string,
    website?: string,
    address?: string,
    rector: bigint,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierNotObligatory = {
    identifier?: bigint,
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?: bigint,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierObligatory = {
    identifier: bigint,
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?: bigint,
    description?: string,
    logo?: string
}

export type InstitutionIdentifierFields = {
    identifier: bigint,
}

export type InstitutionNoIdentifier = {
    name?: string,
    NIT?: string,
    REEUP?: string,
    website?: string,
    address?: string,
    createdAt?: Date,
    updatedAt?: Date,
    rector?: bigint,
    description?: string,
    logo?: string
}
