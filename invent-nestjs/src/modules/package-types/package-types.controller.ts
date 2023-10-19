import {
  Controller,
  Get,
} from '@nestjs/common';
import { PackageTypesService } from './package-types.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Packages Types')
@Controller('package-types')
export class PackageTypesController {
  constructor(private readonly packageTypesService: PackageTypesService) {}

  @Get()
  findAll() {
    return this.packageTypesService.findAll();
  }
}
