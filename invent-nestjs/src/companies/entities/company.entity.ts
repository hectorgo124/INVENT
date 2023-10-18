import { ApiProperty } from "@nestjs/swagger";

export class Company {

    id: number;

    name: string;
    
    zips: number[];
}
