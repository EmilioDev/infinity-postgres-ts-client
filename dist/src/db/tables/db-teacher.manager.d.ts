import { PrismaClient } from "@prisma/client";
import { TeacherSelectableFields, TeacherCreateData, TeacherIdentifierNotObligatory, TeacherIdentifierObligatory } from "../../types";
export declare class DBTeacherManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: TeacherCreateData): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        courseId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: TeacherIdentifierNotObligatory;
        select?: TeacherSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: TeacherIdentifierObligatory;
        select?: TeacherSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: TeacherIdentifierNotObligatory, select?: TeacherSelectableFields): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }[]>;
    delete({ where, select }: {
        where: TeacherIdentifierObligatory;
        select?: TeacherSelectableFields;
    }): import(".prisma/client").Prisma.Prisma__TeacherClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        courseId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
