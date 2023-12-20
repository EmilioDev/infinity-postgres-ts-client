import { DBEvaluationSystemManager } from "../src/db/tables";
import { PrismaClient } from "@prisma/client";

describe('testing for the evaluation system table', () => {
    let client:PrismaClient;
    let systems:DBEvaluationSystemManager;

    beforeAll(async()=> {
        client = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        });

        await client.$connect();

        systems = new DBEvaluationSystemManager(client);
    });

    it('should create an evaluation system', async() => {
        const system = await systems.create({
            name: 'evaluation system 1',
            description: 'oh no, there are no descriptions, son'
        });

        expect(system.name).toBe('evaluation system 1');
    })

    afterAll(async() => {
        await client.$disconnect();
    });
});
