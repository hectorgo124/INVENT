import { Table, Column, Model, BelongsTo, ForeignKey, Unique } from 'sequelize-typescript';
import { Company } from 'src/modules/companies/entities/company.entity';

@Table
export class Zip extends Model {
  @Unique
  @Column
  number: number;

  @ForeignKey(() => Company)
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;
}
