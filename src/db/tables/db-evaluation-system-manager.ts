import { PrismaClient } from "@prisma/client";
import { 
    EvaluationSystemSelectableFields, 
    EvaluationSystemCreate,
    EvaluationSystemIdentifierNotObligatory,
    EvaluationSystemIdentifierObligatory,
    EvaluationSystemIdentifierFields,
    EvaluationSystemfieldsNotObligatory
} from "../../types";

export class DBEvaluationSystemManager
{
    constructor(private inst:PrismaClient){
        //
    }

    private get data(){
        return this.inst.evaluationSystem;
    }

    create(institution: EvaluationSystemCreate, select?: EvaluationSystemSelectableFields) {
        return this.data.create({
            data: institution,
            select
        });
    }

    findFirst({ where, select } : 
        { 
            where: EvaluationSystemIdentifierNotObligatory, 
            select?: EvaluationSystemSelectableFields 
        }){
            return this.data.findFirst({
                where,
                select
            });
    }

    findUnique({ where, select } :
        {
            where: EvaluationSystemIdentifierObligatory,
            select?: EvaluationSystemSelectableFields
        }) {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:EvaluationSystemIdentifierNotObligatory) {
        return this.data.findMany({ where });
    }

    update({ where, data, select } : 
        {
            where: EvaluationSystemIdentifierFields,
            data: EvaluationSystemfieldsNotObligatory,
            select?: EvaluationSystemSelectableFields
        }) {
        return this.data.update({
            where,
            data,
            select
        });
    }

    delete({ where, select } : 
        { 
            where: EvaluationSystemIdentifierFields, 
            select?: EvaluationSystemSelectableFields 
        }) 
    {
        return this.data.delete({
            where,
            select
        });
    }
}