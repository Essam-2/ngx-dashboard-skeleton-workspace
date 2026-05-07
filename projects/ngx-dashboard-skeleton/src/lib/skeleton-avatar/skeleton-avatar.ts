import { Component, Input } from '@angular/core';

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
}
