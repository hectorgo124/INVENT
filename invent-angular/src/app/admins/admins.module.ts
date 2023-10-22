import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins.component';
import { SharedModule } from '../shared/shared.module';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [AdminsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ListModule
  ]
})
export class AdminsModule { }
