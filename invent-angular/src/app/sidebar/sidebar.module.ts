import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
