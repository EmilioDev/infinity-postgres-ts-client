"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidPhoneNumber = void 0;
const null_empty_or_whitespaces_1 = require("./null-empty-or-whitespaces");
function IsValidPhoneNumber(phone) {
    if ((0, null_empty_or_whitespaces_1.IsNullEmptyOrWhitespaces)(phone)) {
        return false;
    }
    return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone);
}
exports.IsValidPhoneNumber = IsValidPhoneNumber;
