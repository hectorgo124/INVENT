import { Column, Model, Table } from "sequelize-typescript";

@Table
export class PackageType extends Model{
    @Column
    description: string;   

    @Column
    min: number;

    @Column
    max: number;

    @Column
    formula: string;
}
