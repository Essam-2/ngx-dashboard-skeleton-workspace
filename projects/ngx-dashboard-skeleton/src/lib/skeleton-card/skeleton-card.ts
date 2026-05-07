import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

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

  get lineItems(): number[] {
    return Array.from({ length: this.lines });
  }
}
