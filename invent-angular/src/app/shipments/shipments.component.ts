import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShipmentsService } from '../core/api/services';
import { GetCompanyDto, Shipment } from '../core/api/models';
import { Column } from '../models/column';
import { MatDialog } from '@angular/material/dialog';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';

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
  constructor(
    private _shipmentsService: ShipmentsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getShipments(10, 1);
  }

  getShipments(limit: number, page: number) {
    this._shipmentsService
      .shipmentsControllerFindAll({ limit, page })
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

  openCreateShipment() {
    const createDialog = this.dialog.open(CreateShipmentComponent, {
      enterAnimationDuration: '300',
      exitAnimationDuration: '300',
      autoFocus: false,
      disableClose: true,
    });

    createDialog.afterClosed().subscribe((created: boolean) => this.ngOnInit());
  }

  newPaginator(event: any) {
    this.getShipments(event.size, event.pageIndex);
  }
}
