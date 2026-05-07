import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'lib-skeleton-table',
  imports: [],
  templateUrl: './skeleton-table.html',
  styleUrl: './skeleton-table.css',
})
export class SkeletonTable {
  @Input() rows = 5;
  @Input() columns = 4;
  @Input() config: SkeletonConfig = {};

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...this.config,
    };
  }

  get rowItems(): number[] {
    return Array.from({ length: this.rows });
  }

  get columnItems(): number[] {
    return Array.from({ length: this.columns });
  }
}
