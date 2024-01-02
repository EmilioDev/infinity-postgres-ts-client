import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ISessionsService, SESSIONS_SERVICE } from "../../../interfaces";
import { CacheData } from "../../../types";

@Injectable()
export class BasicJwtStrategy extends PassportStrategy(Strategy, 'jwt')
{
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

            if(!key) {
                console.log('no key found in payload');
                reject(new UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }

            const data = await this.sessionsManager.getData(key);

            if(!data) {
                console.log('no key found in cache');
                reject(new UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }

            resolve(data);
        });
    }
}

