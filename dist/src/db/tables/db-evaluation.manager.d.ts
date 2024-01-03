import { PrismaClient } from "@prisma/client";
import { EvaluationSelectableFields, EvaluationCreateData, EvaluationIdentifierNotObligatory, EvaluationIdentifierObligatory } from "../../types";
export declare class DBEvaluationManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: EvaluationCreateData): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: number;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        createdAt: Date;
        updatedAt: Date;
        studentId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: EvaluationIdentifierNotObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: EvaluationIdentifierObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: EvaluationIdentifierNotObligatory, select?: EvaluationSelectableFields): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: number;
    }[]>;
    delete({ where, select }: {
        where: EvaluationIdentifierObligatory;
        select?: EvaluationSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__EvaluationClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        value: number;
        evaluationName: string;
        isFinal: boolean;
        studentId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
