export type EvaluationSelectableFields = {
    identifier?: boolean;
    value?: boolean;
    evaluationName?: boolean;
    isFinal?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    studentId?: boolean;
};
export type EvaluationCreateData = {
    value: number;
    evaluationName?: string;
    isFinal?: boolean;
    studentId: bigint;
};
export type EvaluationIdentifierNotObligatory = {
    identifier?: bigint;
    value?: number;
    evaluationName?: string;
    isFinal?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    studentId?: bigint;
};
export type EvaluationIdentifierObligatory = {
    identifier: number;
    value?: number;
    evaluationName?: string;
    isFinal?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    studentId?: bigint;
};
