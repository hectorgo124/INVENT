import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ZipService } from './zip.service';
import { CreateZipDto } from './dto/create-zip.dto';
import { UpdateZipDto } from './dto/update-zip.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Zip } from './entities/zip.entity';

@ApiBearerAuth()
@ApiTags('ZIP')
@Controller('zip')
export class ZipController {
  constructor(private readonly zipService: ZipService) {}

  @Get()
  findAll() {
    return this.zipService.findAll();
  }

  @Get('available')
  async getAvailableZips() {
    return this.zipService.getAvailable();
  }

  @Get('company/:id')
  async getCompanyZips(@Query('id') id: number) : Promise<Zip[]> {
    return this.zipService.getCompanyZips(id);
  }

  @Delete('company/:id')
  async deleteFromCompany(@Query('id') id: number) {
    return this.zipService.deleteFromCompany(id);
  }
}
