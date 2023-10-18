import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePackageTypeDto {
    
    @ApiProperty()
    @IsNotEmpty()
    description: string;   

    @ApiProperty()
    min: number;

    @ApiProperty()
    max: number;

    @ApiProperty()
    @IsNotEmpty()
    formula: string;
}
