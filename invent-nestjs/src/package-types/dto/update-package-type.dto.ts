import { PartialType } from '@nestjs/swagger';
import { CreatePackageTypeDto } from './create-package-type.dto';

export class UpdatePackageTypeDto extends PartialType(CreatePackageTypeDto) {}
