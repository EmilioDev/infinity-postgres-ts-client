import { PrismaClient } from "@prisma/client";
import { StudentSelectableFields, StudentCreateData, StudentIdentifierNotObligatory, StudentIdentifierObligatory } from '../../types';
export declare class DBStudentManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: StudentCreateData): import(".prisma/client").Prisma.Prisma__StudentClient<{
        identifier: number;
        pendingApproval: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: StudentIdentifierNotObligatory;
        select?: StudentSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__StudentClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
        pendingApproval: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: StudentIdentifierObligatory;
        select?: StudentSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__StudentClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
        pendingApproval: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: StudentIdentifierNotObligatory, select?: StudentSelectableFields): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
        pendingApproval: boolean;
    }[]>;
    delete({ where, select }: {
        where: StudentIdentifierObligatory;
        select?: StudentSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__StudentClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
        pendingApproval: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
