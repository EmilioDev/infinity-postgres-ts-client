"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("../src/db/tables");
const client_1 = require("@prisma/client");
describe('testing the institution storages procedure', () => {
    let client;
    let institutions;
    let users;
    beforeAll(async () => {
        client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });
        await client.$connect();
        institutions = new tables_1.DBInstitutionsManager(client);
        users = new tables_1.DBUsersManager(client);
    });
    it('should create an institution with its rector', async () => {
        var user = await users.create({
            data: {
                name: 'name',
                last_name: 'last name',
                phone: '59806403',
                email: 'hell2@inferno.com',
                country: 'hell',
                degrees: 'murder',
                photo: 'the-infernal-photo.png',
                password_hash: 'another-very-powerfull-and-secure-hash'
            }
        });
        const institution = await institutions.create({
            name: 'the institution',
            NIT: 'nit',
            REEUP: 'reeup',
            rector: user.identifier
        });
        expect(institution.rector).toBe(user.identifier);
    });
    afterAll(async () => {
        await client.$disconnect();
    });
});
