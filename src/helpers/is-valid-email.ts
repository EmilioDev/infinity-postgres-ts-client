import { IsNullEmptyOrWhitespaces } from "./null-empty-or-whitespaces";

export function IsValidEmail(email:string): boolean 
{
    if(IsNullEmptyOrWhitespaces(email)) {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}