import { AuthGuard } from "@nestjs/passport";


export class SimpleJwtGuard extends AuthGuard('jwt')
{
    constructor() {
        super();
    }
}