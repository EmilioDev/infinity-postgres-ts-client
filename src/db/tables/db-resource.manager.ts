import { PrismaClient } from "@prisma/client";
import { 
    ResourceSelectionableFields,
    ResourceCreateData,
    ResourceIdentifierNotObligatory,
    ResourceIdentifierObligatory 
} from "../../types";


export class DBResourcesManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.resource;
    }

    create(data: ResourceCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: ResourceIdentifierNotObligatory, select?: ResourceSelectionableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: ResourceIdentifierObligatory, select?: ResourceSelectionableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:ResourceIdentifierNotObligatory) {
        return this.data.findMany({
            where
        });
    }

    delete({ where, select } : {
        where: ResourceIdentifierObligatory,
        select?: ResourceSelectionableFields
    }) {
        return this.data.delete({
            where,
            select
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