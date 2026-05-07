import { Component, Input } from '@angular/core';

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

  get barItems(): number[] {
    return Array.from({ length: this.bars });
  }
}
