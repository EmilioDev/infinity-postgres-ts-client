import { compareSync, compare, genSalt, genSaltSync, hash, hashSync } from "bcrypt";

export async function HashString(data:string, salts:number = 4): Promise<string> {
    const salt = await genSalt(salts);
    const theHash = await hash(data, salt);

    return theHash;
}

export function CheckIfStringIsHash(candidate:string, hashed:string): Promise<boolean>
{
    return new Promise<boolean>(async(response, reject) => {
        try{
            const areEqual:boolean = await compare(candidate, hashed);
            response(areEqual);
        }
        catch(err) {
            reject(err);
        }
    })
}