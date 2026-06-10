import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // O Prisma 7 só precisa do objeto com a URL direta pro arquivo
    const adapter = new PrismaBetterSqlite3({ url: 'file:./prisma/dev.db' });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
