"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfStringIsHash = exports.HashString = void 0;
const bcrypt_1 = require("bcrypt");
function HashString(data, salts = 4) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield (0, bcrypt_1.genSalt)(salts);
        const theHash = yield (0, bcrypt_1.hash)(data, salt);
        return theHash;
    });
}
exports.HashString = HashString;
function CheckIfStringIsHash(candidate, hashed) {
    return new Promise((response, reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            (0, bcrypt_1.compare)(candidate, hashed)
                .then(result => {
                //
            });
            const areEqual = yield (0, bcrypt_1.compare)(candidate, hashed);
            response(areEqual);
        }
        catch (err) {
            reject(err);
        }
    }));
}
exports.CheckIfStringIsHash = CheckIfStringIsHash;
