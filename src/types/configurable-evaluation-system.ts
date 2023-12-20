export type EvaluationSystemSelectableFields = {
    identifier?: boolean,
    name: boolean,
    description?: boolean,
}

export type EvaluationSystemCreate = {
    name: string,
    description?: string,
}

export type EvaluationSystemIdentifierNotObligatory = {
    identifier?: number,
    name: string,
    description?: string,
}

export type EvaluationSystemIdentifierObligatory = {
    identifier: number,
    name: string,
    description?: string,
}

export type EvaluationSystemIdentifierFields = {
    identifier: number,
}

export type EvaluationSystemfieldsNotObligatory = {
    name?: string,
    description?: string,
}