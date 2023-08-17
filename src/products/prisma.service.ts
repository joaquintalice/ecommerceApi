import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        // await this.$connect();
    }

    enableShutdownHooks(app: INestApplication) {
        const closeApp = async () => {
            await app.close();
            await this.$disconnect(); // Disconnect PrismaClient
            process.exit(0); // Exit the process
        };

        process.on('beforeExit', closeApp);
        process.on('SIGINT', closeApp); // Handle Ctrl+C
        process.on('SIGTERM', closeApp); // Handle process termination
    }
}