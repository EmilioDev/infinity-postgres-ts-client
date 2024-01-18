"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicJwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const interfaces_1 = require("../../../interfaces");
let BasicJwtStrategy = class BasicJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-admin') {
    constructor(config, sessionsManager) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET')
        });
        this.sessionsManager = sessionsManager;
    }
    validate(payload) {
        return new Promise(async (resolve, reject) => {
            const { key } = payload;
            if (!key) {
                reject(new common_1.UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }
            const data = await this.sessionsManager.getData(key);
            if (!data) {
                reject(new common_1.UnauthorizedException('you are not authorized to acces this endpoint'));
                return;
            }
            resolve(data);
        });
    }
};
exports.BasicJwtStrategy = BasicJwtStrategy;
exports.BasicJwtStrategy = BasicJwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(interfaces_1.SESSIONS_SERVICE)),
    __metadata("design:paramtypes", [config_1.ConfigService, Object])
], BasicJwtStrategy);
