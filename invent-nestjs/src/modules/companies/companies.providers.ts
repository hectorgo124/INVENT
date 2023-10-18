import { Company } from "./entities/company.entity";

export const companiesProvider = [
  {
    provide: 'COMPANIES_REPOSITORY',
    useValue: Company,
  },
];
