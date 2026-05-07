import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';


@Component({
  selector: 'lib-skeleton-text',
  imports: [],
  templateUrl: './skeleton-text.html',
  styleUrl: './skeleton-text.css',
})
export class SkeletonText {
  @Input() lines = 3;
  @Input() lineHeight = 14;
  @Input() gap = 10;
  @Input() lastLineWidth = '65%';
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
