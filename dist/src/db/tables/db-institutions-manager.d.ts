import { PrismaClient } from "@prisma/client";
import { CreateInstitutionType, InstitutionIdentifierFields, InstitutionIdentifierNotObligatory, InstitutionIdentifierObligatory, InstitutionNoIdentifier, InstitutionSelectionableFields } from "../../types";
export declare class DBInstitutionsManager {
    private inst;
    constructor(inst: PrismaClient);
    private get data();
    create(institution: CreateInstitutionType, select?: InstitutionSelectionableFields): import(".prisma/client").Prisma.Prisma__InstitutionClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        rector: number;
        evaluativeSchemeUsed: never;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: InstitutionIdentifierNotObligatory;
        select?: InstitutionSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__InstitutionClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        rector: number;
        evaluativeSchemeUsed: never;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: InstitutionIdentifierObligatory;
        select?: InstitutionSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__InstitutionClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        rector: number;
        evaluativeSchemeUsed: never;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: InstitutionIdentifierNotObligatory): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        name: string;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        createdAt: Date;
        updatedAt: Date;
        rector: number;
    }[]>;
    update({ where, data, select }: {
        where: InstitutionIdentifierFields;
        data: InstitutionNoIdentifier;
        select?: InstitutionSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__InstitutionClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        rector: number;
        evaluativeSchemeUsed: never;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete({ where, select }: {
        where: InstitutionIdentifierFields;
        select?: InstitutionSelectionableFields;
    }): import(".prisma/client").Prisma.Prisma__InstitutionClient<{
        identifier: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        logo: string;
        NIT: string;
        REEUP: string;
        website: string;
        address: string;
        rector: number;
        evaluativeSchemeUsed: never;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
