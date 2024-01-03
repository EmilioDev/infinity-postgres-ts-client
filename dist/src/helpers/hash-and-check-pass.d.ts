export declare function HashString(data: string, salts?: number): Promise<string>;
export declare function CheckIfStringIsHash(candidate: string, hashed: string): Promise<boolean>;
