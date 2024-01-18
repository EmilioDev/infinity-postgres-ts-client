export type StudentSelectableFields = {
    identifier?: boolean,
    pendingApproval?: boolean,
    createdAt?: boolean,
    updatedAt?: boolean,
    userId?: boolean,
    courseId?: boolean
}

export type StudentCreateData = {
    pendingApproval?: boolean,
    userId: bigint,
    courseId: bigint
}

export type StudentIdentifierNotObligatory = {
    identifier?: bigint,
    pendingApproval?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    userId?: bigint,
    courseId?: bigint,
}

export type StudentIdentifierObligatory = {
    identifier: bigint,
    pendingApproval?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    userId?: bigint,
    courseId?: bigint,
}

