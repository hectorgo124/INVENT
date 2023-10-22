import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments.component';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from '../list/list.module';
import { CreateShipmentComponent } from './create-shipment/create-shipment.component';



@NgModule({
  declarations: [ShipmentsComponent, CreateShipmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ListModule
  ]
})
export class ShipmentsModule { }
