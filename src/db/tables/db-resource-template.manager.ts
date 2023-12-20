import { PrismaClient } from "@prisma/client";
import {
    ResourceTemplateSeleccionableFields,
    ResourceTemplateCreateData,
    ResourceTemplateNotObligatoryIdentifier,
    ResourceTemplateObligatoryIdentifier
} from '../../types';



export class DBResourceTemplateManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.resourceTemplate;
    }

    create(data: ResourceTemplateCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: ResourceTemplateNotObligatoryIdentifier, select?: ResourceTemplateSeleccionableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: ResourceTemplateObligatoryIdentifier, select?: ResourceTemplateSeleccionableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:ResourceTemplateNotObligatoryIdentifier, select?: ResourceTemplateSeleccionableFields) {
        return this.data.findMany({
            where,
            select
        });
    }

    delete({ where, select } : {
        where: ResourceTemplateObligatoryIdentifier,
        select?: ResourceTemplateSeleccionableFields
    }) {
        return this.data.delete({
            where,
            select
        });
    }
}