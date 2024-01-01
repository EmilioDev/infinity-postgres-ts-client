import { PrismaClient } from "@prisma/client";
import { 
    EvaluationSelectableFields,
    EvaluationCreateData,
    EvaluationIdentifierNotObligatory,
    EvaluationIdentifierObligatory
} from "../../types";

export class DBEvaluationManager
{
    constructor(private prisma:PrismaClient){
        // :-)
    }

    private get data() {
        return this.prisma.evaluation;
    }

    create(data: EvaluationCreateData) {
        return this.data.create({ data });
    }

    findFirst({ where, select } : {
        where: EvaluationIdentifierNotObligatory, select?: EvaluationSelectableFields
    })
    {
        return this.data.findFirst({
            where,
            select
        });
    }

    findUnique({ where, select } : {
        where: EvaluationIdentifierObligatory, select?: EvaluationSelectableFields
    })
    {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:EvaluationIdentifierNotObligatory, select?: EvaluationSelectableFields) {
        return this.data.findMany({
            where,
            select
        });
    }

    delete({ where, select } : {
        where: EvaluationIdentifierObligatory,
        select?: EvaluationSelectableFields
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