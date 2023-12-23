import { PrismaClient } from "@prisma/client";

export function getPrismaClient(dbUrl: string, disconnectCallback?: Function): PrismaClient {
    if (!dbUrl) {
      dbUrl = 'default'
    }
    if (process.env.NODE_ENV === 'production') {
      return getPrismaClientForProduction(dbUrl);
    } else {
      return getPrismaClientForDevelopment(dbUrl);
    }
  }
  
  const getPrismaClientForProduction = (dbUrl: string) => {
    let prisma:PrismaClient;
    if (dbUrl === 'default') {
      return new PrismaClient({
        log: [
          {
            emit: 'stdout',
            level: 'info'
          },
          {
            emit: 'stdout',
            level: 'warn'
          }
        ]
      })
    } else {
      return new PrismaClient({
        log: [
          {
            emit: 'stdout',
            level: 'info'
          },
          {
            emit: 'stdout',
            level: 'warn'
          }
        ],
        datasources: {
          db: {
            url: dbUrl
          }
        }
      })
    } // end if
  }
  
  const getPrismaClientForDevelopment = (dbUrl: string) => {
    let prisma
    if (dbUrl === 'default') {
      prisma = new PrismaClient({
        log: [
          {
            emit: 'stdout',
            level: 'info'
          },
          {
            emit: 'stdout',
            level: 'warn'
          },
          {
            emit: 'event',
            level: 'query'
          }
        ]
      })
    } else {
      prisma = new PrismaClient({
        log: [
          {
            emit: 'stdout',
            level: 'info'
          },
          {
            emit: 'stdout',
            level: 'warn'
          },
          {
            emit: 'event',
            level: 'query'
          }
        ],
        datasources: {
          db: {
            url: dbUrl
          }
        }
      })
    } // end if
  
    // define prisma event handlers
    prisma.$on('query', async (e) => {
      //await fs.promises.appendFile(`generated.sql`, `${e.query} ${e.params} \n`)
    });
  
    return prisma
  }