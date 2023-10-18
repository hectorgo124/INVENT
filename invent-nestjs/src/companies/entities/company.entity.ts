import { DataTypes } from 'sequelize';
import { Model, Table, Column, DataType, BelongsToMany, HasMany, Unique } from 'sequelize-typescript';
import { Zip } from 'src/zip/entities/zip.entity';

@Table
export class Company extends Model {
  @Unique
  @Column
  name: string;
  
  @HasMany(() => Zip)
  zips: Zip[];
}
