import { PartialType } from '@nestjs/swagger';
import { CreateZipDto } from './create-zip.dto';

export class UpdateZipDto extends PartialType(CreateZipDto) {}
