import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { PackageType } from 'src/modules/package-types/entities/package-type.entity';

@Table
export class Shipment extends Model {
  @Column
  address: string;

  @Column
  zip: number;

  @Column
  senderName: string;

  @Column
  recipientName: string;

  @Column
  weight: number;
  
  @Column
  price: number;

  @ForeignKey(() => PackageType)
  companyId: number;

  @BelongsTo(() => PackageType)
  company: PackageType;
}
