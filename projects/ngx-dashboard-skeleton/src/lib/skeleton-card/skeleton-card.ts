import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'lib-skeleton-card',
  imports: [],
  templateUrl: './skeleton-card.html',
  styleUrl: './skeleton-card.css',
})
export class SkeletonCard {
  @Input() showImage = true;
  @Input() lines = 3;
  @Input() config: SkeletonConfig = {};

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...this.config,
    };
  }

  get lineItems(): number[] {
    return Array.from({ length: this.lines });
  }
}
