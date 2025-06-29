import { PrismaClient } from "@prisma/client"
// The code you wrote is used to safely initialize and reuse a Prisma Client instance in both development and production environments.
let prisma;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
} else {
    if(!global.prisma){
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export { prisma };