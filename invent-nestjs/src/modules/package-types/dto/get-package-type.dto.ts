import { OmitType, PartialType } from '@nestjs/swagger';
import { PackageType } from '../entities/package-type.entity';

export class GetPackageTypeDto  extends PartialType(
    OmitType(PackageType, ['createdAt', 'updatedAt'] as const)
  ) {} {}
