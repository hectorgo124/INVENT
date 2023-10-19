import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { UsersModule } from 'src/modules/users/users.module';
import { databaseProviders } from 'src/database/database.providers';
import { CompaniesModule } from 'src/modules/companies/companies.module';
import { PackageTypesModule } from 'src/modules/package-types/package-types.module';
import { ShipmentsModule } from 'src/modules/shipments/shipments.module';

@Module({
  providers: [SeedsService, ...databaseProviders],
  imports: [UsersModule, CompaniesModule, PackageTypesModule, ShipmentsModule],
  exports: [SeedsService]
})
export class SeedsModule {}
