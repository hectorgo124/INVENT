import { Model, Table, Column, HasMany, Unique } from 'sequelize-typescript';
import { Zip } from 'src/modules/zip/entities/zip.entity';

@Table
export class Company extends Model {
  @Unique
  @Column
  name: string;
  
  @HasMany(() => Zip)
  zips: Zip[];
}
