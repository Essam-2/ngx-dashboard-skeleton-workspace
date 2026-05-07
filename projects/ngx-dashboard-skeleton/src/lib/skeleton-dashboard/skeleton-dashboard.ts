import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'lib-skeleton-dashboard',
  imports: [],
  templateUrl: './skeleton-dashboard.html',
  styleUrl: './skeleton-dashboard.css',
})
export class SkeletonDashboard {
  /** Number of card placeholders to render in the dashboard. Defaults to `4`. */
  @Input() cards = 4;
  /** Whether to include a table placeholder in the dashboard. Defaults to `true`. */
  @Input() showTable = true;
  /** Whether to include a chart placeholder in the dashboard. Defaults to `true`. */
  @Input() showChart = true;
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

  get cardItems(): number[] {
    // Used by the template to create an array of placeholders for cards
    return Array.from({ length: this.cards });
  }

  get tableRows(): number[] {
    return Array.from({ length: 6 });
  }

  get tableColumns(): number[] {
    return Array.from({ length: 5 });
  }
}
