import { CacheData } from "../types";

export interface ISessionsService {
    hasActiveSessions(identifier:number): boolean;
    createSession(data:CacheData) : Promise<{ token:string, refresh:string }>;
    closeSession(key:string): Promise<void>;
    getData(key: string): Promise<CacheData | undefined>;
}

export const SESSIONS_SERVICE:string = 'SESSIONS_SERVICE';