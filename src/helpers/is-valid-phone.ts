import { IsNullEmptyOrWhitespaces } from "./null-empty-or-whitespaces";

export function IsValidPhoneNumber(phone:string):boolean
{
    if(IsNullEmptyOrWhitespaces(phone)) {
        return false;
    }

    return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
}