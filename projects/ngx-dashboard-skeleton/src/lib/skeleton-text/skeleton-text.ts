import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';


@Component({
  selector: 'ngx-skeleton-text',
  imports: [],
  templateUrl: './skeleton-text.html',
  styleUrl: './skeleton-text.css',
})
export class SkeletonText {
  /** Number of text lines to render. Defaults to `3`. */
  @Input() lines = 3;
  /** Height of each text line in pixels. Defaults to `14`. */
  @Input() lineHeight = 14;
  /** Gap between lines in pixels. Defaults to `10`. */
  @Input() gap = 10;
  /** Width of the final line (to simulate shorter last line). Defaults to `'65%'`. */
  @Input() lastLineWidth = '65%';
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
    // Used by the template to render the requested number of line placeholders
    return Array.from({ length: this.lines });
  }
}
