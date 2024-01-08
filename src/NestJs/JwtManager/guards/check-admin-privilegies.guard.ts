import { AuthGuard } from "@nestjs/passport";


export class CheckAdminPrivilegiesGuard extends AuthGuard('jwt-admin')
{
    constructor() {
        super();
    }
}