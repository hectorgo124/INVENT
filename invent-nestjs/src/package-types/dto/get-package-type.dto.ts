import { PartialType } from '@nestjs/swagger';
import { PackageType } from '../entities/package-type.entity';

export class GetPackageTypeDto extends PartialType(PackageType) {}
