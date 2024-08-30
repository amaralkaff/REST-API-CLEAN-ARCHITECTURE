const { PrismaClient } = require("@prisma/client");

let prisma;

if (!prisma) {
    prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    });
}

module.exports = prisma;
