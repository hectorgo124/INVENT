import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateZipDto {
    @ApiProperty()
    @IsNotEmpty()
    number: number;

    @ApiProperty()
    @IsNotEmpty()
    companyId: number;
}
