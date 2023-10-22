import { Model, Table, Column, HasMany, Unique } from 'sequelize-typescript';
import { Shipment } from 'src/modules/shipments/entities/shipment.entity';
import { Zip } from 'src/modules/zip/entities/zip.entity';

@Table
export class Company extends Model {
  @Unique
  @Column
  name: string;

  @HasMany(() => Zip, { onDelete: 'CASCADE' })
  zips: Zip[];

  
  @HasMany(() => Shipment, { onDelete: 'CASCADE' })
  shipments: Shipment[];
}
