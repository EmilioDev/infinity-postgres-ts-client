"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserData = void 0;
const common_1 = require("@nestjs/common");
exports.GetUserData = (0, common_1.createParamDecorator)(function (data, ctx) {
    const request = ctx.switchToHttp()
        .getRequest();
    const answer = request.user;
    return answer;
});
