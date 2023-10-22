import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesTypesComponent } from './packages-types.component';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [PackagesTypesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ListModule
  ]
})
export class PackagesTypesModule { }
