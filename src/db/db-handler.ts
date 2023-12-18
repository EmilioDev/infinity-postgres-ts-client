import { ConfigService } from "@nestjs/config";
import { IUser } from "../dto";
import { compareSync, genSalt, genSaltSync, hash, hashSync } from "bcrypt";
import { IsNullEmptyOrWhitespaces, IsValidEmail, IsValidPhoneNumber } from "../helpers";
import { DBUsersManager } from "./tables";


export class DBClientHandler 
{
    private user:DBUsersManager;

    constructor(config: ConfigService, private salt: number = 4) {
        this.user = new DBUsersManager(config)
    }

    addUser(user: IUser) {
        return new Promise<{
            code: number,
            data: {
                identifier: number,
                name: string,
                last_name: string,
                phone: string,
                email: string,
                createdAt: Date,
            } | any
        }>(async (resolve, reject) => {
            if(IsNullEmptyOrWhitespaces(user.name)) {
                reject({
                    code: 1,
                    data: { message: 'the user name is invalid'}
                });
            }
            else if(IsNullEmptyOrWhitespaces(user.password)) {
                reject({
                    code: 2,
                    data: { message: 'the password cannot be empty'}
                });
            }
            else if(IsNullEmptyOrWhitespaces(user.email) && IsNullEmptyOrWhitespaces(user.phone)) {
                reject({
                    code: 3,
                    data: { message: 'you must provide a valid email or a valid phone'}
                });
            }
            else {
                if(!IsNullEmptyOrWhitespaces(user.email)) {
                    if(!IsValidEmail(user.email)){
                        reject({
                            code: 4,
                            data: { message: `the email ${user.email} is invalid`}
                        });

                        return;
                    }

                    var userByMail = await this.user.findFirst({
                        where: {
                            email: user.email
                        }
                    });

                    if(userByMail != null) {
                        reject({
                            code: 5,
                            data: { message: `there is an user registered with the email ${user.email}`}
                        });

                        return;
                    }
                }
                if(!IsNullEmptyOrWhitespaces(user.phone)) {
                    if(!IsValidPhoneNumber(user.phone)) {
                        reject({
                            code: 6,
                            data: { message: `the phone ${user.phone} is invalid`}
                        });

                        return;
                    }

                    var userByPhone = await this.user.findFirst({
                        where: {
                            phone: user.phone
                        }
                    });

                    if(userByPhone != null) {
                        reject({
                            code: 7,
                            data: { message: `there is an user registered with the phone ${user.phone}`}
                        });

                        return;
                    }
                }

                try {
                    const salt = genSaltSync(this.salt);
                    const password_hash = hashSync(user.password, salt);
    
                    const result = await this.user.create({
                        ...user,
                        password_hash
                    });
    
                    resolve({
                        code: 0,
                        data: result
                    });
                }
                catch(err) {
                    reject({
                        code: 999,
                        data: err
                    });
                }
            }
        })
    }

    isValidPassword(user:IUser) {
        return new Promise<boolean>(async (resolve, reject) => {
            if(!IsNullEmptyOrWhitespaces(user.email)) {
                var userByMail = await this.user.findFirst({
                    where: {
                        email: user.email
                    },
                    select: {
                        password_hash: true
                    }
                })

                if(userByMail) {
                    var areSame = compareSync(user.password, userByMail.password_hash);
                    resolve(areSame);
                }
            }

            if(!IsNullEmptyOrWhitespaces(user.phone)) {
                var userByPhone = await this.user.findFirst({
                    where: {
                        phone: user.phone
                    },
                    select: {
                        password_hash: true
                    }
                })

                if(userByPhone) {
                    var areSame = compareSync(user.password, userByPhone.password_hash);
                    resolve(areSame);
                }
            }

            reject({
                code: 1,
                data: { message: 'user not found' }
            });
        })
    }

    getUserById(identifier: number) {
        return new Promise<{
            code: number,
            data: {
                identifier: number,
                name: string,
                last_name: string,
                phone: string,
                email: string,
                degrees: string,
                photo: string,
                createdAt: Date,
                updatedAt: Date
            } | any
        }>((resolve, reject) => {
            this.user.findUnique({
                where: {
                    identifier
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
            .then(result => resolve({
                code: 0,
                data: result
            }))
            .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }

    getUserByEmail(email: string) {
        return new Promise<{
            code: number,
            data: {
                identifier: number,
                name: string,
                last_name: string,
                phone: string,
                email: string,
                degrees: string,
                photo: string,
                createdAt: Date,
                updatedAt: Date
            } | any
        }>((resolve, reject) => {
            this.user.findFirst({
                where: {
                    email
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
            .then(result => resolve({
                code: 0,
                data: result
            }))
            .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }

    getUserByPhone(phone: string) {
        return new Promise<{
            code: number,
            data: {
                identifier: number,
                name: string,
                last_name: string,
                phone: string,
                email: string,
                degrees: string,
                photo: string,
                createdAt: Date,
                updatedAt: Date
            } | any
        }>((resolve, reject) => {
            this.user.findFirst({
                where: {
                    phone
                },
                select: {
                    identifier: true,
                    name: true,
                    last_name: true,
                    phone: true,
                    email: true,
                    degrees: true,
                    photo: true,
                    createdAt: true,
                    updatedAt: true
                }
            })
            .then(result => resolve({
                code: 0,
                data: result
            }))
            .catch(err => reject({
                code: 999,
                data: err
            }));
        });
    }

    updateUser(user: IUser) {
        return new Promise<{
            code: number,
            data: {
                identifier: number,
                name: string,
                last_name: string,
                phone: string,
                email: string,
                degrees: string,
                photo: string,
                createdAt: Date,
                updatedAt: Date
            } | any
        }>((resolve, reject) => {
            //
        });
    }

    deleteUser(identifier: number) {
        return new Promise<{
            code: number,
            data: boolean | any
        }>((resolve, reject) => {
            //
        })
    }
}