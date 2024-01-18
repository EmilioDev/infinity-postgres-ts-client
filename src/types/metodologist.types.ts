export type MetodologistSelectionableFields = {
    identifier?: boolean,
    createdAt?: boolean,
    updatedAt?: boolean,
    userId?: boolean,
    courseId?: boolean
}

export type MetodologistCreate = {
    userId: bigint,
    courseId: bigint,
}

export type MetodologistNotObligatoryIdentifier = {
    userId?: bigint,
    courseId?: bigint,
    identifier?: bigint,
    createdAt?: Date,
    updatedAt?: Date
}

export type MetodologistObligatoryIdentifier = {
    userId: bigint,
    courseId: bigint,
    identifier: bigint,
    createdAt?: Date,
    updatedAt?: Date
}

export type MetodologistUniquefields = {
    userId?: bigint,
    courseId?: bigint,
    identifier: bigint,
}