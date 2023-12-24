import { PrismaClient } from "@prisma/client";
import {
    MetodologistCreate,
    MetodologistSelectionableFields,
    MetodologistNotObligatoryIdentifier,
    MetodologistObligatoryIdentifier,
    MetodologistUniquefields
} from '../../types';

export class DBMetodologistManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.metodologist;
    }

    create(data: MetodologistCreate) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: MetodologistNotObligatoryIdentifier, select?: MetodologistSelectionableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: MetodologistObligatoryIdentifier, select?: MetodologistSelectionableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:MetodologistNotObligatoryIdentifier) {
        return this.data.findMany({
            where
        });
    }

    delete({ where, select } : {
        where: MetodologistUniquefields,
        select?: MetodologistSelectionableFields
    }) {
        return this.data.delete({
            where,
            select
        });
    }
}
