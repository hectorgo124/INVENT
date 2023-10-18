import { Zip } from './entities/zip.entity';

export const zipProvider = [
  {
    provide: 'ZIP_REPOSITORY',
    useValue: Zip,
  },
];
