import { PrismaClient } from "@prisma/client";
import { 
    TeacherSelectableFields,
    TeacherCreateData,
    TeacherIdentifierNotObligatory,
    TeacherIdentifierObligatory
} from "../../types";

export class DBTeacherManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.teacher;
    }

    create(data: TeacherCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: TeacherIdentifierNotObligatory, select?: TeacherSelectableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: TeacherIdentifierObligatory, select?: TeacherSelectableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:TeacherIdentifierNotObligatory, select?: TeacherSelectableFields) {
        return this.data.findMany({
            where,
            select
        });
    }

    delete({ where, select } : {
        where: TeacherIdentifierObligatory,
        select?: TeacherSelectableFields
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