import { PrismaClient } from "@prisma/client";
import { 
    UserNoIdentifier, 
    UserNotObligatoryIdentifier, 
    UserObligatoryIdentifier, 
    UserSelectFields, 
    UserUniqueFields,
    UserCreateData 
} from "../../types";

export class DBUsersManager {
    constructor(private usr:PrismaClient){
        //
    }

    private get data() {
        return this.usr.user;
    }

    //common users
    create({ data, select } : { data: UserCreateData, select?: UserSelectFields })
    {
        return this.data.create({ data, select });
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

    clean(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.data.deleteMany()
                .then(data => resolve())
                .catch(err => reject(err));
        });
    }
}
