import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CompaniesComponent } from './companies.component';
import { ShowCompanyComponent } from './show-company/show-company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';



@NgModule({
  declarations: [CompaniesComponent, ShowCompanyComponent, CreateCompanyComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CompaniesModule { }
