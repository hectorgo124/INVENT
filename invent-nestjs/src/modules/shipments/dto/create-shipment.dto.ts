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
    sender: string;

    @ApiProperty()
    @IsNotEmpty()
    recipient: string;

    @ApiProperty()
    weight: number;

    @ApiProperty()
    price: number;

    @ApiProperty()
    companyId: number;
    
    @ApiProperty()
    typeId: number;
}
