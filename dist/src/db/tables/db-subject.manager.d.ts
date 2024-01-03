import { PrismaClient } from "@prisma/client";
import { SubjectCreateData, SubjectSelectionableFields, SubjectNotObligatoryIdentifier, SubjectObligatoryIdentifier } from "../../types";
export declare class DBSubjectManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: SubjectCreateData): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: number;
        name: string;
        year: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: SubjectNotObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: SubjectObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: SubjectNotObligatoryIdentifier): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        name: string;
        year: number;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        institutionId: number;
    }[]>;
    delete({ where, select }: {
        where: SubjectObligatoryIdentifier;
        select?: SubjectSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__SubjectClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        year: number;
        institutionId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
