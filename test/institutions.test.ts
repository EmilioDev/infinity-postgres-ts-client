import { 
    DBInstitutionsManager, 
    DBUsersManager,
    DBEvaluationSystemManager 
} from "../src/db/tables";
import { PrismaClient } from "@prisma/client";


describe('testing the institution storages procedure', () => {
    let client:PrismaClient;
    let institutions:DBInstitutionsManager;
    let users:DBUsersManager;
    let systems:DBEvaluationSystemManager;

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
        systems = new DBEvaluationSystemManager(client);
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

        const system = await systems.create({
            name: 'evaluation system 2',
            description: 'there is no description here too, kid'
        });

        const institution = await institutions.create({
            name: 'the institution',
            NIT: 'nit',
            REEUP: 'reeup',
            rector: user.identifier,
            evaluativeSchemeUsed: system.identifier
        });

        expect(institution.rector).toBe(user.identifier);
        expect(institution.evaluativeSchemeUsed).toBe(system.identifier);
    });

    afterAll(async() => {
        await client.$disconnect();
    });
});
