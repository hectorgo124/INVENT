import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from '../shared/components/confirmation/confirmation.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isVisible: boolean = true;

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
      title: 'Shipments',
      icon: 'local_shipping',
      url: 'shipments',
    },
    {
      title: 'Companies',
      icon: 'apartment',
      url: 'companies',
    },
    {
      title: 'Administrators',
      icon: 'group',
      url: 'admins',
    },
    {
      title: 'Packages Types',
      icon: 'inventory_2',
      url: 'packages-types',
    },
  ];

  constructor(
    private _authService: AuthService,
    public dialogSignOut: MatDialog
  ) {}

  signOut() {
    this.dialogSignOut
      .open(ConfirmationComponent, {
        data: {
          title: 'Sign out',
          desc: 'Are you sure you want to log out?',
        },
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

  toggleSidebar() {
    this.isVisible = !this.isVisible;
  }
}
