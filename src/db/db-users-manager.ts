import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
import { ConfigurableUser, UserNoIdentifier, UserNotObligatoryIdentifier, UserObligatoryIdentifier, UserSelectFields, UserUniqueFields } from "../types";

export class DBUsersManager extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get("DATABASE_URL")
                }
            }
        })
    }

    create(user:{
        name:string,
        last_name:string,
        phone:string,
        email:string,
        country:string,
        degrees:string,
        photo:string,
        password_hash:string
    }) {
        return new Promise<{
            identifier: number,
            name: string | null,
            last_name: string | null,
            phone: string | null,
            email: string | null,
            createdAt: Date,
        }>((resolve, reject) => {
            const result = this.user.create({
                data: {
                    ...user
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    createdAt: true
                }
            })
            .then(result => resolve(result))
            .catch(err => reject(err));
        });
    }

    findFirst({ where, select } : {
        where: UserNotObligatoryIdentifier, select?: UserSelectFields
    })
    {
        return this.user.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: UserObligatoryIdentifier, select?: UserSelectFields
    })
    {
        return this.user.findUnique({
            where,
            select
        });
    }

    update({ where, data, select } : {
        where: UserUniqueFields,
        data: UserNoIdentifier,
        select?: UserSelectFields
    }) {
        return this.user.update({
            where,
            data,
            select
        });
    }

    delete({ where, select } : {
        where: UserUniqueFields,
        select?: UserSelectFields
    }) {
        return this.user.delete({
            where,
            select
        });
    }
}