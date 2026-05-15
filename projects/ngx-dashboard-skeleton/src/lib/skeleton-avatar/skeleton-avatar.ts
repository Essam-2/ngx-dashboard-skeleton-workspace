import { Component, Inject, Input, Optional } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

export type SkeletonAvatarShape = 'circle' | 'square';


@Component({
  selector: 'ngx-skeleton-avatar',
  imports: [],
  templateUrl: './skeleton-avatar.html',
  styleUrl: './skeleton-avatar.css',
})
export class SkeletonAvatar {
  /** The size (width and height) of the avatar in pixels. Defaults to `48`. */
  @Input() size = 48;
  /** The shape of the avatar. Either `circle` or `square`. Defaults to `circle`. */
  @Input() shape: SkeletonAvatarShape = 'circle';
  /** Local configuration for this component which overrides global config. */
  @Input() config: SkeletonConfig = {};

  constructor(
    @Optional()
    @Inject(SKELETON_CONFIG)
    private globalConfig: SkeletonConfig | null
  ) {}

  /**
   * Merge default, global and local config into a single resolved settings object.
   * Local `@Input() config` values take precedence over the injected global config.
   */
  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...(this.globalConfig ?? {}),
      ...this.config,
    };
  }
}
