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
describe('testing the institution storages procedure', () => {
    let client;
    let institutions;
    let users;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });
        yield client.$connect();
        institutions = new tables_1.DBInstitutionsManager(client);
        users = new tables_1.DBUsersManager(client);
    }));
    it('should create an institution with its rector', () => __awaiter(void 0, void 0, void 0, function* () {
        var user = yield users.create({
            name: 'name',
            last_name: 'last name',
            phone: '59806403',
            email: 'hell2@inferno.com',
            country: 'hell',
            degrees: 'murder',
            photo: 'the-infernal-photo.png',
            password_hash: 'another-very-powerfull-and-secure-hash'
        });
        const institution = yield institutions.create({
            name: 'the institution',
            NIT: 'nit',
            REEUP: 'reeup',
            rector: user.identifier
        });
        expect(institution.rector).toBe(user.identifier);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield client.$disconnect();
    }));
});
