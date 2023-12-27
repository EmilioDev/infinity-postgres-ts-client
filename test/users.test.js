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
const tables_1 = require("../src/db/tables");
const client_1 = require("@prisma/client");
describe('testing the users storage procedures', () => {
    let users;
    let client;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });
        yield client.$connect();
        users = new tables_1.DBUsersManager(client);
    }));
    it('should create an user without any asosciation', () => __awaiter(void 0, void 0, void 0, function* () {
        var user = yield users.create({
            data: {
                name: 'name',
                last_name: 'last name',
                phone: '59806403',
                email: 'hell@inferno.com',
                country: 'hell',
                degrees: 'murder',
                photo: 'the-infernal-photo.png',
                password_hash: 'a-very-powerfull-and-secure-hash'
            }
        });
        expect(user.email).toBe('hell@inferno.com');
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.$disconnect();
    }));
});
