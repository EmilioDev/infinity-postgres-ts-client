"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNullEmptyOrWhitespaces = void 0;
function IsNullEmptyOrWhitespaces(input) {
    return input === null || input.trim() === '';
}
exports.IsNullEmptyOrWhitespaces = IsNullEmptyOrWhitespaces;
