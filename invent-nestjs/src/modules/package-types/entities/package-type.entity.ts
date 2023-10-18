import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Shipment } from 'src/modules/shipments/entities/shipment.entity';

@Table
export class PackageType extends Model {
  @Column
  description: string;

  @Column
  min: number;

  @Column
  max: number;

  @Column
  formula: string;

  @HasMany(() => Shipment)
  shipments: Shipment[];
}
