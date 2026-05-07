import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'lib-skeleton-dashboard',
  imports: [],
  templateUrl: './skeleton-dashboard.html',
  styleUrl: './skeleton-dashboard.css',
})
export class SkeletonDashboard {
  @Input() cards = 4;
  @Input() showTable = true;
  @Input() showChart = true;
  @Input() config: SkeletonConfig = {};

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...this.config,
    };
  }

  get cardItems(): number[] {
    return Array.from({ length: this.cards });
  }

  get tableRows(): number[] {
    return Array.from({ length: 6 });
  }

  get tableColumns(): number[] {
    return Array.from({ length: 5 });
  }
}
