import { Injectable, Inject } from '@nestjs/common';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';
import { GetPackageTypeDto } from './dto/get-package-type.dto';
import { PackageType } from './entities/package-type.entity';

@Injectable()
export class PackageTypesService {
  constructor(
    @Inject('PACKAGE_TYPES_REPOSITORY')
    private packageTypesRepository: typeof PackageType,
  ) {}
  create(createPackageTypeDto: CreatePackageTypeDto) {
    return 'This action adds a new packageType';
  }

  async findAll() {
    return this.packageTypesRepository.findAll<PackageType>();
  }

  findOne(id: number): GetPackageTypeDto {
    return {
      description: 'Descripción',
      formula: 'x+5-7',
      id: 1,
      max: 1,
      min: 0.6,
    };
  }

  update(id: number, updatePackageTypeDto: UpdatePackageTypeDto) {
    return `This action updates a #${id} packageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageType`;
  }
}
