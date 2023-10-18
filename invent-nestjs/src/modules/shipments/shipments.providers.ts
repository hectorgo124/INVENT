import { Shipment } from "./entities/shipment.entity"; 

export const shipmentsProvider = [
  {
    provide: 'SHIPMENTS_REPOSITORY',
    useValue: Shipment,
  },
];
