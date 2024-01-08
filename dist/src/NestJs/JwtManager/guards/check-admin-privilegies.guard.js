"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAdminPrivilegiesGuard = void 0;
const passport_1 = require("@nestjs/passport");
class CheckAdminPrivilegiesGuard extends (0, passport_1.AuthGuard)('jwt-admin') {
    constructor() {
        super();
    }
}
exports.CheckAdminPrivilegiesGuard = CheckAdminPrivilegiesGuard;
