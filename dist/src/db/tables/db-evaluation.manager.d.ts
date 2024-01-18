import { PrismaClient } from "@prisma/client";
import { EvaluationSelectableFields, EvaluationCreateData, EvaluationIdentifierNotObligatory, EvaluationIdentifierObligatory } from "../../types";
export declare class DBEvaluationManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: EvaluationCreateData): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: bigint;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        createdAt: Date;
        updatedAt: Date;
        studentId: bigint;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: EvaluationIdentifierNotObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: bigint;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: bigint;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: EvaluationIdentifierObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: bigint;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: bigint;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: EvaluationIdentifierNotObligatory, select?: EvaluationSelectableFields): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: bigint;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: bigint;
    }[]>;
    delete({ where, select }: {
        where: EvaluationIdentifierObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: bigint;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: bigint;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
