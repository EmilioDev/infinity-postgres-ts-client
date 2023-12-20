import { PrismaClient } from "@prisma/client";
import { 
    SubjectCreateData,
    SubjectSelectionableFields,
    SubjectNotObligatoryIdentifier,
    SubjectObligatoryIdentifier 
} from "../../types";


export class DBSubjectManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.subject;
    }

    create(data: SubjectCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: SubjectNotObligatoryIdentifier, select?: SubjectSelectionableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: SubjectObligatoryIdentifier, select?: SubjectSelectionableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:SubjectNotObligatoryIdentifier) {
        return this.data.findMany({
            where
        });
    }

    delete({ where, select } : {
        where: SubjectObligatoryIdentifier,
        select?: SubjectSelectionableFields
    }) {
        return this.data.delete({
            where,
            select
        });
    }
}