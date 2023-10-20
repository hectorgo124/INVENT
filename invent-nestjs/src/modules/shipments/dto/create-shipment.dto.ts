import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateShipmentDto {
    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    zip: number;

    @ApiProperty()
    @IsNotEmpty()
    senderName: string;

    @ApiProperty()
    @IsNotEmpty()
    recipientName: string;

    @ApiProperty()
    weight: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    companyId: number;
    
    @ApiProperty()
    typeId: number;
}
