import { OnInit, Component } from '@angular/core';
import { UsersService } from '../core/api/services';
import { GetUserDto } from '../core/api/models';
import { Column } from '../models/column';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss'],
})
export class AdminsComponent implements OnInit {
  admins: GetUserDto[] = [];
  columns: Column[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.usersControllerFindAll().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.admins = res;

          const columnsProp = Object.keys(this.admins[0]);

          this.columns = columnsProp.map((col) => ({
            id: col,
            title: col.toUpperCase(),
          }));
        }
      },
    });
  }
}
