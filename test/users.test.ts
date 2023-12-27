import { DBUsersManager } from "../src/db/tables";
import { PrismaClient } from "@prisma/client";


describe('testing the users storage procedures', () => {
    let users:DBUsersManager;
    let client:PrismaClient;

    beforeAll(async() => {
        client = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });

        await client.$connect();

        users = new DBUsersManager(client);
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

    afterAll(async() => {
        await client.$disconnect();
    });
});
