import { PrismaClient } from "@prisma/client";
import { UserNoIdentifier, UserNotObligatoryIdentifier, UserObligatoryIdentifier, UserSelectFields, UserUniqueFields, UserCreateData } from "../../types";
export declare class DBUsersManager {
    private usr;
    constructor(usr: PrismaClient);
    private get data();
    create({ data, select }: {
        data: UserCreateData;
        select?: UserSelectFields;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        createdAt: Date;
        updatedAt: Date;
        isSuperUser: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findFirst({ where, select }: {
        where: UserNotObligatoryIdentifier;
        select?: UserSelectFields;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        createdAt: Date;
        updatedAt: Date;
        isSuperUser: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique({ where, select }: {
        where: UserObligatoryIdentifier;
        select?: UserSelectFields;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        createdAt: Date;
        updatedAt: Date;
        isSuperUser: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(where?: UserNotObligatoryIdentifier): import(".prisma/client").Prisma.PrismaPromise<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        isSuperUser: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update({ where, data, select }: {
        where: UserUniqueFields;
        data: UserNoIdentifier;
        select?: UserSelectFields;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        createdAt: Date;
        updatedAt: Date;
        isSuperUser: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete({ where, select }: {
        where: UserUniqueFields;
        select?: UserSelectFields;
    }): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        name: string;
        last_name: string;
        phone: string;
        email: string;
        country: string;
        degrees: string;
        photo: string;
        password_hash: string;
        createdAt: Date;
        updatedAt: Date;
        isSuperUser: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    setAsSuperUser(identifier: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        phone: string;
        email: string;
        isSuperUser: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeSuperUserPrivilegies(identifier: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        identifier: number;
        phone: string;
        email: string;
        isSuperUser: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    clean(): Promise<void>;
}
