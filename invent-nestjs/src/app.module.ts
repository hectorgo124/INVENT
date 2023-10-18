import { Module } from '@nestjs/common';
import { ShipmentsModule } from './shipments/shipments.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { PackageTypesModule } from './package-types/package-types.module';

@Module({
  imports: [UsersModule, ShipmentsModule, CompaniesModule, PackageTypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
