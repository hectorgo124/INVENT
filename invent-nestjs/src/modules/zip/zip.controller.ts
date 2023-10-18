import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZipService } from './zip.service';
import { CreateZipDto } from './dto/create-zip.dto';
import { UpdateZipDto } from './dto/update-zip.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('ZIP')
@Controller('zip')
export class ZipController {
  constructor(private readonly zipService: ZipService) {}

  @Post()
  create(@Body() createZipDto: CreateZipDto) {
    return this.zipService.create(createZipDto);
  }

  @Get()
  findAll() {
    return this.zipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZipDto: UpdateZipDto) {
    return this.zipService.update(+id, updateZipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zipService.remove(+id);
  }
}
