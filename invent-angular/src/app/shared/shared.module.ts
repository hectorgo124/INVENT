import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  MatDialogModule } from '@angular/material/dialog';
import { ZipPipe } from '../pipes/zip-pipe.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [ZipPipe, ConfirmationComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    MatDialogModule,
    ScrollingModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    MatDialogModule,
    ZipPipe,
    ScrollingModule,
    ConfirmationComponent,
    CardComponent
  ],
})
export class SharedModule {}
