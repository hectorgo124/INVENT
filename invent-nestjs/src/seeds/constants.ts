import { CreateCompanyDto } from 'src/modules/companies/dto/create-company.dto';
import { CreatePackageTypeDto } from 'src/modules/package-types/dto/create-package-type.dto';
import { CreateShipmentDto } from 'src/modules/shipments/dto/create-shipment.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export const users: CreateUserDto[] = [
  {
    email: 'hector@invent.com',
    name: 'Hector Granell',
    password: 'password123',
    username: 'hectorgo',
  },
  {
    email: 'juan@invent.com',
    name: 'Juan Pérez',
    password: 'password',
    username: 'juanperez',
  },
  {
    email: 'maria@invent.com',
    name: 'María García',
    password: 'password',
    username: 'mariagarcia',
  },
  {
    email: 'carlos@invent.com',
    name: 'Carlos Rodríguez',
    password: 'password',
    username: 'carlosrodriguez',
  },
  {
    email: 'laura@invent.com',
    name: 'Laura Fernández',
    password: 'password',
    username: 'laurafernandez',
  },
  {
    email: 'pedro@invent.com',
    name: 'Pedro Martínez',
    password: 'password',
    username: 'pedromartinez',
  },
  {
    email: 'ana@invent.com',
    name: 'Ana Sánchez',
    password: 'password',
    username: 'anasanchez',
  },
];

export const companies: any = [
  {
    name: 'Correos',
    zips: [15, 16, 17, 18, 19],
  },
  {
    name: 'Seur',
    zips: [20, 21, 22, 23, 24, 25],
  },
  {
    name: 'INVENT',
    zips: [],
  },
];

export const packageType: CreatePackageTypeDto[] = [
  {
    description: 'Paquete ultra ligero',
    formula: 'x * 5',
    min: 0,
    max: 0.1,
  },
  {
    description: 'Paquete ligero',
    formula: 'x * 5 + 1',
    min: 0.1,
    max: 0.3,
  },
  {
    description: 'Paquete estándar',
    formula: 'x * 10',
    min: 0.3,
    max: 5,
  },
  {
    description: 'Paquete pesado',
    formula: 'x * 5 + x + 75',
    min: 5,
    max: 10,
  },
  {
    description: 'Gran volumen',
    formula: '(x - 10) * 7.5 + 130 + x',
    min: 10,
    max: null,
  },
];

export const shipments: CreateShipmentDto[] = [
  {
    address: 'Secundino Esnaola Kalea, 36, Bajo',
    zip: 20001,
    sender: 'Juan Pérez',
    recipient: 'María López',
    weight: 0.7,
    price: 7,
    typeId: 3,
    companyId: 2,
  },
  {
    address:
      'Parque Tecnológico de, Rda. de Narcís Monturiol, 7, piso 2, puerta 15',
    zip: 46980,
    sender: 'Hector Granell',
    recipient: 'Dámaso González',
    weight: 1.2,
    price: 12,
    typeId: 3,
    companyId: 3,
  },
  {
    address: 'Ronda del Calvari',
    zip: 46680,
    sender: 'Ana Sánchez',
    recipient: 'Pedro Ruiz',
    weight: 5.5,
    price: 108,
    typeId: 4,
    companyId: 3,
  },
];
