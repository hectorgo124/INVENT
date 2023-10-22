import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './shipments.component';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [ShipmentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ListModule
  ]
})
export class ShipmentsModule { }
