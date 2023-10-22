import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from '../list/list.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListModule,
    NgApexchartsModule
  ]
})
export class HomeModule { }
