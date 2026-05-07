import { Component, Input } from '@angular/core';
import { DEFAULT_SKELETON_CONFIG, SkeletonConfig } from '../skeleton-config';

export type SkeletonAvatarShape = 'circle' | 'square';


@Component({
  selector: 'lib-skeleton-avatar',
  imports: [],
  templateUrl: './skeleton-avatar.html',
  styleUrl: './skeleton-avatar.css',
})
export class SkeletonAvatar {
  @Input() size = 48;
  @Input() shape: SkeletonAvatarShape = 'circle';
  @Input() config: SkeletonConfig = {};

  get settings(): Required<SkeletonConfig> {
    return {
      ...DEFAULT_SKELETON_CONFIG,
      ...this.config,
    };
  }
}
