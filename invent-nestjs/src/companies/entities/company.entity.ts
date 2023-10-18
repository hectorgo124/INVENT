import { DataTypes } from 'sequelize';
import { Model, Table, Column, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Zip } from 'src/zip/entities/zip.entity';

@Table
export class Company extends Model {
  @Column
  name: string;
  
  @HasMany(() => Zip)
  zips: Zip[];
}
