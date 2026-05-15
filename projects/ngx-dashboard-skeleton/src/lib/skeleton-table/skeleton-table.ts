import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'ngx-skeleton-table',
  imports: [],
  templateUrl: './skeleton-table.html',
  styleUrl: './skeleton-table.css',
})
export class SkeletonTable {
  /** Number of rows to render in the table placeholder. Defaults to `5`. */
  @Input() rows = 5;
  /** Number of columns to render in the table placeholder. Defaults to `4`. */
  @Input() columns = 4;
  /** Local configuration for this component which overrides global config. */
  @Input() config: SkeletonConfig = {};

  constructor(
    @Optional()
    @Inject(SKELETON_CONFIG)
    private globalConfig: SkeletonConfig | null
  ) {}

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...(this.globalConfig ?? {}),
      ...this.config,
    };
  }

  get rowItems(): number[] {
    // Array for the template to iterate rows
    return Array.from({ length: this.rows });
  }

  get columnItems(): number[] {
    // Array for the template to iterate columns
    return Array.from({ length: this.columns });
  }
}
