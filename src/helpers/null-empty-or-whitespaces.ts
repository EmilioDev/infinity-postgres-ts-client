
export function IsNullEmptyOrWhitespaces(input:string):boolean 
{
    return input === null || input.trim() === '';
}