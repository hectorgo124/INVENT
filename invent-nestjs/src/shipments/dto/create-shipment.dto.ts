import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
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
}
