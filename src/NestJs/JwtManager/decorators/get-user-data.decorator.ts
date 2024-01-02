import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { CacheData } from "../../../types";

export const GetUserData = createParamDecorator(function (data: unknown, ctx: ExecutionContext) {
    const request = ctx.switchToHttp()
        .getRequest();

    const answer:CacheData = request.user;

    return answer;
});