import { Module } from '@nestjs/common';
import { PackageTypesService } from './package-types.service';
import { PackageTypesController } from './package-types.controller';

@Module({
  controllers: [PackageTypesController],
  providers: [PackageTypesService],
})
export class PackageTypesModule {}
