import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProductsModule,
    ConfigModule.forRoot(),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
