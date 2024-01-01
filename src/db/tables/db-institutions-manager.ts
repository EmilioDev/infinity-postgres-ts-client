import { PrismaClient } from "@prisma/client";
import { 
    CreateInstitutionType, 
    InstitutionIdentifierFields, 
    InstitutionIdentifierNotObligatory, 
    InstitutionIdentifierObligatory, 
    InstitutionNoIdentifier, 
    InstitutionSelectionableFields } from "../../types";


export class DBInstitutionsManager
{
    constructor(private inst:PrismaClient){
        //
    }

    private get data(){
        return this.inst.institution;
    }

    create(institution: CreateInstitutionType, select?: InstitutionSelectionableFields) {
        return this.data.create({
            data: institution,
            select
        });
    }

    findFirst({ where, select } : 
        { 
            where: InstitutionIdentifierNotObligatory, 
            select?: InstitutionSelectionableFields 
        }){
            return this.data.findFirst({
                where,
                select
            });
    }

    findUnique({ where, select } :
        {
            where: InstitutionIdentifierObligatory,
            select?: InstitutionSelectionableFields
        }) {
        return this.data.findUnique({
            where,
            select
        });
    }

    findAll(where?:InstitutionIdentifierNotObligatory) {
        return this.data.findMany({ where });
    }

    update({ where, data, select } : 
        {
            where: InstitutionIdentifierFields,
            data: InstitutionNoIdentifier,
            select?: InstitutionSelectionableFields
        }) {
        return this.data.update({
            where,
            data,
            select
        });
    }

    delete({ where, select } : 
        {
            where: InstitutionIdentifierFields,
            select?: InstitutionSelectionableFields
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