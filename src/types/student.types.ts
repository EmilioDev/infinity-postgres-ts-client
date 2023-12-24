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
    userId: number,
    courseId: number
}

export type StudentIdentifierNotObligatory = {
    identifier?: number,
    pendingApproval?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    userId?: number,
    courseId?: number
}

export type StudentIdentifierObligatory = {
    identifier: number,
    pendingApproval?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    userId?: number,
    courseId?: number
}