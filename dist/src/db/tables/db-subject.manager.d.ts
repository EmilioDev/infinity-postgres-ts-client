import { PrismaClient } from "@prisma/client";
import { SubjectCreateData, SubjectSelectionableFields, SubjectNotObligatoryIdentifier, SubjectObligatoryIdentifier } from "../../types";
export declare class DBSubjectManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: SubjectCreateData): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: bigint;
        name: string;
        year: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: bigint;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: SubjectNotObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: bigint;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: bigint;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: SubjectObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: bigint;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: bigint;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: SubjectNotObligatoryIdentifier): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: bigint;
        name: string;
        year: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: bigint;
    }[]>;
    delete({ where, select }: {
        where: SubjectObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: bigint;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: bigint;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
