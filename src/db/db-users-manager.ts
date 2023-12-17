import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

export class DBUsersManager extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get("DATABASE_URL")
                }
            }
        })
    }

    create(user:{
        name:string,
        last_name:string,
        phone:string,
        email:string,
        country:string,
        degrees:string,
        photo:string,
        password_hash:string
    }) {
        return new Promise<{
            identifier: number,
            name: string | null,
            last_name: string | null,
            phone: string | null,
            email: string | null,
            createdAt: Date,
        }>((resolve, reject) => {
            const result = this.user.create({
                data: {
                    ...user
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    createdAt: true
                }
            })
            .then(result => resolve(result))
            .catch(err => reject(err));
        });
    }

    findFirst({ where, select } : {
        where: {
            identifier?: number,
            name?: string,
            last_name?: string,
            phone?: string,
            email?: string,
            country?: string,
            degrees?: string,
            photo?: string,
            password_hash?: string,
            createdAt?: Date,
            updatedAt?: Date
        }, select?: {
            identifier?: boolean,
            name?: boolean,
            last_name?: boolean,
            phone?: boolean,
            email?: boolean,
            country?: boolean,
            degrees?: boolean,
            photo?: boolean,
            password_hash?: boolean,
            createdAt?: boolean,
            updatedAt?: boolean
        }
    }): Promise<{
        identifier: number,
        name: string | null,
        last_name: string | null,
        phone: string | null,
        email: string | null,
        country: string | null,
        degrees: string | null,
        photo: string | null,
        password_hash: string,
        createdAt: Date,
        updatedAt: Date
    } | any>
    {
        if(select) {
            return new Promise((resolve, reject) => {
                this.user.findFirst({
                    where,
                    select
                })
                .then(result => resolve(result))
                .catch(err => reject(err));
            });
        }

        return new Promise<{
            identifier: number,
            name: string | null,
            last_name: string | null,
            phone: string | null,
            email: string | null,
            country: string | null,
            degrees: string | null,
            photo: string | null,
            password_hash: string,
            createdAt: Date,
            updatedAt: Date
        } | any>((resolve, reject) => {
            this.user.findFirst({
                where
            })
            .then(result => resolve(result))
            .catch(err => reject(err));
        });
    }

    findUnique({ where, select } : {
        where: {
            identifier: number,
            name?: string,
            last_name?: string,
            phone?: string,
            email?: string,
            country?: string,
            degrees?: string,
            photo?: string,
            password_hash?: string,
            createdAt?: Date,
            updatedAt?: Date
        }, select?: {
            identifier?: boolean,
            name?: boolean,
            last_name?: boolean,
            phone?: boolean,
            email?: boolean,
            country?: boolean,
            degrees?: boolean,
            photo?: boolean,
            password_hash?: boolean,
            createdAt?: boolean,
            updatedAt?: boolean
        }
    }): Promise<{
        identifier: number,
        name: string | null,
        last_name: string | null,
        phone: string | null,
        email: string | null,
        country: string | null,
        degrees: string | null,
        photo: string | null,
        password_hash: string,
        createdAt: Date,
        updatedAt: Date
    } | any>
    {
        return new Promise((resolve, reject) => {
            this.user.findUnique({
                where,
                select
            })
            .then(result => resolve(result))
            .catch(err => reject(err));
        });
    }
}