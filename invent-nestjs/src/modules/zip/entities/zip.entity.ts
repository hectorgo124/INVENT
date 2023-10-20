import { Table, Column, Model, BelongsTo, ForeignKey, Unique, PrimaryKey } from 'sequelize-typescript';
import { Company } from 'src/modules/companies/entities/company.entity';

@Table
export class Zip extends Model {
  @PrimaryKey
  @Column
  number: number;

  @ForeignKey(() => Company)
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}
