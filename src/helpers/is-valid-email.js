"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidEmail = void 0;
const null_empty_or_whitespaces_1 = require("./null-empty-or-whitespaces");
function IsValidEmail(email) {
    if ((0, null_empty_or_whitespaces_1.IsNullEmptyOrWhitespaces)(email)) {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
exports.IsValidEmail = IsValidEmail;
