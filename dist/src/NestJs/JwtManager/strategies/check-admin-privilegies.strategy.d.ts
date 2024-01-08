import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { ISessionsService } from "../../../interfaces";
import { CacheData } from "../../../types";
declare const CheckAdminPrivilegiesStrategy_base: new (...args: any[]) => Strategy;
export declare class CheckAdminPrivilegiesStrategy extends CheckAdminPrivilegiesStrategy_base {
    private sessionsManager;
    constructor(config: ConfigService, sessionsManager: ISessionsService);
    validate(payload: any): Promise<CacheData>;
}
export {};
