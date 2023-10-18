import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { PackageTypesModule } from './package-types/package-types.module';
import { DatabaseModule } from './database/database.module';
import { ZipModule } from './zip/zip.module';

@Module({
  imports: [UsersModule, ShipmentsModule, CompaniesModule, PackageTypesModule, DatabaseModule, ZipModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
