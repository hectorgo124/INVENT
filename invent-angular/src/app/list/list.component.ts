import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() total: number = 0;
  @Input() columns!: { title: string; id: string }[];
  displayedColumns: string[] = [];

  ngOnInit(): void {
    if (this.columns.length > 0)
      this.columns.forEach((col) => {
        this.displayedColumns.push(col.id);
      });
  }
}
