import { Component, OnInit } from '@angular/core';
import { PackagesTypesService } from '../core/api/services';
import { GetPackageTypeDto, PackageType } from '../core/api/models';
import { Column } from '../models/column';

@Component({
  selector: 'app-packages-types',
  templateUrl: './packages-types.component.html',
  styleUrls: ['./packages-types.component.scss'],
})
export class PackagesTypesComponent implements OnInit {
  types: GetPackageTypeDto[] = [];
  columns: Column[] = [];

  constructor(private _packageTypesService: PackagesTypesService) {}

  ngOnInit(): void {
    this._packageTypesService.packageTypesControllerFindAll().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.types = res;

          const columnsProp = Object.keys(this.types[0]);

          this.columns = columnsProp.map((col) => ({
            id: col,
            title: col.toUpperCase(),
          }));
        }
      },
    });
  }
}
