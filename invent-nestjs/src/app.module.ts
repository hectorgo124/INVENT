import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ShipmentsModule } from './modules/shipments/shipments.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { PackageTypesModule } from './modules/package-types/package-types.module';
import { DatabaseModule } from './database/database.module';
import { ZipModule } from './modules/zip/zip.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [UsersModule, ShipmentsModule, CompaniesModule, PackageTypesModule, DatabaseModule, ZipModule, SeedsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
