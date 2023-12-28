export type UserSelectFields = {
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
    updatedAt?: boolean,
    isSuperUser?: boolean
};

export type UserCreateData = {
    password_hash:string,
    name?:string,
    last_name?:string,
    phone?:string,
    email?:string,
    country?:string,
    degrees?:string,
    photo?:string,
    isSuperUser?: boolean
}

export type ConfigurableUser<T extends UserSelectFields> = {
    identifier?: T['identifier'] extends true ? number : never,
    name?: T['name'] extends true ? string : never,
    last_name?: T['last_name'] extends true ? string : never,
    phone?: T['phone'] extends true ? string : never,
    email?: T['email'] extends true ? string : never,
    country?: T['country'] extends true ? string : never,
    degrees?: T['degrees'] extends true ? string : never,
    photo?: T['photo'] extends true ? string : never,
    password_hash?: T['password_hash'] extends true ? string : never,
    createdAt?: T['createdAt'] extends true ? Date : never,
    updatedAt?: T['updatedAt'] extends true ? Date : never
};

export type UserObligatoryIdentifier = {
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
};

export type UserObligatoryIdentifierNoPassword = {
    identifier: number,
    name?: string,
    last_name?: string,
    phone?: string,
    email?: string,
    country?: string,
    degrees?: string,
    photo?: string,
    createdAt?: Date,
    updatedAt?: Date
};

export type UserNotObligatoryIdentifier = {
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
};

export type UserNoIdentifier = {
    name?: string,
    last_name?: string,
    phone?: string,
    email?: string,
    country?: string,
    degrees?: string,
    photo?: string,
    password_hash?: string
};

export type UserUniqueFields = {
    identifier: number,
    phone?: string,
    email?: string
};//UserWhereUniqueInput