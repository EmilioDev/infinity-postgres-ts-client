"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIfStringIsHash = exports.HashString = void 0;
const bcrypt_1 = require("bcrypt");
async function HashString(data, salts = 4) {
    const salt = await (0, bcrypt_1.genSalt)(salts);
    const theHash = await (0, bcrypt_1.hash)(data, salt);
    return theHash;
}
exports.HashString = HashString;
function CheckIfStringIsHash(candidate, hashed) {
    return new Promise(async (response, reject) => {
        try {
            const areEqual = await (0, bcrypt_1.compare)(candidate, hashed);
            response(areEqual);
        }
        catch (err) {
            reject(err);
        }
    });
}
exports.CheckIfStringIsHash = CheckIfStringIsHash;
