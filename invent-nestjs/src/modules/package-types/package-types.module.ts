import { Module } from '@nestjs/common';
import { PackageTypesService } from './package-types.service';
import { PackageTypesController } from './package-types.controller';
import { packageTypeProvider } from './package-types.providers';

@Module({
  controllers: [PackageTypesController],
  exports: [PackageTypesService],
  providers: [PackageTypesService, ...packageTypeProvider],
})
export class PackageTypesModule {}
