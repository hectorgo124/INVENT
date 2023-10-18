import { PackageType } from "./entities/package-type.entity";

export const packageTypeProvider = [
  {
    provide: 'PACKAGE_TYPES_REPOSITORY',
    useValue: PackageType,
  },
];
