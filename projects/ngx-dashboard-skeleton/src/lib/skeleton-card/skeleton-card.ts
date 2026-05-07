import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

@Component({
  selector: 'lib-skeleton-card',
  imports: [],
  templateUrl: './skeleton-card.html',
  styleUrl: './skeleton-card.css',
})
export class SkeletonCard {
  /** Show a placeholder image area at the top of the card. Defaults to `true`. */
  @Input() showImage = true;
  /** Number of text lines to render in the card body. Defaults to `3`. */
  @Input() lines = 3;
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

  get lineItems(): number[] {
    // Return an array used by the template to render the requested number of lines
    return Array.from({ length: this.lines });
  }
}
