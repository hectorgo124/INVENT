import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesComponent } from './packages/packages.component';
import { AdminsComponent } from './admins/admins.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { PackagesTypesComponent } from './packages-types/packages-types.component';
import { CompaniesComponent } from './companies/companies.component';



@NgModule({
  declarations: [
    PackagesComponent,
    AdminsComponent,
    ShipmentsComponent,
    PackagesTypesComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
