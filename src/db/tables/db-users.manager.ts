import { PrismaClient } from "@prisma/client";
import { 
    UserNoIdentifier, 
    UserNotObligatoryIdentifier, 
    UserObligatoryIdentifier, 
    UserSelectFields, 
    UserUniqueFields 
} from "../../types";

export class DBUsersManager {
    constructor(private usr:PrismaClient){
        //
    }

    private get data() {
        return this.usr.user;
    }

    //common users
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
            const result = this.data.create({
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
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: UserObligatoryIdentifier, select?: UserSelectFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:UserNotObligatoryIdentifier) {
        return this.data.findMany({
            where
        });
    }

    update({ where, data, select } : {
        where: UserUniqueFields,
        data: UserNoIdentifier,
        select?: UserSelectFields
    }) {
        return this.data.update({
            where,
            data,
            select
        });
    }

    delete({ where, select } : {
        where: UserUniqueFields,
        select?: UserSelectFields
    }) {
        return this.data.delete({
            where,
            select
        });
    }

    //superusers
    setAsSuperUser(identifier: number) {
        return this.data.update({
            where: {
                identifier
            },
            data: {
                isSuperUser: true
            },
            select: {
                identifier: true,
                email: true,
                phone: true,
                isSuperUser: true
            }
        });
    }

    removeSuperUserPrivilegies(identifier: number) {
        return this.data.update({
            where: {
                identifier
            },
            data: {
                isSuperUser: false
            },
            select: {
                identifier: true,
                email: true,
                phone: true,
                isSuperUser: true
            }
        });
    }
}
