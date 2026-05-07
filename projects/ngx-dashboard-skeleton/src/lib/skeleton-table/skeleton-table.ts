import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-skeleton-table',
  imports: [],
  templateUrl: './skeleton-table.html',
  styleUrl: './skeleton-table.css',
})
export class SkeletonTable {
  @Input() rows = 5;
  @Input() columns = 4;

  get rowItems(): number[] {
    return Array.from({ length: this.rows });
  }

  get columnItems(): number[] {
    return Array.from({ length: this.columns });
  }
}
