import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { DialogSignOutComponent } from './dialog-sign-out/dialog-sign-out.component';

@NgModule({
  declarations: [SidebarComponent, DialogSignOutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
