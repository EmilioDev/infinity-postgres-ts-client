"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("../src/db/tables");
const client_1 = require("@prisma/client");
describe('testing the users storage procedures', () => {
    let users;
    let client;
    beforeAll(async () => {
        client = new client_1.PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });
        await client.$connect();
        users = new tables_1.DBUsersManager(client);
    });
    it('should create an user without any asosciation', async () => {
        var user = await users.create({
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
    });
    afterAll(async () => {
        await client.$disconnect();
    });
});
