import { ApiProperty} from "@nestjs/swagger";
import { Zip } from "src/zip/entities/zip.entity";

export class CreateCompanyDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    zips: Zip[];
}
