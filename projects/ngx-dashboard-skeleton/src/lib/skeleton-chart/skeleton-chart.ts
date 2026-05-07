import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

export type SkeletonChartType = 'bar' | 'line' | 'pie';

@Component({
  selector: 'lib-skeleton-chart',
  imports: [],
  templateUrl: './skeleton-chart.html',
  styleUrl: './skeleton-chart.css',
})
export class SkeletonChart {
  @Input() type: SkeletonChartType = 'bar';
  @Input() height = 260;
  @Input() bars = 8;
  @Input() config: SkeletonConfig = {};

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...this.config,
    };
  }

  get barItems(): number[] {
    return Array.from({ length: this.bars });
  }
}
