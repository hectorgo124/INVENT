import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogSignOutComponent } from './dialog-sign-out/dialog-sign-out.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  nav_list: {
    title: string;
    icon: string;
    url?: string;
  }[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      url: '',
    },
    {
      title: 'Administrators',
      icon: 'group',
      url: 'users',
    },
    {
      title: 'Shipments',
      icon: 'inventory_2',
      url: 'shipments',
    },
  ];

  constructor(
    private _authService: AuthService,
    public dialogSignOut: MatDialog
  ) {}

  signOut() {
    this.dialogSignOut
      .open(DialogSignOutComponent, {
        enterAnimationDuration: '300',
        exitAnimationDuration: '300',
        autoFocus: false,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((exit: boolean) => {
        if (exit) this._authService.signOut();
      });
  }
}
