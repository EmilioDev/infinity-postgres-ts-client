import { PrismaClient } from "@prisma/client";
import { ResourceTemplateSeleccionableFields, ResourceTemplateCreateData, ResourceTemplateNotObligatoryIdentifier, ResourceTemplateObligatoryIdentifier } from '../../types';
export declare class DBResourceTemplateManager {
    private prisma;
    constructor(prisma: PrismaClient);
    private get data();
    create(data: ResourceTemplateCreateData): import(".prisma/client").Prisma.Prisma__ResourceTemplateClient<{
        identifier: number;
        content: import(".prisma/client").Prisma.JsonValue;
        templateName: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: ResourceTemplateNotObligatoryIdentifier;
        select?: ResourceTemplateSeleccionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceTemplateClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        content: import(".prisma/client").Prisma.JsonValue;
        templateName: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: ResourceTemplateObligatoryIdentifier;
        select?: ResourceTemplateSeleccionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceTemplateClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        content: import(".prisma/client").Prisma.JsonValue;
        templateName: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: ResourceTemplateNotObligatoryIdentifier, select?: ResourceTemplateSeleccionableFields): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        content: import(".prisma/client").Prisma.JsonValue;
        templateName: string;
    }[]>;
    delete({ where, select }: {
        where: ResourceTemplateObligatoryIdentifier;
        select?: ResourceTemplateSeleccionableFields;
    }): import(".prisma/client").Prisma.Prisma__ResourceTemplateClient<{
        identifier: number;
        createdAt: Date;
        updatedAt: Date;
        content: import(".prisma/client").Prisma.JsonValue;
        templateName: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
