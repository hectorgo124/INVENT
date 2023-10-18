import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, Table } from "sequelize-typescript";

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
}
