import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ISessionsService, SESSIONS_SERVICE } from "../../../interfaces";
import { CacheData } from "../../../types";


@Injectable()
export class CheckAdminPrivilegiesStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
    constructor(config: ConfigService, @Inject(SESSIONS_SERVICE) private sessionsManager: ISessionsService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET')
        });
    }

    validate(payload: any): Promise<CacheData> {
        return new Promise<CacheData>(async(resolve, reject) => {
            const { key }:{ key:string } = payload;

            if(!key) {//no key
                reject(new UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }

            const data = await this.sessionsManager.getData(key);

            if(!data) {//his data is not stored
                reject(new UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }

            if(!data.user || !data.user.isSuperUser) {//it is not an admin
                reject(new UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }

            resolve(data);
        });
    }
}