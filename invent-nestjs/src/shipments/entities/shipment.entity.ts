import { ApiProperty } from "@nestjs/swagger";

export class Shipment {

    id: number;

    address: string;

    zip: number;

    senderName: string;

    recipientName: string;

    weight: number;
}
