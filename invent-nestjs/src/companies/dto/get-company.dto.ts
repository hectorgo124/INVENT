import { OmitType, PartialType } from '@nestjs/swagger';
import { Company } from '../entities/company.entity';

export class GetCompanyDto extends PartialType(
  OmitType(Company, ['id'] as const),
) {}
