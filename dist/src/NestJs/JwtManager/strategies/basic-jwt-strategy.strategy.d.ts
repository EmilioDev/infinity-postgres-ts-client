import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { ISessionsService } from "../../../interfaces";
import { CacheData } from "../../../types";
declare const BasicJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class BasicJwtStrategy extends BasicJwtStrategy_base {
    private sessionsManager;
    constructor(config: ConfigService, sessionsManager: ISessionsService);
    validate(payload: any): Promise<CacheData>;
}
export {};
