import { 
    DBInstitutionsManager, 
    DBUsersManager
} from "../src/db/tables";
import { PrismaClient } from "@prisma/client";


describe('testing the institution storages procedure', () => {
    let client:PrismaClient;
    let institutions:DBInstitutionsManager;
    let users:DBUsersManager;

    beforeAll(async() => {
        client = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });

        await client.$connect();

        institutions = new DBInstitutionsManager(client);
        users = new DBUsersManager(client);
    });

    it('should create an institution with its rector', async () => {
        var user = await users.create({
            name: 'name',
            last_name: 'last name',
            phone: '59806403',
            email: 'hell2@inferno.com',
            country: 'hell',
            degrees: 'murder',
            photo: 'the-infernal-photo.png',
            password_hash: 'another-very-powerfull-and-secure-hash'
        });

        const institution = await institutions.create({
            name: 'the institution',
            NIT: 'nit',
            REEUP: 'reeup',
            rector: user.identifier
        });

        expect(institution.rector).toBe(user.identifier);
    });

    afterAll(async() => {
        await client.$disconnect();
    });
});
