import { ApiProperty } from '@nestjs/swagger';
import { DecimalDataType } from 'sequelize';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Company } from 'src/modules/companies/entities/company.entity';
import { PackageType } from 'src/modules/package-types/entities/package-type.entity';

@Table
export class Shipment extends Model {
  @Column
  address: string;

  @Column
  zip: number;

  @Column
  sender: string;

  @Column
  recipient: string;

  @Column
  weight: string;
  
  @Column
  price: string;

  @ForeignKey(() => PackageType)
  typeId: number;

  @BelongsTo(() => PackageType)
  packageType: PackageType;

  @ForeignKey(() => Company)
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}
