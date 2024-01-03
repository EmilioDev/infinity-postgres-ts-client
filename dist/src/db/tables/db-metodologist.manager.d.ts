import { PrismaClient } from "@prisma/client";
import { MetodologistCreate, MetodologistSelectionableFields, MetodologistNotObligatoryIdentifier, MetodologistObligatoryIdentifier, MetodologistUniquefields } from '../../types';
export declare class DBMetodologistManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: MetodologistCreate): import(".prisma/client").Prisma.Prisma__MetodologistClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: MetodologistNotObligatoryIdentifier;
        select?: MetodologistSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__MetodologistClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: MetodologistObligatoryIdentifier;
        select?: MetodologistSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__MetodologistClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: MetodologistNotObligatoryIdentifier): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }[]>;
    delete({ where, select }: {
        where: MetodologistUniquefields;
        select?: MetodologistSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__MetodologistClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
