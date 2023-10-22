import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShipmentsService } from '../core/api/services';
import { GetCompanyDto, Shipment } from '../core/api/models';
import { Column } from '../models/column';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
})
export class ShipmentsComponent implements OnInit {
  shipments: Shipment[] = [];
  companies: GetCompanyDto[] = [];
  columns: Column[] = [];
  total: number = 0;
  constructor(private _shipmentsService: ShipmentsService) {}

  ngOnInit(): void {
    this._shipmentsService
      .shipmentsControllerFindAll({ limit: 10, page: 1 })
      .subscribe({
        next: (res: any) => {
          res = JSON.parse(res);
          this.shipments = res.shipmentsDTO;
          this.total = res.total;

          let columnsProp = Object.keys(this.shipments[0]);

          columnsProp = columnsProp.splice(0, columnsProp.length - 2);

          this.columns = columnsProp.map((col) => ({
            id: col,
            title: col.toUpperCase(),
          }));
        },
      });
  }
}
