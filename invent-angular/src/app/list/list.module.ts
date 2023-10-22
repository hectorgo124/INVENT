import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '../shared/shared.module';
import { MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    MatExpansionModule
  ],
  exports: [ListComponent],
})
export class ListModule {}
