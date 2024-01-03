import { PrismaClient } from "@prisma/client";
import { ResourceSelectionableFields, ResourceCreateData, ResourceIdentifierNotObligatory, ResourceIdentifierObligatory } from "../../types";
export declare class DBResourcesManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: ResourceCreateData): import(".prisma/client").Prisma.Prisma__ResourceClient<{
        identifier: number;
        name: string;
        description: string;
        photo: string;
        requiresOnline: boolean;
        evaluation: number;
        createdAt: Date;
        updatedAt: Date;
        resourceTemplateId: number;
        templateCustomValues: import(".prisma/client").Prisma.JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: ResourceIdentifierNotObligatory;
        select?: ResourceSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceClient<{
        identifier: number;
        name: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        evaluation: number;
        requiresOnline: boolean;
        resourceTemplateId: number;
        templateCustomValues: import(".prisma/client").Prisma.JsonValue;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: ResourceIdentifierObligatory;
        select?: ResourceSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceClient<{
        identifier: number;
        name: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        evaluation: number;
        requiresOnline: boolean;
        resourceTemplateId: number;
        templateCustomValues: import(".prisma/client").Prisma.JsonValue;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: ResourceIdentifierNotObligatory): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        name: string;
        description: string;
        photo: string;
        requiresOnline: boolean;
        evaluation: number;
        createdAt: Date;
        updatedAt: Date;
        resourceTemplateId: number;
        templateCustomValues: import(".prisma/client").Prisma.JsonValue;
    }[]>;
    delete({ where, select }: {
        where: ResourceIdentifierObligatory;
        select?: ResourceSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceClient<{
        identifier: number;
        name: string;
        photo: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        evaluation: number;
        requiresOnline: boolean;
        resourceTemplateId: number;
        templateCustomValues: import(".prisma/client").Prisma.JsonValue;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
