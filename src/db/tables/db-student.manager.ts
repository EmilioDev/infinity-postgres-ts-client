import { PrismaClient } from "@prisma/client";
import { 
    StudentSelectableFields,
    StudentCreateData,
    StudentIdentifierNotObligatory,
    StudentIdentifierObligatory
} from '../../types';


export class DBStudentManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.student;
    }

    create(data: StudentCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: StudentIdentifierNotObligatory, select?: StudentSelectableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: StudentIdentifierObligatory, select?: StudentSelectableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:StudentIdentifierNotObligatory, select?: StudentSelectableFields) {
        return this.data.findMany({
            where,
            select
        });
    }

    delete({ where, select } : {
        where: StudentIdentifierObligatory,
        select?: StudentSelectableFields
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