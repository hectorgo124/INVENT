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

  async create(createPackageTypeDto: CreatePackageTypeDto): Promise<PackageType> {
    return await this.packageTypesRepository.create<PackageType>({...createPackageTypeDto});
  }

  async findAll() {
    return this.packageTypesRepository.findAll<PackageType>();
  }
}
