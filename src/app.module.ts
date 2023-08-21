import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaService } from './database/prisma.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    CategoriasModule,

    ProductsModule,
  ],
  controllers: [],
  providers: [PrismaService,],
})
export class AppModule { }
