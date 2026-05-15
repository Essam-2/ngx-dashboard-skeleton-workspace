import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

export type SkeletonChartType = 'bar' | 'line' | 'pie';

@Component({
  selector: 'ngx-skeleton-chart',
  imports: [],
  templateUrl: './skeleton-chart.html',
  styleUrl: './skeleton-chart.css',
})
export class SkeletonChart {
  /** Type of chart layout to mimic. Defaults to `'bar'`. */
  @Input() type: SkeletonChartType = 'bar';
  /** Height of the chart area in pixels. Defaults to `260`. */
  @Input() height = 260;
  /** Number of bars (for bar charts) to render. Defaults to `8`. */
  @Input() bars = 8;
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

  get barItems(): number[] {
    // Array used by the template to render placeholder bars
    return Array.from({ length: this.bars });
  }
}
