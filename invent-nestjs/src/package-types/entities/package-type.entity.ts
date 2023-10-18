import { ApiProperty } from "@nestjs/swagger";

export class PackageType {
    id: number;
    
    @ApiProperty()
    description: string;   

    @ApiProperty()
    min: number;

    @ApiProperty()
    max: number;

    @ApiProperty()
    formula: string;
}
