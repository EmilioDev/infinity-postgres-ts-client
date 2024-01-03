"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleJwtGuard = void 0;
const passport_1 = require("@nestjs/passport");
class SimpleJwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.SimpleJwtGuard = SimpleJwtGuard;
