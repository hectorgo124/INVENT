import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { PackageTypesModule } from './modules/package-types/package-types.module';
import { DatabaseModule } from './database/database.module';
import { ZipModule } from './modules/zip/zip.module';
import { SeedsModule } from './seeds/seeds.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: './.env'}),
    UsersModule,
    ShipmentsModule,
    CompaniesModule,
    PackageTypesModule,
    DatabaseModule,
    ZipModule,
    SeedsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
