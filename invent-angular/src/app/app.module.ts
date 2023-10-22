import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from './core/auth/auth.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
